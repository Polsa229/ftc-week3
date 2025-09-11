// @flow strict

import * as React from "react";
import { dogs } from "../data/categories";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductImgShown from "../components/ProductImgShown";
import GuaranteeOfPetIdentication from "../assets/GuaranteeOfPetIdentication.svg";
import HealthGuarantee from "../assets/HealthGuarantee.svg";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import DogDetails from "../components/DogDetails";
import ReviewsCustumerShown from "../components/ReviewsCustumerShown";
import AnimatedSection from "../components/AnimatedSection";
import MorePuppies from "../components/MorePuppies";
import Footer from "../components/Footer";
import MobileHeaderDetailDog from "../components/MobileHeaderDetailDog";

function ProductDetail() {
  const navigate = useNavigate();

  const { id } = useParams(); // récupère l'id dynamique depuis l'URL
  const [productItem, setProductItem] = React.useState(null);

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        navigate("/products");
        // setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  React.useEffect(() => {
    if (id) {
      const filtered = dogs.find((item) => item.sku == id);

      if (filtered) {
        setProductItem(filtered);
        document.title = `${filtered.name} - Product Detail`;
      }
    }
  }, [id]);

  if (!productItem) {
    return;
  }

  return (
    <div className="max-w-6xl mx-auto flex justify-center items-center relative">
      {/* Header absolute mobile  */}
      <MobileHeaderDetailDog />
      {/* Header absolute mobile  */}

      <div className="text-center z-10">
        <AnimatedSection>
          <div className="grid grid-cols-12 gap- justify-between rounded-lg mb-3 md:p-2 md:border">
            <div className="col-span-12 md:col-span-6 gap- justify-between items-center  rounded-lg">
              {productItem?.gallery && (
                <ProductImgShown images={productItem.gallery} />
              )}

              {/* Guarantee card  */}
              <div
                style={{
                  background:
                    "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
                }}
                className="hidden md:flex justify-between items-center p-2 gap-1 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <img
                    src={HealthGuarantee}
                    alt={productItem.name}
                    style={{
                      width: "24px",
                      height: "21.93px",
                    }}
                  />
                  <span className="font-[700] text-[14px] leading-[20px] pl-1">
                    100% health guarantee for pets
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <img
                    src={GuaranteeOfPetIdentication}
                    alt={productItem.name}
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

              {/* Sharing card  */}
              <div className="hidden md:flex items-center gap-2">
                <span className="font-[700] text-[14px] flex items-center">
                  <IoShareSocialOutline className="mr-1" />
                  Share :
                </span>
                <ul className="flex z-10 gap-1 justify-center items-center text-secondary  font-[700] ">
                  {[
                    <FaFacebook color="#667479" />,
                    <FaTwitter color="#667479" />,
                    <FaInstagram color="#667479" />,
                    <FaYoutube color="#667479" />,
                  ].map((icon, key) => (
                    <li
                      key={key}
                      className={`group relative cursor-pointer hover:bg-secondary-100 p-2 rounded-lg transition"}`}
                      // onClick={() => navigate("/#")}
                    >
                      {icon}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Sharing card  */}
            </div>
            <div
              className="col-span-12 md:col-span-6 gap- justify-between items-center rounded-lg"
              id="detailDog"
            >
              <DogDetails dog={productItem} />
            </div>
          </div>
        </AnimatedSection>

        {/* Reviews */}
        <div className="w-full text-start px-4">
          <h2 className="text-xl font-semibold mb-4">Our lovely customer</h2>
          <ReviewsCustumerShown reviews={productItem.reviews} />
        </div>

        <div id="news">
          <AnimatedSection>
            <MorePuppies />
          </AnimatedSection>
        </div>

        <div id="footer" className="">
          <AnimatedSection>
            <Footer />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
