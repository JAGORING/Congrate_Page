import type { Coupon } from "@/types/coupon";

export const coupons: Coupon[] = [
  // SR (2개)
  { id: "sr-01", tier: "SR", title: "✨ 초특급 럭키 쿠폰", message: "워후~~ 어떤 소원이든 뭐든지 OK!", probability: 0.025 },
  { id: "sr-02", tier: "SR", title: "💋 러블리 뽀뽀 그리고 ...😊", message: "오늘의 주인공에게 사랑 듬뿍!", probability: 0.025 },

  // S (3개)
  { id: "s-01", tier: "S", title: "🤝 무조건! 화해!", message: "이번엔 그냥 안아줄게.", probability: 0.05 },
  { id: "s-02", tier: "S", title: "🍾 린댕 표 한상 차림", message: "정성 200%의 스페셜 디너!", probability: 0.05 },
  { id: "s-03", tier: "S", title: "🍸 술 한잔", message: "오늘... 한잔 어때?", probability: 0.05 },
  
  // A (6개)
  { id: "a-01", tier: "A", title: "🎉 데이트 신청합니다.", message: "데이트? 나랑 할래?", probability: 0.07 },
  { id: "a-02", tier: "A", title: "☕ 달콤한 커피 타임", message: "한 잔의 여유를 드리겠어요~", probability: 0.07 },
  { id: "a-03", tier: "A", title: "📷 사진 보내줘!", message: "오늘의 귀여움 전송! (꾸민 날만 사용 가능.)", probability: 0.07 },
  { id: "a-04", tier: "A", title: "👐 안마를 해보거라", message: "쭌댕의 피곤함을 위해 야무지게 해줄게~", probability: 0.07 },
  { id: "a-05", tier: "A", title: "🍳 냠냠, 계란 볶음밥", message: "정성과 사랑이 가득한 우리의 계볶이!", probability: 0.07 },
  { id: "a-06", tier: "A", title: "📝 응원이 필요해", message: "사랑을 담은 편지로 힘을 드려요!", probability: 0.07 },
  
  // B (9개)
  { id: "b-01", tier: "B", title: "💐 아름다운 꽃", message: "향기로운 하루를 선물할게.", probability: 0.1 },
  { id: "b-02", tier: "B", title: "🧸 짱 포근포근 포옹", message: "꼬옥~ 안아줄게❣️", probability: 0.1 },
  { id: "b-03", tier: "B", title: "📸 추억 남기기 찰칵", message: "함께 사진 한 장 남겨볼까나!", probability: 0.1 },
  { id: "b-04", tier: "B", title: "🌿 짧은 산책", message: "잠깐의 산책으로 기분 전환하자!", probability: 0.1 },
  { id: "b-05", tier: "B", title: "🐶 우쭈쭈 우쭈쭈", message: "칭찬 + 토닥토닥 + 옹뇽뇽뇽 세트", probability: 0.1 },
  { id: "b-06", tier: "B", title: "⏰ 모닝콜 해줘", message: "따뜻한 목소리로 하루 시작!", probability: 0.1 },
  { id: "b-07", tier: "B", title: "💭 멋진 데이트를 위하여", message: "완벽한 데이트를 계획해줘!", probability: 0.1 },
  { id: "b-08", tier: "B", title: "🎮 린댕이랑 게임하기", message: "오늘은 같이 플레이 타임!", probability: 0.1 },
  { id: "b-09", tier: "B", title: "💗 깜찍하게 쪽!", message: "귀엽고 깜찍하게 뽀뽀~", probability: 0.1 },

];
