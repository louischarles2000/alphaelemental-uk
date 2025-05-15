import Image from "next/image";
import Link from "next/link";

export default function BrowseByCategory() {
  const categories = [
    {
      id: 1,
      title: "Landing Page Resources",
      description: "Convert more visitors with our landing page toolkits",
      image: "/categories/marketing.jpg",
      slug: "landing-page-resources"
    },
    {
      id: 2,
      title: "Email Marketing Resources",
      description: "Build relationships and drive sales with proven email strategies",
      image: "/categories/marketing.jpg",
      slug: "email-marketing-resources"
    },
    {
      id: 3,
      title: "Sales Funnel Systems",
      description: "Complete systems to nurture leads into paying customers",
      image: "/categories/marketing.jpg",
      slug: "sales-funnel-systems"
    },
    {
      id: 4,
      title: "Marketing Optimization",
      description: "Improve conversion rates and maximize ROI",
      image: "/categories/marketing.jpg",
      slug: "marketing-optimization"
    },
    {
      id: 5,
      title: "Digital Analytics",
      description: "Measure success and make data-driven decisions",
      image: "/categories/marketing.jpg",
      slug: "digital-analytics"
    },
    {
      id: 6,
      title: "Content Creation",
      description: "Develop engaging content that converts",
      image: "/categories/marketing.jpg",
      slug: "content-creation"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link href={`/categories/${category.slug}`} key={category.id}>
          <div className="bg-white rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 relative">
            <div className="h-56 w-full relative">
              <Image
                src={category.image}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-black">{category.title}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
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