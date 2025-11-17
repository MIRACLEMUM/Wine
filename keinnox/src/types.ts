// src/types.ts
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  inStock: boolean;
  year?: string;
  region?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
