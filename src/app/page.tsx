import { Menu } from "lucide-react";
import { ShopClient } from "@/components/shop-client";
import Link from "next/link";
import { fetchQuery } from "convex/nextjs";
import { api } from "../../convex/_generated/api";

const Page = async () => {
  // Fetch data on the server
  const products = await fetchQuery(api.products.list);
  const categories = await fetchQuery(api.categories.list);

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
        <ShopClient initialProducts={products} categories={categories} />
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
    </div>
  );
};

export default Page;
