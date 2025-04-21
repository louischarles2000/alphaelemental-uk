import Image from "next/image";
import Link from "next/link";

export default function SuccessStories() {
  const stories = [
    {
      id: 1,
      name: "Jennifer",
      age: 34,
      goal: "Weight Loss",
      achievement: "Lost 45 lbs in 6 months",
      quote: "Alpha-Elemental changed my relationship with fitness. The personalized plans kept me motivated!",
      beforeImage: "/success/jennifer-before.jpg",
      afterImage: "/success/jennifer-after.jpg",
      slug: "jennifer-weight-loss-journey"
    },
    {
      id: 2,
      name: "Michael",
      age: 42,
      goal: "Muscle Gain",
      achievement: "Gained 12 lbs of muscle in 4 months",
      quote: "The structured programs helped me build strength I never thought possible at my age.",
      beforeImage: "/success/michael-before.jpg",
      afterImage: "/success/michael-after.jpg",
      slug: "michael-muscle-building-story"
    }
  ];

  return (
    <div className="space-y-12">
      {stories.map((story) => (
        <div key={story.id} className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/3">
              <div className="h-48 md:h-full w-full relative">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 relative">
                    <Image
                      src={story.beforeImage}
                      alt={`${story.name} before transformation`}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white text-xs p-1">
                      Before
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <Image
                      src={story.afterImage}
                      alt={`${story.name} after transformation`}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute bottom-0 right-0 bg-[#5932EA] text-white text-xs p-1">
                      After
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8 md:w-2/3">
              <div className="flex items-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#5932EA] bg-opacity-10 text-white">
                  {story.goal}
                </span>
                <span className="ml-3 text-sm text-gray-600">{story.achievement}</span>
              </div>
              <h3 className="mt-3 text-xl text-black font-semibold">{story.name}, {story.age}</h3>
              <p className="mt-3 text-gray-600 italic">"{story.quote}"</p>
              <div className="mt-6">
                <Link
                  href={`/success-stories/${story.slug}`}
                  className="inline-flex items-center text-[#5932EA] hover:text-[#4A29C6]"
                >
                  Read Full Story
                  <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="text-center pt-6">
        <Link
          href="/success-stories"
          className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
        >
          View All Success Stories
        </Link>
      </div>
    </div>
  );
}
