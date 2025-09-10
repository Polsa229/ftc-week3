// @flow strict

import * as React from "react";
import { motion } from "framer-motion";
import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import bakers from "../assets/petSellers/bakers.png";
import butchers from "../assets/petSellers/butchers.png";
import felix from "../assets/petSellers/felix.png";
import goodBoy from "../assets/petSellers/goodBoy.png";
import pedigree from "../assets/petSellers/pedigree.png";
import sheba from "../assets/petSellers/sheba.png";
import whiskas from "../assets/petSellers/whiskas.png";
// import PartnerCarousel from "./PartnerCarousel";

function Patners() {
  const patners = React.useMemo(
    () => [sheba, whiskas, bakers, butchers, felix, goodBoy, pedigree],
    []
  );
  const carouselRef = React.useRef(null);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <section className="hidden lg:flex w-full">
      <div className="w-full py-12 px-4">
        <div className=" flex justify-between items-center w-full">
          <div>
            <p className="text-[14px] lg:text-[16px] font-[500]">
              Proud to be part of{" "}
              <span className="text-[20px] lg:text-[24px] font-[700] text-secondary mb-6">
                Pet Sellers
              </span>
            </p>
          </div>
          <Link
            to={"/products"}
            className="hidden lg:flex border border-secondary lg:w-full md:max-w-[187px] text-secondary py-2 rounded-full hover:bg-secondary hover:text-primary-100 transition  items-center justify-center"
          >
            <p className="flex">View all our sellers</p>
            <IoChevronForward className="ml-2 h-6 w-6" />
          </Link>
        </div>

        <motion.div
          ref={carouselRef}
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
          dragElastic={0.1}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex justify-around overflow-hidden max-w-screen px-4"
        >
          {patners.map((itemData, index) => (
            <motion.div key={index} className="relative p-2 flex-shrink-0">
              <img
                src={itemData}
                alt="img"
                className="w-28 h-16 object-contain rounded-md pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Patners;
