import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedWorkouts from "../components/FeaturedWorkouts";
import MealPlans from "../components/MealPlans";
import SuccessStories from "../components/SuccessStories";
import SubscriptionPlans from "../components/SubscriptionPlans";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      
      <main className="flex flex-col">
        <HeroSection />
        
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl text-black font-bold text-center mb-12">Featured Workouts</h2>
          <FeaturedWorkouts />
        </section>
        
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl text-black font-bold text-center mb-12">Personalized Meal Plans</h2>
            <MealPlans />
          </div>
        </section>
        
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl text-black font-bold text-center mb-12">Success Stories</h2>
          <SuccessStories />
        </section>
        
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl text-black font-bold text-center mb-12">Choose Your Plan</h2>
            <SubscriptionPlans />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
