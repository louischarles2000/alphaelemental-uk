'use client';
import Loading from '@/components/Loading';
import SimpleProductCard from '@/components/SimpleProductCard';
import { ProductType } from '@/lib/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function CategoryProducts({ categoryId }: { categoryId: number }) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (page === 1) {
          setProducts([]);
          setLoading(true);
        } else {
          setLoadingMore(true);
        }
        const { data } = await axios.get('/api/products', { params: { category: categoryId, limit: 6, page, exclude_models: 'Bundle' } });
        const products = await data.Data.products;

        setHasMore(data.Data.hasNextPage);
        if (page > 1) {
          setProducts((prevProducts) => [...prevProducts, ...products]);
        } else {
          setProducts(products);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };
    fetchProducts();
  }, [categoryId, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-black mb-8">Individual Products</h2>
      {!loading && products.length === 0 && <p className="text-gray-600">No products found in this category.</p>}
      {loading && <Loading />}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {products.map((product) => (
          <SimpleProductCard product={product} key={product.id}/>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {hasMore && !loading && (
          <button 
            className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4A20C0] transition-colors duration-200"
            onClick={handleLoadMore}
          >
            {loadingMore ? 'Loading...' : 'Load More'}
          </button>
        )}
      </div>
    </div>
  )
}

export default CategoryProducts