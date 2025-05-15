import Link from "next/link";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand and description */}
          <div className="md:col-span-2">
            <Link href="/" className="block mb-4">
              <span className="text-2xl font-bold text-white">AlphaElemental</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Premium resources for digital marketers and business owners who want to convert more traffic into paying customers.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--accent)]">
                <FaLinkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--accent)]">
                <FaTwitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--accent)]">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/landing-page-resources" className="text-gray-300 hover:text-[var(--accent)]">
                  Landing Page Resources
                </Link>
              </li>
              <li>
                <Link href="/products/email-marketing" className="text-gray-300 hover:text-[var(--accent)]">
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link href="/products/sales-funnels" className="text-gray-300 hover:text-[var(--accent)]">
                  Sales Funnels
                </Link>
              </li>
              <li>
                <Link href="/products/optimization" className="text-gray-300 hover:text-[var(--accent)]">
                  Optimization Tools
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[var(--accent)]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[var(--accent)]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-[var(--accent)]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-[var(--accent)]">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-[var(--accent)]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-[var(--accent)]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-300 hover:text-[var(--accent)]">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-md mx-auto md:mx-0">
            <h3 className="text-white font-semibold mb-4">Subscribe to our newsletter</h3>
            <p className="text-gray-300 mb-4">Get the latest marketing tips and resources delivered to your inbox.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 min-w-0 px-4 py-2 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent bg-gray-800 text-white"
              />
              <button 
                type="submit"
                className="bg-[var(--accent)] text-black px-4 py-2 rounded-r-md hover:bg-[var(--accent)]/80 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} AlphaElemental. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Designed and built with passion for digital marketers.
          </p>
        </div>
      </div>
    </footer>
  );
}
