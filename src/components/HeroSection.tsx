import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Digital marketing dashboard with analytics"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      </div>
      
      {/* Content positioned over image */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl ml-0">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Turn Your Traffic Into</span>
              <span className="block text-[var(--accent)]">Paying Customers</span>
            </h1>
            <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
              Premium lead generation resources for digital marketers, sales professionals, and business owners who want results, not theory.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:gap-3">
              {/* <Link
                href="/signup"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[var(--primary)] hover:bg-[#4A20C0] transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Get Started
              </Link> */}
              <Link
                href="/products"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[var(--primary)] hover:bg-[#4A20C0] transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
