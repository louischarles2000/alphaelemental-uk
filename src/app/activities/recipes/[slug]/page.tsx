/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import RecommendationsSection from "../../../../components/RecommendationsSection";
import { IoTimeOutline } from "react-icons/io5";
import { BsFire } from "react-icons/bs";
import { TbMeat } from "react-icons/tb";
import { GiAvocado } from "react-icons/gi";
import { LuWheat } from "react-icons/lu";

// Import Suspense from React
import { Suspense } from "react";

// --- Simulate Asynchronous Data Fetching ---
// In a real app, these would be async functions fetching from an API or database.
// For demonstration, we'll add a small delay.

const getMealBySlug = async (slug: string) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Sample data for the quesadilla recipe
  return {
    id: 1,
    title: "Breakfast Quesadilla with Salsa",
    type: "Breakfast",
    prepTime: "15 MIN",
    calories: "420",
    servings: 2,
    diet: "Vegetarian",
    image: "/meals/quesadilla.jpg",
    slug: "breakfast-quesadilla-with-salsa",
    description: "A protein-packed breakfast quesadilla with eggs, cheese, and fresh vegetables served with homemade salsa.",
    nutritionInfo: {
      protein: "22g",
      fat: "18g",
      netCarbs: "32g",
      fiber: "5g",
      sugar: "3g"
    },
    dietLabels: ["VEGETARIAN", "HIGH PROTEIN"],
    ingredients: [
      { amount: "4", unit: "large", name: "eggs", alternative: "or egg whites for lower fat" },
      { amount: "1", unit: "tbsp", name: "olive oil" },
      { amount: "1/2", unit: "cup", name: "bell peppers, diced", alternative: "any color" },
      { amount: "1/4", unit: "cup", name: "red onion, finely chopped" },
      { amount: "2", unit: "medium", name: "whole wheat tortillas", alternative: "or corn tortillas for gluten-free" },
      { amount: "1/2", "unit": "cup", name: "cheddar cheese, shredded", alternative: "or dairy-free alternative" },
      { amount: "1", unit: "", name: "avocado, sliced" },
      { amount: "1/4", unit: "cup", name: "fresh cilantro, chopped", alternative: "optional" },
      { amount: "1/2", unit: "cup", name: "salsa", alternative: "homemade or store-bought" },
      { amount: "", unit: "", name: "Salt and pepper to taste" }
    ],
    directions: [
      "In a bowl, whisk the eggs with a pinch of salt and pepper.",
      "Heat olive oil in a non-stick pan over medium heat. Add bell peppers and onions, sauté until softened, about 3-4 minutes.",
      "Pour the beaten eggs into the pan with the vegetables and scramble until just cooked through but still slightly moist.",
      "Warm the tortillas in a separate clean pan for about 30 seconds on each side.",
      "Place half of the scrambled egg mixture on each tortilla and sprinkle with cheese.",
      "Fold the tortillas in half and press gently. Cook for 1-2 minutes on each side until golden and crispy.",
      "Serve immediately with sliced avocado, fresh cilantro, and salsa on the side."
    ]
  };
};

const getRecommendedMeals = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));

  return [
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
      id: 5,
      title: "Paleo Banana Pancakes",
      type: "Breakfast",
      prepTime: "15 MIN",
      calories: "320",
      diet: "Paleo",
      image: "/meals/pancakes.jpg",
      slug: "paleo-banana-pancakes"
    },
    {
      id: 7,
      title: "Protein Energy Balls",
      type: "Snacks",
      prepTime: "10 MIN",
      calories: "180",
      diet: "Vegetarian",
      image: "/meals/energyballs.jpg",
      slug: "protein-energy-balls"
    }
  ];
};

interface MealDetailPageProps {
  params: {
    slug: string;
  };
}

// Separate the main content into a new async component
// This component will fetch the meal data
async function MealContent({ slug }: { slug: string }) {
  const meal = await getMealBySlug(slug);

  // In a client component, we'd use state for tab switching
  // For server component, we're just showing the structure
  const activeTab: "ingredients" | "directions" = "ingredients"; // This would be state in a client component

  return (
    <>
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
            <Link href="/meals" className="text-black hover:text-[#5932EA]">Meals</Link>
            <svg className="mx-2 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </li>
          <li className="text-[#5932EA] font-medium truncate">{meal.title}</li>
        </ol>
      </nav>

      {/* Recipe Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4">{meal.title}</h1>

        {/* Diet Labels */}
        <div className="flex flex-wrap gap-2 mb-4">
          {meal.dietLabels.map((label) => (
            <span key={label} className="bg-[#5932EA] bg-opacity-10 text-white text-xs font-bold px-2 py-1 rounded">
              {label}
            </span>
          ))}
        </div>

        <p className="text-black text-lg mb-4">{meal.description}</p>

        {/* Recipe Meta Info */}
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <IoTimeOutline className="mr-1 text-[#5932EA]" size={18} />
            <span className="text-black font-medium">{meal.prepTime} Prep Time</span>
          </div>
          <div className="flex items-center">
            <BsFire className="mr-1 text-[#5932EA]" size={18} />
            <span className="text-black font-medium">{meal.calories} Calories</span>
          </div>
          <div className="flex items-center">
            <span className="text-black font-medium">{meal.servings} Servings</span>
          </div>
        </div>
      </div>

      {/* Recipe Image and Nutrition */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="relative rounded-lg overflow-hidden h-80 shadow-md">
          <Image
            src={meal.image}
            alt={meal.title}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-black">Nutrition Information</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
              <TbMeat className="text-[#5932EA] mb-1" size={24} />
              <span className="text-sm text-black">Protein</span>
              <span className="text-lg font-bold text-black">{meal.nutritionInfo.protein}</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
              <GiAvocado className="text-[#5932EA] mb-1" size={24} />
              <span className="text-sm text-black">Fat</span>
              <span className="text-lg font-bold text-black">{meal.nutritionInfo.fat}</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
              <LuWheat className="text-[#5932EA] mb-1" size={24} />
              <span className="text-sm text-black">Net Carbs</span>
              <span className="text-lg font-bold text-black">{meal.nutritionInfo.netCarbs}</span>
            </div>
          </div>
          <div className="mt-4 text-sm text-black">
            <p>Fiber: {meal.nutritionInfo.fiber} • Sugar: {meal.nutritionInfo.sugar}</p>
          </div>
        </div>
      </div>

      {/* Recipe Tabs */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="flex border-b">
          <button
            className={`flex-1 py-4 font-medium text-center ${
              activeTab === 'ingredients'
                ? 'text-[#5932EA] border-b-2 border-[#5932EA]'
                : 'text-black hover:text-[#5932EA]'
            }`}
          >
            Ingredients
          </button>
          <button
            className={`flex-1 py-4 font-medium text-center ${
              activeTab === 'directions'
                ? 'text-[#5932EA] border-b-2 border-[#5932EA]'
                : 'text-black hover:text-[#5932EA]'
            }`}
          >
            Directions
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'ingredients' ? (
            <ul className="space-y-3">
              {meal.ingredients.map((ingredient, index) => (
                <li key={index} className="flex text-black">
                  <span className="font-medium mr-2 min-w-[80px]">
                    {ingredient.amount} {ingredient.unit}
                  </span>
                  <span>
                    {ingredient.name}
                    {ingredient.alternative && (
                      <span className="text-gray-500 text-sm ml-1">({ingredient.alternative})</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <ol className="space-y-4 list-decimal list-inside">
              {meal.directions.map((step, index) => (
                <li key={index} className="text-black">{step}</li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </>
  );
}

// Component for recommended meals (can also be wrapped in Suspense if it fetches data)
async function RecommendedMealsComponent() {
  const recommendedMeals = await getRecommendedMeals();
  return (
    <RecommendationsSection
      title="More Recipes You Might Like"
      items={recommendedMeals}
      type="meal"
    />
  );
}


export default function MealDetailPage({ params }: MealDetailPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Suspense fallback={<div className="text-center py-10">Loading meal details...</div>}>
          <MealContent slug={params.slug} />
        </Suspense>

        {/* You can wrap other sections in Suspense as well if their data fetching is independent */}
        <Suspense fallback={<div className="text-center py-5">Loading recommendations...</div>}>
          <RecommendedMealsComponent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}