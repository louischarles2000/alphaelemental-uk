import Image from "next/image";
import Link from "next/link";

export default function BestSellingBundles() {
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
      slug: "lead-generation-starter"
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
      slug: "complete-sales-funnel"
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
      slug: "digital-marketers-toolkit"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {bundles.map((bundle) => (
        <div key={bundle.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="relative h-48">
            <Image
              src={bundle.image}
              alt={bundle.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute top-4 right-4 bg-[var(--accent)] text-black font-bold text-xs rounded-full px-3 py-1">
              Save €{bundle.savings}
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-black">{bundle.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{bundle.description}</p>
            
            <div className="mb-4">
              <ul className="space-y-1">
                {bundle.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
                {bundle.features.length > 3 && (
                  <li className="text-sm text-black ml-7">+ {bundle.features.length - 3} more</li>
                )}
              </ul>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-gray-500 line-through text-sm">€{bundle.regularPrice}</span>
                <span className="text-black font-bold text-2xl ml-2">€{bundle.price}</span>
              </div>
            </div>
            
            <Link href={`/bundles/${bundle.slug}`} className="block w-full bg-[var(--primary)] hover:bg-[#4A20C0] text-white text-center py-2 rounded-lg font-medium transition-colors duration-200">
              View Bundle
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
} 