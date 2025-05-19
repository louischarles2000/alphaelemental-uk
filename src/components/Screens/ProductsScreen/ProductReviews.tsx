'use client'
import { ReviewType } from '@/lib/types'
import axios from 'axios'

import React, { useEffect, useState } from 'react'



function ProductReviews({ productId }: { productId: number }) {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviews = await axios.get("/api/reviews", { params: { limit: 3, rating: 5, product_id: productId } });
        setReviews(reviews.data.Data.reviews);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, [productId]);

  if (loading) {
    return null;
  }

  if (reviews.length === 0 || loading) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-black mb-8">What Our Customers Say</h2>
      <div className="grid grid-cols-1 gap-6">
        {reviews.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-700 italic mb-4">{`"${testimonial.text}"`}</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] font-bold">
                {testimonial.author.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="font-medium text-black">{testimonial.author}</p>
                {/* <p className="text-gray-500 text-sm">{testimonial.company}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductReviews