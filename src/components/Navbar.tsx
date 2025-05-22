"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCurrency } from "../context/CurrencyContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();
  const currencies = ["USD", "AUD", "EUR", "CAD", "GBP"] as const;

  // Create a proper type-safe handler for currency changes
  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // This ensures type safety when setting the currency
    setCurrency(e.target.value as typeof currency);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/alpha.svg"
                alt="AlphaElemental"
                width={50}
                height={50}
                className="w-36 h-14"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:flex sm:items-center sm:justify-end">
            <div className="flex space-x-8">
              {["products", "bundles", "categories", "about", "contact"].map(
                (page) => (
                  <Link
                    key={page}
                    href={`/${page}`}
                    className="border-transparent text-gray-600 hover:text-[var(--primary)] hover:border-[var(--primary)] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </Link>
                )
              )}
              
              {/* Currency Selector */}
              <div className="relative">
                <select
                  value={currency}
                  onChange={handleCurrencyChange}
                  className="appearance-none bg-white border border-gray-300 rounded-md py-1 pl-3 pr-8 text-sm font-medium text-gray-700 focus:outline-none focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                  aria-label="Select currency"
                >
                  {currencies.map((curr) => (
                    <option key={curr} value={curr}>
                      {curr}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[var(--primary)] hover:bg-gray-50 focus:outline-none"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3 space-y-1 bg-white shadow-md">
          {["products", "bundles", "categories", "about", "contact"].map(
            (page) => (
              <Link
                key={page}
                href={`/${page}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Link>
            )
          )}
          
          {/* Mobile Currency Selector */}
          <div className="px-3 py-2">
            <label htmlFor="mobile-currency" className="block text-sm font-medium text-gray-700 mb-1">
              Currency
            </label>
            <select
              id="mobile-currency"
              value={currency}
              onChange={handleCurrencyChange}
              className="w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-base font-medium text-gray-700 focus:outline-none focus:ring-[var(--primary)] focus:border-[var(--primary)]"
            >
              {currencies.map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}
