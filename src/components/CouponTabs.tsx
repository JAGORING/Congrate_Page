"use client";

import Tabs from "@/components/Tabs";
import { useState } from "react";
import type { DrawHistory } from "@/types/coupon";
import CouponList from "@/components/CouponList";

interface CouponTabsProps {
  available: DrawHistory[];
  used: DrawHistory[];
  onToggleUse: (id: string, used: boolean) => void;
}

export default function CouponTabs({ available, used, onToggleUse }: CouponTabsProps) {
  const [active, setActive] = useState("available");
  const items = [
    { key: "available", label: "사용가능", content: <CouponList list={available} onToggleUse={onToggleUse} /> },
    { key: "used", label: "사용완료", content: <CouponList list={used} onToggleUse={onToggleUse} /> },
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


