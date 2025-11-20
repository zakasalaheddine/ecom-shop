import type { Category, Product } from "@/types";

export const CATEGORIES: Category[] = [
  {
    id: "all",
    label: "All Collections",
    imageUrl: "https://picsum.photos/seed/cat_all/200/200",
  },
  {
    id: "minimalist",
    label: "Line Art",
    imageUrl: "https://picsum.photos/seed/shirt1/200/200", // Reusing product seed for consistency
  },
  {
    id: "vintage",
    label: "Vintage 90s",
    imageUrl: "https://picsum.photos/seed/shirt3/200/200",
  },
  {
    id: "nature",
    label: "Botanical",
    imageUrl: "https://picsum.photos/seed/shirt5/200/200",
  },
  {
    id: "abstract",
    label: "Abstract",
    imageUrl: "https://picsum.photos/seed/shirt4/200/200",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Single Line Rose",
    price: 24.0,
    category: "minimalist",
    imageUrl: "https://picsum.photos/seed/shirt1/400/500",
    description:
      "A delicate single-line drawing of a rose on 100% organic cotton.",
  },
  {
    id: "2",
    title: "Mountain Peak Explorer",
    price: 28.5,
    category: "nature",
    imageUrl: "https://picsum.photos/seed/shirt2/400/500",
    description:
      "Rugged mountain peaks illustration for the outdoor enthusiast.",
  },
  {
    id: "3",
    title: "Retro Cassette 1992",
    price: 26.0,
    category: "vintage",
    imageUrl: "https://picsum.photos/seed/shirt3/400/500",
    description: "Authentic 90s vibe with a neon cassette tape graphic.",
  },
  {
    id: "4",
    title: "Geometric Fox",
    price: 29.0,
    category: "abstract",
    imageUrl: "https://picsum.photos/seed/shirt4/400/500",
    description: "Low-poly geometric fox head in vibrant orange and teal.",
  },
  {
    id: "5",
    title: "Botanical Fern",
    price: 25.0,
    category: "nature",
    imageUrl: "https://picsum.photos/seed/shirt5/400/500",
    description: "Detailed fern leaf botanical illustration.",
  },
  {
    id: "6",
    title: "Abstract Faces",
    price: 32.0,
    category: "minimalist",
    imageUrl: "https://picsum.photos/seed/shirt6/400/500",
    description: "Picasso-inspired continuous line art of two faces.",
  },
  {
    id: "7",
    title: "Sunset Boulevard",
    price: 27.0,
    category: "vintage",
    imageUrl: "https://picsum.photos/seed/shirt7/400/500",
    description: "Retro sunset gradient with palm tree silhouettes.",
  },
  {
    id: "8",
    title: "Cubist Cat",
    price: 30.0,
    category: "abstract",
    imageUrl: "https://picsum.photos/seed/shirt8/400/500",
    description: "A cat reimagined through cubist shapes and muted tones.",
  },
  {
    id: "9",
    title: "Forest Whisper",
    price: 24.5,
    category: "nature",
    imageUrl: "https://picsum.photos/seed/shirt9/400/500",
    description: "Subtle forest silhouette print in deep pine green.",
  },
];
