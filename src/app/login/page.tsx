'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <main className="flex items-center justify-center px-4 py-16 sm:px-6 sm:py-24 w-full">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-8 sm:px-8 sm:py-10">
              <div className="text-center mb-8">
                <h1 className="text-[28px] font-bold text-[#1A1A1A] mb-2">Welcome back</h1>
                <p className="text-[16px] text-[#767676]">Sign in to continue your fitness journey</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="appearance-none block w-full px-4 py-3 border border-[#E5E5E5] rounded-lg text-[#4D4D4D] placeholder-[#767676] focus:outline-none focus:ring-[#5A31F4] focus:border-[#5A31F4]"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-[14px] font-medium text-[#1A1A1A] mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
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

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-[16px] font-medium text-white bg-[#5A31F4] hover:bg-[#4A21E4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5A31F4] transition-colors duration-200"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-[14px] text-[#4D4D4D]">
                  Don't have an account?{' '}
                  <Link href="/signup" className="font-medium text-[#5A31F4] hover:text-[#4A21E4]">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
