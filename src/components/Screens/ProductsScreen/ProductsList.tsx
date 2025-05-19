'use client'
import { useStore } from '@/components/HOC/Context/StoreProvider';
import Loading from '@/components/Loading';
import ProductCard from '@/components/ProductCard';
import { CategoryType, ProductType } from '@/lib/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const allCategoriesOption: CategoryType = {
  id: 0,
  category_name: 'All Categories',
  description: '',
  image: '',
  tags: [],
  meta_description: '',
  meta_title: '',
  meta_keywords: '',
  slug: '',
  total_products: 0
}

function ProductsList() {
  const { categories } = useStore();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [ categoryId, setCategoryId ] = useState<number>(0);
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
        const { data } = await axios.get('/api/products', { params: { 
          category: categoryId > 0 ? categoryId : null,
          limit: 8, 
          page 
        } });
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
    <div>
      {/* Filters */}
      <div className="mb-10 flex flex-wrap gap-2">
        {[allCategoriesOption, ...categories].map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium 
              ${category.id === categoryId 
                ? 'bg-[var(--primary)] text-white' 
                : 'bg-white text-black border border-gray-200 hover:border-[var(--primary)] hover:text-[var(--primary)]'
              } transition-colors duration-200`}
            onClick={() => {
              setCategoryId(category.id);
              setPage(1);
            }}
          >
            {category.category_name}
          </button>
        ))}
      </div>
      
      {loading && <Loading />}
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
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

export default ProductsList