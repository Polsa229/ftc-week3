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
    <div className="px-6  bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Filtres</h2>

      <div className="space-y-6">
        {/* Filtre Genre */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-700">Gender</h3>
          <div className="space-y-2">
            {filterOptions.genders.map((gender) => (
              <label key={gender} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.gender.includes(gender)}
                  onChange={() => handleCheckboxChange("gender", gender)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">{gender}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Filtre Couleur */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-700">Color</h3>
          <div className="space-y-2">
            {filterOptions.colors.map((color) => (
              <label key={color} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.color.includes(color)}
                  onChange={() => handleCheckboxChange("color", color)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">{color}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Filtre Prix */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-700">Price</h3>
          <div className="flex space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Min
              </label>
              <input
                type="number"
                value={filters.minPrice || ""}
                onChange={(e) => handlePriceChange("minPrice", e.target.value)}
                placeholder={filterOptions.minPrice.toLocaleString()}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Max
              </label>
              <input
                type="number"
                value={filters.maxPrice || ""}
                onChange={(e) => handlePriceChange("maxPrice", e.target.value)}
                placeholder={filterOptions.maxPrice.toLocaleString()}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Filtre Race */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-700">Breed</h3>
          <div className="space-y-2">
            {filterOptions.breeds.map((breed) => (
              <label key={breed} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.breed.includes(breed)}
                  onChange={() => handleCheckboxChange("breed", breed)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">{breed}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogListFiltered;
