// @flow strict

import { Link } from "react-router-dom";
import HeroImageSlider from "./HeroImageSlider";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

function HeroSection() {
  return (
    <section
      className="flex-1 max-w-screen h-[623px] lg:h-auto  lg:max-h-[695px] flex justify-end items-start relative p-2 pb-0 overflow-hidden "
      style={{
        background:
          "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
      }}
    >
      <div className="flex-col h-full  grid grid-12 lg:grid-cols-2 gap-6 justify-center items-end relative overflow-hidden p-2 pb-0 mt-10">
        {/* <div className="absolute -top-[675px] -left-[248px] lg:-left-[348px] h-full w-full pointer-events-none z-0">
          <div className="rounded-[61px] lg:rounded-[99px] w-[635px] h-[635px] rotate-[19.42deg] lg:rotate-[25.23 deg] opacity-1 bg-primary-100 z-0 overflow-auto" />
        </div> */}

        <div className="h-full flex justify-center items-center relative">
          <div className="text-secondary-80 z-10">
            <div className="relative text-secondary capitalize leading-[60px]  font-extrabold lg:font-bold ">
              <div
                className="absolute bg-primary-100 pointer-events-none z-0 hidden lg:block"
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
              <span className="relative z-10 block text-[42px] lg:text-[60px]">
                One more friend
              </span>
              <span className="text-[26px] lg:text-[46px]">
                Thousands more fun!
              </span>
            </div>
            <p className="text-secondary-300 font-[500] text-base text-[12px] md:text-[24px] w-full max-w-[621px] mt-[12px] md:mt-[24px]">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>

            <div className="gap-[24px] flex flex-row md:justify-center lg:justify-start items-center mt-[24px] md:mt-[40px] w-full max-w-[421px]">
              <button
                className="border border-secondary lg:w-full md:max-w-[187px] text-secondary px-4 py-2 rounded-full hover:bg-secondary hover:text-primary-100 transition flex items-center justify-center"
                // onClick={() => scrollToSection(navigate, "/", "pricing")}
              >
                <span>View Intro</span>
                <IoChevronForwardCircleOutline className="ml-2 h-6 w-6" />
              </button>
              <Link
                to={"/products"}
                className="bg-secondary md:max-w-[187px] lg:w-full text-center text-primary hover:bg-primary-100 hover:text-secondary px-4 py-2 rounded-full transition"
              >
                Explore Now
              </Link>
            </div>
          </div>
          <div className="absolute -bottom-[450px] h-full w-full hidden lg:flex justify-end z-0">
            <div className="rounded-[61px] lg:rounded-[99px] w-[635px] h-[635px] rotate-[19.42deg] lg:rotate-[56.47 deg] opacity-1 bg-primary-100 z-0 overflow-auto" />
          </div>
        </div>

        <div className="mt-auto h-full flex flex-col items-end justify-end lg:relative">
          <div className="absolute lg:text-right p-4 h-full w-full flex justify-start items-start ">
            <div
              className="absolute bg-primary-100 pointer-events-none  z-10 -rotate-[-25.23deg] top-[55px] lg:top-[30px] right-10 lg:left-[50px]"
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
              className="absolute bg-primary-100  pointer-events-none z-10 -rotate-[-25.23deg] top-[90px] lg:top-[90px] right-[80px] lg:left-0"
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
              className="absolute bg-secondary pointer-events-none z-10 rotate-[9.35deg] top-[100px] lg:top-[100px] right-[80px] lg:left-0"
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
              className="absolute bg-secondary pointer-events-none z-10 h-[528px] w-[528px] left-[10px] lg:h-[635px] lg:w-[530px] rotate-[9.35deg] "
              style={{
                opacity: 1,
                borderRadius: "99px",
                bottom: "-358px",
              }}
            />

            <div
              className="absolute bg-primary-100 pointer-events-none h-[528px] w-[528px] lg:h-[635px] lg:w-[635px] z-10 -rotate-[-25.23deg]"
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
