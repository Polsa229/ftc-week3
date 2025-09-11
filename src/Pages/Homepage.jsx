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
import KnowledgeSection from "../components/KnowledgeSection";
import Footer from "../components/Footer";

function Homepage() {
  document.title = "Monito";
  
  return (
    <div className="mx-auto">
      <div id="hero">
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
      </div>
      <div className="max-w-7xl mx-auto" id="news">
        <AnimatedSection>
          <NewsSection />
        </AnimatedSection>
      </div>
      <div className="max-w-7xl mx-auto" id="banner">
        <AnimatedSection>
          <BannerSection />
        </AnimatedSection>
      </div>
      <div className="max-w-7xl mx-auto" id="ourproducts">
        <AnimatedSection>
          <OurProducts />
        </AnimatedSection>
      </div>
      <div className="max-w-7xl mx-auto" id="patners">
        <AnimatedSection>
          <Patners />
        </AnimatedSection>
      </div>
      <div className="max-w-7xl mx-auto" id="banner_adoption">
        <AnimatedSection>
          <BannerAdoptionSection />
        </AnimatedSection>
      </div>
      <div className="max-w-7xl mx-auto" id="knowledge">
        <AnimatedSection>
          <KnowledgeSection />
        </AnimatedSection>
      </div>
      <div className="" id="footer">
        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </div>
    </div>
  );
}

export default Homepage;
