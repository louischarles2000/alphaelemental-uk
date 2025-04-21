import Image from "next/image";
import Link from "next/link";

export default function FeaturedWorkouts() {
  const workouts = [
    {
      id: 1,
      title: "Boxing Pyramid Workout",
      instructor: "Emily",
      duration: "30 MIN",
      difficulty: "Intermediate",
      category: "HIIT",
      image: "/workouts/boxing.jpg",
      slug: "boxing-pyramid-emily"
    },
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
      id: 3,
      title: "Yoga Flow",
      instructor: "Sarah",
      duration: "25 MIN",
      difficulty: "Beginner",
      category: "Yoga",
      image: "/workouts/yoga.jpg",
      slug: "yoga-flow-sarah"
    },
    {
      id: 4,
      title: "Core Crusher",
      instructor: "David",
      duration: "20 MIN",
      difficulty: "Intermediate",
      category: "Strength",
      image: "/workouts/core.jpg",
      slug: "core-crusher-david"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {workouts.map((workout) => (
        <Link href={`/activities/workouts/${workout.slug}`} key={workout.id}>
          <div className="bg-white rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
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
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-black">{workout.duration}</span>
                <span className="text-xs font-medium text-black">{workout.difficulty}</span>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-black">{workout.title}</h3>
              <p className="text-sm text-black">with {workout.instructor}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
