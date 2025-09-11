// @flow strict

import React, { useMemo, useState } from "react";

import Breadcrumb from "../components/Breadcrumb";
import BannerCategorySection from "../components/BannerCategorySection";
import { dogs } from "../data/categories";
import DogList from "../components/DogList";
import DogListFiltered from "../components/DogListFiltered";
import { LuFilter } from "react-icons/lu";
import SortedComponent from "../components/SortedComponent";
import Footer from "../components/Footer";

function ProductPage() {
  const initialDogList = useMemo(() => dogs, []);
  const [filteredItems, setFilteredItems] = useState(
    Array.from({ length: 48 }, () => dogs).flat()
  );
  const [filteredBreed, setFilteredBreed] = useState([]);

  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sorted, setSorted] = useState("Popular");
  document.title = "Category || Ecommerce website";

  return (
    <>
      <section className="max-w-6xl mx-auto">
        <div className="px-4">
          <Breadcrumb
            items={[
              { label: "Home", link: "/" },
              { label: "Dog", link: "/products" },
              ...(filteredBreed
                ? [{ label: `${filteredBreed || ""} Dogs`, link: "/products" }]
                : []),
            ]}
          />
        </div>

        <BannerCategorySection />

        <div className="relative my-5">
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-4 px-4">
            {/* Filtres desktop */}
            <div className="hidden lg:block lg:col-span-1 bg-white z-20">
              <DogListFiltered
                initialDogList={initialDogList}
                setFilteredItems={setFilteredItems}
                setBreed={setFilteredBreed}
              />
            </div>

            {/* Contenu principal */}
            <div className="col-span-1 lg:col-span-3">
              {/* Bouton pour afficher les filtres sur mobile */}
              <div className="mb-4 w-full flex items-center justify-between">
                <div className="hidden lg:flex justify-center items-center">
                  <span className="text-secondary font-[700] text-[24px] leading-[36px]">
                    {filteredBreed.length > 0 ? "" : filteredBreed[0]}
                    Dogs
                  </span>
                  <sub className="ml-2 text-secondary-60 text-[14px] font-[500] leading-[20px]">
                    {" "}
                    {filteredItems.length} puppies
                  </sub>
                </div>
                <SortedComponent
                  options={["Popular", "Liked", "Newest"]}
                  selected={sorted}
                  onChange={setSorted}
                  label="Sort by"
                />

                <button
                  className="flex lg:hidden items-center justify-end text-secondary-80 px-4 py-2 rounded-lg"
                  onClick={() => setShowMobileFilters(true)}
                >
                  <LuFilter className="h-5 w-5 mr-2 text-secondary-80" />
                  Filter
                </button>
              </div>

              <DogList
                list={filteredItems}
                // list={Array.from({ length: 62 }, () => filteredItems).flat()}
              />
            </div>
          </div>
        </div>

        {/* <HeroSection /> */}
        <Footer />
      </section>

      {/* Drawner Mobile Filter */}
      <div className="relative my-5 max-w-lg mx-auto">
        {/* Overlay pour mobile quand les filtres sont ouverts */}
        {showMobileFilters && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setShowMobileFilters(false)}
          ></div>
        )}

        {/* Filtres mobiles (drawer) */}
        <div
          className={`
          fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-xl transform transition-transform lg:hidden
          ${showMobileFilters ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <div className="p-4 h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Filtres</h2>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <DogListFiltered
              initialDogList={initialDogList}
              setFilteredItems={setFilteredItems}
              setBreed={setFilteredBreed}
            />
          </div>
        </div>
      </div>
      {/* Drawner Mobile Filter */}
    </>
  );
}

export default ProductPage;
