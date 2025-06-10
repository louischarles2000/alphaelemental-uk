import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { ProductType } from "@/lib/types";
import axios from "axios";
import { notFound } from "next/navigation";
import { IMAGE_PREFIX } from "@/lib/constants";
import sanitizeHtml from 'sanitize-html';
import parse from 'html-react-parser';
import { decode } from 'html-entities';
import PriceFormat from "@/components/PriceFormat";
import RelatedProducts from "@/components/Screens/ProductsScreen/RelatedProducts";
import ProductReviews from "@/components/Screens/ProductsScreen/ProductReviews";
import { formatDecodedString } from "@/lib/utils";
import { Metadata } from "next";
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

const fetchProduct = cache(async (slug: string): Promise<ProductType | null> => {
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
      title: 'Product Not Found',
      description: 'Product details not available.',
    };
  }

  const product = await fetchProduct(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'Product details not available.',
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

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  // Find the product based on the id
  const { slug } = await params;
  if (!slug) {
    notFound();
  }
  const product = await fetchProduct(slug);
  
  // If product not found, you could return a 404 page or some fallback content
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Product not found</h1>
          <p className="mt-4 text-gray-600">{`The product you're looking for doesn't exist or has been removed.`}</p>
          <Link href="/products" className="mt-6 inline-block bg-[var(--primary)] text-white px-6 py-3 rounded-lg">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  const decodedDescription = decode(product!.description);
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
              <Link href="/products" className="hover:text-[var(--primary)]">Products</Link>
              <span className="mx-2">/</span>
              <span className="text-[var(--primary)]">{product.title}</span>
            </div>
          </div>
          
          {/* Product Details Section */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="md:flex">
              {/* Product Image */}
              <div className="md:w-1/2 relative h-72 md:h-auto">
                <Image
                  src={product.image ? `${IMAGE_PREFIX}/${product.image}` : '/products/book.png'}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="md:absolute md:inset-0"
                />
              </div>
              
              {/* Product Info */}
              <div className="md:w-1/2 p-8">
                <div className="mb-2">
                  <span className="inline-block bg-[var(--accent)]/20 text-[var(--primary)] text-xs font-medium px-2.5 py-1 rounded">
                    {product.category_name}
                  </span>
                  <span className="ml-2 inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded">
                    {product.model}
                  </span>
                </div>
                
                <h1 className="text-3xl font-bold text-black mb-4">{product.title}</h1>
                <p className="text-gray-600 mb-6">{product.meta_description}</p>
                
                {/* <div className="mb-8">
                  <h3 className="text-lg font-semibold text-black mb-4">{`What's Included:`}</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FiCheckCircle className="h-5 w-5 text-[var(--accent)] mr-2 flex-shrink-0" />
                        <span className="text-black">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}
                
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="flex items-center justify-between mb-6">
                   <div>
                     {product.discount_price ? (
                        <>
                        <p className="text-red-500 text-md line-through"><PriceFormat amount={product.price} /></p>
                        <p className="text-3xl font-bold text-black"><PriceFormat amount={product.discount_price} /></p>
                        </>
                      ) : (
                        <span className="text-3xl font-bold text-black"><PriceFormat amount={product.price} /></span>
                      )}
                    </div>

                    <Link
                      href={`${process.env.NEXT_PUBLIC_OPENCART_SHOP}&product_id=${product.id}`}
                      className="flex w-full justify-end self-end cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-[var(--primary)] hover:bg-[#4A20C0] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center">
                        Purchase Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-5 px-5">
            <h3 className="text-xl font-bold mb-6 mt-8 text-black">Description</h3>
            <div className="text-black mb-4 w-full break-words whitespace-normal">
              {content}
            </div>
          </div>
          
          {/* Testimonials Section */}
          <ProductReviews productId={product.id}/>
          
          {/* Related Products  */}
          <RelatedProducts productId={product.id} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 