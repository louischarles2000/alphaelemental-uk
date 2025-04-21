import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function MealsPage() {
  // Diet categories for filter
  const dietCategories = ["All", "Vegetarian", "Keto", "Mediterranean", "Vegan", "Paleo", "Low Carb"];
  
  // Meal types for filter
  const mealTypes = ["All", "Breakfast", "Lunch", "Dinner", "Snacks"];
  
  const meals = [
    {
      id: 1,
      title: "Breakfast Quesadilla with Salsa",
      type: "Breakfast",
      prepTime: "15 MIN",
      calories: "420",
      diet: "Vegetarian",
      image: "/meals/quesadilla.jpg",
      slug: "breakfast-quesadilla-with-salsa",
      description: "A protein-packed breakfast quesadilla with eggs, cheese, and fresh vegetables served with homemade salsa."
    },
    {
      id: 2,
      title: "Mediterranean Lunch Bowl",
      type: "Lunch",
      prepTime: "20 MIN",
      calories: "550",
      diet: "Mediterranean",
      image: "/meals/mediterranean.jpg",
      slug: "mediterranean-lunch-bowl",
      description: "A nutrient-rich bowl with quinoa, chickpeas, cucumber, tomatoes, feta cheese, and olive oil dressing."
    },
    {
      id: 3,
      title: "Keto Dinner Platter",
      type: "Dinner",
      prepTime: "25 MIN",
      calories: "650",
      diet: "Keto",
      image: "/meals/keto.jpg",
      slug: "keto-dinner-platter",
      description: "A satisfying low-carb dinner with grilled chicken, asparagus, and avocado with a lemon herb sauce."
    },
    {
      id: 4,
      title: "Vegan Buddha Bowl",
      type: "Lunch",
      prepTime: "20 MIN",
      calories: "480",
      diet: "Vegan",
      image: "/meals/vegan.jpg",
      slug: "vegan-buddha-bowl",
      description: "A colorful bowl packed with roasted sweet potatoes, chickpeas, kale, and tahini dressing."
    },
    {
      id: 5,
      title: "Paleo Banana Pancakes",
      type: "Breakfast",
      prepTime: "15 MIN",
      calories: "320",
      diet: "Paleo",
      image: "/meals/pancakes.jpg",
      slug: "paleo-banana-pancakes",
      description: "Fluffy grain-free pancakes made with banana, eggs, and almond flour topped with fresh berries."
    },
    {
      id: 6,
      title: "Low Carb Zucchini Lasagna",
      type: "Dinner",
      prepTime: "40 MIN",
      calories: "520",
      diet: "Low Carb",
      image: "/meals/zucchini.jpg",
      slug: "low-carb-zucchini-lasagna",
      description: "A delicious lasagna made with zucchini instead of pasta, layered with ground turkey, ricotta, and marinara sauce."
    },
    {
      id: 7,
      title: "Protein Energy Balls",
      type: "Snacks",
      prepTime: "10 MIN",
      calories: "180",
      diet: "Vegetarian",
      image: "/meals/energyballs.jpg",
      slug: "protein-energy-balls",
      description: "No-bake energy balls made with oats, peanut butter, protein powder, and dark chocolate chips."
    },
    {
      id: 8,
      title: "Greek Yogurt Parfait",
      type: "Breakfast",
      prepTime: "5 MIN",
      calories: "290",
      diet: "Low Carb",
      image: "/meals/parfait.jpg",
      slug: "greek-yogurt-parfait",
      description: "Layers of Greek yogurt, fresh berries, and low-carb granola for a quick and satisfying breakfast."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <header className="bg-[#5932EA] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <h1 className="text-4xl font-extrabold mb-4">Healthy Meal Plans</h1>
          <p className="text-lg max-w-3xl">
            Discover nutritious, delicious recipes tailored to your dietary preferences and fitness goals. Our meal plans take the guesswork out of healthy eating.
          </p>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-3 text-black">Dietary Preferences</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {dietCategories.map((category) => (
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
          
          <h2 className="text-lg font-semibold mb-3 text-black">Meal Type</h2>
          <div className="flex flex-wrap gap-2">
            {mealTypes.map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  type === 'All' 
                    ? 'bg-[#5932EA] text-white' 
                    : 'bg-white text-black border border-gray-200 hover:bg-[#5932EA] hover:text-white hover:border-transparent'
                } transition-colors duration-200`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        
        {/* Meals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {meals.map((meal) => (
            <Link href={`/activities/recipes/${meal.slug}`} key={meal.id}>
              <div className="bg-white rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
                <div className="h-48 w-full relative">
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
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-black">{meal.type}</span>
                    <span className="text-xs font-medium text-black">{meal.prepTime} • {meal.calories} cal</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">{meal.title}</h3>
                  <p className="text-sm text-black mt-auto line-clamp-2">{meal.description}</p>
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
