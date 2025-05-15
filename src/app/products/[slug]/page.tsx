import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { FiCheckCircle } from "react-icons/fi";

// In a real app, you would fetch this data from an API or database
// For this demo, we'll include the products array directly
const products = [
  {
    id: 1,
    title: "Landing Page Persuasion - Ebook",
    description: "The complete guide to creating high-converting landing pages",
    price: 80,
    format: "PDF Ebook",
    image: "/products/book.jpg",
    category: "Landing Page Resources",
    slug: "landing-page-persuasion-ebook",
    fullDescription: "This comprehensive ebook contains everything you need to know about creating landing pages that convert visitors into customers. Learn the psychological triggers, layout principles, and copywriting formulas that make visitors take action.",
    features: [
      "40+ proven landing page templates",
      "Copywriting formulas for headlines and CTAs",
      "Psychological principles of persuasion",
      "Case studies of high-converting pages",
      "A/B testing methodology and examples"
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        company: "Marketing Director, TechFlow",
        quote: "This ebook transformed our approach to landing pages. Our conversion rate increased by 37% in just two weeks!"
      }
    ]
  },
  {
    id: 2,
    title: "Email Sequence Generator",
    description: "AI-powered tool to create nurture sequences that convert",
    price: 120,
    format: "Interactive Tool",
    image: "/products/book.jpg",
    category: "Email Marketing Resources",
    slug: "email-sequence-generator",
    fullDescription: "Our AI-powered Email Sequence Generator helps you create effective email nurture campaigns without the guesswork. Input your audience, goals, and product details, and get a complete sequence mapped out with email templates ready to customize.",
    features: [
      "AI-powered email sequence creation",
      "20+ proven sequence structures",
      "Subject line generator with A/B options",
      "Email timing and frequency recommendations",
      "Performance prediction based on industry benchmarks"
    ],
    testimonials: [
      {
        name: "Michael Chen",
        company: "Founder, GrowthTank",
        quote: "The Email Sequence Generator has saved us hours of planning. The sequences are effective and the templates make implementation a breeze."
      }
    ]
  },
  {
    id: 3,
    title: "Sales Funnel Blueprint",
    description: "Step-by-step guide to building profitable sales funnels",
    price: 150,
    format: "PDF + Spreadsheet",
    image: "/products/book.jpg",
    category: "Sales Funnel Systems",
    slug: "sales-funnel-blueprint",
    fullDescription: "The Sales Funnel Blueprint provides a systematic approach to designing, building, and optimizing sales funnels that convert browsers into buyers. This comprehensive guide includes planning templates, conversion strategies, and optimization techniques.",
    features: [
      "Complete funnel mapping templates",
      "ROI calculator and projection tools",
      "Step-by-step implementation guides",
      "Traffic source optimization strategies",
      "Conversion tracking setup instructions"
    ],
    testimonials: [
      {
        name: "Rebecca Taylor",
        company: "CEO, EcomSuccess",
        quote: "Following this blueprint helped us restructure our entire sales process. Our customer value increased by 40% and acquisition costs dropped significantly."
      }
    ]
  },
  {
    id: 4,
    title: "Headline Formulas That Convert",
    description: "50+ proven headline templates for any industry",
    price: 45,
    format: "PDF Guide",
    image: "/products/book.jpg",
    category: "Landing Page Resources",
    slug: "headline-formulas",
    fullDescription: "Craft attention-grabbing headlines that stop readers in their tracks and compel them to read further. This guide includes more than 50 battle-tested headline templates that you can adapt for any product, service, or industry.",
    features: [
      "50+ headline templates categorized by purpose",
      "Swipe file of high-converting real examples",
      "Industry-specific headline adaptations",
      "Headline testing methodology",
      "Psychological triggers reference guide"
    ],
    testimonials: [
      {
        name: "David Wilson",
        company: "Content Director, MarketWise",
        quote: "These headline formulas have revolutionized our content strategy. Our click-through rates have doubled since implementing these techniques."
      }
    ]
  },
  {
    id: 5,
    title: "Analytics Dashboard Templates",
    description: "Ready-to-use dashboards to track your marketing performance",
    price: 65,
    format: "Spreadsheet Templates",
    image: "/products/book.jpg",
    category: "Marketing Optimization",
    slug: "analytics-dashboard-templates",
    fullDescription: "Stop wasting time building marketing dashboards from scratch. These ready-to-use templates connect to your favorite tools and provide instant insights into your marketing performance. Track KPIs, visualize trends, and make data-driven decisions.",
    features: [
      "Google Analytics integration templates",
      "Facebook & Google Ads performance dashboards",
      "Email marketing metrics tracker",
      "Content marketing ROI calculator",
      "Custom KPI tracker with automated reporting"
    ],
    testimonials: [
      {
        name: "Jennifer Lopez",
        company: "Marketing Manager, RetailGiant",
        quote: "These dashboard templates have saved us countless hours. We now have a clear picture of our marketing performance across all channels."
      }
    ]
  },
  {
    id: 6,
    title: "Customer Acquisition System",
    description: "Complete framework for attracting and converting leads",
    price: 95,
    format: "PDF + Templates",
    image: "/products/book.jpg",
    category: "Sales Funnel Systems",
    slug: "customer-acquisition-system",
    fullDescription: "This comprehensive system provides a repeatable framework for attracting qualified leads and converting them into paying customers. It includes audience research tools, traffic generation strategies, and conversion optimization techniques.",
    features: [
      "Audience persona development toolkit",
      "Traffic channel selection framework",
      "Lead magnet creation templates",
      "Conversion path optimization guides",
      "ROI tracking and scaling strategies"
    ],
    testimonials: [
      {
        name: "Thomas Brown",
        company: "Founder, LeadMaster",
        quote: "This system completely transformed our approach to customer acquisition. We've reduced our cost per acquisition by 42% while improving lead quality."
      }
    ]
  },
  {
    id: 7,
    title: "Email Subject Line Swipe File",
    description: "200+ high-converting subject lines with explanations",
    price: 35,
    format: "PDF Guide",
    image: "/products/book.jpg",
    category: "Email Marketing Resources",
    slug: "email-subject-lines",
    fullDescription: "Never struggle with email subject lines again. This swipe file contains more than 200 proven subject lines across various industries and campaign types, each with an explanation of why it works and how to adapt it for your needs.",
    features: [
      "200+ subject line templates by category",
      "Psychological principle explanation for each type",
      "A/B testing recommendations",
      "Industry-specific adaptations",
      "Open rate prediction guidelines"
    ],
    testimonials: [
      {
        name: "Amanda Garcia",
        company: "Email Marketing Specialist, ServicePro",
        quote: "Since using these subject line formulas, our email open rates have increased by 25%. It's become an essential resource for our team."
      }
    ]
  },
  {
    id: 8,
    title: "Conversion Rate Optimization Tool",
    description: "Interactive calculator and checklist for CRO",
    price: 75,
    format: "Interactive Tool",
    image: "/products/book.jpg",
    category: "Marketing Optimization",
    slug: "conversion-rate-optimization",
    fullDescription: "This interactive tool helps you identify conversion bottlenecks and prioritize optimization efforts for maximum impact. It includes a comprehensive checklist, ROI calculator, and testing protocol to systematically improve your conversion rates.",
    features: [
      "Interactive conversion audit tool",
      "ROI impact calculator",
      "A/B test prioritization matrix",
      "Heatmap analysis framework",
      "User testing script templates"
    ],
    testimonials: [
      {
        name: "Robert Kim",
        company: "CRO Specialist, ConversionPro",
        quote: "This CRO tool has streamlined our optimization process. We can quickly identify high-impact changes and quantify their potential value."
      }
    ]
  }
];

export default function ProductDetail({ params }: { params: { slug: string } }) {
  // Find the product based on the slug
  const product = products.find(p => p.slug === params.slug);
  
  // If product not found, you could return a 404 page or some fallback content
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Product not found</h1>
          <p className="mt-4 text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
          <Link href="/products" className="mt-6 inline-block bg-[var(--primary)] text-white px-6 py-3 rounded-lg">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

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
                  src={product.image}
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
                    {product.category}
                  </span>
                  <span className="ml-2 inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded">
                    {product.format}
                  </span>
                </div>
                
                <h1 className="text-3xl font-bold text-black mb-4">{product.title}</h1>
                <p className="text-gray-600 mb-6">{product.fullDescription}</p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-black mb-4">What's Included:</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FiCheckCircle className="h-5 w-5 text-[var(--accent)] mr-2 flex-shrink-0" />
                        <span className="text-black">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-black">€{product.price}</span>
                    <button className="bg-[var(--primary)] hover:bg-[#4A20C0] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center">
                      Purchase Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonials Section */}
          {product.testimonials && product.testimonials.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-black mb-8">What Our Customers Say</h2>
              <div className="grid grid-cols-1 gap-6">
                {product.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-black">{testimonial.name}</p>
                        <p className="text-gray-500 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Related Products Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-black mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <Link href={`/products/${relatedProduct.slug}`} key={relatedProduct.id}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                      <div className="relative h-48">
                        <Image
                          src={relatedProduct.image}
                          alt={relatedProduct.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <div>
                          <h3 className="font-bold text-black mb-2">{relatedProduct.title}</h3>
                          <p className="text-gray-600 text-sm">{relatedProduct.description}</p>
                        </div>
                        <div className="mt-auto pt-4 flex justify-between items-center">
                          <span className="font-bold text-black">€{relatedProduct.price}</span>
                          <span className="text-[var(--primary)] text-sm font-medium">
                            View Details
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 