import Image from "next/image";
import Link from "next/link";
import WaveBorder from "./WaveBorder";

export default function MealPlans() {
  const mealPlans = [
    {
      id: 1,
      title: "Breakfast Quesadilla with Salsa",
      type: "Breakfast",
      prepTime: "15 MIN",
      calories: "420",
      diet: "Vegetarian",
      image: "/meals/quesadilla.jpg",
      slug: "breakfast-quesadilla-with-salsa"
    },
    {
      id: 2,
      title: "Mediterranean Lunch Bowl",
      type: "Lunch",
      prepTime: "20 MIN",
      calories: "550",
      diet: "Mediterranean",
      image: "/meals/mediterranean.jpg",
      slug: "mediterranean-lunch-bowl"
    },
    {
      id: 3,
      title: "Keto Dinner Platter",
      type: "Dinner",
      prepTime: "25 MIN",
      calories: "650",
      diet: "Keto",
      image: "/meals/keto.jpg",
      slug: "keto-dinner-platter"
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mealPlans.map((meal) => (
          <Link href={`/activities/recipes/${meal.slug}`} key={meal.id}>
            <div className="bg-gray-50 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 relative">
              <div className="h-56 w-full relative">
                <Image
                  src={meal.image}
                  alt={meal.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-white text-[#5932EA] text-xs font-semibold px-2 py-1 rounded-full">
                  {meal.diet}
                </div>
                
                {/* Wave Border */}
                <WaveBorder color="#5932EA" height={28} className="z-10" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-black">{meal.type}</span>
                  <span className="text-xs font-medium text-black">{meal.prepTime} • {meal.calories} cal</span>
                </div>
                <h3 className="text-lg font-semibold text-black">{meal.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          href="/meals"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-[#5932EA] hover:bg-[#4A29C6] transform hover:scale-105 transition-all duration-200"
        >
          Explore All Meal Plans
        </Link>
      </div>
    </div>
  );
}
