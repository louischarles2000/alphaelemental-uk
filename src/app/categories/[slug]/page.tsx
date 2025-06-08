import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import axios from "axios";
import { notFound } from "next/navigation";
import { CategoryType } from "@/lib/types";
import { IMAGE_PREFIX } from "@/lib/constants";
import { formatDecodedString } from "@/lib/utils";
import CategoryProducts from "@/components/Screens/CategoryDetailsScreen/CategoryProducts";
import CategoryBundles from "@/components/Screens/CategoryDetailsScreen/CategoryBundles";
import { defaultCategories } from "@/lib/data";
import OtherCategories from "@/components/Screens/CategoryDetailsScreen/OtherCategories";
import { Metadata } from "next";
import { cache } from "react";

export async function generateStaticParams() {
  // Fetch all product slugs from the API
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL!}/category/static/slugs`);
  if (!response.data || !Array.isArray(response.data.slugs)) {
    return [];
  }

  // Map slugs to the format Next.js expects
  return response.data.slugs;
}

const fetchCategory = cache(async (slug: string): Promise<CategoryType | null> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_WEBSITE_URL!}/api/categories/slug/${slug}`);
    return response.data.Data;
  } catch (error) {
    if (error) return null;
    return null;
  }
});

// Function to generate metadata
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const {slug } = await params;

  if (!slug) {
    return {
      title: 'Category Not Found',
      description: 'Category details not available.',
    };
  }

  const category = await fetchCategory(slug);

  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'Category details not available.',
    };
  }

  return {
    title: formatDecodedString(category.meta_title ?? category.category_name),
    description: category.meta_description ? formatDecodedString(category.meta_description) : formatDecodedString(category.description, 300),
    keywords: category.meta_keywords ? formatDecodedString(category.meta_keywords) : category.tags,
    openGraph: {
      title: formatDecodedString(category.meta_title ?? category.category_name),
      description: category.meta_description ? formatDecodedString(category.meta_description) : formatDecodedString(category.description, 300),
      images: [`${IMAGE_PREFIX}/${category.image}`], // Use the product image URL
    },
    // Add other relevant metadata here
  };
}

export default async function CategoryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }
  // Find the category based on the slug
  const category = await fetchCategory(slug);
  
  // If category not found, return a 404 page
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Category not found</h1>
          <p className="mt-4 text-gray-600">{`The category you're looking for doesn't exist or has been removed.`}</p>
          <Link href="/categories" className="mt-6 inline-block bg-[var(--primary)] text-white px-6 py-3 rounded-lg">
            Return to Categories
          </Link>
        </div>
      </div>
    );
  }
  const categoryDetails = defaultCategories.find((c) => c.slug === category!.category_name.split(' ').join('-').trim().toLowerCase());

  // Get related categories info

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-500">
              <Link href="/" className="hover:text-[var(--primary)]">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/categories" className="hover:text-[var(--primary)]">Categories</Link>
              <span className="mx-2">/</span>
              <span className="text-[var(--primary)]">{category.category_name}</span>
            </div>
          </div>
          
          {/* Category Hero Section */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-16">
            <div className="relative h-64">
              <Image
                src={category.image ? `${IMAGE_PREFIX}/${category.image}` : '/categories/marketing.jpg'}
                alt={category.category_name}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{category.category_name}</h1>
                <p className="text-white/90 text-lg max-w-2xl">{formatDecodedString(category.description)}</p>
              </div>
            </div>
          </div>
          
          {/* Why These Resources Work Section */}
          <div className="mb-16">
            {/* <h2 className="text-2xl font-bold text-black mb-6">{category.headline}</h2> */}

            <h2 className="text-2xl font-bold text-black mb-6">Why These Resources Work</h2>
            <p className="text-gray-600 mb-8">
              Our {category.category_name.toLowerCase()} are designed to help you:
            </p>
            
            <ul className="space-y-3">
              {categoryDetails && categoryDetails.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-3 bg-[var(--primary)]/10 rounded-full text-[var(--primary)] font-bold flex-shrink-0">•</span>
                  <span className="text-black">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Individual Products Section */}
          <CategoryProducts categoryId={category.id}/>
          
          {/* Bundles Section */}
          <CategoryBundles categoryId={category.id}/>
          
          {/* Related Categories Section */}
          <OtherCategories categoryId={category.id}/>
          
          {/* Browse All Products Button */}
          <div className="text-center">
            <Link 
              href="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-[var(--primary)] hover:bg-[#4A20C0] transform hover:scale-105 transition-all duration-200"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 