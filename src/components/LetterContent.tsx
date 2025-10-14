"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

interface LetterContentProps {
  onClose: () => void;
}

export default function LetterContent({ onClose }: LetterContentProps) {
  const letterText = `
  하린에게 💌

  요즘 참 많은 일들이 있었지.
  그래도 이렇게 꾸준히, 묵묵히 자기 길을 걸어가고 있는 모습이
  정말 멋지고 대단해 보여.

  때로는 힘들고 지치는 날이 와도
  그 모든 날들이 결국엔 하린을 더 단단하게 만들 거야.
  
  그러니까, 오늘도 잠시 숨 고르면서
  자신을 조금 더 따뜻하게 안아줘.

  언제나 응원할게.
  `;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="relative w-96 max-h-[70vh] bg-white rounded-3xl shadow-2xl p-6 overflow-y-auto border-[3px] border-pink-300"
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      >
        <X size={20} />
      </button>

      <motion.div
        initial={{ rotateX: -90 }}
        animate={{ rotateX: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold mb-3">To. 하린</h3>
        <p className="whitespace-pre-wrap text-gray-700 leading-relaxed text-[15px] custom-scrollbar">
          {letterText}
        </p>
      </motion.div>
    </motion.div>
  );
}
