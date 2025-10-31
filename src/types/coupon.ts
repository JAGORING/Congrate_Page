export type Tier = "SR" | "S" | "A" | "B";

export interface Coupon {
  id: string;        
  tier: Tier;         
  title: string;      
  message: string;    
  probability: number;
}

export interface DrawHistory {
  id: string;
  couponId: string;
  drawnAt: string;
  used?: boolean;
  usedAt?: string | null;
}