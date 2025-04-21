import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function SuccessStoriesPage() {
  const stories = [
    {
      id: 1,
      name: "Jennifer",
      age: 34,
      goal: "Weight Loss",
      achievement: "Lost 45 lbs in 6 months",
      quote: "Alpha-Elemental changed my relationship with fitness. The personalized plans kept me motivated!",
      testimonial: "I had tried countless diets and workout plans before finding Alpha-Elemental. Nothing seemed to stick. The difference here was the personalized approach and incredible support. The meal plans were delicious and realistic for my busy lifestyle, and the workouts were challenging but achievable. For the first time, I felt like I was building a sustainable healthy lifestyle, not just following another fad diet. Six months later, I'm down 45 pounds and I've never felt better!",
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
      testimonial: "At 42, I thought my days of building significant muscle were behind me. I had resigned myself to maintaining what I had rather than making gains. Alpha-Elemental's strength programs completely changed my perspective. The progressive overload approach combined with the nutrition guidance helped me add 12 pounds of lean muscle in just 4 months. The coaches understood my limitations and helped me work around old injuries. I'm stronger now than I was in my 30s!",
      beforeImage: "/success/michael-before.jpg",
      afterImage: "/success/michael-after.jpg",
      slug: "michael-muscle-building-story"
    },
    {
      id: 3,
      name: "Sarah",
      age: 29,
      goal: "Fitness Consistency",
      achievement: "Worked out 4x weekly for a full year",
      quote: "For the first time in my life, I've stuck with a fitness routine for more than a few weeks.",
      testimonial: "I was always the person who would get excited about fitness for a month and then drop off. Alpha-Elemental changed that completely. The variety of workouts kept me engaged, and the progress tracking helped me see that consistency really does pay off. The community aspect was a game-changer too - having accountability partners made all the difference. A full year of consistent workouts later, I have more energy, better sleep, and confidence I never thought possible!",
      beforeImage: "/success/sarah-before.jpg",
      afterImage: "/success/sarah-after.jpg",
      slug: "sarah-consistency-journey"
    },
    {
      id: 4,
      name: "David",
      age: 51,
      goal: "Functional Fitness",
      achievement: "Eliminated chronic back pain",
      quote: "I can play with my grandkids without pain for the first time in years. Life-changing!",
      testimonial: "After years of chronic back pain and being told I just had to live with it, I was skeptical that any fitness program could help. The Alpha-Elemental team created a program specifically designed to strengthen my core and improve my mobility. The progress was slow at first, but within three months, I noticed significantly less pain. Now, I can get down on the floor and play with my grandkids, go hiking with my wife, and enjoy life again. The functional approach to fitness that Alpha-Elemental offers has truly given me back my quality of life.",
      beforeImage: "/success/david-before.jpg",
      afterImage: "/success/david-after.jpg",
      slug: "david-functional-fitness-story"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-black mb-4">Success Stories</h1>
          <p className="text-lg max-w-2xl mx-auto text-black">
            Real results from real people. Discover how Alpha-Elemental has helped transform lives through personalized fitness and nutrition plans.
          </p>
        </div>
        
        <div className="space-y-16">
          {stories.map((story) => (
            <div key={story.id} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <div className="h-64 md:h-full w-full relative">
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
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#5932EA] bg-opacity-10 text-[#5932EA]">
                      {story.goal}
                    </span>
                    <span className="ml-3 text-sm text-black">{story.achievement}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-black">{story.name}, {story.age}</h3>
                  <p className="mt-3 text-black italic">"{story.quote}"</p>
                  <p className="mt-4 text-black line-clamp-3">{story.testimonial}</p>
                  <div className="mt-6">
                    <Link
                      href={`/success-stories/${story.slug}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#5932EA] hover:bg-[#4A29C6] transform hover:scale-105 transition-all duration-200"
                    >
                      Read Full Story
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
