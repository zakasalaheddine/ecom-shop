"use client";

import { useState, useMemo } from "react";
import { ExternalLink } from "lucide-react";
import { CategoryFilter } from "@/components/category-filter";
import { ProductCard } from "@/components/product-card";

interface Product {
  _id: string;
  title: string;
  price: number;
  categories: string[]; // Array of category IDs
  categoryLabels: string[];
  images: string[];
  description: string;
  tags: string[];
  listing_url?: string;
}

interface Category {
  _id: string;
  label: string;
  imageUrl: string;
}

interface ShopClientProps {
  initialProducts: Product[];
  categories: Category[];
}

export function ShopClient({ initialProducts, categories }: ShopClientProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products based on active category ID (products with multiple categories)
  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return initialProducts;
    return initialProducts.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory, initialProducts]);

  // Get the active category label for display
  const activeCategoryLabel = useMemo(() => {
    if (activeCategory === "all") return "all";
    const category = categories.find((c) => c._id === activeCategory);
    return category?.label || "all";
  }, [activeCategory, categories]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => setSelectedProduct(null);

  return (
    <>
      {/* Category Images Navigation */}
      <div className="mb-12">
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          categories={categories}
        />
      </div>

      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          {activeCategoryLabel === "all"
            ? "Latest Arrivals"
            : `${activeCategoryLabel.charAt(0).toUpperCase() + activeCategoryLabel.slice(1)} Collection`}
        </h2>
        <span className="text-sm text-gray-500">
          {filteredProducts.length} items
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 xl:gap-x-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={{
              id: product._id,
              title: product.title,
              price: product.price,
              category: product.categoryLabels.join(", "), // Join multiple categories for display
              images: product.images,
              description: product.description,
              tags: product.tags,
              listing_url: product.listing_url,
            }}
            onSelect={(p) => handleProductClick({
              _id: p.id,
              title: p.title,
              price: p.price,
              categories: product.categories, // Use the original category IDs array
              categoryLabels: product.categoryLabels,
              images: p.images,
              description: p.description,
              tags: p.tags,
              listing_url: p.listing_url,
            })}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-32 text-gray-400 bg-gray-50 rounded-xl">
          <p>No products found in this category.</p>
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className="mt-4 text-black underline text-sm"
          >
            View all products
          </button>
        </div>
      )}

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog">
          <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              onClick={closeModal}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  closeModal();
                }
              }}
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity backdrop-blur-sm"
            />

            <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:align-middle">
              <div className="relative bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>Close</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={selectedProduct.images[0]}
                      alt={selectedProduct.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedProduct.title}
                    </h2>
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <div className="flex gap-2">
                        {selectedProduct.categoryLabels.map((label, index) => (
                          <span
                            key={index}
                            className="text-xs px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium capitalize tracking-wide"
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                      <span className="text-gray-300">•</span>
                      <p className="text-lg font-bold text-gray-900">
                        ${selectedProduct.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-900">
                        Description
                      </h3>
                      <p className="mt-2 text-gray-500 leading-relaxed">
                        {selectedProduct.description}
                      </p>
                    </div>

                    <a
                      href={selectedProduct.listing_url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-black text-white py-4 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={18} />
                      View on Etsy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
