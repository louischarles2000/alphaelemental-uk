'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    receiveUpdates: false
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Sign up attempted with:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="lg:grid lg:grid-cols-2">
            {/* Left Column - Intro Section */}
            <div className="bg-[#F9F9F9] px-6 py-10 lg:px-12 lg:py-16">
              <div className="max-w-lg mx-auto lg:max-w-none">
                <h1 className="text-[32px] lg:text-[36px] font-bold text-[#1A1A1A] mb-4">
                  Start Your Journey
                </h1>
                <p className="text-[16px] lg:text-[18px] text-[#4D4D4D] mb-12">
                  Join thousands of people achieving their fitness goals with personalized workouts and nutrition plans.
                </p>
                
                {/* Testimonial */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-[#E5E5E5] relative overflow-hidden">
                        <Image 
                          src="/testimonials/sarah.jpg" 
                          alt="Sarah Johnson" 
                          layout="fill" 
                          objectFit="cover"
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-[16px] font-medium text-[#1A1A1A] mb-2">
                        "This program changed my life!"
                      </p>
                      <p className="text-[14px] text-[#4D4D4D] mb-1">Sarah Johnson</p>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar className="text-yellow-200" />
                        </div>
                        <span className="ml-2 text-[14px] font-medium text-[#1A1A1A]">4.9/5</span>
                      </div>
                      <p className="mt-4 text-[14px] text-[#767676]">
                        2,000+ happy members
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div className="px-6 py-10 lg:px-12 lg:py-16">
              <div className="max-w-lg mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields (Two Columns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-[14px] font-medium text-[#1A1A1A] mb-2">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter first name"
                        className="appearance-none block w-full px-4 py-3 border border-[#E5E5E5] rounded-lg text-[#4D4D4D] placeholder-[#767676] focus:outline-none focus:ring-[#5A31F4] focus:border-[#5A31F4]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-[14px] font-medium text-[#1A1A1A] mb-2">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter last name"
                        className="appearance-none block w-full px-4 py-3 border border-[#E5E5E5] rounded-lg text-[#4D4D4D] placeholder-[#767676] focus:outline-none focus:ring-[#5A31F4] focus:border-[#5A31F4]"
                      />
                    </div>
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-[14px] font-medium text-[#1A1A1A] mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="appearance-none block w-full px-4 py-3 border border-[#E5E5E5] rounded-lg text-[#4D4D4D] placeholder-[#767676] focus:outline-none focus:ring-[#5A31F4] focus:border-[#5A31F4]"
                    />
                  </div>
                  
                  {/* Phone Field (Optional) */}
                  <div>
                    <label htmlFor="phone" className="block text-[14px] font-medium text-[#1A1A1A] mb-2">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="appearance-none block w-full px-4 py-3 border border-[#E5E5E5] rounded-lg text-[#4D4D4D] placeholder-[#767676] focus:outline-none focus:ring-[#5A31F4] focus:border-[#5A31F4]"
                    />
                  </div>
                  
                  {/* Password Field */}
                  <div>
                    <label htmlFor="password" className="block text-[14px] font-medium text-[#1A1A1A] mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create password"
                        className="appearance-none block w-full px-4 py-3 border border-[#E5E5E5] rounded-lg text-[#4D4D4D] placeholder-[#767676] focus:outline-none focus:ring-[#5A31F4] focus:border-[#5A31F4]"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center px-3 text-[#767676]"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <FiEyeOff className="h-5 w-5" />
                        ) : (
                          <FiEye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {/* Confirm Password Field */}
                  <div>
                    <label htmlFor="confirmPassword" className="block text-[14px] font-medium text-[#1A1A1A] mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm password"
                        className="appearance-none block w-full px-4 py-3 border border-[#E5E5E5] rounded-lg text-[#4D4D4D] placeholder-[#767676] focus:outline-none focus:ring-[#5A31F4] focus:border-[#5A31F4]"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center px-3 text-[#767676]"
                        onClick={toggleConfirmPasswordVisibility}
                      >
                        {showConfirmPassword ? (
                          <FiEyeOff className="h-5 w-5" />
                        ) : (
                          <FiEye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {/* Checkboxes */}
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="agreeTerms"
                          name="agreeTerms"
                          type="checkbox"
                          required
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          className="focus:ring-[#5A31F4] h-4 w-4 text-[#5A31F4] border-[#E5E5E5] rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="agreeTerms" className="text-[#4D4D4D]">
                          I agree to the{' '}
                          <Link href="/terms" className="text-[#5A31F4] hover:text-[#4A21E4]">
                            Terms of Service
                          </Link>{' '}
                          and{' '}
                          <Link href="/privacy" className="text-[#5A31F4] hover:text-[#4A21E4]">
                            Privacy Policy
                          </Link>
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="receiveUpdates"
                          name="receiveUpdates"
                          type="checkbox"
                          checked={formData.receiveUpdates}
                          onChange={handleChange}
                          className="focus:ring-[#5A31F4] h-4 w-4 text-[#5A31F4] border-[#E5E5E5] rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="receiveUpdates" className="text-[#4D4D4D]">
                          I want to receive updates about products and services via email
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-[16px] font-medium text-white bg-[#5A31F4] hover:bg-[#4A21E4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5A31F4] transition-colors duration-200"
                    >
                      Sign Up
                    </button>
                  </div>
                  
                  {/* Login Link */}
                  <div className="text-center pt-2">
                    <p className="text-[14px] text-[#4D4D4D]">
                      Already have an account?{' '}
                      <Link href="/login" className="font-medium text-[#5A31F4] hover:text-[#4A21E4]">
                        Sign In
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
