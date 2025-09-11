// @flow strict

import * as React from "react";
import HeroImage1 from "../assets/BannerImages.png";
import { MdOutlinePlayCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import HeroDogsImage from "../assets/HeroDogImage.png";

function BannerCategorySection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-4">
      <div className="flex flex-col md:grid md:grid-cols-2 items-center justify-between bg-gradient-to-br bg-primary md:bg-secondary overflow-hidden rounded-[20px] relative md:rounded-[20px] ">
        {/* Image lg*/}
        <div className="hidden md:flex w-full md:w-full h-full justify-center items-end  relative overflow-hidden  ">
          <div className="absolute h-full w-full z-0 -bottom-[180px] -left-[50px] rounded-tl-[99px] rotate-[28.25deg] bg-secondary-80" />
          <img
            src={HeroDogsImage}
            alt="dogs"
            className="object-contain rounded-xl w-[513px] h-[342px] transition-opacity duration-1000 ease-in-out relative z-20"
            style={{ borderRadius: "11.79px" }}
          />
        </div>

        {/* Texte */}
        <div className="text-secondary-80 relative h-full w-full flex justify-end">
          <div className="h-full w-full bg-primary absolute z-10 rotate-[25.23deg] rounded-bl-[99px] -top-[50px] -left-[100px] hidden md:flex" />
          <div className="h-full w-[50%]  bg-primary absolute ml-[500px] z-20 hidden md:flex" />

          <div className="relative p-6 z-20 xl:w-[70%] ">
            <div className="w-full justify-end p-2">
              <h1 className="w-full text-center md:text-end text-[36px] md:text-[52px] font-[700] md:font-[800]  leading-[60px] md:leading-[68px]">
                One More Friend
              </h1>
              <div className="relative">
                <h2 className="w-full text-start md:text-end text-[24px] md:text-[36px] font-[700] ld:font-[700] mb-4">
                  Thousands More Fun!
                </h2>
                <div
                  className="absolute bg-secondary pointer-events-none z-10 rotate-[9.35deg] bottom-0 right-0 lg:left-0"
                  style={{
                    width: "21px",
                    height: "21px",
                    opacity: 1,
                    // top: "30px",
                    // top: "-50px",
                    borderRadius: "6px",
                  }}
                />
              </div>
              <p className="text-secondary-300 text-center md:text-end text-[12px] font-[500] mb-6">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </p>
              <div className="w-full flex justify-end gap-4 mt-4">
                <button className="border border-secondary text-secondary px-4 py-2 rounded-full hover:bg-secondary hover:text-primary-100 transition flex items-center">
                  View Intro <MdOutlinePlayCircle className="ml-2 h-6 w-6" />
                </button>
                <Link
                  to="/products"
                  className="bg-secondary text-primary h-[48px] flex items-center px-4 py-2 rounded-full hover:bg-primary-100 hover:text-secondary transition"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image sm */}
        <div className="flex md:hidden w-full md:w-[50%] justify-center items-end md:mt-0 relative z-0">
          {/* <div className="absolute h-[50%] w-full z-10 -top-[70px] rounded-br-[75px] rotate-[11.41deg] bg-primary" /> */}
          <img
            src={HeroDogsImage} // ou HeroImage2
            alt="Woman with dog"
            className="object-fit rounded-xl w-full max-w-[500px] transition-opacity duration-1000 ease-in-out relative z-30"
            style={{ borderRadius: "11.79px" }}
          />
          <div className="absolute h-[50%] w-full z-0  bg-secondary" />
        </div>
      </div>
    </section>
  );
}

export default BannerCategorySection;
