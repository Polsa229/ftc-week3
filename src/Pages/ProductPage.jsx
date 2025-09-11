// @flow strict

import * as React from "react";
import HeroSection from "../components/HeroSection";
// import NavigationBar from "../components/NavigationBar";
import NewsSection from "../components/NewsSection";
import Breadcrumb from "../components/Breadcrumb";
import BannerCategorySection from "../components/BannerCategorySection";

function ProductPage() {
  const [sortedList, setSortedList] = React.useState([]);
  const [filteredBreed, setFilteredBreed] = React.useState(null);
  const [filteredGender, setFilteredGender] = React.useState(null);
  const [filteredColor, setFilteredColor] = React.useState(null);
  const [filteredPrice, setFilteredPrice] = React.useState(null);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", link: "/" },
          { label: "Dog", link: "/products" },
          ...(filteredBreed
            ? [{ label: `${filteredBreed || ""} Dogs`, link: "/products" }]
            : []),
        ]}
      />

      <BannerCategorySection />
      {/* <HeroSection /> */}
      <NewsSection />
    </>
  );
}

export default ProductPage;
