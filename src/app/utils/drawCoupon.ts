import { coupons } from "@/app/data/coupons";

export function drawCoupon() {
  const random = Math.random();
  let cumulative = 0;

  for (const coupon of coupons) {
    cumulative += coupon.probability;
    if (random <= cumulative) {
      return coupon;
    }
  }
  return coupons[coupons.length - 1];
}
