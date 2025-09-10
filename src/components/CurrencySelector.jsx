// @flow strict

import { useEffect, useState } from "react";
import Flag from "react-world-flags";
import { IoChevronDownSharp } from "react-icons/io5";
import { useCurrencyStore } from "../store/currencyStore";
const currencies = [
  { code: "USD", country: "usa" },
  { code: "EUR", country: "fr" },
  { code: "VND", country: "vn" },
  { code: "XOF", country: "bj" },
];

function CurrencySelector() {
  const currency = useCurrencyStore((state) => state.currency);
  const { setCurrency, getCurrency } = useCurrencyStore();

  // État pour la devise sélectionnée et le drapeau
  const [selectedCurrency, setSelectedCurrency] = useState(
    currency || getCurrency()
  );
  // État pour gérer l'affichage du menu déroulant
  const [flag, setFlag] = useState("");
  // État pour gérer le survol
  const [hovered, setHovered] = useState(false);

  const handleSelectCurrency = (code) => {
    console.log("Selected currency:", code);
    // Met à jour l'état local et le stockage local
    setSelectedCurrency(code);
    setCurrency(code);
  };

  useEffect(() => {
    // Met à jour le drapeau en fonction de la devise sélectionnée
    const selectedCurrencyObj = currencies.find(
      (c) => c.code === selectedCurrency
    );

    if (selectedCurrencyObj) {
      setFlag(selectedCurrencyObj.country);
    }
  }, [selectedCurrency]);

  return (
    <div className="relative">
      <div
        className="w-full border border-secondary rounded-full text-secondary md:hover:bg-secondary md:hover:text-primary lg:border-0 flex justify-center items-center gap-[4px] cursor-pointer transition p-1"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          // setTimeout(() => {
          //   if (hovered) return;
          //   setHovered(false);
          // }, 300);
        }}
      >
        {/* Affichage */}
        <div className=" flex justify-center items-center gap-[6px]">
          <Flag
            code={flag}
            style={{
              width: 21,
              height: 21,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <span className="font-bold">{selectedCurrency}</span>
        </div>
        {/* <select
          className="hidden md: bg-primary tex-center text-secondary rounded-md border-gray-700 pr-2 py-1"
          value={selectedCurrency}
          onChange={(e) => handleSelectCurrency(e.target.value)}
        >
          {currencies.map(({ code }) => (
            <option key={code} value={code} className="">
              {code}
            </option>
          ))}
        </select> */}
        <IoChevronDownSharp className="hidden md:inline h-4 w-4" />
      </div>

      {/* Affiche le menu déroulant si l'état hovered est vrai */}
      {hovered && (
        <div
          className={`absolute bottom-full lg:top-full left-0 w-full border border-gray-300 rounded-md shadow-lg z-50 transition-opacity duration-300 `}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => {
            setHovered(false);
            // setTimeout(() => {
            //   if (hovered) return;
            //   setHovered(false);
            // }, 300);
          }}
        >
          {currencies.map(({ code, country }) => (
            <div
              key={code}
              className="bg-white flex items-center justify-center gap-2 px-4 py-2 text-secondary hover:bg-secondary-60 hover:rounded-lg hover:text-primary hover:font-bold cursor-pointer"
              onClick={() => {
                handleSelectCurrency(code);
                setHovered(false);
              }}
            >
              <Flag
                code={country}
                style={{
                  width: 21,
                  height: 21,
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <span className="">{code}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CurrencySelector;
