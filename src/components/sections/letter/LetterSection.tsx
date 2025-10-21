'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '@/components/common/Section';
import LetterEnvelope from '@/components/sections/letter/LetterEnvelope';
import LetterContent from '@/components/sections/letter/LetterContent';

export default function LetterSection() {
  const [opened, setOpened] = useState(false);
  const [arrived, setArrived] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setArrived(true);
        } else {
          if (audioRef.current) {
            audioRef.current.pause();
            setIsMuted(true);
          }
        }
      },
      { threshold: 0.6 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleClose = () => {
    setOpened(false);
    setHasBeenOpened(true);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    isMuted ? audioRef.current.play() : audioRef.current.pause();

    setIsMuted(!isMuted);
  };

  return (
    <Section
      ref={sectionRef}
      bgClass="flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-rose-100"
    >
      <motion.button
        onClick={toggleMute}
        className="absolute top-5 right-5 p-3 bg-white/70 rounded-full shadow-md hover:bg-white transition flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={
          !isMuted
            ? {
                boxShadow: [
                  '0 0 0px rgba(255,182,193,0.5)',
                  '0 0 10px rgba(255,105,180,0.8)',
                  '0 0 0px rgba(255,182,193,0.5)',
                ],
              }
            : {}
        }
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.span
          animate={!isMuted ? { rotate: [0, 10, -12, 0] } : {}}
          transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
          className="text-xl"
        >
          {isMuted ? '🔇' : '💖'}
        </motion.span>
      </motion.button>

      <AnimatePresence mode="wait">
        {!arrived && !hasBeenOpened && (
          <motion.div
            key="envelope"
            layout
            initial={{ scale: 0.2, y: -200, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ y: 200, opacity: 0, height: 0 }}
            transition={{ duration: 1.8, type: 'spring' }}
          >
            <LetterEnvelope />
          </motion.div>
        )}
      </AnimatePresence>

      {!opened && arrived && (
        <motion.div
          key="read-button"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-xl font-semibold mb-4">
            {hasBeenOpened ? '💌 편지를 다시 읽어보세요!' : '💌 편지가 도착했어요!'}
          </p>
          <button
            onClick={() => setOpened(true)}
            className="px-6 py-3 bg-pink-400 text-white rounded-2xl shadow-lg hover:bg-pink-500 transition"
          >
            편지 읽기
          </button>
        </motion.div>
      )}

      <AnimatePresence>
        {opened && (
          <div className="fixed inset-0 z-50" onClick={handleClose}>
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 flex items-center justify-center p-4" onClick={handleClose}>
              <LetterContent key="letter-content" onClose={handleClose} />
            </div>
          </div>
        )}
      </AnimatePresence>
      <audio ref={audioRef} src="/sounds/song.mp3" loop />
    </Section>
  );
}
