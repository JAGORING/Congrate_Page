/*"use client";
import { items } from "@/app/data/gallery";
import Section from "@/components/common/Section";
import { useRef, useEffect } from "react";
import Polaroid from "./Polaroid";

export default function MemoryGallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      container.scrollBy({
        left: e.deltaY,
        behavior: "smooth",
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <Section
      bgClass="relative bg-gradient-to-br from-rose-50 to-pink-100 flex flex-col items-center justify-center"
    >
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-pink-700">📸 추억 전시관</h2>

      <div
        ref={scrollRef}
        className="w-full max-w-[1200px] overflow-x-auto overflow-y-visible snap-x snap-mandatory px-6 pb-6"
      >
        <div className="flex flex-col gap-16 min-w-max overflow-visible py-3">
          {[0, 1].map((line) => (
            <div
              key={line}
              className="flex gap-10 justify-start min-w-max relative"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-pink-300 z-0" />
              {items
                .slice(line * 10, line * 10 + 10)
                .map((item, i) => (
                    <Polaroid key={i} item={item} itemIdx={i} />
                ))}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-500 italic">
        (마우스 휠을 움직여 추억을 넘겨보세요 💫)
      </p>
    </Section>
  );
}
*/

import { items } from "@/app/data/gallery";
import Section from "@/components/common/Section";
import Polaroid from "./Polaroid";
import { useEffect, useRef } from "react";

export default function MemoryGallerySection() {
    const scrollRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const container = scrollRef.current;
      if (!container) return;
  
      const handleWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        container.scrollBy({
          left: e.deltaY,
          behavior: "smooth",
        });
      };
  
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }, []);
  
    return (
      <Section
        bgClass="relative bg-gradient-to-br from-white via-sky-50 to-sky-100 flex flex-col items-center justify-center"
      >
        <h2 className="text-xl md:text-2xl font-bold mb-3 pt-3 text-sky-700 drop-shadow-sm">
          ☁️ 추억 전시관
        </h2>
  
        <div
          ref={scrollRef}
          className="w-full max-w-[1200px] overflow-x-auto overflow-y-visible snap-x snap-mandatory px-6 pb-6"
        >
          <div className="flex flex-col gap-16 min-w-max overflow-visible py-3">
            {[0, 1].map((line) => (
              <div
                key={line}
                className="flex gap-10 justify-start min-w-max relative"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-sky-100 z-0" />
                {items
                  .slice(line * 10, line * 10 + 10)
                  .map((item, i) => (
                    <Polaroid key={i} item={item} itemIdx={i} line={line}/>
                  ))}
              </div>
            ))}
          </div>
        </div>
  
        <p className="mt-3 text-sm text-sky-600 italic">
          (마우스 휠을 움직여 추억을 넘겨보세요 🌈)
        </p>
      </Section>
    );
  }
  