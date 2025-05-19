'use client';
import SimpleBundleCard from '@/components/SimpleBundleCard';
import { ProductType } from '@/lib/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function CategoryBundles({ categoryId }: { categoryId: number }) {
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
        const { data } = await axios.get('/api/products', { params: { category: categoryId, limit: 3, page, model: 'Bundle' } });
        const products = await data.Data.products;

        setHasMore(data.Data.hasNextPage);
        if (page > 1) {
          setBundles((prevProducts) => [...prevProducts, ...products]);
        } else {
          setBundles(products);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };
    fetchBundles();
  }, [categoryId, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="mb-16">
      <div className="space-y-3">
        {bundles.map((bundle) => (
          <SimpleBundleCard bundle={bundle} key={bundle.id}/>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {hasMore && !loading && (
          <button 
            className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4A20C0] transition-colors duration-200"
            onClick={handleLoadMore}
          >
            {loadingMore ? 'Loading...' : 'More Bundles'}
          </button>
        )}
      </div>
    </div>
  )
}

export default CategoryBundles