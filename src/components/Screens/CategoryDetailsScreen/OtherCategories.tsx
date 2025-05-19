'use client'
import { useStore } from '@/components/HOC/Context/StoreProvider';
import { IMAGE_PREFIX } from '@/lib/constants';
import { formatDecodedString } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function OtherCategories({ categoryId }: { categoryId: number }) {
  const { categories } = useStore();

  return (
   <div className="mb-16">
      <h2 className="text-2xl font-bold text-black mb-8">Related Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.filter((category) => category.id !== categoryId).splice(0, 3).map((relatedCategory) => (
          <Link href={`/categories/${relatedCategory.slug}`} key={relatedCategory.id}>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
              <div className="relative h-48">
                <Image
                  src={relatedCategory.image ? `${IMAGE_PREFIX}/${relatedCategory.image}` : '/categories/marketing.jpg'}
                  alt={relatedCategory.category_name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-1">{relatedCategory.category_name}</h3>
                  <p className="text-white/80 text-sm">{formatDecodedString(relatedCategory.description)}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default OtherCategories