import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-[var(--primary)]">AlphaElemental</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:justify-end">
            <div className="flex space-x-8">
              <Link 
                href="/products" 
                className="border-transparent text-gray-600 hover:text-[var(--primary)] hover:border-[var(--primary)] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              >
                Products
              </Link>
              <Link 
                href="/bundles" 
                className="border-transparent text-gray-600 hover:text-[var(--primary)] hover:border-[var(--primary)] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              >
                Bundles
              </Link>
              <Link 
                href="/categories" 
                className="border-transparent text-gray-600 hover:text-[var(--primary)] hover:border-[var(--primary)] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              >
                Categories
              </Link>
              <Link 
                href="/about" 
                className="border-transparent text-gray-600 hover:text-[var(--primary)] hover:border-[var(--primary)] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="border-transparent text-gray-600 hover:text-[var(--primary)] hover:border-[var(--primary)] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[var(--primary)] hover:bg-gray-50 focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
