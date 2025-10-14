"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LetterEnvelope from "./LetterEnvelope";
import LetterContent from "./LetterContent";
import Section from "./Section";

export default function LetterSection() {
  const [opened, setOpened] = useState(false);
  const [arrived, setArrived] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // 화면 중앙쯤 왔을 때 편지 도착 트리거
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setArrived(true);
        }
      },
      { threshold: 0.6 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      ref={sectionRef}
      bgClass="flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-rose-100 overflow-hidden"
    >
      <AnimatePresence>
        {!arrived && <LetterEnvelope key="flying-envelope" />}
      </AnimatePresence>

      {arrived && !opened && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-xl font-semibold mb-4">💌 편지가 도착했어요!</p>
          <button
            onClick={() => setOpened(true)}
            className="px-6 py-3 bg-pink-400 text-white rounded-2xl shadow-lg hover:bg-pink-500 transition"
          >
            편지 읽기
          </button>
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        {opened && (
          <LetterContent
            key="letter-content"
            onClose={() => {
              setOpened(false);
              // 닫을 때 부드럽게 봉투로 돌아오게 딜레이 추가
              setTimeout(() => setArrived(false), 800);
            }}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}
