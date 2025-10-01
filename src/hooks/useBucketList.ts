"use client";

import { useEffect, useState } from "react";
import type { BucketItem } from "@/types/bucket";
import { supabase } from "@/lib/supabaseClient";

const FLOWERS = ['🌸', '🌺', '🌻', '🌷', '🌹', '🌼', '🌿', '🍀', '🌱', '🌾', '🌵', '🌴'];
const MIN_DISTANCE_PERCENT = 10;

function generateRandomPosition() {
  const x = Math.random() * 80 + 10;
  const y = Math.random() * 40 + 50;
  return { x, y };
}

function isTooClose(
  x: number,
  y: number,
  items: Array<{ x: number; y: number }>,
  minDistance: number
) {
  for (const item of items) {
    const dx = x - item.x;
    const dy = y - item.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < minDistance) return true;
  }
  return false;
}

function findNonOverlappingPosition(
  items: Array<{ x: number; y: number }>,
  maxAttempts = 60
) {
  let attempt = 0;
  let pos = generateRandomPosition();
  while (attempt < maxAttempts && isTooClose(pos.x, pos.y, items, MIN_DISTANCE_PERCENT)) {
    pos = generateRandomPosition();
    attempt += 1;
  }
  return pos;
}

export function useBucketList() {
  const [isMounted, setIsMounted] = useState(false);
  const [bucketList, setBucketList] = useState<BucketItem[]>([]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      if (!supabase) return;
      const { data, error } = await supabase
        .from("bucket_items")
        .select("id, text, x, y, flower")
      if (error) {
        return setBucketList([]);
      }
      if (data) {
        const items = data as unknown as BucketItem[];
        setBucketList(items);
      }
    };
    fetchItems();
  }, []);

  const addItem = async (text: string) => {
    if (!isMounted) return;
    const { x, y } = findNonOverlappingPosition(bucketList.map(({ x, y }) => ({ x, y })));
    const payload = {
      text,
      x,
      y,
      flower: FLOWERS[Math.floor(Math.random() * FLOWERS.length)]
    };
    if (!supabase) return; 
    const { data, error } = await supabase
      .from("bucket_items")
      .insert(payload)
      .select("id, text, x, y, flower");
      
    if (!error && data) {
      setBucketList(prev => [...prev, data as unknown as BucketItem]);
    }
  };

  return { isMounted, bucketList, addItem };
}



