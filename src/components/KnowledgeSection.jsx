// @flow strict

import * as React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { IoChevronForward } from "react-icons/io5";
import knowledge1 from "../assets/knowledge/1.png";
import knowledge2 from "../assets/knowledge/2.png";
import knowledge3 from "../assets/knowledge/3.png";

const ArticleCard = ({ title, description, image }) => (
  <Link
    to="/#"
    className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm p-2"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <span className="text-[10px] font-[700] mb-2 p-1 rounded-full bg-[#00A7E7] text-[#FDFDFD] ">
        Pet knowledge
      </span>
      <h3 className="text-[16px] font-[700] mb-2 text-secondary-100">
        {title}
      </h3>
      <p className="text-[14px] font-[400] text-secondary-60">{description}</p>
    </div>
  </Link>
);

function KnowledgeSection() {
  const items = React.useMemo(
    () => [
      {
        title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
        description:
          "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
        image: knowledge1,
        link: "/articles/pomeranian",
      },
      {
        title: "Dog Diet You Need to Know",
        description:
          "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
        image: knowledge2,
        link: "/articles/dog-diet",
      },
      {
        title:
          "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
        description:
          "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
        image: knowledge3,
        link: "/articles/dog-behavior",
      },
    ],
    []
  );

  return (
    <section className="h-full w-full py-12 px-4">
      <div className=" flex justify-between items-center w-full">
        <div>
          <p className="text-[14px] lg:text-[16px] font-[500]">
            You already know ?
          </p>
          <h2 className="text-[20px] lg:text-[24px] font-[700] text-secondary mb-6">
            Useful pet knowledge
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-4">
        {items.map(async (item, index) => (
          <ArticleCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>

      <div className=" flex justify-center items-center w-full">
        <Link
          to={"/products"}
          className="flex lg:hidden  border border-secondary w-full md:max-w-[187px] text-secondary px-4 py-2 rounded-full hover:bg-secondary hover:text-primary-100 transition  items-center justify-center"
        >
          <span>View more</span>
          <IoChevronForward className="ml-2 h-6 w-6" />
        </Link>
      </div>
    </section>
  );
}

export default KnowledgeSection;
