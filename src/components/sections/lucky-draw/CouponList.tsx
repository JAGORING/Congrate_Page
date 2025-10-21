"use client";

import type { DrawHistory } from "@/types/coupon";
import { coupons } from "@/app/data/coupons";

interface CouponListProps {
  list: DrawHistory[];
  onToggleUse: (id: string, used: boolean) => void;
  onSelect?: (couponId: string) => void;
}

export default function CouponList({ list, onToggleUse, onSelect }: CouponListProps) {
  return list.length > 0 ? (
    <ul className="space-y-2 max-h-64 overflow-y-auto">
      {list.map((h) => {
        const c = coupons.find((cp) => cp.id === h.couponId);
        return (
          <li key={h.id} className="border rounded p-2 flex items-center justify-between cursor-pointer" onClick={() => onSelect?.(h.couponId)}>
            <div>
              <div className="font-semibold">{c?.title}</div>
              <div className="text-xs text-gray-500">등급: {c?.tier}</div>
            </div>
            <button onClick={(e) => { e.stopPropagation(); onToggleUse(h.id, !(h.used)); }} className={`text-sm px-2 py-1 rounded ${h.used ? "bg-gray-300" : "bg-green-500 text-white"}`}>
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


