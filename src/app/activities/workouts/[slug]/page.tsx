import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import RecommendationsSection from "../../../../components/RecommendationsSection";
import { IoTimeOutline, IoLanguage } from "react-icons/io5";
import { FaDumbbell, FaPlay } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

// This would normally come from a database or API
const getWorkoutBySlug = (slug: string) => {
  // Sample data for the boxing workout
  return {
    id: 1,
    title: "Boxing Pyramid Workout",
    instructor: "Emily",
    duration: "30 MIN",
    difficulty: "Intermediate",
    category: "HIIT",
    language: "English",
    image: "/workouts/boxing.jpg",
    slug: "boxing-pyramid-emily",
    description: "This high-intensity boxing workout follows a pyramid structure, starting with shorter intervals that build in duration before gradually decreasing again. Perfect for improving cardiovascular fitness, core strength, and boxing technique.",
    equipment: ["Boxing gloves (optional)", "Exercise mat", "Water bottle"],
    benefits: ["Improved cardiovascular fitness", "Enhanced core strength", "Better coordination", "Stress relief", "Calorie burn"],
    exercises: [
      {
        name: "Shadow Boxing",
        duration: "5 MIN",
        image: "/exercises/shadow-boxing.jpg",
        description: "Warm-up with basic boxing combinations"
      },
      {
        name: "Jab-Cross Combo",
        duration: "3 MIN",
        image: "/exercises/jab-cross.jpg",
        description: "Focus on power and speed with this classic combination"
      },
      {
        name: "Hooks & Uppercuts",
        duration: "3 MIN",
        image: "/exercises/hooks.jpg",
        description: "Practice proper form for maximum impact"
      },
      {
        name: "Defensive Movement",
        duration: "3 MIN",
        image: "/exercises/defense.jpg",
        description: "Work on slips, ducks and defensive footwork"
      },
      {
        name: "High-Intensity Intervals",
        duration: "10 MIN",
        image: "/exercises/hiit.jpg",
        description: "Peak pyramid intervals with boxing combinations"
      },
      {
        name: "Core Finisher",
        duration: "3 MIN",
        image: "/exercises/core.jpg",
        description: "Boxing-specific core exercises"
      },
      {
        name: "Cool Down",
        duration: "3 MIN",
        image: "/exercises/cooldown.jpg",
        description: "Stretching and recovery"
      }
    ]
  };
};

// This would come from a recommendation algorithm in a real app
const getRecommendedWorkouts = () => {
  return [
    {
      id: 2,
      title: "Full Body Strength",
      instructor: "Michael",
      duration: "45 MIN",
      difficulty: "Advanced",
      category: "Strength",
      image: "/workouts/strength.jpg",
      slug: "full-body-strength-michael"
    },
    {
      id: 5,
      title: "HIIT Cardio Blast",
      instructor: "Jessica",
      duration: "35 MIN",
      difficulty: "Advanced",
      category: "HIIT",
      image: "/workouts/hiit.jpg",
      slug: "hiit-cardio-blast-jessica"
    },
    {
      id: 8,
      title: "Heavy Bag Workout",
      instructor: "Mike",
      duration: "50 MIN",
      difficulty: "Advanced",
      category: "Boxing",
      image: "/workouts/heavybag.jpg",
      slug: "heavy-bag-workout-mike"
    }
  ];
};

export default function WorkoutDetailPage({ params }: { params: { slug: string } }) {
  const workout = getWorkoutBySlug(params.slug);
  const recommendedWorkouts = getRecommendedWorkouts();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex text-sm">
            <li className="flex items-center">
              <Link href="/" className="text-black hover:text-[#5932EA]">Home</Link>
              <svg className="mx-2 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="flex items-center">
              <Link href="/workouts" className="text-black hover:text-[#5932EA]">Workouts</Link>
              <svg className="mx-2 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="text-[#5932EA] font-medium truncate">{workout.title}</li>
          </ol>
        </nav>
        
        {/* Workout Header */}
        <div className="relative rounded-xl overflow-hidden mb-10">
          {/* Main Image */}
          <div className="relative h-[400px]">
            <Image
              src={workout.image}
              alt={workout.title}
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-[#5932EA] text-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-[#4A29C6] transform hover:scale-110 transition-all duration-300">
                <FaPlay size={24} />
              </button>
            </div>
            
            {/* Workout Info */}
            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <div className="flex flex-wrap gap-3 mb-3">
                <span className="bg-[#5932EA] px-3 py-1 rounded-full text-xs font-semibold">
                  {workout.category}
                </span>
                <span className="bg-black/50 px-3 py-1 rounded-full text-xs font-semibold">
                  {workout.difficulty}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">{workout.title}</h1>
              <p className="text-lg">with {workout.instructor}</p>
            </div>
          </div>
        </div>
        
        {/* Workout Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-black">About This Workout</h2>
            <p className="text-black mb-6">{workout.description}</p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-black">
                <IoTimeOutline className="mr-2 text-[#5932EA]" size={20} />
                <span><strong>{workout.duration}</strong> Duration</span>
              </div>
              <div className="flex items-center text-black">
                <BsGraphUp className="mr-2 text-[#5932EA]" size={20} />
                <span><strong>{workout.difficulty}</strong> Level</span>
              </div>
              <div className="flex items-center text-black">
                <IoLanguage className="mr-2 text-[#5932EA]" size={20} />
                <span><strong>{workout.language}</strong></span>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-black">Benefits</h3>
            <ul className="list-disc pl-5 mb-6 text-black">
              {workout.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-black">
              <FaDumbbell className="mr-2 text-[#5932EA]" size={20} />
              Equipment Needed
            </h3>
            <ul className="space-y-3 text-black">
              {workout.equipment.map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="h-5 w-5 text-[#5932EA] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Exercise Previews */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Workout Structure</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {workout.exercises.map((exercise, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-lg transition-all duration-300">
                <div className="relative h-40">
                  <Image
                    src={exercise.image}
                    alt={exercise.name}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded">
                    {exercise.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-black mb-1">{exercise.name}</h3>
                  <p className="text-sm text-black">{exercise.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recommendations */}
        <RecommendationsSection 
          title="Similar Workouts You Might Like"
          items={recommendedWorkouts}
          type="workout"
        />
      </main>
      
      <Footer />
    </div>
  );
}
