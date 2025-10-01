"use client";

import { useState, useEffect } from "react";
import Section from "@/components/Section";
import AddBucketListModal from "@/components/AddBucketListModal";
import ViewBucketListModal from "@/components/ViewBucketListModal";
import Image from "next/image";

export default function Page() {
  const [showIntroConfetti, setShowIntroConfetti] = useState(false);
  const [showClickConfetti, setShowClickConfetti] = useState(false);
  const [showEndingConfetti, setShowEndingConfetti] = useState(false);
  
  const [bucketList, setBucketList] = useState<Array<{id: number, text: string, x: number, y: number, flower: string}>>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{id: number, text: string} | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const flowers = ['🌸', '🌺', '🌻', '🌷', '🌹', '🌼', '🌿', '🍀', '🌱', '🌾', '🌵', '🌴'];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleStartingEnter = () => {
    setShowIntroConfetti(true);
    const timer = setTimeout(() => setShowIntroConfetti(false), 4000);
  };

  const handleClickConfetti = () => {
    setShowClickConfetti(true);
    setTimeout(() => setShowClickConfetti(false), 4000);
  };

  const handleEndingEnter = () => {
    setShowEndingConfetti(true);
    setTimeout(() => setShowEndingConfetti(false), 5000);
  };

  const addBucketListItem = (text: string) => {
    if (!isMounted) return;
    
    const newItem = {
      id: Date.now(),
      text: text,
      x: Math.random() * 80 + 10,
      y: Math.random() * 40 + 50,
      flower: flowers[Math.floor(Math.random() * flowers.length)]
    };
    setBucketList([...bucketList, newItem]);
  };

  const viewBucketListItem = (item: {id: number, text: string}) => {
    setSelectedItem(item);
    setShowViewModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  const closeViewModal = () => {
    setShowViewModal(false);
    setSelectedItem(null);
  };

  return (
    <div className="w-screen h-screen snap-y snap-mandatory overflow-scroll">
      <Section
        bgClass="bg-gradient-to-b from-pink-500 to-purple-600"
        activeConfetti={showIntroConfetti}
        confettiPieces={300}
        onMouseEnter={handleStartingEnter}
      >
        <h1 className="text-white text-4xl font-bold text-center">
          🎉 드디어 시작이야! 🎉
        </h1>
      </Section>

      <Section
        bgClass="bg-gradient-to-b from-indigo-600 to-blue-400"
        activeConfetti={showClickConfetti}
        confettiPieces={250}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-white text-3xl font-semibold mb-6">너무 고생했어 👏</h2>
          <button
            onClick={handleClickConfetti}
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:scale-105 transition"
          >
            축하 폭죽 발사! 🎇
          </button>
        </div>
      </Section>

      <Section
        bgClass="relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-60">
          <Image 
            src="/images/field.jpg" 
            alt="field background"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute top-0 left-0 right-0 h-24 flex items-center justify-between px-6 z-10">
          <h2 className="text-white text-3xl font-bold">
            린댕이랑 준댕이가 해야할 것들❣️
          </h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="w-12 h-12 bg-pink-400 hover:bg-pink-500 text-white rounded-full shadow-lg flex items-center justify-center text-2xl font-bold transition-all duration-200 hover:scale-110"
          >
            +
          </button>
        </div>

        <div className="absolute top-24 left-0 right-0 bottom-0 pt-8">
          <div className="relative w-full h-full">
            {isMounted && bucketList.map((item) => (
              <button
                key={item.id}
                onClick={() => viewBucketListItem(item)}
                className="absolute text-4xl hover:scale-110 transition-transform duration-200 cursor-pointer"
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {item.flower}
              </button>
            ))}
          </div>

          {isMounted && bucketList.length === 0 && (
            <div className="text-white text-xl text-center mt-20">
              <p>우측 상단의 + 버튼을 눌러</p>
              <p>버킷리스트를 추가해보세요! 🌸</p>
            </div>
          )}
        </div>
      </Section>

      <AddBucketListModal
        isOpen={showAddModal}
        onClose={closeAddModal}
        onAdd={addBucketListItem}
      />

      <ViewBucketListModal
        isOpen={showViewModal}
        onClose={closeViewModal}
        item={selectedItem}
      />

      <Section
        bgClass="bg-gradient-to-b from-yellow-400 to-orange-500"
        activeConfetti={showEndingConfetti}
        confettiPieces={400}
        confettiColors={["#FFD700", "#FF0000", "#FFFFFF"]}
        onMouseEnter={handleEndingEnter}
      >
        <h2 className="text-white text-4xl font-bold text-center">
          ✨ 이제 진짜 새로운 시작이야 ✨
          <br />
          언제나 응원할게 💖
        </h2>
      </Section>


    </div>
  );
}
