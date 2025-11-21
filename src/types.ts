export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  images: string[];
  description: string;
  tags: string[];
  listing_url?: string;
}

export interface Category {
  id: string;
  label: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: "user" | "model";
  text: string;
}
