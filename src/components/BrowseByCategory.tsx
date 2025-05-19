'use client'
import Image from "next/image";
import Link from "next/link";
import { useStore } from "./HOC/Context/StoreProvider";
import { IMAGE_PREFIX } from "@/lib/constants";
import { formatDecodedString } from "@/lib/utils";

export default function BrowseByCategory() {
  const { categories, loading } = useStore();

  if (loading) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link href={`/categories/${category.id}?slug=${category.category_name.split(' ').join('-').trim().toLowerCase()}`} key={category.id}>
          <div className="bg-white rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 relative">
            <div className="h-56 w-full relative">
              <Image
                src={category.image ? `${IMAGE_PREFIX}/${category.image}` : '/categories/marketing.jpg'}
                alt={category.category_name}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-black">{category.category_name}</h3>
              <p className="text-sm text-gray-600 line-clamp-3">{formatDecodedString(formatDecodedString(category.description))}</p>
              <div className="mt-4">
                <span className="text-[var(--primary)] text-sm font-medium flex items-center">
                  View Category
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 