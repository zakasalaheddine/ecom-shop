"use client";

import { useState, useMemo } from "react";
import { ShoppingBag, Menu } from "lucide-react";
import { CategoryFilter } from "@/components/category-filter";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/lib/constants";
import type { Product } from "@/types";
import Link from "next/link";

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products based on active category
  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                type="button"
                className="p-2 -ml-2 mr-2 md:hidden text-gray-600"
              >
                <Menu size={24} />
              </button>
              <span className="text-xl font-bold tracking-tighter">
                TeeMinimal.
              </span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
              <Link
                href="/"
                className="text-black hover:text-black transition-colors"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="hover:text-black transition-colors"
              >
                About
              </Link>
              <Link
                href="/journal"
                className="hover:text-black transition-colors"
              >
                Journal
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {/* Category Images Navigation */}
        <div className="mb-12">
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            {activeCategory === "all"
              ? "Latest Arrivals"
              : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Collection`}
          </h2>
          <span className="text-sm text-gray-500">
            {filteredProducts.length} items
          </span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={handleProductClick}
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
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">TeeMinimal.</h3>
            <p className="text-gray-500 text-sm">
              Redefining casual wear with art and intention.
              <br />
              Est. 2024
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-gray-900">Help</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/shipping-returns" className="hover:text-black">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-black">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-black">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-gray-900">Stay Updated</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-50 border-gray-200 text-gray-900 px-4 py-2 rounded-l-md w-full focus:ring-1 focus:ring-black focus:outline-none border"
              />
              <button
                type="button"
                className="bg-black text-white px-4 py-2 rounded-r-md font-medium hover:bg-gray-800"
              >
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 py-6 text-center text-xs text-gray-400">
          © 2024 TeeMinimal. All rights reserved.
        </div>
      </footer>

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
                      src={selectedProduct.imageUrl}
                      alt={selectedProduct.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedProduct.title}
                    </h2>
                    <p className="text-md text-gray-500 font-medium mb-4 capitalize tracking-wide">
                      {selectedProduct.category}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-900">
                        Description
                      </h3>
                      <p className="mt-2 text-gray-500 leading-relaxed">
                        {selectedProduct.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-900 mb-3">
                        Size
                      </h3>
                      <div className="flex space-x-3">
                        {["S", "M", "L", "XL"].map((size) => (
                          <button
                            type="button"
                            key={size}
                            className="w-10 h-10 rounded-md border border-gray-200 flex items-center justify-center hover:border-black hover:bg-gray-50 transition-all focus:ring-2 focus:ring-black focus:ring-offset-1 text-sm"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="w-full bg-black text-white py-4 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingBag size={18} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
