'use client';
import { ProductType } from '@/lib/types'
import { formatDecodedString } from '@/lib/utils'
import React from 'react'
import Link from 'next/link';
import PriceFormat from './PriceFormat';

function SimpleProductCard({ product }: { product: ProductType }) {

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="font-bold text-lg text-black mb-2">{formatDecodedString(product.title)}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{formatDecodedString(product.description, 200)}</p>
      
      <div className="flex items-center justify-between">
        <div>
          {product.discount_price && (
            <>
              <span className="text-red-500 font-bold text-sm line-through"><PriceFormat amount={product.price}/></span>
              <span className="text-black font-bold text-xl ml-2"><PriceFormat amount={product.discount_price}/></span>
            </>
          )}
          {!product.discount_price && <span className="text-black font-bold text-xl"><PriceFormat amount={product.price}/></span>}
        </div>
        <div className="flex space-x-2">
          <Link
            href={`/products/${product.slug}`} 
            className="bg-white border border-[var(--primary)] text-[var(--primary)] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[var(--primary)]/5 transition-colors duration-200"
          >
            View Details
          </Link>
          {/* <button 
            className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4A20C0] transition-colors duration-200"
          >
            Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default SimpleProductCard