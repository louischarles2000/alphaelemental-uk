import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fitness-hero.jpg"
          alt="Person in athletic wear exercising"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      </div>
      
      {/* Content positioned over image */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Custom Plans for</span>
              <span className="block text-[#5932EA]">Your Unique Journey</span>
            </h1>
            <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
              Personalized programs backed by science • Adapts to your progress • Nutrition that fits your lifestyle
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:gap-3">
              <Link
                href="/signup"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#5932EA] hover:bg-[#4A29C6] transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href="/plans"
                className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-full text-white bg-transparent hover:bg-white/10 transform hover:scale-105 transition-all duration-200"
              >
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
