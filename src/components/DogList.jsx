// @flow strict

import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

function DogList({ list }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(list.length / itemsPerPage);

  // Obtenir les éléments pour la page actuelle
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return list.slice(startIndex, startIndex + itemsPerPage);
  }, [list, currentPage, itemsPerPage]);

  // Générer les numéros de page à afficher
  const pageNumbers = useMemo(() => {
    const pages = [];
    const maxVisiblePages = 5; // Nombre maximum de pages visibles

    if (totalPages <= maxVisiblePages) {
      // Si le nombre total de pages est inférieur au maximum visible, afficher toutes les pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Toujours afficher la première page
      pages.push(1);

      // Déterminer quelles pages afficher au milieu
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Ajuster si on est près du début
      if (currentPage <= 3) {
        endPage = 4;
      }

      // Ajuster si on est près de la fin
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
      }

      // Ajouter les points de suspension après la première page si nécessaire
      if (startPage > 2) {
        pages.push("...");
      }

      // Ajouter les pages du milieu
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Ajouter les points de suspension avant la dernière page si nécessaire
      if (endPage < totalPages - 1) {
        pages.push("...");
      }

      // Toujours afficher la dernière page
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages]);

  // Aller à la page spécifique
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      window.scrollTo(0, 0); // Remonter en haut de la page
    }
  };

  // Aller à la page précédente
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  // Aller à la page suivante
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="w-full">
      {/* Liste des chiens */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* {currentItems.map((dog, index) => (
          <div
            key={dog.sku}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            <img
              src={dog.gallery[0]}
              alt={dog.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {dog.name}
              </h3>
              <p className="text-gray-600">
                {dog.breed} • {dog.age}
              </p>
              <p className="text-gray-600">
                {dog.gender} • {dog.color}
              </p>
              <p className="text-blue-600 font-bold mt-2">
                {dog.price.toLocaleString()} €
              </p>
            </div>
          </div>
        ))} */}
        {currentItems.map(async (item, index) => (
          <ProductCard key={index} item={item} idKey="sku" />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 0 && (
        <div className="flex justify-center items-center space-x-2 mt-8">
          {/* Flèche gauche */}
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`p-2 rounded-md ${
              currentPage === 1
                ? "text-white font-[700] text-[18px] leading-[24px] cursor-not-allowed"
                : "text-secondary hover:bg-secondary"
            }`}
          >
            <IoIosArrowRoundBack className="h-5 w-5 text-secondary" />
          </button>

          {/* Numéros de page */}
          {pageNumbers.map((pageNumber, index) => (
            <button
              key={index}
              onClick={() =>
                typeof pageNumber === "number" ? goToPage(pageNumber) : null
              }
              className={`w-10 h-10 flex items-center justify-center rounded-md ${
                pageNumber === currentPage
                  ? "bg-secondary text-white"
                  : typeof pageNumber === "number"
                  ? "text-gray-700 hover:bg-blue-100"
                  : "text-gray-500 cursor-default"
              }`}
              disabled={pageNumber === "..."}
            >
              {pageNumber}
            </button>
          ))}

          {/* Flèche droite */}
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-md ${
              currentPage === totalPages
                ? "text-white font-[700] text-[18px] leading-[24px] cursor-not-allowed"
                : "text-secondary hover:bg-secondary"
            }`}
          >
            <IoIosArrowRoundForward className="h-5 w-5 text-secondary" />
          </button>
        </div>
      )}
    </div>
  );
}

export default DogList;
