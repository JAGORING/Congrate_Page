"use client";

import { letterText, recipient } from "@/app/data/letters";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface LetterContentProps {
  onClose: () => void;
}

export default function LetterContent({ onClose }: LetterContentProps) {
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 30 }}
      transition={{ duration: 0.6 }}
      className="relative w-96 max-h-[70vh] bg-white rounded-3xl shadow-2xl p-6 overflow-y-auto border-[3px] border-pink-300 letter-scrollbar"
      onClick={(e) => e.stopPropagation()}
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
        <h3 className="text-2xl font-bold mb-3">To. {recipient}</h3>
        <p className="whitespace-pre-wrap text-gray-700 leading-relaxed text-[15px] custom-scrollbar">
          {letterText}
        </p>
      </motion.div>
    </motion.div>
  );
}
