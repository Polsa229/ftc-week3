import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function ReviewsCustumerShown({ reviews }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);
  const screenWidth = window.screen.width;

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [reviews]);

  const [activeItem, setActiveItem] = useState(0);
  return (
    <motion.div
      layoutId={"reviewsItems"}
      className="rounded-md w-full pb-4 gap-2 items-center mx-auto cursor-auto "
      // onClick={(e) => e.stopPropagation()}
    >
      <motion.div className="w-full mt-4 mx-auto overflow-hidden rounded-md">
        <motion.div
          ref={carousel}
          drag="x"
          dragElastic={0.2}
          dragConstraints={{ right: 0, left: -width }}
          dragTransition={{ bounceDamping: 30 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex mx-auto"
        >
          {reviews?.map((review, index) => (
            <motion.div
              key={index}
              className={`relative p-1 flex-shrink-0`}
              // onClick={() => setActiveItem(index)}

              onViewportEnter={() => setActiveItem(index)}
            >
              <img
                src={review.photo}
                alt={review.author}
                // width={400}
                // height={400}
                className={`w-[248px] md:w-[328px] h-[340px] md:h-[353px] object-fit cursor-pointer relative  rounded-md pointer-events-none`}
              />

              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 w-full h-full bg-black/50 flex items-end p-4"
              >
                <div className="bg-primary-100 rounded-t-lg p-2 w-full">
                  <span className="block font-[500] text-secondary text-[12px] mb-1">
                    {review.author}
                    {screenWidth}
                  </span>
                  <p className="text-secondary-60 text-[12px] leading-[16px]">
                    {review.comment}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center items-center gap-2 mt-4">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-300 rounded-full ${
                index === activeItem
                  ? "w-4 h-4 bg-primary"
                  : "w-2 h-2 bg-secondary-60"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ReviewsCustumerShown;
