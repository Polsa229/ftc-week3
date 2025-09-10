import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children, delay = 0, zIndex = 10 }) => {
  const controls = useAnimation();

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.8,
          rotate: -5,
          y: 50,
          zIndex,
        },
        visible: {
          opacity: 1,
          scale: 1,
          rotate: 0,
          y: 0,
          zIndex,
          transition: {
            duration: 0.8,
            ease: [0.175, 0.885, 0.32, 1.275],
            delay,
          },
        },
      }}
      style={{ position: "relative", zIndex }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
