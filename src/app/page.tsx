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
    <div className="min-h-screen bg-white dark:bg-gray-950 relative">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                type="button"
                className="p-2 -ml-2 mr-2 md:hidden text-gray-600 dark:text-gray-400"
              >
                <Menu size={24} />
              </button>
              <span className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white">
                TeeMinimal.
              </span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600 dark:text-gray-400">
              <Link
                href="/"
                className="text-black dark:text-white hover:text-black dark:hover:text-white transition-colors"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/journal"
                className="hover:text-black dark:hover:text-white transition-colors"
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
      <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">TeeMinimal.</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Redefining casual wear with art and intention.
              <br />
              Est. 2024
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-gray-900 dark:text-white">Help</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="/shipping-returns" className="hover:text-black dark:hover:text-white">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-black dark:hover:text-white">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-black dark:hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-gray-900 dark:text-white">Stay Updated</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 py-2 rounded-l-md w-full focus:ring-1 focus:ring-black dark:focus:ring-white focus:outline-none border"
              />
              <button
                type="button"
                className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-r-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 dark:border-gray-800 py-6 text-center text-xs text-gray-400 dark:text-gray-500">
          © 2024 TeeMinimal. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Page;
