"use client";

import { ReactNode } from "react";

interface TabItem {
  key: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  items: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
  className?: string;
}

export default function Tabs({ items, activeKey, onChange, className }: TabsProps) {
  return (
    <div className={className}>
      <div className="flex gap-2 mb-2">
        {items.map((item) => (
          <button
            key={item.key}
            className={`px-3 py-1 rounded ${activeKey === item.key ? "bg-pink-500 text-white" : "bg-gray-200"}`}
            onClick={() => onChange(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div>
        {items.find((i) => i.key === activeKey)?.content}
      </div>
    </div>
  );
}


