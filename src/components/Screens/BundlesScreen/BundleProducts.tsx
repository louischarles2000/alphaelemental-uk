'use client'
import PriceFormat from '@/components/PriceFormat'
import { ProductType } from '@/lib/types'
import { formatDecodedString } from '@/lib/utils'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function BundleProducts({ productId }: { productId: number }) {
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
      <h2 className="text-2xl font-bold text-black mb-8">Products Included in This Bundle</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-black mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{formatDecodedString(product.meta_description || product.description, 200)}</p>
              </div>
              <span className="text-black font-semibold"><PriceFormat amount={product.price} /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BundleProducts