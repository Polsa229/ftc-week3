// @flow strict

import * as React from "react";
import HeroSection from "../components/HeroSection";
// import NavigationBar from "../components/NavigationBar";
import NewsSection from "../components/NewsSection";
import BannerSection from "../components/BannerSection";
import OurProducts from "../components/OurProducts";
import AnimatedSection from "./../components/AnimatedSection";
import Patners from "../components/Patners";
import BannerAdoptionSection from "../components/BannerAdoptionSection";

function Homepage() {
  return (
    <>
      <div id="hero">
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
      </div>
      <div id="news">
        <AnimatedSection>
          <NewsSection />
        </AnimatedSection>
      </div>
      <div id="banner">
        <AnimatedSection>
          <BannerSection />
        </AnimatedSection>
      </div>
      <div id="ourproducts">
        <AnimatedSection>
          <OurProducts />
        </AnimatedSection>
      </div>

      <div id="patners">
        <AnimatedSection>
          <Patners />
        </AnimatedSection>
      </div>

      <div id="banner_adoption">
        <AnimatedSection>
          <BannerAdoptionSection />
        </AnimatedSection>
      </div>
    </>
  );
}

export default Homepage;
