"use client";

import { useState } from "react";
import Section from "@/components/Section";
import BucketFieldSection from "@/components/BucketFieldSection";
import { useConfetti } from "@/hooks/useConfetti";

export default function Page() {
  const intro = useConfetti({ durationMs: 4000 });
  const click = useConfetti({ durationMs: 4000 });
  const ending = useConfetti({ durationMs: 5000 });

  return (
    <div className="w-screen h-screen snap-y snap-mandatory overflow-scroll">
      <Section
        bgClass="bg-gradient-to-b from-pink-500 to-purple-600"
        activeConfetti={intro.active}
        confettiPieces={300}
        onMouseEnter={() => intro.start()}
      >
        <h1 className="text-white text-4xl font-bold text-center">
          🎉 드디어 시작이야! 🎉
        </h1>
      </Section>

      <Section
        bgClass="bg-gradient-to-b from-indigo-600 to-blue-400"
        activeConfetti={click.active}
        confettiPieces={250}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-white text-3xl font-semibold mb-6">너무 고생했어 👏</h2>
          <button
            onClick={() => click.start()}
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:scale-105 transition"
          >
            축하 폭죽 발사! 🎇
          </button>
        </div>
      </Section>

      <BucketFieldSection />

      <Section
        bgClass="bg-gradient-to-b from-yellow-400 to-orange-500"
        activeConfetti={ending.active}
        confettiPieces={400}
        confettiColors={["#FFD700", "#FF0000", "#FFFFFF"]}
        onMouseEnter={() => ending.start()}
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
