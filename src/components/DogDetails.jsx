// @flow strict

import * as React from "react";
import Breadcrumb from "./Breadcrumb";
import { useCurrencyStore } from "../store/currencyStore";
import { Link } from "react-router-dom";
import {
  IoChatboxEllipsesOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import GuaranteeOfPetIdentication from "../assets/GuaranteeOfPetIdentication.svg";
import HealthGuarantee from "../assets/HealthGuarantee.svg";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function DogDetails({ dog }) {
  const {
    sku,
    name,
    age,
    gender,
    location,
    color,
    size,
    price,
    Publicate_date,
    Additionnal_Informations,
    vaccinated,
    dewormed,
    microchip,
    cert,
  } = dog;

  const currency = useCurrencyStore((state) => state.currency);
  const convertAmount = useCurrencyStore((state) => state.convertAmount);

  const [priceObject, setPriceObject] = React.useState({
    price: price,
    currency: "VND",
  });

  React.useEffect(() => {
    const result = convertAmount(price);
    setPriceObject(result);
  }, [currency, price, convertAmount]);

  const [hovered, setHovered] = React.useState(false);

  return (
    <div className="text-start">
      <div className="border  rounded-lg px-6 mb-2">
        <div className="flex md:hidden justify-center py-4">
          <div className="bg-[#CCD1D2] h-[6px] w-[40px] rounded-[10px]" />
        </div>

        <Breadcrumb
          items={[
            { label: "Home", link: "/" },
            { label: "Dog", link: "/products" },
            { label: `${size} Dogs`, link: "/products" },
            { label: name, link: `/#` },
          ]}
        />

        <p className="text-secondary-40 text-[14px] font-[500] mb-1">
          SKU #{sku}
        </p>
        <h1 className="text-start text-secondary-80 font-[700] text-[24px] leading-[36px] mb-1">
          {name}
        </h1>
        <h1 className="text-start text-secondary-80 font-[700] text-[24px] leading-[36px] mb-1">
          {priceObject.price} {priceObject.currency}
        </h1>

        <div className="w-full flex justify-start gap-4 my-4">
          <Link
            to="/products"
            className="bg-secondary text-primary flex items-center px-4 py-2 rounded-full hover:bg-primary-100 hover:text-secondary transition"
          >
            Contact us
          </Link>
          <button className="border border-secondary text-secondary px-4 py-2 rounded-full hover:bg-secondary hover:text-primary-100 transition flex items-center">
            <IoChatboxEllipsesOutline className="mr-2 h-6 w-6" /> Chat with
            Monito
          </button>
        </div>
      </div>

      <div className="px-6 text-start">
        {/* Sharing card  */}
        <div className="flex md:hidden justify-between items-center gap-2 relative my-2">
          <span className="font-[700] text-[18px] flex items-center">
            Information :
          </span>
          <div
            role="button"
            className="font-[700] text-[14px] flex items-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
              setHovered(false);
            }}
            onClick={() => {
              setHovered(true);
            }}
          >
            <IoShareSocialOutline className="mr-1" />
            Share
          </div>

          {/* Affiche le menu déroulant si l'état hovered est vrai */}
          {hovered && (
            <div
              className={`absolute top-full right-0 border bg-white border-gray-300 rounded-md shadow-lg z-50 transition-opacity duration-300 `}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => {
                setHovered(false);
                // setTimeout(() => {
                //   if (hovered) return;
                //   setHovered(false);
                // }, 300);
              }}
            >
              {[
                {
                  name: "Facebook",

                  icon: <FaFacebook color="#667479" />,
                },
                {
                  name: "Twitter",

                  icon: <FaTwitter color="#667479" />,
                },
                {
                  name: "Instagram",

                  icon: <FaInstagram color="#667479" />,
                },
                {
                  name: "Youtube",
                  icon: <FaYoutube color="#667479" />,
                },
              ].map(({ name, icon }, key) => (
                <div
                  key={key}
                  className={`group relative cursor-pointer hover:bg-secondary-100 hover:text-primary p-2 flex items-center gap-1 rounded-lg transition"}`}
                >
                  {icon}
                  <span>{name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Sharing card  */}

        <table className="w-full table-fixed border-separate border-spacing-0 mb-3 md:mb-0">
          <tbody>
            {[
              { label: "SKU", value: `#${sku}` },
              { label: "Gender", value: gender },
              { label: "Age", value: age },
              { label: "Size", value: size },
              { label: "Color", value: color },
              { label: "Vaccinated", value: vaccinated ? "Yes" : "No" },
              { label: "Dewormed", value: dewormed ? "Yes" : "No" },
              { label: "Cert", value: cert ? "Yes (MKA)" : "No" },
              { label: "Microchip", value: microchip ? "Yes" : "No" },
              { label: "Location", value: location },
              { label: "Published", value: Publicate_date },
              {
                label: "Additional Information",
                value: Additionnal_Informations,
              },
            ].map((item, index) => (
              <tr
                key={index}
                className="text-start flex items-start border-b border-neutral-200"
              >
                <td className="w-1/2 text-secondary-60 text-[14px] font-[500] leading-[20px] py-2">
                  {item.label}
                </td>
                <td className="w-1/2 text-secondary-60 text-[14px] font-[500] leading-[20px] py-2 pl-4">
                  : {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Guarantee card  */}
        <div
          style={{
            background:
              "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
          }}
          className="md:hidden gap-2 items-center p-2 rounded-lg"
        >
          <div className="flex items-center mb-3">
            <img
              src={HealthGuarantee}
              alt={name}
              style={{
                width: "24px",
                height: "21.93px",
              }}
            />
            <span className="font-[700] text-[14px] leading-[20px] pl-1">
              100% health guarantee for pets
            </span>
          </div>
          <div className="flex items-center">
            <img
              src={GuaranteeOfPetIdentication}
              alt={name}
              style={{
                width: "24px",
                height: "21.93px",
              }}
            />
            <span className="font-[700] text-[14px] leading-[20px] pl-1">
              100% guarantee of pet identification
            </span>
          </div>
        </div>
        {/* Guarantee card  */}
      </div>
    </div>
  );
}
export default DogDetails;
