'use client'
import { ProductType } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import { IMAGE_PREFIX } from "@/lib/constants";
import SavingFormat from "@/components/SavingFormat";
import { formatDecodedString } from "@/lib/utils";
import PriceFormat from "@/components/PriceFormat";

export default function RelatedBundleCard({ bundle }: { bundle: ProductType }) {

  return (
    <Link href={`/bundles/${bundle.id}?slug=${bundle.title.split(' ').join('-').toLowerCase()}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
        <div className="relative h-48">
          <Image
            src={bundle.image ? `${IMAGE_PREFIX}/${bundle.image}` : '/bundles/bundles.jpg'}
            alt={bundle.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-4 right-4 bg-[var(--accent)] text-black font-bold text-xs rounded-full px-3 py-1">
            Save <SavingFormat price={bundle.price} discount_price={bundle.discount_price || bundle.price} plain/>
          </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div>
            <h3 className="font-bold text-black mb-2">{bundle.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">{formatDecodedString(bundle.meta_description || bundle.description, 100)}</p>
          </div>
          <div className="mt-auto pt-4 flex justify-between items-center">
            <div>
              <span className="text-gray-500 line-through text-sm"><PriceFormat amount={bundle.price}/></span>
              <span className="text-black font-bold ml-2"><PriceFormat amount={bundle.discount_price || bundle.price}/></span>
            </div>
            <span className="text-[var(--primary)] text-sm font-medium">
              View Bundle
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
} 