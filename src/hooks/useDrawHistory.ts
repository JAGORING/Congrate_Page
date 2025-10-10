"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import type { DrawHistory } from "@/types/coupon";

export function useDrawHistory() {
  const [history, setHistory] = useState<DrawHistory[]>([]);
  const [loading, setLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const fetchHistory = async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("draw_history")
      .select("*")
      .order("drawnAt", { ascending: false });
    if (!error && data) {
      setHistory(data as unknown as DrawHistory[]);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const addDraw = async (couponId: string) => {
    if (!supabase) return;
    setLoading(true);
    await supabase.from("draw_history").insert({ couponId });
    await fetchHistory();
    setLoading(false);
  };

  const setUsed = async (id: string, used: boolean) => {
    if (!supabase) return;
    setLoading(true);
    await supabase.from("draw_history").update({ used, usedAt: used ? new Date().toISOString() : null }).eq("id", id);
    await fetchHistory();
    setLoading(false);
  };

  const ownedCoupons = history.map(h => ({ draw: h, couponId: h.couponId }));
  const available = history.filter(h => !h.used);
  const usedList = history.filter(h => !!h.used);

  return {
    history,
    loading,
    addDraw,
    refresh: fetchHistory,
    setUsed,
    showHistory,
    setShowHistory,
    available,
    used: usedList,
    ownedCoupons,
  };
}


