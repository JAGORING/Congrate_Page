"use client";

import { useState } from "react";
import Section from "@/components/Section";
import BucketFieldSection from "@/components/BucketFieldSection";

export default function Page() {
  const [showIntroConfetti, setShowIntroConfetti] = useState(false);
  const [showClickConfetti, setShowClickConfetti] = useState(false);
  const [showEndingConfetti, setShowEndingConfetti] = useState(false);

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

      <BucketFieldSection />

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
