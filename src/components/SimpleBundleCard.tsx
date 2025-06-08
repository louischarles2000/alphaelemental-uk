'use client';
import { ProductType } from '@/lib/types'
import { formatDecodedString } from '@/lib/utils'
import React from 'react'
import Link from 'next/link';
import PriceFormat from './PriceFormat';
import SavingFormat from './SavingFormat';

function SimpleBundleCard({ bundle }: { bundle: ProductType }) {
  return (
    <div className="bg-white w-full p-8 rounded-xl shadow-md border-2 border-[var(--accent)] mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-black mb-2">{bundle.title}</h2>
          <p className="text-gray-600 mb-4 line-clamp-1">{formatDecodedString(bundle.meta_description!, 100)}</p>
          <p className="text-gray-600 line-clamp-2 w-full break-words">{formatDecodedString(bundle.description, 200)}</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <div className="flex items-center mb-2">
            <span className="text-gray-500 line-through text-sm mr-2"><PriceFormat amount={bundle.price}/></span>
          <span className="text-black font-bold text-2xl"><PriceFormat amount={bundle.discount_price || bundle.price}/></span>
          </div>
          <SavingFormat price={bundle.price} discount_price={bundle.discount_price}/>
          <Link 
            href={`/bundles/${bundle.slug}`} 
            className="w-full md:w-auto bg-[var(--accent)] text-black px-6 py-3 rounded-lg font-medium hover:bg-[var(--accent)]/90 transition-colors duration-200 text-center"
          >
            Buy This Bundle
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SimpleBundleCard