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
    images: ["https://picsum.photos/seed/shirt1/400/500"],
    description:
      "A delicate single-line drawing of a rose on 100% organic cotton.",
    tags: ["minimalist", "line art", "rose", "organic cotton"],
  },
  {
    id: "2",
    title: "Mountain Peak Explorer",
    price: 28.5,
    category: "nature",
    images: ["https://picsum.photos/seed/shirt2/400/500"],
    description:
      "Rugged mountain peaks illustration for the outdoor enthusiast.",
    tags: ["nature", "mountain", "outdoor", "adventure"],
  },
  {
    id: "3",
    title: "Retro Cassette 1992",
    price: 26.0,
    category: "vintage",
    images: ["https://picsum.photos/seed/shirt3/400/500"],
    description: "Authentic 90s vibe with a neon cassette tape graphic.",
    tags: ["vintage", "90s", "retro", "cassette", "neon"],
  },
  {
    id: "4",
    title: "Geometric Fox",
    price: 29.0,
    category: "abstract",
    images: ["https://picsum.photos/seed/shirt4/400/500"],
    description: "Low-poly geometric fox head in vibrant orange and teal.",
    tags: ["abstract", "geometric", "fox", "low-poly", "colorful"],
  },
  {
    id: "5",
    title: "Botanical Fern",
    price: 25.0,
    category: "nature",
    images: ["https://picsum.photos/seed/shirt5/400/500"],
    description: "Detailed fern leaf botanical illustration.",
    tags: ["botanical", "fern", "nature", "plant", "green"],
  },
  {
    id: "6",
    title: "Abstract Faces",
    price: 32.0,
    category: "minimalist",
    images: ["https://picsum.photos/seed/shirt6/400/500"],
    description: "Picasso-inspired continuous line art of two faces.",
    tags: ["minimalist", "abstract", "faces", "line art", "picasso"],
  },
  {
    id: "7",
    title: "Sunset Boulevard",
    price: 27.0,
    category: "vintage",
    images: ["https://picsum.photos/seed/shirt7/400/500"],
    description: "Retro sunset gradient with palm tree silhouettes.",
    tags: ["vintage", "sunset", "palm trees", "retro", "california"],
  },
  {
    id: "8",
    title: "Cubist Cat",
    price: 30.0,
    category: "abstract",
    images: ["https://picsum.photos/seed/shirt8/400/500"],
    description: "A cat reimagined through cubist shapes and muted tones.",
    tags: ["abstract", "cubist", "cat", "geometric", "muted"],
  },
  {
    id: "9",
    title: "Forest Whisper",
    price: 24.5,
    category: "nature",
    images: ["https://picsum.photos/seed/shirt9/400/500"],
    description: "Subtle forest silhouette print in deep pine green.",
    tags: ["nature", "forest", "trees", "silhouette", "green"],
  },
];
