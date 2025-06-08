'use client';
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useStore } from "@/components/HOC/Context/StoreProvider";
import { IMAGE_PREFIX } from "@/lib/constants";
import { formatDecodedString } from "@/lib/utils";

export default function CategoriesPage() {
  const { categories, loading } = useStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-black mb-4">Resource Categories</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse our marketing resources by category to find exactly what you need to improve your marketing results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loading && <div>Loading...</div>}
            {categories.map((category) => (
              <Link href={`/categories/${category.slug}`} key={category.id}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-64">
                    <Image
                      src={category.image ? `${IMAGE_PREFIX}/${category.image}` : '/categories/marketing.jpg'}
                      alt={category.category_name}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-2xl font-bold text-white mb-2">{category.category_name}</h2>
                      <p className="text-white/80 mb-2">{formatDecodedString(category.meta_description)}</p>
                      <span className="text-[var(--accent)] text-sm font-medium">
                        {category.total_products} resources
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{formatDecodedString(category.description)}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[var(--primary)] font-medium flex items-center">
                        Explore Category
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-black mb-3">Not Sure Where to Start?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {`If you're not sure which category is right for you, try one of our curated bundles for specific marketing goals.`}
              </p>
            </div>
            
            <div className="flex justify-center">
              <Link
                href="/bundles"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-[var(--primary)] hover:bg-[#4A20C0] transform hover:scale-105 transition-all duration-200 mr-4"
              >
                Browse Bundles
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-[var(--primary)] text-base font-medium rounded-full text-[var(--primary)] bg-transparent hover:bg-[var(--primary)]/5 transform hover:scale-105 transition-all duration-200"
              >
                Get Personalized Help
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 