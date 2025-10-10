"use client";

import { useState } from "react";
import DrawButton from "./DrawButton";
import CouponCard from "./CouponCard";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import Section from "./Section";
import { Coupon } from "@/types/coupon";
import { coupons } from "@/app/data/coupons";
import { useDrawHistory } from "@/hooks/useDrawHistory";
import Tabs from "@/components/Tabs";
import { useState as _useState } from "react";

function CouponTabs({ available, used, onToggleUse }: { available: any[]; used: any[]; onToggleUse: (id: string, used: boolean) => void }) {
  const [active, setActive] = _useState("available");
  const items = [
    {
      key: "available",
      label: "사용가능",
      content: (
        <CouponList list={available} onToggleUse={onToggleUse} />
      )
    },
    {
      key: "used",
      label: "사용완료",
      content: (
        <CouponList list={used} onToggleUse={onToggleUse} />
      )
    }
  ];
  return (
    <div>
      <div className="flex gap-2 mb-3">
        <span className="text-sm text-gray-600">🎟️ 지금까지 {available.length + used.length}개 뽑음</span>
      </div>
      <Tabs items={items} activeKey={active} onChange={setActive} />
    </div>
  );
}

function CouponList({ list, onToggleUse }: { list: any[]; onToggleUse: (id: string, used: boolean) => void }) {
  return list.length > 0 ? (
    <ul className="space-y-2 max-h-64 overflow-y-auto">
      {list.map((h: any) => {
        const c = coupons.find((cp) => cp.id === h.couponId);
        return (
          <li key={h.id} className="border rounded p-2 flex items-center justify-between">
            <div>
              <div className="font-semibold">{c?.title}</div>
              <div className="text-xs text-gray-500">등급: {c?.tier}</div>
            </div>
            <button onClick={() => onToggleUse(h.id, !(h.used))} className={`text-sm px-2 py-1 rounded ${h.used ? "bg-gray-300" : "bg-green-500 text-white"}`}>
              {h.used ? "되돌리기" : "사용하기"}
            </button>
          </li>
        );
      })}
    </ul>
  ) : (
    <p className="text-gray-500">표시할 쿠폰이 없습니다.</p>
  );
}

export default function LuckyDrawSection() {
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);
  const { history: drawHistory, loading, addDraw, showHistory, setShowHistory, available, used, setUsed } = useDrawHistory();
  const [showConfetti, setShowConfetti] = useState(false);

  const drawCoupon = async () => {
    if (loading || coupons.length === 0) return;

    const total = coupons.reduce((acc, c) => acc + c.probability, 0);
    const random = Math.random() * total;
    let sum = 0;
    const drawn = coupons.find((c) => (sum += c.probability) >= random)!;

    setSelectedCoupon(drawn);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
    await addDraw(drawn.id);
  };

  return (
    <Section bgClass="flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 p-8">
      {showConfetti && <Confetti recycle={false} numberOfPieces={300} />}
      <h2 className="text-3xl font-bold mb-6">🎁 랜덤 쿠폰 뽑기</h2>

      <AnimatePresence mode="wait">
        {selectedCoupon ? (
          <CouponCard
            key={selectedCoupon.id}
            coupon={selectedCoupon}
            onRetry={() => setSelectedCoupon(null)}
          />
        ) : (
          <DrawButton onClick={drawCoupon} disabled={loading} />
        )}
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
          <CouponTabs available={available} used={used} onToggleUse={setUsed} />
        )}
      </motion.div>
    </Section>
  );
}