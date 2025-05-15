import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BestSellingBundles from "../../components/BestSellingBundles";
import Link from "next/link";

export default function BundlesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-black mb-4">Marketing Resource Bundles</h1>
            <p className="text-gray-600 max-w-3xl">
              Get more value with our carefully curated bundles. Each bundle combines complementary resources to help you achieve specific marketing goals at a discounted price.
            </p>
          </div>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-black mb-8">Popular Bundles</h2>
            <BestSellingBundles />
          </section>
          
          <section className="mb-16 bg-white p-8 rounded-xl shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-black mb-3">Why Choose a Bundle?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our bundles are designed to provide everything you need to succeed with specific marketing objectives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-[var(--primary)] bg-opacity-10 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Save Up to 30%</h3>
                <p className="text-gray-600">
                  Bundle pricing offers significant savings compared to buying resources individually.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-[var(--primary)] bg-opacity-10 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Complete Solutions</h3>
                <p className="text-gray-600">
                  Each bundle contains all the resources you need for a specific marketing objective.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-[var(--primary)] bg-opacity-10 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Faster Results</h3>
                <p className="text-gray-600">
                  Our complementary resources work together to accelerate your marketing success.
                </p>
              </div>
            </div>
          </section>
          
          <section className="text-center">
            <h2 className="text-2xl font-bold text-black mb-6">Looking for Individual Resources?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Browse our complete catalog of marketing resources to find exactly what you need.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-[var(--primary)] hover:bg-[#4A20C0] transform hover:scale-105 transition-all duration-200"
            >
              Browse All Products
            </Link>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 