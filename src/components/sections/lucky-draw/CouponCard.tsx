import { motion } from "framer-motion";
import { useMemo } from "react";

interface CouponCardProps {
  coupon: {
    tier: "SR" | "S" | "A" | "B";
    title: string;
    message: string;
  };
  onRetry: () => void;
}

export default function CouponCard({ coupon, onRetry }: CouponCardProps) {
  const tierPalettes = {
    SR: ["#fbcfe8", "#c084fc", "#67e8f9"],
    S: ["#fef3c7", "#fde68a", "#fcd34d"],
    A: ["#bae6fd", "#7dd3fc", "#99f6e4"],
    B: ["#e5e7eb", "#d1d5db", "#f3f4f6"],
  };

  const background = useMemo(() => {
    const colors = tierPalettes[coupon.tier];
    const shuffled = [...colors].sort(() => Math.random() - 0.5);
    const angle = Math.floor(Math.random() * 360);
    return `linear-gradient(${angle}deg, ${shuffled[0]}, ${shuffled[1]}, ${shuffled[2]})`;
  }, [coupon.tier]);

  const borderColors = {
    SR: "border-pink-200",
    S: "border-yellow-200",
    A: "border-sky-200",
    B: "border-gray-300",
  };

  const textColors = {
    SR: "text-[#3d2a3d]",
    S: "text-[#4a3a1e]", 
    A: "text-[#1e3a5f]", 
    B: "text-[#374151]", 
  };

  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", duration: 0.6 }}
      className={`relative w-80 h-52 rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center shadow-lg border-[2px] bg-gradient-to-r ${borderColors[coupon.tier]} p-[1.5px]`}
    >
      <div
        className="relative w-full h-full rounded-[1.4rem] flex flex-col items-center justify-center overflow-hidden"
        style={{ background }}
      >
        <div className="absolute inset-0 bg-white/15 mix-blend-overlay" />

        <div className={`z-10 text-center px-4 drop-shadow-sm ${textColors[coupon.tier]}`}>
          <h3 className="text-xl font-bold tracking-wide mb-1 opacity-90">
            {coupon.tier} 쿠폰
          </h3>
          <p className="text-lg font-semibold opacity-95">{coupon.title}</p>
          <p className="text-sm mt-1 opacity-80">{coupon.message}</p>
        </div>

        <button
          onClick={onRetry}
          className="absolute bottom-2 right-2 p-2 rounded-full bg-white/70 hover:bg-white transition"
        >
          ❤️
        </button>
      </div>
    </motion.div>
  );
}
