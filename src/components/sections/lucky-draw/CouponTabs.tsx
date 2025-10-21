"use client";

import Tabs from "@/components/common/Tabs";
import { useState } from "react";
import type { DrawHistory } from "@/types/coupon";
import CouponList from "./CouponList";

interface CouponTabsProps {
  available: DrawHistory[];
  used: DrawHistory[];
  onToggleUse: (id: string, used: boolean) => void;
  onSelect?: (couponId: string) => void;
}

export default function CouponTabs({ available, used, onToggleUse, onSelect }: CouponTabsProps) {
  const [active, setActive] = useState("available");
  const items = [
    { key: "available", label: "사용가능", content: <CouponList list={available} onToggleUse={onToggleUse} onSelect={onSelect} /> },
    { key: "used", label: "사용완료", content: <CouponList list={used} onToggleUse={onToggleUse} onSelect={onSelect} /> },
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


