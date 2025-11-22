import { Info } from "lucide-react";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(product)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onSelect(product);
        }
      }}
      className="group cursor-pointer flex flex-col gap-3"
    >
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5 dark:group-hover:bg-white/5" />
        <button
          type="button"
          className="absolute bottom-4 right-4 translate-y-4 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 bg-white dark:bg-gray-800 p-3 rounded-full text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Info size={20} />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
          {product.title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 capitalize bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded-md">
          {product.category}
        </p>
      </div>
    </div>
  );
};
