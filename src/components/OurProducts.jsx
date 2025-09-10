// @flow strict

import * as React from "react";
import { Link } from "react-router-dom";
import { dogs } from "../data/categories";
import { IoChevronForward } from "react-icons/io5";
import productGift from "../assets/productGift.png";

import product1 from "../assets/products/1.png";
import product2 from "../assets/products/2.png";
import product3 from "../assets/products/3.png";
import product4 from "../assets/products/4.png";
import product5 from "../assets/products/5.png";
import product6 from "../assets/products/6.png";
import product7 from "../assets/products/7.png";
import product8 from "../assets/products/8.png";
import { useCurrencyStore } from "../store/currencyStore";

function ProductCard({ item }) {
  // Utilisation directe du store Zustand
  const currency = useCurrencyStore((state) => state.currency);
  const convertAmount = useCurrencyStore((state) => state.convertAmount);

  const [priceObject, setPriceObject] = React.useState({
    price: item.price,
    currency: item.currency,
  });

  React.useEffect(() => {
    const result = convertAmount(item.price);
    setPriceObject(result);
  }, [currency, item.price, convertAmount]);

  return (
    <Link
      to={"/product/" + item.sku}
      className="p-2 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-primary-80 cursor-pointer"
    >
      <div className="flex justify-center mb-4">
        {item.gallery ? (
          <img
            src={item.gallery}
            alt={item.name}
            className="w-full h-[169px]  lg:h-[264px] object-contain rounded-md"
          />
        ) : (
          <div className="w-full h-40 object-cover rounded-md bg-secondary-60" />
        )}
      </div>

      <div className="flex-col">
        <h3 className="text-[16px] font-[700] mb-2 text-secondary-100">
          {item.name}
        </h3>
        <div className="lg:flex items-center gap-2 mb-2">
          <p className="text-[12px] text-secondary-60">
            <span className="font-[500]">Product:</span>{" "}
            <span className="font-[700]">{item.category}</span>
          </p>
          {item.size && item.category && (
            <div className="w-[18px] h-[18px] rounded-full hidden lg:flex items-center justify-center">
              <div className="w-[3px] h-[3px] bg-secondary-60 rounded-full" />
            </div>
          )}
          {item.size && (
            <p className="text-[12px] text-secondary-60">
              <span className="font-[500]">Size:</span>{" "}
              <span className="font-[700]">{item.size}</span>
            </p>
          )}
        </div>

        <p className="text-[14px] font-[700] text-secondary-100 leading-[20px] mb-2">
          {priceObject.price} {priceObject.currency}
        </p>

        <div className="bg-primary text-secondary-80 flex items-center p-2 rounded-lg gap-2 mt-auto">
          <img src={productGift} alt={item.name} />
          <div className="w-[18px] h-[18px] rounded-full hidden lg:flex items-center justify-center">
            <div className="w-[3px] h-[3px] bg-secondary rounded-full" />
          </div>
          <p className="text-secondary text-[14px] font-[700]">
            Free Toy & Free Shaker
          </p>
        </div>
      </div>
    </Link>
  );
}

function OurProducts() {
  const products = React.useMemo(
    () => [
      {
        sku: "reflex-salmon-385",
        name: "Reflex Plus Adult Cat Food Salmon",
        category: "Dog Food",
        size: "385gm",
        price: 140000,
        currency: "VND",
        promotion: "Free Toy & Free Shaker",
        gallery: product1,
      },
      {
        sku: "reflex-salmon-1500",
        name: "Reflex Plus Adult Cat Food Salmon",
        category: "Cat Food",
        size: "1.5kg",
        price: 165000,
        currency: "VND",
        promotion: "Free Toy & Free Shaker",
        gallery: product2,
      },
      {
        sku: "sisal-ball-toy",
        name: "Cat Scratching Ball Toy Kitten Sisal Rope Ball",
        category: "Toy",
        size: null,
        price: 110000,
        currency: "VND",
        promotion: "Free Cat Food",
        gallery: product3,
      },
      {
        sku: "warm-nest",
        name: "Cute Pet Cat Warm Nest",
        category: "Toy",
        size: null,
        price: 410000,
        currency: "VND",
        promotion: "Free Cat Food",
        gallery: product4,
      },
      {
        sku: "omega-gold-salmon-385",
        name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
        category: "Pet Food",
        size: "385gm",
        price: 350000,
        currency: "VND",
        promotion: "Free Toy & Free Shaker",
        gallery: product5,
      },
      {
        sku: "cowboy-rider-costume",
        name: "Costumes Fashion Pet Clother Cowboy Rider",
        category: "Costume",
        size: "1.5kg",
        price: 500000,
        currency: "VND",
        promotion: "Free Toy & Free Shaker",
        gallery: product6,
      },
      {
        sku: "chicken-headband",
        name: "Costumes Chicken Drumstick Headband",
        category: "Costume",
        size: null,
        price: 400000,
        currency: "VND",
        promotion: "Free Cat Food",
        gallery: product7,
      },
      {
        sku: "plush-pet-toy",
        name: "Plush Pet Toy",
        category: "Toy",
        size: null,
        price: 250000,
        currency: "VND",
        promotion: "Free Toy & Free Shaker",
        gallery: product8,
      },
    ],
    []
  );

  return (
    <section className="hidden lg:block h-full w-full py-12 px-4">
      <div className=" flex justify-between items-center w-full">
        <div>
          <p className="text-[14px] lg:text-[16px] font-[500]">
            Hard to choose right products for your pets?
          </p>
          <h2 className="text-[20px] lg:text-[24px] font-[700] text-secondary mb-6">
            Our Products
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
        {products.map(async (item, index) => (
          <ProductCard key={index} item={item} idKey="sku" />
        ))}
      </div>
    </section>
  );
}

export default OurProducts;
