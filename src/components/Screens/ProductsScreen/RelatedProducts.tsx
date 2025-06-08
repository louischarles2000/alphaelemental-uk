'use client'
import PriceFormat from '@/components/PriceFormat'
import { IMAGE_PREFIX } from '@/lib/constants'
import { ProductType } from '@/lib/types'
import { formatDecodedString } from '@/lib/utils'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function RelatedProducts({ productId }: { productId: number }) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/products/related/${productId}`, { params: { limit: 3, exclude_models: 'Bundle' } });
        const products = data.Data.products;
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [productId]);

  if (loading) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-black mb-8">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((relatedProduct) => (
            <Link href={`/products/${relatedProduct.slug}`} key={relatedProduct.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={relatedProduct.image ? `${IMAGE_PREFIX}/${relatedProduct.image}` : '/products/book.png'}
                    alt={relatedProduct.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div>
                    <h3 className="font-bold text-black mb-2">{relatedProduct.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{formatDecodedString(relatedProduct.description, 200)}</p>
                  </div>
                  <div className="mt-auto pt-4 flex justify-between items-center">
                    {relatedProduct.discount_price ? (
                      <div>
                        <p className="text-gray-600 line-through text-sm"><PriceFormat amount={relatedProduct.price}/></p>
                        <p className="text-black font-bold text-2xl"><PriceFormat amount={relatedProduct.discount_price}/></p>
                      </div>
                    ) : (
                      <span className="text-black font-bold text-2xl"><PriceFormat amount={relatedProduct.price}/></span>
                    )}
                    <span className="text-[var(--primary)] text-sm font-medium">
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default RelatedProducts