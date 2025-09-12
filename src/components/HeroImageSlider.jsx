import { useEffect, useState } from "react";
import HeroImage1 from "../assets/WomenWithDogHeroImage.png";
import HeroImage2 from "../assets/HeroDogImage.png";

const images = [HeroImage1, HeroImage2];

function HeroImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleChangeSlide = () => {
    if (!isMobile) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Détecter si l'écran est mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Défilement automatique uniquement sur mobile
  useEffect(() => {
    if (!isMobile) {
      setCurrentIndex(0);
      return;
    }
    const interval = setInterval(() => {
      handleChangeSlide();
    }, 5000); // 5 secondes

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <img
      onClick={handleChangeSlide}
      src={images[currentIndex]}
      alt=""
      className="object-fit rounded-xl z-10 relative w-full h-full transition-opacity duration-1000 ease-in-out cursor-pointer"
      style={{
        borderRadius: "11.79px",
      }}
    />
  );
}

export default HeroImageSlider;
