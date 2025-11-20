export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  imageUrl: string;
  description: string;
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
