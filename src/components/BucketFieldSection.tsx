"use client";

import Section from "@/components/Section";
import Image from "next/image";
import AddBucketListModal from "@/components/AddBucketListModal";
import ViewBucketListModal from "@/components/ViewBucketListModal";
import { useBucketList } from "@/hooks/useBucketList";
import type { BucketItem } from "@/types/bucket";
import { useDisclosure } from "@/hooks/useDisclosure";
import { useState } from "react";

export default function BucketFieldSection() {
  const { bucketList, addItem } = useBucketList();
  const addModal = useDisclosure();
  const viewModal = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<{ id: number; text: string } | null>(null);

  const openAddModal = () => addModal.open();
  const closeAddModal = () => addModal.close();
  const openViewModal = (item: { id: number; text: string }) => { setSelectedItem(item); viewModal.open(); };
  const closeViewModal = () => { viewModal.close(); setSelectedItem(null); };

  return (
    <Section
      bgClass="relative"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/field.jpg"
          alt="BucketField background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-24 flex items-center justify-between px-6 z-10">
        <h2 className="text-white text-xl md:text-2xl font-bold">
          린댕이랑 준댕이가 해야할 것들❣️
        </h2>
        <button
          onClick={openAddModal}
          className="w-12 h-12 bg-pink-400 hover:bg-pink-500 text-white rounded-full shadow-lg flex items-center justify-center font-bold transition-all duration-200 hover:scale-110"
        >
          +
        </button>
      </div>

      <div className="absolute top-24 left-0 right-0 bottom-0 pt-8">
        <div className="relative w-full h-full">
          {bucketList.map((item: BucketItem, idx: number) => (
            <button
              key={item.id ?? idx}
              onClick={() => openViewModal({ id: item.id, text: item.text })}
              className="absolute hover:scale-110 transition-transform duration-200 cursor-pointer"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {item.flower}
            </button>
          ))}
        </div>

        {bucketList.length === 0 && (
          <div className="text-white text-center mt-20">
            <p>우측 상단의 + 버튼을 눌러</p>
            <p>버킷리스트를 추가해보세요! 🌸</p>
          </div>
        )}
      </div>

      <AddBucketListModal
        isOpen={addModal.isOpen}
        onClose={closeAddModal}
        onAdd={(text) => { addItem(text); closeAddModal(); }}
      />

      <ViewBucketListModal
        isOpen={viewModal.isOpen}
        onClose={closeViewModal}
        item={selectedItem}
      />
    </Section>
  );
}


