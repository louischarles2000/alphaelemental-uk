'use client'
import { useStore } from "./HOC/Context/StoreProvider";
import BundleCard from "./BundleCard";

export default function BestSellingBundles({ exceptBundleId }: { exceptBundleId?: number }) {
  const { featuredProducts: bundles } = useStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {bundles.filter(bundle => bundle.id !== exceptBundleId).map((bundle) => (
        <BundleCard key={bundle.id} bundle={bundle}/>
      ))}
    </div>
  );
} 