'use client';

import { motion } from "framer-motion";
import { useMemo } from "react";
interface PolaroidProps {
    item: { src: string; text: string;}
    itemIdx: number;
    line: number;
  }
  
  export default function Polaroid({ item, itemIdx, line }: PolaroidProps) {
    const rotation = useMemo(() => {
        const rotations = [-5, -3, -1, 0, 1, 3, 5];
        const index = (itemIdx + line * 3) % rotations.length;
        return rotations[index];
      }, [itemIdx, line]);
    return (
        <motion.div
        key={item.text}
        className="relative z-10 w-[200px] sm:w-[180px] md:w-[220px] h-[240px] bg-white shadow-xl rounded-md transform origin-top transition-transform duration-300 hover:rotate-1 hover:scale-105"
        style={{
            transform: `rotate(${rotation}deg)`,
            marginTop: itemIdx % 2 === 0 ? "10px" : "0",
        }}
        whileHover={{ rotate: 0 }}
      >
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full shadow-md" />
        <img
          src={item.src}
          alt={`❤️ ${item.text}`}
          className="w-full h-full object-cover rounded-md border-4 border-white"
        />
      </motion.div>
    );
  }
  
  