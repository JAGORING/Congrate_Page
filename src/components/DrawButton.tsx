"use client";
import { motion } from "framer-motion";

interface DrawButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function DrawButton({ onClick, disabled }: DrawButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      disabled={disabled}
      onClick={onClick}
      className="px-6 py-3 text-lg font-bold rounded-2xl bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-lg disabled:opacity-60"
    >
      {disabled ? "뽑는 중..." : "🎟️ 랜덤 쿠폰 뽑기!"}
    </motion.button>
  );
}
