// @flow strict

import { Link } from "react-router-dom";
import HeroImageSlider from "./HeroImageSlider";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

function HeroSection() {
  return (
    <section
      className="flex-1 max-w-screen h-[623px]  md:max-h-[695px] flex justify-end items-start relative p-2 pb-0 overflow-hidden "
      style={{
        background:
          "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
      }}
    >
      <div className="flex-col h-full  grid grid-12 md:grid-cols-2 gap-6 justify-center items-end relative overflow-hidden p-2 pb-0">
        {/* <div className="absolute -top-[675px] -left-[248px] md:-left-[348px] h-full w-full pointer-events-none z-0">
          <div className="rounded-[61px] md:rounded-[99px] w-[635px] h-[635px] rotate-[19.42deg] md:rotate-[25.23 deg] opacity-1 bg-primary-100 z-0 overflow-auto" />
        </div> */}

        <div className="h-full flex justify-center items-center relative">
          <div className="text-secondary-80 z-10">
            <div className="relative text-secondary capitalize leading-[60px]  font-extrabold md:font-bold ">
              <div
                className="absolute bg-primary-100 pointer-events-none z-0 hidden md:block"
                style={{
                  width: "67.1px",
                  height: "67.1px",
                  transform: "rotate(-25.23deg)",
                  opacity: 1,
                  borderRadius: "20px",
                  top: "0",
                  left: "0",
                }}
              />

              {/* Texte */}
              <div className="relative flex justify-end">
                <span className="w-full text-start z-10 block text-[42px] lg:text-[60px] m-0 ">
                  One more friend
                </span>
                <div
                  className="md:hidden absolute bg-primary-100 pointer-events-none z-0 rotate-[25.23deg] -bottom-2 right-2"
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
              <span className="pr-[30px] text-[26px] lg:text-[46px]  relative">
                <span className="z-10 ">Thousands more fun!</span>
                <div
                  className="md:hidden absolute bg-primary-100 pointer-events-none z-0 rotate-[25.23deg] bottom-2 right-0 md:left-0"
                  style={{
                    width: "21px",
                    height: "21px",
                    opacity: 1,
                    // top: "30px",
                    // top: "-50px",
                    borderRadius: "6px",
                  }}
                />
                <div
                  className="md:hidden absolute bg-secondary pointer-events-none z-0 rotate-[9.35deg] bottom-0 right-0 md:left-0"
                  style={{
                    width: "21px",
                    height: "21px",
                    opacity: 1,
                    // top: "30px",
                    // top: "-50px",
                    borderRadius: "6px",
                  }}
                />
              </span>
            </div>

            <p className="text-secondary-300 font-[500] text-base text-[12px] lg:text-[16px] w-full max-w-[621px] mt-[12px] md:mt-[24px]">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>

            <div className="gap-[24px] flex flex-row  md:justify-start items-center mt-[24px] lg:mt-[40px] w-full max-w-[421px]">
              <button
                className="border border-secondary md:w-full md:max-w-[187px] text-secondary px-4 py-2 rounded-full hover:bg-secondary hover:text-primary-100 transition flex items-center justify-center"
                // onClick={() => scrollToSection(navigate, "/", "pricing")}
              >
                <span>View Intro</span>
                <IoChevronForwardCircleOutline className="ml-2 h-6 w-6" />
              </button>
              <Link
                to={"/products"}
                className="bg-secondary md:max-w-[187px] md:w-full text-center text-primary hover:bg-primary-100 hover:text-secondary px-4 py-2 rounded-full transition"
              >
                Explore Now
              </Link>
            </div>
          </div>
          <div className="absolute md:-bottom-[595px] bottom- [450px] w-full hidden md:flex justify-end z-0">
            <div className="rounded-[61px] md:rounded-[99px] w-[635px] h-[635px] rotate-[19.42deg] md:rotate-[56.47 deg] opacity-1 bg-primary-100 z-0 overflow-auto" />
          </div>
        </div>

        <div className="mt-auto h-full flex flex-col items-end justify-end md:relative">
          <div className="absolute lg:text-right p-4 h-full w-full flex justify-start items-start ">
            <div
              className="hidden md:flex absolute bg-primary-100 pointer-events-none  z-10 -rotate-[-25.23deg] top-[55px] md:top-[30px] right-10 md:left-[50px]"
              style={{
                width: "15px",
                height: "15px",
                // top: "-10px",
                // top: "-150px",
                // left: "30px",
                opacity: 1,
                borderRadius: "6px",
              }}
            />

            <div
              className="hidden md:flex absolute bg-primary-100  pointer-events-none z-10 -rotate-[-25.23deg] top-[90px] md:top-[90px] right-[80px] md:left-0"
              style={{
                width: "21px",
                height: "21px",
                // top: "20px",
                // top: "-60px",
                opacity: 1,
                borderRadius: "6px",
              }}
            />

            <div
              className="hidden md:flex absolute bg-secondary pointer-events-none z-10 rotate-[9.35deg] top-[100px] md:top-[100px] right-[80px] md:left-0"
              style={{
                width: "21px",
                height: "21px",
                opacity: 1,
                // top: "30px",
                // top: "-50px",
                borderRadius: "6px",
              }}
            />

            <div
              className="absolute bg-secondary pointer-events-none z-10 h-[528px] w-[528px] left-[10px] md:h-[635px] md:w-[530px] rotate-[9.35deg] "
              style={{
                opacity: 1,
                borderRadius: "99px",
                bottom: "-358px",
              }}
            />

            <div
              className="absolute bg-primary-100 pointer-events-none h-[528px] w-[528px] md:h-[635px] md:w-[635px] z-10 -rotate-[-25.23deg]"
              style={{
                opacity: 1,
                borderRadius: "99px",
                bottom: "-338px",
              }}
            />
          </div>

          {/* Image en bas */}
          <HeroImageSlider />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
