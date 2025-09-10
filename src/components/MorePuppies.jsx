// @flow strict

import * as React from "react";
import { dogs } from "../data/categories";
import ProductCard from "./ProductCard";

function MorePuppies() {
  const items = React.useMemo(() => dogs.slice(0, 8), []);

  return (
    <section className="h-full w-full py-12 px-4">
      <div className=" flex justify-between items-center w-full">
        <div className="text-start">
          <p className="text-[14px] lg:text-[16px] font-[500]">Whats new?</p>
          <h2 className="text-[20px] lg:text-[24px] font-[700] text-secondary mb-6">
            See more puppies
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4">
        {items.map(async (item, index) => (
          <ProductCard key={index} item={item} idKey="sku" />
        ))}
      </div>
    </section>
  );
}

export default MorePuppies;
