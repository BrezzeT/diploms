import { BRAND, CATEGORY, COLOR } from "@/lib/constants/geneal";
export type BrandType = (typeof BRAND)[number];
export type CategoryType = (typeof CATEGORY)[number];
export type ColorType = (typeof COLOR)[number];

export interface IProduct {
  _id: string;
  title: string;
  description?: string;
  price?: number;
  category?: CategoryType;
  brand?: BrandType;
  color?: ColorType;
  image?: string;
  slug?: string;
  createdAt?: Date;
  updatedAt?: Date;
  stock?: number;
}
export interface createProductState {
  success: boolean;
  message: string;
}
