import { IMAGE_PREFIX } from '@/lib/constants'
import { ProductType } from '@/lib/types'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import SavingFormat from './SavingFormat'
import { formatDecodedString } from '@/lib/utils'
import PriceFormat from './PriceFormat'
import Link from 'next/link'
import axios from 'axios'

function BundleCard({ bundle, simple }: { bundle: ProductType, simple?: boolean }) {
  const [relatedProducts, setRelatedProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    if (simple) {
      setRelatedProducts([]);
      setTotalProducts(0);
      return;
    }
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/products/related/${bundle.id}`, { params: { limit: 3, exclude_models: 'Bundle' } });
        console.log('related products:', data);
        const products = data.Data.products;
        setRelatedProducts(products);
        setTotalProducts(data.Data.total);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [bundle, simple]);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={bundle.image ? `${IMAGE_PREFIX}/${bundle.image}` : '/bundles/bundles.jpg'}
          alt={bundle.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <SavingFormat price={bundle.price} discount_price={bundle.discount_price}/>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-black">{bundle.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{formatDecodedString(bundle.description, 200)}</p>
        
        {!loading && relatedProducts.length > 0 && 
        <div className="mb-4">
          <ul className="space-y-1">
            {relatedProducts.map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature.title}</span>
              </li>
            ))}
            {totalProducts > 0 && totalProducts > 3 && (
              <li className="text-sm text-black ml-7">+ {totalProducts - 3} more</li>
            )}
          </ul>
        </div>}
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-gray-500 line-through text-sm"><PriceFormat amount={bundle.price}/></span>
            <span className="text-black font-bold text-2xl ml-2"><PriceFormat amount={bundle.discount_price || bundle.price}/></span>
          </div>
        </div>
        
        <Link href={`/bundles/${bundle.id}?slug=${bundle.title.split(' ').join('-').toLowerCase()}`} className="block w-full bg-[var(--primary)] hover:bg-[#4A20C0] text-white text-center py-2 rounded-lg font-medium transition-colors duration-200">
          View Bundle
        </Link>
      </div>
    </div>
  )
}

export default BundleCard