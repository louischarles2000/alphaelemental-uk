import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CategoriesPage() {
  const categories = [
    {
      id: 1,
      title: "Landing Page Resources",
      description: "Convert more visitors with our landing page toolkits",
      longDescription: "Transform your website visitors into leads and customers with our comprehensive landing page resources. Includes templates, formulas, and optimization guides.",
      image: "/categories/marketing.jpg",
      productCount: 12,
      slug: "landing-page-resources"
    },
    {
      id: 2,
      title: "Email Marketing Resources",
      description: "Build relationships and drive sales with proven email strategies",
      longDescription: "Nurture leads and drive conversions with our email marketing resources. Includes sequence templates, subject line swipe files, and automation guides.",
      image: "/categories/marketing.jpg",
      productCount: 9,
      slug: "email-marketing-resources"
    },
    {
      id: 3,
      title: "Sales Funnel Systems",
      description: "Complete systems to nurture leads into paying customers",
      longDescription: "Guide prospects through the customer journey with our complete sales funnel systems. Includes blueprints, scripts, and optimization strategies.",
      image: "/categories/marketing.jpg",
      productCount: 8,
      slug: "sales-funnel-systems"
    },
    {
      id: 4,
      title: "Marketing Optimization",
      description: "Improve conversion rates and maximize ROI",
      longDescription: "Maximize your marketing ROI with our optimization resources. Includes analytics tools, testing frameworks, and conversion rate optimization guides.",
      image: "/categories/marketing.jpg",
      productCount: 11,
      slug: "marketing-optimization"
    },
    {
      id: 5,
      title: "Digital Analytics",
      description: "Measure success and make data-driven decisions",
      longDescription: "Make data-driven marketing decisions with our analytics resources. Includes dashboard templates, KPI frameworks, and tracking systems.",
      image: "/categories/marketing.jpg",
      productCount: 7,
      slug: "digital-analytics"
    },
    {
      id: 6,
      title: "Content Creation",
      description: "Develop engaging content that converts",
      longDescription: "Create compelling content that drives engagement and conversions. Includes templates, frameworks, and optimization guides for various content types.",
      image: "/categories/marketing.jpg",
      productCount: 10,
      slug: "content-creation"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-black mb-4">Resource Categories</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse our marketing resources by category to find exactly what you need to improve your marketing results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Link href={`/categories/${category.slug}`} key={category.id}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-64">
                    <Image
                      src={category.image}
                      alt={category.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-2xl font-bold text-white mb-2">{category.title}</h2>
                      <p className="text-white/80 mb-2">{category.description}</p>
                      <span className="text-[var(--accent)] text-sm font-medium">
                        {category.productCount} resources
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{category.longDescription}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[var(--primary)] font-medium flex items-center">
                        Explore Category
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-black mb-3">Not Sure Where to Start?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                If you're not sure which category is right for you, try one of our curated bundles for specific marketing goals.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Link
                href="/bundles"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-[var(--primary)] hover:bg-[#4A20C0] transform hover:scale-105 transition-all duration-200 mr-4"
              >
                Browse Bundles
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-[var(--primary)] text-base font-medium rounded-full text-[var(--primary)] bg-transparent hover:bg-[var(--primary)]/5 transform hover:scale-105 transition-all duration-200"
              >
                Get Personalized Help
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 