"use client";

import { useState } from "react";
import DrawButton from "./DrawButton";
import CouponCard from "./CouponCard";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import { Coupon } from "@/types/coupon";
import { coupons } from "@/app/data/coupons";
import { useDrawHistory } from "@/hooks/useDrawHistory";
import CouponTabs from "@/components/CouponTabs";
import { coupons as allCoupons } from "@/app/data/coupons";
import { useConfetti } from "@/hooks/useConfetti";

export default function LuckyDrawSection() {
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);
  const { history: drawHistory, loading, addDraw, showHistory, setShowHistory, available, used, setUsed } = useDrawHistory();
  const confetti = useConfetti({ durationMs: 4000 });
  const [toast, setToast] = useState<{ visible: boolean; message: string }>({ visible: false, message: "" });

  const showToast = (message: string, durationMs = 2000) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast({ visible: false, message: "" }), durationMs);
  };

  const drawCoupon = async () => {
    if (loading || coupons.length === 0) return;

    const ownedIds = new Set(drawHistory.map(h => h.couponId));
    const pool = coupons.filter(c => !ownedIds.has(c.id));
    if (pool.length === 0) {
      showToast("모든 쿠폰 얻기 완료🎈");
      return;
    }

    const total = pool.reduce((acc, c) => acc + c.probability, 0);
    const random = Math.random() * total;
    let sum = 0;
    const drawn = pool.find((c) => (sum += c.probability) >= random)!;

    setSelectedCoupon(drawn);
    if (drawn.tier === "SR" || drawn.tier === "S") {
      confetti.start();
    }
    const ok = await addDraw(drawn.id);
    if (!ok) {
      showToast("이미 보유 중인 쿠폰이야! 다시 한번 뽑아볼까나~?");
      return;
    }
  };

  const closeCard = () => setSelectedCoupon(null);
  const openCardById = (couponId: string) => {
    const c = allCoupons.find(c => c.id === couponId) || null;
    setSelectedCoupon(c);
  };

  return (
      <Section bgClass="flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 p-8" activeConfetti={confetti.active} confettiPieces={300}>
      <h1 className="text-2xl md:text-3xl font-bold mb-6">🎁 랜덤 쿠폰 뽑기 🎁</h1>

      <AnimatePresence mode="wait">
        <DrawButton onClick={drawCoupon}  disabled={!!selectedCoupon}  />
      </AnimatePresence>

      <motion.div
        className="mt-10 w-full max-w-md bg-white rounded-xl shadow-lg p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold">🧾 기록/내 쿠폰</h3>
          <button onClick={() => setShowHistory(v => !v)} className="text-sm text-pink-600 hover:underline">
            {showHistory ? "숨기기" : "History 내용 보기"}
          </button>
        </div>

        {showHistory ? (
          drawHistory.length > 0 ? (
            <ul className="space-y-2 text-gray-700 max-h-64 overflow-y-auto">
              {drawHistory.map((h) => {
                const c = coupons.find((cp) => cp.id === h.couponId);
                return (
                  <li key={h.id} className="border-b pb-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <strong>{c?.tier}</strong> - {c?.title}
                        <div className="text-sm text-gray-500">{new Date(h.drawnAt).toLocaleString()}</div>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded ${h.used ? "bg-gray-200 text-gray-600" : "bg-green-100 text-green-600"}`}>{h.used ? "사용완료" : "사용가능"}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-gray-500">아직 뽑은 쿠폰이 없습니다.</p>
          )
        ) : (
          <CouponTabs available={available} used={used} onToggleUse={setUsed} onSelect={openCardById} />
        )}
      </motion.div>

      <AnimatePresence>
        {selectedCoupon && (
          <div className="fixed inset-0 z-50" onClick={closeCard}>
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 flex items-center justify-center p-4" onClick={closeCard}>
              <CouponCard coupon={selectedCoupon} onRetry={closeCard} />
            </div>
          </div>
        )}
      </AnimatePresence>
        {toast.visible && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black/80 text-white text-sm px-4 py-2 rounded-full shadow-lg">
            {toast.message}
          </div>
        )}
      </Section>
  );
}