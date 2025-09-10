// @flow strict

import * as React from "react";
import BannerAdoption from "../assets/BannerAdoption.png";
import dogLeg from "../assets/DogLeg.png";
import { MdOutlinePlayCircle } from "react-icons/md";
import { Link } from "react-router-dom";

function BannerAdoptionSection() {
  return (
    <section className="w-full hidden md:flex flex-col md:flex-row items-center justify-between p-4">
      <div className="relative w-full flex flex-col md:grid md:grid-cols-2 items-center justify-between bg-gradient-to-br bg-[#FFB775] overflow-hidden rounded-[20px] md:rounded-[20px] ">
        {/* Texte */}
        <div className="text-secondary-80 relative h-full w-full flex justify-start">
          <div className="h-full w-full bg-primary absolute z-10 rounded-tl-[99px] rotate-[154.77deg] hidden md:flex" />
          <div className="h-full w-[50%]  bg-primary absolute z-20 hidden md:flex" />

          <div className="relative p-6 z-20 flex justify-center items-center w-full ">
            <div className="pl-6">
              <div className="flex gap-4">
                <h1 className="text-[52px] font-[800]  leading-[60px] md:leading-[68px]">
                  Adoption
                </h1>
                <img src={dogLeg} alt="" className="object-contain" />
              </div>

              <h2 className="w-full text-[36px] font-[700] ld:font-[700] mb-4">
                We need help. so do they.
              </h2>

              <div className="w-[75%]">
                <p className="text-secondary-300 text-[12px] font-[500] mb-6">
                  Adopt a pet and give it a home, <br />
                  it will be love you back unconditionally.à
                </p>
              </div>

              <div className="w-full flex justify-start gap-4 mt-4">
                <Link
                  to="/products"
                  className="bg-secondary text-primary h-[48px] flex items-center px-4 py-2 rounded-full hover:bg-primary-100 hover:text-secondary transition"
                >
                  Explore Now
                </Link>
                <button className="border border-secondary text-secondary px-4 py-2 rounded-full hover:bg-secondary hover:text-primary-100 transition flex items-center">
                  View Intro <MdOutlinePlayCircle className="ml-2 h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex w-full md:w-full h-full justify-center items-end ">
          <div
            className="h-[90%] w-[130%] opacity-30 absolute z-10 rounded-bl-[99px] rotate-[151.77deg] -bottom-[200px] -right-[50px]"
            style={{
              background:
                "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
            }}
          />

          <img
            src={BannerAdoption}
            alt="Woman with dog"
            className="object-contain rounded-xl  transition-opacity duration-1000 ease-in-out relative z-20 rotate-[55.93deg] scale-x-[-1]"
            style={{ borderRadius: "11.79px" }}
          />
        </div>
      </div>
    </section>
  );
}

export default BannerAdoptionSection;
