import type { Coupon } from "@/types/coupon";

export const coupons: Coupon[] = [
  // SR (2개)
  { id: "sr-01", tier: "SR", title: "✨ 초특급 럭키 쿠폰", message: "오늘의 모든 게 반짝이기를!", image: "/images/coupons/01.png", probability: 0.025 },
  { id: "sr-02", tier: "SR", title: "💎 다이아 축복 쿠폰", message: "특별한 행운이 깃들길!", image: "/images/coupons/02.png", probability: 0.025 },

  // S (3개)
  { id: "s-01", tier: "S", title: "🎉 골드 보너스", message: "커피 한 잔 + 칭찬 한 마디!", image: "/images/coupons/03.png", probability: 0.05 },
  { id: "s-02", tier: "S", title: "🏅 행운의 금메달", message: "오늘은 주인공!", image: "/images/coupons/04.png", probability: 0.05 },
  { id: "s-03", tier: "S", title: "🍾 축하 패키지", message: "작은 축하 파티를 열어봐요.", image: "/images/coupons/05.png", probability: 0.05 },

  // A (6개)
  { id: "a-01", tier: "A", title: "☕ 달콤한 커피 쿠폰", message: "한 잔의 여유를 드려요.", image: "/images/coupons/06.png", probability: 0.1 },
  { id: "a-02", tier: "A", title: "🍰 디저트 쿠폰", message: "달달한 디저트 타임!", image: "/images/coupons/07.png", probability: 0.1 },
  { id: "a-03", tier: "A", title: "📚 힐링 북타임", message: "조용한 카페에서 책 한 권", image: "/images/coupons/08.png", probability: 0.1 },
  { id: "a-04", tier: "A", title: "🎧 플레이리스트 추천", message: "기분 좋은 노래 리스트", image: "/images/coupons/09.png", probability: 0.1 },
  { id: "a-05", tier: "A", title: "🧸 포근 포옹 쿠폰", message: "따뜻한 포옹을 선물해요.", image: "/images/coupons/10.png", probability: 0.1 },
  { id: "a-06", tier: "A", title: "🌿 짧은 산책 쿠폰", message: "잠깐의 산책으로 기분 전환!", image: "/images/coupons/11.png", probability: 0.1 },

  // B (9개)
  { id: "b-01", tier: "B", title: "💌 응원 메시지", message: "작은 응원의 한마디를 보내요.", image: "/images/coupons/12.png", probability: 0.055 },
  { id: "b-02", tier: "B", title: "🍪 쿠키 한 판", message: "간식으로 힘내자 :)", image: "/images/coupons/13.png", probability: 0.055 },
  { id: "b-03", tier: "B", title: "📸 추억 스냅", message: "함께 찍은 사진 한 장", image: "/images/coupons/14.png", probability: 0.055 },
  { id: "b-04", tier: "B", title: "🎬 단편 추천", message: "재밌는 단편 하나 추천할게요.", image: "/images/coupons/15.png", probability: 0.055 },
  { id: "b-05", tier: "B", title: "🍵 티타임", message: "따뜻한 차 한잔 하자구요.", image: "/images/coupons/16.png", probability: 0.055 },
  { id: "b-06", tier: "B", title: "📝 응원 편지", message: "짧은 편지로 힘을 드려요.", image: "/images/coupons/17.png", probability: 0.055 },
  { id: "b-07", tier: "B", title: "🎮 게임 타임", message: "편하게 게임 한 판 하자!", image: "/images/coupons/18.png", probability: 0.055 },
  { id: "b-08", tier: "B", title: "🌸 꽃 한 송이", message: "작은 꽃이 하루를 밝게 해줄 거예요.", image: "/images/coupons/19.png", probability: 0.055 },
  { id: "b-09", tier: "B", title: "🧁 미니 디저트", message: "달콤한 간식으로 힐링하기.", image: "/images/coupons/20.png", probability: 0.055 },
];
