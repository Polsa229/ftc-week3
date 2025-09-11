// @flow strict

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { GoChevronLeft, GoInfo } from "react-icons/go";

function MobileHeaderDetailDog() {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = React.useState(false);
  // Gérer le changement de style au scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled((prev) => {
        const isScrolled = window.scrollY > 5;
        return prev !== isScrolled ? isScrolled : prev;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="md:hidden fixed top-[47px] flex justify-between container items-center z-50 ">
      <button
        className={`shadow-md shadow-black text-white  hover:bg-secondary ${
          scrolled ? "bg-secondary hover:bg-primary hover:text-secondary" : ""
        }  p-2 rounded-full flex justify-center items-center`}
        onClick={() => navigate("/products")}
      >
        <GoChevronLeft
          className=""
          style={{
            width: "25px",
            height: "25px",
          }}
        />
      </button>

      <button
        className={`shadow-md shadow-black text-white  hover:bg-secondary ${
          scrolled ? "bg-secondary hover:bg-primary hover:text-secondary" : ""
        }  p-2 rounded-full flex justify-center items-center`}
        onClick={() => {
          const element = document.getElementById("detailDog");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <GoInfo
          className="shaddow-black shadow-lg text-white"
          style={{
            width: "25px",
            height: "25px",
          }}
        />
      </button>
    </div>
  );
}

export default MobileHeaderDetailDog;
