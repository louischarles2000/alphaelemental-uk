import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-black">Alpha-Elemental</span>
            </Link>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <Link 
                href="/workouts" 
                className="border-transparent text-black hover:text-[#5932EA] hover:border-[#5932EA] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              >
                Workouts
              </Link>
              <Link 
                href="/meals" 
                className="border-transparent text-black hover:text-[#5932EA] hover:border-[#5932EA] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              >
                Meals
              </Link>
              <Link 
                href="/success-stories" 
                className="border-transparent text-black hover:text-[#5932EA] hover:border-[#5932EA] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              >
                Success Stories
              </Link>
              <Link 
                href="/articles" 
                className="border-transparent text-black hover:text-[#5932EA] hover:border-[#5932EA] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              >
                Articles
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <div className="relative">
              <select className="appearance-none bg-transparent pr-8 pl-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#5932EA]">
                <option>EN</option>
                <option>ES</option>
                <option>FR</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
            <Link 
              href="/login" 
              className="text-black hover:text-[#5932EA] px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Log In
            </Link>
            <Link 
              href="/signup" 
              className="bg-[#5932EA] text-white hover:bg-[#4A29C6] px-4 py-2 rounded-full text-sm font-medium transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Start FREE Trial
            </Link>
            <Link href="/cart" className="text-black hover:text-[#5932EA] pl-3 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-[#5932EA] focus:outline-none">
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
