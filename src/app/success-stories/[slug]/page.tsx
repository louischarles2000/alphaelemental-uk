import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

// This is mock data - in a real application, you would fetch this from an API or database
const successStoriesData = [
  {
    id: 1,
    name: "Jennifer",
    age: 34,
    goal: "Weight Loss",
    achievement: "Lost 45 lbs in 6 months",
    quote: "Alpha-Elemental changed my relationship with fitness. The personalized plans kept me motivated!",
    beforeImage: "/success/jennifer-before.jpg",
    afterImage: "/success/jennifer-after.jpg",
    slug: "jennifer-weight-loss-journey",
    fullStory: "I struggled with my weight for years, trying countless diets that never seemed to work for me long-term. After having two kids, I found it even harder to lose the extra pounds. When I discovered Alpha-Elemental, everything changed. Their approach was different - it wasn't just about losing weight quickly, but creating sustainable habits.\n\nThe personalized meal plans took the guesswork out of healthy eating, and the workout routines were challenging but adaptable to my busy schedule as a mom. What I appreciated most was the supportive community and the regular check-ins from my coach.\n\nWithin the first month, I had lost 10 pounds, but more importantly, I felt energetic again. By month three, my clothes were noticeably looser, and after six months, I had lost a total of 45 pounds! Beyond the numbers on the scale, I've developed a healthier relationship with food and exercise that I know will last a lifetime.",
    program: "Weight Management Premium",
    duration: "6 months",
    coachName: "Sarah Jensen",
    testimonialVideo: "/videos/jennifer-testimonial.mp4"
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
    slug: "michael-muscle-building-story",
    fullStory: "Hitting my 40s was a wake-up call. I noticed I was getting weaker, losing muscle mass, and generally feeling less energetic. As a former college athlete, this was particularly difficult to accept. I wanted to regain my strength but wasn't sure where to start at my age.\n\nAlpha-Elemental's assessment process was thorough, taking into account my history as an athlete but also acknowledging my current limitations. They designed a progressive strength training program that started at a manageable level and gradually increased in intensity.\n\nThe nutrition guidance was eye-opening - I realized I hadn't been consuming enough protein to support muscle growth. With their meal suggestions and supplement recommendations, I began to see changes within weeks.\n\nAfter four months of consistent training, I had gained 12 pounds of muscle and significantly increased my strength across all major lifts. My posture improved, chronic back pain disappeared, and friends started asking what my secret was. The best part is that I feel like I've reclaimed something I thought was lost to time.",
    program: "Strength Building",
    duration: "4 months",
    coachName: "Marcus Williams",
    testimonialVideo: "/videos/michael-testimonial.mp4"
  },
  {
    id: 3,
    name: "Sarah",
    age: 29,
    goal: "Fitness Consistency",
    achievement: "Worked out 4x weekly for a full year",
    quote: "For the first time in my life, I've stuck with a fitness routine for more than a few weeks.",
    beforeImage: "/success/jennifer-before.jpg",
    afterImage: "/success/jennifer-after.jpg",
    slug: "sarah-consistency-journey",
    fullStory: "I was always the person who would start a fitness program with enthusiasm, only to lose motivation after a few weeks. This cycle repeated for years, leaving me frustrated and discouraged. When I found Alpha-Elemental, I was skeptical but willing to give it one more try.\n\nWhat made this experience different was the focus on building sustainable habits rather than pursuing dramatic results right away. My coach helped me set realistic goals and celebrate small wins along the way. The variety in the workouts kept me engaged, and having the flexibility to choose activities I enjoyed made exercise feel less like a chore.\n\nThe community aspect of Alpha-Elemental was also crucial to my success. Connecting with others on similar journeys provided accountability and inspiration when motivation waned. After a full year of consistent workouts, I've not only improved physically but also gained confidence in my ability to stick with challenging goals in all areas of my life.",
    program: "Sustainable Fitness",
    duration: "12 months",
    coachName: "Alex Rodriguez",
    testimonialVideo: "/videos/sarah-testimonial.mp4"
  },
  {
    id: 4,
    name: "David",
    age: 51,
    goal: "Functional Fitness",
    achievement: "Eliminated chronic back pain",
    quote: "I can play with my grandkids without pain for the first time in years. Life-changing!",
    beforeImage: "/success/michael-before.jpg",
    afterImage: "/success/michael-after.jpg",
    slug: "david-functional-fitness-story",
    fullStory: "After a career spent at a desk and years of neglecting my physical health, chronic back pain had become a constant companion. Simple activities like picking something up from the floor or playing with my grandchildren would result in days of discomfort. I had tried physical therapy and medication, but nothing provided lasting relief.\n\nMy doctor suggested that strengthening my core could help, which led me to Alpha-Elemental. During my initial assessment, the team took time to understand my limitations and designed a program that focused on functional movement and gradual progression.\n\nThe first few weeks were challenging, but the coaches were patient and attentive, making modifications whenever needed. They taught me proper form and explained how each exercise contributed to building the support my back needed.\n\nAfter three months, I noticed I was having more pain-free days than painful ones. By six months, I was able to get down on the floor to play with my grandkids and get back up without assistance - something that seemed impossible before. Now, I can enjoy hiking, gardening, and all the activities I had given up on. The functional fitness approach at Alpha-Elemental didn't just reduce my pain; it restored my quality of life.",
    program: "Functional Fitness Plus",
    duration: "6 months",
    coachName: "Elena Thompson",
    testimonialVideo: "/videos/david-testimonial.mp4"
  }
];

export function generateStaticParams() {
  return successStoriesData.map((story) => ({
    slug: story.slug,
  }));
}

export default async function SuccessStoryPage({ params }: { params: { slug: string } }) {
  // Wait for the params to be available
  const slug = params.slug;
  
  const story = successStoriesData.find((s) => s.slug === slug);
  
  if (!story) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/success-stories"
          className="inline-flex items-center text-sm text-gray-600 hover:text-[#5932EA] mb-8"
        >
          <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Success Stories
        </Link>
        
        <h1 className="text-3xl font-bold text-black mb-2">{story.name}'s Transformation</h1>
        <div className="flex items-center mb-8">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#5932EA] bg-opacity-10 text-white">
            {story.goal}
          </span>
          <span className="ml-3 text-sm text-gray-600">{story.age} years old</span>
          <span className="ml-3 text-sm font-semibold text-gray-800">{story.achievement}</span>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-10">
          <div className="relative h-[400px] w-full">
            <div className="absolute inset-0 flex">
              <div className="w-1/2 relative">
                <Image
                  src={story.beforeImage}
                  alt={`${story.name} before transformation`}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white text-sm p-2">
                  Before
                </div>
              </div>
              <div className="w-1/2 relative">
                <Image
                  src={story.afterImage}
                  alt={`${story.name} after transformation`}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-[#5932EA] text-white text-sm p-2">
                  After
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
          <h2 className="text-xl font-semibold text-black mb-4">"{story.quote}"</h2>
          <div className="text-gray-700 whitespace-pre-line">
            {story.fullStory}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-black mb-3">Program Details</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Program:</span>
                <span className="font-medium text-black">{story.program}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium text-black">{story.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Coach:</span>
                <span className="font-medium text-black">{story.coachName}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-black mb-3">Start Your Transformation</h3>
            <p className="text-gray-600 mb-4">Inspired by {story.name}'s journey? Take the first step toward your own success story.</p>
            <Link 
              href="/signup" 
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#5932EA] hover:bg-[#4A29C6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5932EA]"
            >
              Begin Your Journey
            </Link>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-black mb-4">Video Testimonial</h3>
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
            <div className="text-gray-500 text-center p-4">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="font-medium">Watch {story.name}'s video testimonial</p>
              <p className="text-sm mt-2">Coming soon</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 