import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      title: "Landing Page Persuasion - Ebook",
      description: "The complete guide to creating high-converting landing pages",
      price: 80,
      format: "PDF Ebook",
      image: "/products/book.jpg",
      category: "Landing Page Resources",
      slug: "landing-page-persuasion-ebook"
    },
    {
      id: 2,
      title: "Email Sequence Generator",
      description: "AI-powered tool to create nurture sequences that convert",
      price: 120,
      format: "Interactive Tool",
      image: "/products/book.jpg",
      category: "Email Marketing Resources",
      slug: "email-sequence-generator"
    },
    {
      id: 3,
      title: "Sales Funnel Blueprint",
      description: "Step-by-step guide to building profitable sales funnels",
      price: 150,
      format: "PDF + Spreadsheet",
      image: "/products/book.jpg",
      category: "Sales Funnel Systems",
      slug: "sales-funnel-blueprint"
    },
    {
      id: 4,
      title: "Headline Formulas That Convert",
      description: "50+ proven headline templates for any industry",
      price: 45,
      format: "PDF Guide",
      image: "/products/book.jpg",
      category: "Landing Page Resources",
      slug: "headline-formulas"
    },
    {
      id: 5,
      title: "Analytics Dashboard Templates",
      description: "Ready-to-use dashboards to track your marketing performance",
      price: 65,
      format: "Spreadsheet Templates",
      image: "/products/book.jpg",
      category: "Marketing Optimization",
      slug: "analytics-dashboard-templates"
    },
    {
      id: 6,
      title: "Customer Acquisition System",
      description: "Complete framework for attracting and converting leads",
      price: 95,
      format: "PDF + Templates",
      image: "/products/book.jpg",
      category: "Sales Funnel Systems",
      slug: "customer-acquisition-system"
    },
    {
      id: 7,
      title: "Email Subject Line Swipe File",
      description: "200+ high-converting subject lines with explanations",
      price: 35,
      format: "PDF Guide",
      image: "/products/book.jpg",
      category: "Email Marketing Resources",
      slug: "email-subject-lines"
    },
    {
      id: 8,
      title: "Conversion Rate Optimization Tool",
      description: "Interactive calculator and checklist for CRO",
      price: 75,
      format: "Interactive Tool",
      image: "/products/book.jpg",
      category: "Marketing Optimization",
      slug: "conversion-rate-optimization"
    }
  ];

  const categories = [
    "All Categories",
    "Landing Page Resources",
    "Email Marketing Resources",
    "Sales Funnel Systems",
    "Marketing Optimization"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-black mb-4">All Products</h1>
            <p className="text-gray-600 max-w-3xl">
              Browse our complete collection of digital marketing resources designed to help you convert more visitors into paying customers.
            </p>
          </div>
          
          {/* Filters */}
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium 
                  ${index === 0 
                    ? 'bg-[var(--primary)] text-white' 
                    : 'bg-white text-black border border-gray-200 hover:border-[var(--primary)] hover:text-[var(--primary)]'
                  } transition-colors duration-200`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute top-2 right-2 bg-white text-[var(--primary)] text-xs font-semibold px-2 py-1 rounded-full">
                      {product.category.split(' ')[0]}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div>
                      <h3 className="font-bold text-black mb-2">{product.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                      <span className="text-xs text-gray-500">{product.format}</span>
                    </div>
                    <div className="mt-auto pt-4 flex justify-between items-center">
                      <span className="font-bold text-black">€{product.price}</span>
                      <button className="bg-[var(--primary)] text-white text-sm py-1 px-3 rounded hover:bg-[#4A20C0] transition-colors duration-200">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 