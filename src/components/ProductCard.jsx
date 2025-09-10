import { useEffect, useState } from "react";
import { useCurrencyStore } from "../store/currencyStore";
import { Link } from "react-router-dom";

function ProductCard({ item, idKey = "id" }) {
  // Utilisation directe du store Zustand
  const currency = useCurrencyStore((state) => state.currency);
  const convertAmount = useCurrencyStore((state) => state.convertAmount);

  const [priceObject, setPriceObject] = useState({
    price: item.price,
    currency: "VND",
  });

  useEffect(() => {
    const result = convertAmount(item.price);
    setPriceObject(result);
  }, [currency, item.price, convertAmount]);

  return (
    <Link
      to={"/product/" + [idKey in item ? item[idKey] : item.id]}
      className="p-2 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-secondary cursor-pointer"
    >
      <div className="flex justify-center mb-4">
        {item.gallery.length > 0 ? (
          <img
            src={item.gallery[0]}
            alt={item.name}
            className="w-full h-[169px]  lg:h-[264px] object-cover rounded-md"
          />
        ) : (
          <div className="w-full h-[169px]  lg:h-[264px] object-cover rounded-md bg-secondary-60" />
        )}
      </div>

      <div className="text-start">
        <h3 className="text-[16px] font-[700] mb-2">
          {`MO${item.sku}`}-{item.name}
        </h3>
        <div className="lg:flex items-center gap-2 mb-2">
          <p className="text-[12px] text-secondary-60">
            <span className="font-[500]">Genre:</span>{" "}
            <span className="font-[700]">{item.gender}</span>
          </p>
          <div className="w-[18px] h-[18px] rounded-full hidden lg:flex items-center justify-center">
            <div className="w-[3px] h-[3px] bg-secondary-60 rounded-full" />
          </div>
          <p className="text-[12px] text-secondary-60">
            <span className="font-[500]">Age:</span>{" "}
            <span className="font-[700]">{item.age}</span>
          </p>
        </div>
        <p className="text-[12px] lg:text-[14px] font-[700] text-secondary-60">
          {priceObject.price} {priceObject.currency}
        </p>
      </div>
    </Link>
  );
}
export default ProductCard;
