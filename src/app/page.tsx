import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BrowseByCategory from "../components/BrowseByCategory";
import BestSellingBundles from "../components/BestSellingBundles";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-sans)]">
      <Navbar />
      
      <main className="flex flex-col">
        <HeroSection />
        
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl text-black font-bold text-center mb-12">Browse By Category</h2>
          <BrowseByCategory />
        </section>
        
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl text-black font-bold text-center mb-12">Best-Selling Bundles</h2>
            <BestSellingBundles />
          </div>
        </section>
        
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Testimonials />
        </section>
        
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <WhyChooseUs />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
