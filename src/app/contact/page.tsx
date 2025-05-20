/* eslint-disable react/no-unescaped-entities */
"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What format are your products delivered in?",
      answer: "All our resources are delivered digitally in PDF, audio, or video format, depending on the product. You'll receive instant access after purchase."
    },
    {
      question: "Can I upgrade to a bundle after purchasing individual products?",
      answer: "Yes! Contact us with your order information, and we'll apply the value of your previous purchases toward a bundle upgrade."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes. We offer a 30-day satisfaction guarantee on all purchases. If you're not completely satisfied, contact us for a full refund."
    },
    {
      question: "Are your resources suitable for beginners?",
      answer: "Most of our resources are designed for marketing professionals with some experience, but many include fundamentals that make them accessible to beginners as well."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-black mb-4">Contact Us</h1>
            <h2 className="text-2xl font-medium text-gray-800 mb-6">We're Here to Help</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Have questions about our products or need help choosing the right resources for your business? 
              Our team is ready to assist.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-black mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="johndoe@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[var(--primary)] text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                <h2 className="text-2xl font-bold text-black mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-black">Email</h3>
                      <p className="text-gray-700">support@alphaelemental.com</p>
                      <p className="text-gray-700">Response Time: Within 24 hours (Monday-Friday)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-black mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button 
                        onClick={() => toggleFaq(index)}
                        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                      >
                        <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-5 w-5 text-gray-500 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openFaq === index && (
                        <div className="p-4 bg-white">
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 