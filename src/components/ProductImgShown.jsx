import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GoChevronLeft, GoInfo } from "react-icons/go";

function ProductImgShown({ images }) {
  const [activeItem, setActiveItem] = useState(0);
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [carousel]);

  return (
    <>
      <motion.div
        layoutId={"activeItems"}
        className="rounded-md w-full pb-4 gap-2 items-center mx-auto cursor-auto"
        onClick={(e) => e.stopPropagation()}
      >

        <>
          {images.map((image, index) => (
            <AnimatePresence key={index} mode="popLayout" initial={false}>
              {index === activeItem && (
                <motion.figure
                  key={index}
                  className="dark:bg-gray-900/60 bg-gray-100/60 border  rounded-md backdrop-blur-sm"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        type: "ease",
                        ease: "easeInOut",
                        duration: 0.3,
                        delay: 0.2,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        type: "ease",
                        ease: "easeInOut",
                        duration: 0.2,
                      },
                    }}
                  >
                    <img
                      src={image}
                      alt="preview_img"
                      className=" object-cover w-[414px] md:w-[560px] h-[523px] md:h-[476px]  mx-auto rounded-md"
                    />
                  </motion.div>
                </motion.figure>
              )}
            </AnimatePresence>
          ))}
        </>

        <motion.div className="w-full mt-4 mx-auto overflow-hidden rounded-md">
          <motion.div
            ref={carousel}
            drag="x"
            dragElastic={0.2}
            dragConstraints={{ right: 0, left: -width }}
            dragTransition={{ bounceDamping: 30 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex"
          >
            {images.slice(0, 8)?.map((itemData, index) => {
              return (
                <motion.div
                  key={index}
                  className={`relative p-1 flex-shrink-0`}
                  onClick={() => setActiveItem(index)}
                >
                  <img
                    src={itemData}
                    width={400}
                    height={400}
                    alt="img"
                    className={`w-28 h-16 object-cover cursor-pointer relative z-[2] rounded-md pointer-events-none ${
                      index === activeItem ? "border-2 border-[#F1D092]" : ""
                    } `}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
export default ProductImgShown;
