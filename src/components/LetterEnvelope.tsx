"use client";
import { motion } from "framer-motion";

export default function LetterEnvelope() {
  return (
    <motion.div
      className="w-24 h-16 bg-gradient-to-br from-pink-200 to-rose-300 rounded-md shadow-lg relative"
      initial={{ scale: 0.2, y: -200, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ y: 200, opacity: 0 }}
      transition={{ duration: 1.8, type: "spring" }}
    >
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-pink-300 rounded-b-md"
        initial={{ rotateX: 180 }}
        animate={{ rotateX: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-2xl">
        💌
      </div>
    </motion.div>
  );
}
