import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { ProductType } from "@/lib/types";
import axios from "axios";
import { Metadata } from "next";
import { formatDecodedString } from "@/lib/utils";
import { IMAGE_PREFIX } from "@/lib/constants";
import { notFound } from "next/navigation";
import SavingFormat from "@/components/SavingFormat";
import PriceFormat from "@/components/PriceFormat";
import ProductReviews from "@/components/Screens/ProductsScreen/ProductReviews";
import BundleProducts from "@/components/Screens/BundlesScreen/BundleProducts";
import sanitizeHtml from 'sanitize-html';
import parse from 'html-react-parser';
import { decode } from 'html-entities';
import RelatedBundles from "@/components/Screens/BundlesScreen/RelatedBundles";
import { cache } from "react";

export async function generateStaticParams() {
  // Fetch all product slugs from the API
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL!}/product/static/slugs`, { params: { limit: 1000 } });
  if (!response.data || !Array.isArray(response.data.slugs)) {
    return [];
  }

  // Map slugs to the format Next.js expects
  return response.data.slugs;
}

const fetchBundle = cache(async (slug: string): Promise<ProductType | null> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_WEBSITE_URL!}/api/products/slug/${slug}`);
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
  const { slug } = await params;

  if (!slug) {
    return {
      title: 'Bundle Not Found',
      description: 'Bundle details not available.',
    };
  }

  const product = await fetchBundle(slug);

  if (!product) {
    return {
      title: 'Bundle Not Found',
      description: 'Bundle details not available.',
    };
  }

  return {
    title: formatDecodedString(product.meta_title ?? product.title),
    description: product.meta_description ? formatDecodedString(product.meta_description) : formatDecodedString(product.description, 300),
    keywords: product.meta_keywords ? formatDecodedString(product.meta_keywords) : product.tags,
    openGraph: {
      title: formatDecodedString(product.meta_title ?? product.title),
      description: product.meta_description ? formatDecodedString(product.meta_description) : formatDecodedString(product.description, 300),
      images: [`${IMAGE_PREFIX}/${product.image}`], // Use the product image URL
    },
    // Add other relevant metadata here
  };
}

export default async function BundleDetail({ params }: { params: Promise<{ slug: string }> }) {
  // Find the product based on the id
  const { slug } = await params;
  if (!slug) {
    notFound();
  }
  const bundle = await fetchBundle(slug);
  
  // If bundle not found, return a 404 page
  if (!bundle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Bundle not found</h1>
          <p className="mt-4 text-gray-600">{`The bundle you're looking for doesn't exist or has been removed.`}</p>
          <Link href="/bundles" className="mt-6 inline-block bg-[var(--primary)] text-white px-6 py-3 rounded-lg">
            Return to Bundles
          </Link>
        </div>
      </div>
    );
  }

  // Calculate the total value of included products
  const totalValue = bundle.discount_price ? bundle.discount_price : bundle.price;
  const decodedDescription = decode(bundle!.description);
  const clean = sanitizeHtml(decodedDescription, {
    allowedTags: false,
    allowedAttributes: false,
    allowVulnerableTags: true
  });
  const content = parse(clean);

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
              <Link href="/bundles" className="hover:text-[var(--primary)]">Bundles</Link>
              <span className="mx-2">/</span>
              <span className="text-[var(--primary)]">{bundle.title}</span>
            </div>
          </div>
          
          {/* Bundle Details Section */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="md:flex">
              {/* Bundle Image */}
              <div className="md:w-1/2 relative h-72 md:h-auto">
                <Image
                  src={bundle.image ? `${IMAGE_PREFIX}/${bundle.image}` : '/bundles/bundles.jpg'}
                  alt={bundle.title}
                  layout="fill"
                  objectFit="cover"
                  className="md:absolute md:inset-0"
                />
                <div className="absolute top-4 right-4 bg-[var(--accent)] px-2 py-1 rounded-full text-black text-xs">
                 Save <SavingFormat plain discount_price={bundle.discount_price || bundle.price} price={bundle.price}/>
                </div>
              </div>
              
              {/* Bundle Info */}
              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold text-black mb-4">{bundle.title}</h1>
                <p className="text-gray-600 mb-6">{bundle.meta_description}</p>
                
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="flex items-center mb-4">
                    <span className="text-gray-500 line-through text-lg"><PriceFormat amount={bundle.price}/></span>
                    <span className="text-3xl font-bold text-black ml-3"><PriceFormat amount={bundle.discount_price || bundle.price}/></span>
                    <SavingFormat discount_price={bundle.discount_price || bundle.price} price={bundle.price}/>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-6">
                    Total value: <span><PriceFormat amount={totalValue} /></span> - You save <span><SavingFormat discount_price={bundle.discount_price || bundle.price} price={bundle.price} plain/></span>
                  </p>
                  
                  <Link
                    href={`${process.env.NEXT_PUBLIC_OPENCART_SHOP}&product_id=${slug}`}
                    className="flex w-full justify-end self-end cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full bg-[var(--primary)] hover:bg-[#4A20C0] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center cursor-pointer">
                      Purchase Bundle Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Included Products Section */}
          <BundleProducts productId={bundle.id} />

          {/* Description Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-black mb-8">Description</h2>
            <div className="prose max-w-none text-black">
              {content}
            </div>
          </div>
          
          {/* Testimonials Section */}
          <ProductReviews productId={bundle.id}/>
          
          {/* Related Bundles Section */}
          <RelatedBundles exceptBundleId={bundle.id}/>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 