import NewCollection from "@/components/NewCollection";

export const COUPON_CODES = {
   NewCollection25:"NewCollection25",
    WINTER25: "WINTER25",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;