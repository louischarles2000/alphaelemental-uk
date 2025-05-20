/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";

// Define types for our props
type RecommendationItem = {
  id: number;
  title: string;
  image: string;
  slug: string;
  [key: string]: any; // Allow for additional properties that vary between meal/workout
};

type RecommendationsSectionProps = {
  title: string;
  items: RecommendationItem[];
  type: 'meal' | 'workout';
};

export default function RecommendationsSection({ title, items, type }: RecommendationsSectionProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-black">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link 
            href={`/activities/${type === 'meal' ? 'recipes' : 'workouts'}/${item.slug}`} 
            key={item.id}
          >
            <div className="bg-white rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
              <div className="h-48 w-full relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                {type === 'meal' ? (
                  <div className="absolute top-2 right-2 bg-white text-[#5932EA] text-xs font-semibold px-2 py-1 rounded-full">
                    {item.diet}
                  </div>
                ) : (
                  <div className="absolute top-2 right-2 bg-[#5932EA] text-white text-xs font-semibold px-2 py-1 rounded">
                    {item.category}
                  </div>
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col">
                {type === 'meal' ? (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-black">{item.type}</span>
                    <span className="text-xs font-medium text-black">{item.prepTime} • {item.calories} cal</span>
                  </div>
                ) : (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-black">{item.duration}</span>
                    <span className="text-xs font-medium text-black">{item.difficulty}</span>
                  </div>
                )}
                <h3 className="text-lg font-semibold mb-1 text-black">{item.title}</h3>
                {type === 'workout' && (
                  <p className="text-sm text-black">with {item.instructor}</p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
