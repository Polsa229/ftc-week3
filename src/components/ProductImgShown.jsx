import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function ProductImgShown({ images }) {
  const [activeItem, setActiveItem] = useState(0);
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [images]);

  // Scroll programmatique
  const scrollBy = (direction) => {
    if (carousel.current) {
      const scrollAmount = 120;
      carousel.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Navigation clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        // setActiveItem((prev) => Math.max(prev - 1, 0))
        setActiveItem((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        scrollBy("left");
      } else if (e.key === "ArrowRight") {
        setActiveItem((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        scrollBy("right");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images]);

  return (
    <motion.div
      layoutId="activeItems"
      className="rounded-md w-full p-2 pb-4 gap-2 items-center cursor-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Image principale */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.figure key={activeItem} className="dark:bg-gray-900/60">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <div className="relative">
              <img
                src={images[activeItem]}
                alt="preview_img"
                className="object-fit w-full h-[523px] md:h-[476px] rounded-md"
              />

              {/* Chevron navigation */}
              <div className="absolute top-0 h-full w-full z-10 flex justify-between items-center px-2">
                <button
                  onClick={() => {
                    setActiveItem((prev) =>
                      prev === 0 ? images.length - 1 : prev - 1
                    );
                    scrollBy("left");
                  }}
                  className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
                >
                  <IoChevronBack className="w-5 h-5 text-gray-700" />
                </button>

                <button
                  onClick={() => {
                    setActiveItem((prev) =>
                      prev === images.length - 1 ? 0 : prev + 1
                    );
                    scrollBy("right");
                  }}
                  className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
                >
                  <IoChevronForward className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.figure>
      </AnimatePresence>

      {/* Miniatures scrollables */}
      <motion.div className="w-full mt-4 mx-auto overflow-hidden rounded-md">
        <motion.div
          ref={carousel}
          drag="x"
          dragElastic={0.2}
          dragConstraints={{ right: 0, left: -width }}
          dragTransition={{ bounceDamping: 30 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex gap-2"
        >
          {images.slice(0, 8).map((itemData, index) => (
            <motion.div
              key={index}
              className="relative p-1 flex-shrink-0"
              onClick={() => setActiveItem(index)}
            >
              <img
                src={itemData}
                alt="img"
                className={`w-28 h-16 object-cover cursor-pointer rounded-md pointer-events-none ${
                  index === activeItem ? "border-2 border-[#F1D092]" : ""
                }`}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ProductImgShown;
