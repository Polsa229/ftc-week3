// @flow strict

import * as React from "react";
import { Link } from "react-router-dom";
import { dogs } from "../data/categories";
import ProductCard from "./ProductCard";
import { IoChevronForward } from "react-icons/io5";

function NewsSection() {
  const items = React.useMemo(() => dogs.slice(0, 8), []);

  return (
    <section className="h-full w-full py-12 px-4">
      <div className=" flex justify-between items-center w-full">
        <div>
          <p className="text-[14px] lg:text-[16px] font-[500]">Whats new?</p>
          <h2 className="text-[20px] lg:text-[24px] font-[700] text-secondary mb-6">
            Take a look at some of our pets
          </h2>
        </div>
        <Link
          to={"/products"}
          className="hidden lg:flex border border-secondary lg:w-full md:max-w-[187px] text-secondary px-4 py-2 rounded-full hover:bg-secondary hover:text-primary-100 transition  items-center justify-center"
        >
          <span>View more</span>
          <IoChevronForward className="ml-2 h-6 w-6" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4">
        {items.map(async (item, index) => (
          <ProductCard key={index} item={item} idKey="sku" />
        ))}
      </div>

      <div className=" flex justify-center items-center w-full">
        <Link
          to={"/products"}
          className="flex lg:hidden  border border-secondary lg:w-full md:max-w-[187px] text-secondary px-4 py-2 rounded-full hover:bg-secondary hover:text-primary-100 transition  items-center justify-center"
        >
          <span>View more</span>
          <IoChevronForward className="ml-2 h-6 w-6" />
        </Link>
      </div>
    </section>
  );
}

export default NewsSection;
