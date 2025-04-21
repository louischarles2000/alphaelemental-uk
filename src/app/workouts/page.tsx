import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function WorkoutsPage() {
  // Categories for filter
  const categories = ["All", "HIIT", "Strength", "Yoga", "Cardio", "Boxing", "Pilates"];
  
  // Featured workouts
  const workouts = [
    {
      id: 1,
      title: "Boxing Pyramid Workout",
      instructor: "Emily",
      duration: "30 MIN",
      difficulty: "Intermediate",
      category: "HIIT",
      image: "/workouts/boxing.jpg",
      slug: "boxing-pyramid-emily",
      description: "A high-intensity boxing workout that builds in intensity before gradually cooling down."
    },
    {
      id: 2,
      title: "Full Body Strength",
      instructor: "Michael",
      duration: "45 MIN",
      difficulty: "Advanced",
      category: "Strength",
      image: "/workouts/strength.jpg",
      slug: "full-body-strength-michael",
      description: "Build total body strength with this comprehensive workout targeting all major muscle groups."
    },
    {
      id: 3,
      title: "Yoga Flow",
      instructor: "Sarah",
      duration: "25 MIN",
      difficulty: "Beginner",
      category: "Yoga",
      image: "/workouts/yoga.jpg",
      slug: "yoga-flow-sarah",
      description: "A gentle flow sequence perfect for beginners or those looking for a restorative practice."
    },
    {
      id: 4,
      title: "Core Crusher",
      instructor: "David",
      duration: "20 MIN",
      difficulty: "Intermediate",
      category: "Strength",
      image: "/workouts/core.jpg",
      slug: "core-crusher-david",
      description: "Target your abs, obliques and lower back with this focused core strengthening routine."
    },
    {
      id: 5,
      title: "HIIT Cardio Blast",
      instructor: "Jessica",
      duration: "35 MIN",
      difficulty: "Advanced",
      category: "HIIT",
      image: "/workouts/hiit.jpg",
      slug: "hiit-cardio-blast-jessica",
      description: "Push your limits with this high-intensity interval training workout designed to maximize calorie burn."
    },
    {
      id: 6,
      title: "Power Pilates",
      instructor: "Emma",
      duration: "40 MIN",
      difficulty: "Intermediate",
      category: "Pilates",
      image: "/workouts/pilates.jpg",
      slug: "power-pilates-emma",
      description: "Strengthen your core and improve flexibility with this dynamic Pilates routine."
    },
    {
      id: 7,
      title: "Morning Energizer",
      instructor: "Ryan",
      duration: "15 MIN",
      difficulty: "Beginner",
      category: "Cardio",
      image: "/workouts/morning.jpg",
      slug: "morning-energizer-ryan",
      description: "Start your day right with this quick but effective full-body workout to boost energy."
    },
    {
      id: 8,
      title: "Heavy Bag Workout",
      instructor: "Mike",
      duration: "50 MIN",
      difficulty: "Advanced",
      category: "Boxing",
      image: "/workouts/heavybag.jpg",
      slug: "heavy-bag-workout-mike",
      description: "Improve your boxing technique and conditioning with this intensive heavy bag routine."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <header className="bg-[#5932EA] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <h1 className="text-4xl font-extrabold mb-4">Workout Programs</h1>
          <p className="text-lg max-w-3xl">
            Discover workouts designed for every fitness level and goal. From high-intensity training to mindful movement, find the perfect program to transform your body and mind.
          </p>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Categories */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                category === 'All' 
                  ? 'bg-[#5932EA] text-white' 
                  : 'bg-white text-black border border-gray-200 hover:bg-[#5932EA] hover:text-white hover:border-transparent'
              } transition-colors duration-200`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Workouts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {workouts.map((workout) => (
            <Link href={`/activities/workouts/${workout.slug}`} key={workout.id}>
              <div className="bg-white rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
                <div className="h-48 w-full relative">
                  <Image
                    src={workout.image}
                    alt={workout.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-[#5932EA] text-white text-xs font-semibold px-2 py-1 rounded">
                    {workout.category}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-black">{workout.duration}</span>
                    <span className="text-xs font-medium text-black">{workout.difficulty}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">{workout.title}</h3>
                  <p className="text-sm text-black mb-2">with {workout.instructor}</p>
                  <p className="text-sm text-black mt-auto line-clamp-2">{workout.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
