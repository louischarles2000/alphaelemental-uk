'use client'
import { useStore } from "../../HOC/Context/StoreProvider";
import RelatedBundleCard from "./RelatedBundleCard";

export default function RelatedBundles({ exceptBundleId }: { exceptBundleId?: number }) {
  const { featuredProducts: bundles, loading } = useStore();

  if (loading || bundles.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-black mb-8">You May Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bundles.filter(bundle => bundle.id !== exceptBundleId).map((bundle) => (
          <RelatedBundleCard key={bundle.id} bundle={bundle}/>
        ))}
      </div>
    </div>
  );
} 