// @flow strict

import * as React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { toast } from "react-toastify";
import { menuItems } from "./NavigationBar";


function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      toast.error("Veuillez entrer un email valide.");
      return;
    }

    // Simuler l’envoi
    toast.success(`Merci ! ${email} a été inscrit avec succès.`);
    setEmail(""); 
  };

  return (
    <section
      className="rounded-t-xl h-full w-full py-12 px-4"
      style={{
        background:
          "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
      }}
    >
      <div className="rounded-lg bg-secondary grid grid-cols-12 gap-3 items-center justify-between p-4">
        <div className="text-start col-span-12 md:col-span-4 lg:col-span-3 text-[#FDFDFD] font-[700] text-[20px] md:text-[24px] leading-[36px] ">
          Register now so you don't miss our programs
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-9 bg-[#FFFFFF] p-2 rounded-lg">
          <div className="grid grid-cols-12 items-center gap-1">
            <div className="col-span-12 md:col-span-8 relative rounded-lg overflow-hidden">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-[14px] p-2.5 relative w-full bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-secondary text-sm rounded-lg focus:ring-secondary-100 placeholder-opacity-60 focus:border-secondary-100 block"
                placeholder="Enter your Email"
              />
            </div>
            <button
              onClick={handleSubscribe}
              className="col-span-12 md:col-span-4 bg-secondary text-neutral-50 p-2 rounded-lg hover:bg-primary hover:text-secondary"
            >
              Subcribe Now
            </button>
          </div>
        </div>
      </div>

      <div className=" md:flex items-center justify-between gap-[20px] border-b border-[#CCD1D2] pb-[42px] ">
        <ul className="flex z-10 justify-between  items-center text-secondary  font-[700] ">
          {menuItems.map((item, key) => (
            <li
              key={key}
              // className="group relative cursor-pointer underline-offset-4"
              className={`group relative cursor-pointer hover:bg-secondary-100 hover:text-primary hover:font-bold p-2 rounded-lg transition"
              }`}
              onClick={() => navigate(item.link)}
            >
              <span>{item.name}</span>
            </li>
          ))}
        </ul>

        <ul className="flex z-10 gap-6 justify-center items-center text-secondary  font-[700] ">
          {[<FaFacebook />, <FaTwitter />, <FaInstagram />, <FaYoutube />].map(
            (icon, key) => (
              <li
                key={key}
                // className="group relative cursor-pointer underline-offset-4"
                className={`group relative cursor-pointer hover:bg-secondary-100 hover:text-primary hover:font-bold p-2 rounded-lg transition"}`}
                onClick={() => navigate("/#")}
              >
                {icon}
              </li>
            )
          )}
        </ul>
      </div>

      {/* <hr className="bg-[#CCD1D2] " /> */}

      <div className="rounded-lg text-center md:flex justify-center md:justify-between items-center p-2">
        <div className="flex md:hidden justify-center z-10 gap-6 items-center text-secondary  font-[700] mt-[42px] mb-[32px]">
          <img src={Logo} alt="Monito" className="" />
        </div>

        <div className="text-center text-secondary-60 text-[14px] font-[500] hidden md:flex">
          © 2022 Monito. All rights reserved.
        </div>

        <img
          src={Logo}
          alt="Monito"
          className="hidden md:flex justify-center"
        />

        <ul className="flex justify-center z-10 gap-6 items-center text-secondary  font-[700] ">
          {["Terms of Service", "Privacy Policy"].map((text, key) => (
            <li
              key={key}
              // className="group relative cursor-pointer underline-offset-4"
              className={`group relative cursor-pointer font-[500] text-[14px] text-secondary-60 hover:underline hover:font-bold p-2 rounded-lg transition"}`}
              onClick={() => navigate("/#")}
            >
              {text}
            </li>
          ))}
        </ul>
        <div className="text-center text-secondary-60 text-[14px] font-[500] flex justify-center md:hidden">
          © 2022 Monito. All rights reserved.
        </div>
      </div>
    </section>
  );
}

export default Footer;
