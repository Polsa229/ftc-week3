// @flow strict
import  React, { useEffect, useMemo, useState } from "react";
import { dogs } from "../data/categories";

function DogListFiltered({
  initialDogList,
  // setFilteredItems,
  setBreed,
}) {
  const [filters, setFilters] = useState({
    gender: [],
    color: [],
    breed: [],
    minPrice: null,
    maxPrice: null,
  });
  const [filteredItems, setFilteredItems] = useState(dogs);

  // console.log({ initialDogList });

  // Extraire les options uniques pour les filtres
  const filterOptions = useMemo(() => {
    const genders = [...new Set(initialDogList.map((dog) => dog.gender))];
    const colors = [...new Set(initialDogList.map((dog) => dog.color))];
    const breeds = [...new Set(initialDogList.map((dog) => dog.breed))];
    const sizes = [...new Set(initialDogList.map((dog) => dog.size))];

    // Calculer les prix min et max
    const prices = initialDogList.map((dog) => dog.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return { genders, colors, breeds, sizes, minPrice, maxPrice };
  }, [initialDogList]);

  // Filtrer les chiens
  const filteredDogs = useMemo(() => {
    return initialDogList.filter((dog) => {
      const matchBreed =
        filters.breed.length === 0 || filters.breed.includes(dog.breed);
      const matchGender =
        filters.gender.length === 0 || filters.gender.includes(dog.gender);
      const matchColor =
        filters.color.length === 0 || filters.color.includes(dog.color);
      const matchMinPrice =
        filters.minPrice === null || dog.price >= filters.minPrice;
      const matchMaxPrice =
        filters.maxPrice === null || dog.price <= filters.maxPrice;

      return (
        matchBreed &&
        matchGender &&
        matchColor &&
        matchMinPrice &&
        matchMaxPrice
      );
    });
  }, [initialDogList, filters]);

  // Mettre à jour les éléments filtrés
  useEffect(() => {
    setFilteredItems(filteredDogs);
  }, [filteredDogs, setFilteredItems]);

  // Mettre à jour la race filtrée
  useEffect(() => {
    setBreed(filters.breed);
  }, [filters.breed, setBreed]);

  // Gérer les changements de case à cocher
  const handleCheckboxChange = (filterType, value) => {
    setFilters((prev) => {
      const currentValues = prev[filterType];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      return {
        ...prev,
        [filterType]: newValues,
      };
    });
  };

  // Gérer les changements de prix
  const handlePriceChange = (type, value) => {
    const numValue = value === "" ? null : Number(value);
    setFilters((prev) => ({
      ...prev,
      [type]: numValue,
    }));
  };

  return (
    <div className="px-6  bg-white ">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Filtres</h2>

      <div className="space-y-6">
        {/* Filtre Genre */}
        <div className="border-b border-secondary-10">
          <h3 className="font-[700] text-[16px] mb-3 text-secondary-100">
            Gender
          </h3>
          <div className="space-y-2">
            {filterOptions.genders.map((gender) => (
              <label key={gender} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.gender.includes(gender)}
                  onChange={() => handleCheckboxChange("gender", gender)}
                  className="rounded text-secondary-60 focus:ring-secondary-80"
                />
                <span className="text-secondary-60">{gender}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Filtre Couleur */}
        <div className="border-b border-secondary-10">
          <h3 className="font-[700] text-[16px] mb-3 text-secondary-100">
            Color
          </h3>
          <div className="space-y-2">
            {filterOptions.colors.map((color) => (
              <label key={color} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.color.includes(color)}
                  onChange={() => handleCheckboxChange("color", color)}
                  className="rounded text-secondary-80 focus:ring-secondary"
                />
                <span className="text-secondary-60">{color}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Filtre Prix */}
        <div className="border-b border-secondary-10 pb-2">
          <h3 className="font-[700] text-[16px] mb-3 text-secondary-100">
            Price
          </h3>
          <div className="flex space-x-4">
            <div>
              <label className="block text-sm font-medium text-secondary-60 mb-1">
                Min
              </label>
              <input
                type="number"
                value={filters.minPrice || ""}
                onChange={(e) => handlePriceChange("minPrice", e.target.value)}
                placeholder={"Min"}
                className="w-full p-2 border font-[500] text-[14px] text-secondary-80 border-secondary-80 rounded-md focus:ring-secondary focus:border-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-60 mb-1">
                Max
              </label>
              <input
                type="number"
                value={filters.maxPrice || ""}
                onChange={(e) => handlePriceChange("maxPrice", e.target.value)}
                placeholder={"Max"}
                className="w-full p-2 border font-[500] text-[14px] text-secondary-80 border-secondary-60 rounded-md focus:ring-secondary focus:border-secondary"
              />
            </div>
          </div>
        </div>

        {/* Filtre Race */}
        <div className="border-b border-secondary-10">
          <h3 className="font-[700] text-[16px] mb-3 text-secondary-100">
            Breed
          </h3>
          <div className="space-y-2">
            {filterOptions.sizes.map((breed) => (
              <label key={breed} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.breed.includes(breed)}
                  onChange={() => handleCheckboxChange("breed", breed)}
                  className="rounded text-secondary-80 focus:ring-secondary"
                />
                <span className="text-secondary-60">{breed}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogListFiltered;
