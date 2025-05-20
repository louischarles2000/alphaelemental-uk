/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-black mb-4">About AlphaElemental</h1>
              <h2 className="text-2xl font-medium text-gray-800 mb-6">Lead Generation Resources for Marketing Professionals</h2>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                AlphaElemental provides premium marketing resources for professionals who need practical, results-driven tools to generate leads, nurture prospects, and convert customers.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Approach Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">Our Approach</h2>
                <p className="text-gray-700 mb-6">
                  We believe effective marketing doesn't have to be complicated. Our resources cut through the noise to deliver clear, actionable guidance that works in real-world business environments.
                </p>
                <p className="text-gray-700 mb-4">
                  Every product we offer is:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800">Created by industry experts with proven results</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800">Focused on practical implementation, not just theory</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800">Designed to work together as part of a complete system</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800">Regularly updated to reflect current best practices</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-96">
                <Image
                  src="/about/mission.jpg"
                  alt="Marketing strategy implementation"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Who We Serve Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 order-2 md:order-1">
                <Image
                  src="/about/story.jpg"
                  alt="Marketing professionals at work"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-black mb-6">Who We Serve</h2>
                <p className="text-gray-700 mb-4">
                  Our resources are trusted by:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800">Digital marketing professionals seeking to improve campaign performance</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800">Sales teams looking to generate more qualified leads</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800">Business owners who want practical marketing solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800">Entrepreneurs building new ventures from the ground up</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Commitment Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">Our Commitment</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-700 mb-4">
                  When you purchase from AlphaElemental, you're not just buying information—you're investing in a resource that's designed to deliver measurable results for your business.
                </p>
                <p className="text-gray-700">
                  We stand behind every product with our satisfaction guarantee. If you're not completely satisfied with your purchase, contact us within 30 days for a full refund.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Get Started Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-black mb-6">Get Started Today</h2>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
              Browse our complete collection of marketing resources or contact us for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/products" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[var(--primary)] hover:bg-opacity-90 transition-colors">
                Browse Products
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 