import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and description */}
          <div className="md:col-span-1">
            <Link href="/" className="block mb-4">
              <Image
                src="/alpha.svg"
                alt="AlphaElemental"
                width={50}
                height={50}
                className="w-36 h-14"
              />
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Premium resources for digital marketers and business owners who
              want to convert more traffic into paying customers.
            </p>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[var(--accent)]"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[var(--accent)]"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[var(--accent)]"
              >
                <FaInstagram size={20} />
              </a>
            </div>
            <div className="flex space-x-4 mb-6">
              <FaCcVisa size={32} className="text-white" />
              <FaCcMastercard size={32} className="text-white" />
            </div>
            <div className="text-gray-400 text-sm">
              <p>Reg Number: 16438616</p>
              <p className="mt-2">
                Registered Address: Alpha Elemental Limited, Collingwood
                Buildings, 38 Collingwood Street, Newcastle Upon Tyne, NE1 1JF
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/landing-page-resources"
                  className="text-gray-300 hover:text-[var(--accent)]"
                >
                  Landing Page Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/products/email-marketing"
                  className="text-gray-300 hover:text-[var(--accent)]"
                >
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/products/sales-funnels"
                  className="text-gray-300 hover:text-[var(--accent)]"
                >
                  Sales Funnels
                </Link>
              </li>
              <li>
                <Link
                  href="/products/optimization"
                  className="text-gray-300 hover:text-[var(--accent)]"
                >
                  Optimization Tools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-[var(--accent)]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[var(--accent)]"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-[var(--accent)]"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-[var(--accent)]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-[var(--accent)]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-gray-300 hover:text-[var(--accent)]"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} AlphaElemental. All rights
            reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Designed and built with passion for digital marketers.
          </p>
        </div>
      </div>
    </footer>
  );
}
