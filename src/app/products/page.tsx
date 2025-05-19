import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductsList from "@/components/Screens/ProductsScreen/ProductsList";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-black mb-4">All Products</h1>
            <p className="text-gray-600 max-w-3xl">
              Browse our complete collection of digital marketing resources designed to help you convert more visitors into paying customers.
            </p>
          </div>
          <ProductsList />
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 