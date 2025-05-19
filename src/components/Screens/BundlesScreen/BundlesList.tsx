'use client'
import BundleCard from '@/components/BundleCard';
import { useStore } from '@/components/HOC/Context/StoreProvider'
import { ProductType } from '@/lib/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function BundlesList() {
  const { featuredProducts } = useStore();
  const [bundles, setBundles] = useState<ProductType[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    const fetchBundles = async () => {
      try {
        if (page === 1) {
          setBundles([]);
          setLoading(true);
        } else {
          setLoadingMore(true);
        }
        const { data } = await axios.get('/api/products', { params: { 
          limit: 3, 
          page,
          model: 'Bundle'
        } });
        const products: ProductType[] = await data.Data.products;

        setHasMore(data.Data.hasNextPage);
        const featuredProductsIds = featuredProducts.map(product => product.id);
        const filteredProducts = products.filter(product => !featuredProductsIds.includes(product.id));
        if (filteredProducts.length === 0 && data.Data.hasNextPage) {
          setPage(page + 1);
          return;
        }
        if (page > 1) {
          setBundles((prevProducts) => [...prevProducts, ...filteredProducts]);
        } else {
          setBundles(filteredProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };
    fetchBundles();
  }, [page, featuredProducts]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className='mt-16'>
      {bundles.length > 0 && <h2 className="text-2xl font-bold text-black mb-8">Other Bundles</h2>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {bundles.map((bundle) => (
          <BundleCard key={bundle.id} bundle={bundle}/>
        ))}
      </div>
      {!loading && hasMore && (
        <div className="flex justify-center mt-8">
          <button
            className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4A20C0] transition-colors duration-200"
            onClick={handleLoadMore}
          >
            {loadingMore ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  )
}

export default BundlesList