'use client';
import { ProductType } from '@/lib/types'
import { formatDecodedString } from '@/lib/utils'
import React from 'react'
import Link from 'next/link';
import PriceFormat from './PriceFormat';
import Image from 'next/image';
import { IMAGE_PREFIX } from '@/lib/constants';
import { useStore } from './HOC/Context/StoreProvider';
import { defaultCategories } from '@/lib/data';

function ProductCard({ product }: { product: ProductType }) {
  const { categories } = useStore();
  const category = categories.find((category) => category.id == product.category_id);
  const defaultCat = !category ? null : defaultCategories.find((c) => c.slug === category?.category_name.split(' ').join('-').trim().toLowerCase());
 
  return (
    <Link href={`/products/${product.id}?slug=${product.title.split(' ').join('-').toLowerCase()}`} key={product.id}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
        <div className="relative h-48">
          <Image
            src={product.image ? `${IMAGE_PREFIX}/${product.image}` : '/products/book.png'}
            alt={product.title}
            layout="fill"
            objectFit="cover"
          />
          {defaultCat && 
          <div className="absolute top-2 right-2 bg-white text-[var(--primary)] text-xs font-semibold px-2 py-1 rounded-full">
            {defaultCat?.tag}
          </div>
          }
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div>
            <h3 className="font-bold text-black mb-2">{product.title}</h3>
            <p className="text-gray-600 text-sm mb-2 line-clamp-4">{formatDecodedString(product.description, 200)}</p>
            <span className="text-xs text-gray-500">{product.model}</span>
          </div>
          <div className="mt-auto pt-4 flex justify-between items-end">
            <div>
              {product.discount_price ? (
                <>
                <p className="text-red-500 font-bold text-sm line-through"><PriceFormat amount={product.price}/></p>
                <p className="text-black font-bold text-xl"><PriceFormat amount={product.discount_price}/></p>
                </>
              ) :
              <span className="text-black font-bold text-xl"><PriceFormat amount={product.price}/></span>
              }
            </div>
            <button className="bg-[var(--primary)] text-white text-sm py-1 px-3 rounded hover:bg-[#4A20C0] transition-colors duration-200">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard