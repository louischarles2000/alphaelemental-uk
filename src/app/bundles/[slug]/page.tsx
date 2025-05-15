import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { FiCheckCircle } from "react-icons/fi";

// In a real app, you would fetch this data from an API or database
// For this demo, we'll include the bundles array directly
const bundles = [
  {
    id: 1,
    title: "Lead Generation Starter Kit",
    description: "Everything you need to start capturing qualified leads today.",
    price: 210,
    regularPrice: 255,
    savings: 45,
    image: "/bundles/bundles.jpg",
    features: [
      "Customer Acquisition System (Checklist)",
      "Lead Magnet Conversions",
      "Sales Prompts",
      "Landing Page Persuasion - Checklist"
    ],
    includedProducts: [
      {
        title: "Customer Acquisition System",
        description: "A systematic approach to attract and convert high-quality leads.",
        price: 95
      },
      {
        title: "Lead Magnet Creation Guide",
        description: "Learn how to create compelling lead magnets that convert.",
        price: 65
      },
      {
        title: "Sales Conversation Prompts",
        description: "Proven scripts and templates for sales conversations.",
        price: 50
      },
      {
        title: "Landing Page Optimization Checklist",
        description: "Ensure your landing pages are optimized for maximum conversions.",
        price: 45
      }
    ],
    slug: "lead-generation-starter",
    fullDescription: "The Lead Generation Starter Kit gives you everything you need to start capturing high-quality leads for your business. This comprehensive bundle includes tools, templates, and guides that work together to help you create an effective lead generation system from scratch.",
    testimonials: [
      {
        name: "James Wilson",
        company: "Founder, GrowthLab",
        quote: "This bundle was exactly what we needed to revamp our lead generation strategy. Within a month, we increased our qualified leads by 43%."
      }
    ]
  },
  {
    id: 2,
    title: "Complete Sales Funnel System",
    description: "Convert prospects into customers with our proven funnel system.",
    price: 340,
    regularPrice: 399,
    savings: 59,
    image: "/bundles/bundles.jpg",
    features: [
      "Email Sequence Generator",
      "Funnel Mapping Template",
      "Conversion Copy Formulas",
      "Automated Follow-up System"
    ],
    includedProducts: [
      {
        title: "Email Sequence Generator",
        description: "AI-powered tool to create nurture sequences that convert.",
        price: 120
      },
      {
        title: "Funnel Mapping Template",
        description: "Visual template to design effective sales funnels.",
        price: 85
      },
      {
        title: "Conversion Copywriting Formula Guide",
        description: "Proven formulas for writing high-converting copy.",
        price: 75
      },
      {
        title: "Automated Follow-up System",
        description: "Templates and workflows for effective follow-up sequences.",
        price: 119
      }
    ],
    slug: "complete-sales-funnel",
    fullDescription: "The Complete Sales Funnel System provides everything you need to build, optimize, and automate your sales funnel. This carefully curated bundle combines our most powerful tools for creating effective customer journeys that predictably convert prospects into buyers.",
    testimonials: [
      {
        name: "Elena Rodriguez",
        company: "Marketing Director, SaaS Solutions",
        quote: "Implementing this sales funnel system has transformed our business. Our conversion rate increased by 28% and our average customer value went up by 35%."
      }
    ]
  },
  {
    id: 3,
    title: "Digital Marketer's Toolkit",
    description: "A comprehensive suite of tools for the modern digital marketer.",
    price: 425,
    regularPrice: 500,
    savings: 75,
    image: "/bundles/bundles.jpg",
    features: [
      "SEO Optimization Guide",
      "Social Media Content Calendar",
      "Analytics Dashboard Templates",
      "Ad Copy Swipe File"
    ],
    includedProducts: [
      {
        title: "SEO Optimization Guide",
        description: "Comprehensive guide to improve your search engine rankings.",
        price: 110
      },
      {
        title: "Social Media Content Calendar",
        description: "12-month content planning system with templates.",
        price: 85
      },
      {
        title: "Analytics Dashboard Templates",
        description: "Ready-to-use dashboards to track marketing performance.",
        price: 165
      },
      {
        title: "Ad Copy Swipe File",
        description: "Collection of high-converting ad copy templates.",
        price: 140
      }
    ],
    slug: "digital-marketers-toolkit",
    fullDescription: "The Digital Marketer's Toolkit is a comprehensive collection of resources designed for modern marketers who want to excel across multiple channels. From SEO to social media, content creation to analytics, this bundle provides everything you need to create and measure effective digital marketing campaigns.",
    testimonials: [
      {
        name: "Michael Thompson",
        company: "Digital Marketing Manager, RetailPlus",
        quote: "This toolkit has become our marketing team's secret weapon. It's helped us streamline our processes and improve our results across all digital channels."
      }
    ]
  }
];

export default function BundleDetail({ params }: { params: { slug: string } }) {
  // Find the bundle based on the slug
  const bundle = bundles.find(b => b.slug === params.slug);
  
  // If bundle not found, return a 404 page
  if (!bundle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Bundle not found</h1>
          <p className="mt-4 text-gray-600">The bundle you're looking for doesn't exist or has been removed.</p>
          <Link href="/bundles" className="mt-6 inline-block bg-[var(--primary)] text-white px-6 py-3 rounded-lg">
            Return to Bundles
          </Link>
        </div>
      </div>
    );
  }

  // Calculate the total value of included products
  const totalValue = bundle.includedProducts.reduce((sum, product) => sum + product.price, 0);

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
                  src={bundle.image}
                  alt={bundle.title}
                  layout="fill"
                  objectFit="cover"
                  className="md:absolute md:inset-0"
                />
                <div className="absolute top-4 right-4 bg-[var(--accent)] text-black font-bold px-3 py-1 rounded-full">
                  Save €{bundle.savings}
                </div>
              </div>
              
              {/* Bundle Info */}
              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold text-black mb-4">{bundle.title}</h1>
                <p className="text-gray-600 mb-6">{bundle.fullDescription}</p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-black mb-4">What's Included:</h3>
                  <ul className="space-y-2">
                    {bundle.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FiCheckCircle className="h-5 w-5 text-[var(--accent)] mr-2 flex-shrink-0" />
                        <span className="text-black">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="flex items-center mb-4">
                    <span className="text-gray-500 line-through text-lg">€{bundle.regularPrice}</span>
                    <span className="text-3xl font-bold text-black ml-3">€{bundle.price}</span>
                    <span className="ml-3 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      Save {Math.round((bundle.savings / bundle.regularPrice) * 100)}%
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-6">
                    Total value: €{totalValue} - You save €{totalValue - bundle.price}
                  </p>
                  
                  <button className="w-full bg-[var(--primary)] hover:bg-[#4A20C0] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center">
                    Purchase Bundle Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Included Products Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-black mb-8">Products Included in This Bundle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bundle.includedProducts.map((product, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">{product.title}</h3>
                      <p className="text-gray-600 text-sm">{product.description}</p>
                    </div>
                    <span className="text-black font-semibold">€{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonials Section */}
          {bundle.testimonials && bundle.testimonials.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-black mb-8">What Our Customers Say</h2>
              <div className="grid grid-cols-1 gap-6">
                {bundle.testimonials.map((testimonial, index) => (
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
          
          {/* Related Bundles Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-black mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bundles
                .filter(b => b.id !== bundle.id)
                .map((relatedBundle) => (
                  <Link href={`/bundles/${relatedBundle.slug}`} key={relatedBundle.id}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                      <div className="relative h-48">
                        <Image
                          src={relatedBundle.image}
                          alt={relatedBundle.title}
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="absolute top-4 right-4 bg-[var(--accent)] text-black font-bold text-xs rounded-full px-3 py-1">
                          Save €{relatedBundle.savings}
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <div>
                          <h3 className="font-bold text-black mb-2">{relatedBundle.title}</h3>
                          <p className="text-gray-600 text-sm">{relatedBundle.description}</p>
                        </div>
                        <div className="mt-auto pt-4 flex justify-between items-center">
                          <div>
                            <span className="text-gray-500 line-through text-sm">€{relatedBundle.regularPrice}</span>
                            <span className="text-black font-bold ml-2">€{relatedBundle.price}</span>
                          </div>
                          <span className="text-[var(--primary)] text-sm font-medium">
                            View Bundle
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