import { Coupon } from "@/types/coupon";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import Image from "next/image";

interface CouponCardProps {
    coupon: Coupon;
    onRetry: () => void;
  }

  export default function CouponCard({ coupon, onRetry }: CouponCardProps) {
    const borderColors = {
      SR: "border-[3px] border-transparent bg-gradient-to-r from-pink-300 via-purple-400 to-cyan-400 bg-clip-border",
      S: "border-[3px] border-yellow-400",
      A: "border-[3px] border-gray-400",
      B: "border-[3px] border-blue-400",
    };
  
    return (
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
        className={`relative w-80 h-52 rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center bg-white shadow-xl ${borderColors[coupon.tier]}`}
      >
        <Image
          fill
          sizes="100%"
          src={coupon.image}
          alt={coupon.title}
          className="absolute inset-0 object-cover opacity-30"
        />
        <div className="z-10">
          <h3 className="text-2xl font-bold">{coupon.tier} 쿠폰</h3>
          <p className="text-lg font-semibold mt-1">{coupon.title}</p>
          <p className="text-sm text-gray-600">{coupon.message}</p>
        </div>
        <button
          onClick={onRetry}
          className="absolute bottom-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
        >
          <RotateCcw size={18} />
        </button>
      </motion.div>
    );
  }
