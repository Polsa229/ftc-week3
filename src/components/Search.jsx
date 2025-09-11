"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { dogs } from "../data/categories";
import { IoCloseSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardCommandKey } from "react-icons/md";
const SearchItem = ({ item, onClick }) => (
  <li
    title={`SKU: ${item.sku}`}
    className="flex items-center justify-between p-3 transition-all duration-300 ease-in-out bg-black/5 dark:bg-gray-500/10 hover:bg-black/10 dark:hover:bg-gray-500/20 rounded-xl hover:scale-[1.02] cursor-pointer"
    onClick={onClick}
  >
    <div className="flex items-center gap-4">
      {item.gallery.length > 0 && (
        <img
          src={item.gallery[0]}
          alt={item.name}
          className="w-12 h-12 rounded-lg object-cover"
        />
      )}
      <span className="text-gray-700 dark:text-gray-200">{item.name}</span>
    </div>
  </li>
);

export default function Search() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const items = useMemo(() => dogs,[]);
  const [filteredItems, setfilteredItems] = useState([]);

  const inputRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "f") {
        event.preventDefault();
        setIsOpen(true);
      }
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClear = () => {
    setSearchTerm("");
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (searchTerm === "") {
      setfilteredItems([]);
    } else {
      const filtered = items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.Additionnal_Informations.toLowerCase().includes(
            searchTerm.toLowerCase()
          ) ||
          item.size.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.breed.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setfilteredItems(filtered);
    }
  }, [searchTerm, items]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative text-[14px] z-40">
      <div className="relative flex items-center justify-center font-sans w-full lg:px-4 py-8">
        <div className="w-full max-w-2xl ">
          <div className="relative p-px rounded-2xl  focus-within:shadow-lg transition-shadow duration-300 hover:shadow-secondary-60 dark:hover:shadow-secondary-60 focus-within:shadow-secondary-60 dark:focus-within:shadow-secondary-60">
            <buttton
              className="flex items-center w-full px-4 py-1 bg-white flex-1 rounded-[15px] cursor-pointer select-none"
              onClick={() => {
                setIsOpen(true);
                inputRef.current?.focus();
              }}
            >
              <IoSearch
                className="w-[20px] h-[20px] text-secondary-100 dark:text-gray-400 flex-shrink-0"
                color={"#00171F"}
              />
              <div
                type="text"
                className="hidden lg:flex w-full px-3 py-1 text-[#99A2A5] dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent focus:outline-none flex-1 min-w-0"
              >
                Search something here!
              </div>
            </buttton>
          </div>

          {isOpen && (
            <div
              ref={modalRef}
              // className="fixed  h-screen w-screen inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
              className="fixed h-screen w-screen inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
            >
              <div
                className="absolute h-full w-full bg-secondary opacity-20 cursor-pointer z-20"
                onClick={() => {
                  setIsOpen(false);
                  setSearchTerm("");
                }}
              />

              <div className="relative w-full max-w-2xl mx-auto bg-primary dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden z-30">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
                  <IoSearch
                    className="w-[20px] h-[20px] text-secondary-100 dark:text-gray-400 flex-shrink-0"
                    color={"#00171F"}
                  />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search something here!"
                    value={searchTerm}
                    autoFocus={isOpen}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-1 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent focus:outline-none flex-1 min-w-0"
                  />

                  {searchTerm.length > 0 && (
                    <button
                      onClick={handleClear}
                      className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700/50 hover:text-black dark:hover:text-primary"
                    >
                      <IoCloseSharp className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                    </button>
                  )}
                </div>

                <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
                  {searchTerm === "" ? (
                    <div className="flex flex-col items-center justify-center ">
                      <p className="text-center text-gray-400 dark:text-gray-500 py-4">
                        Search by keyword
                      </p>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center p-1.5 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-inner">
                            <MdKeyboardCommandKey />
                          </div>
                          <div className="flex items-center justify-center w-6 h-6 p-1 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-inner">
                            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                              F
                            </span>
                          </div>
                        </div>
                        <div>ou</div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center  p-1 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-inner">
                            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                              CTRL
                            </span>
                          </div>
                          <div className="flex items-center justify-center w-6 h-6 p-1 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-inner">
                            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                              F
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : filteredItems.length > 0 ? (
                    <ul className="space-y-2">
                      {filteredItems.map((item) => (
                        <SearchItem
                          key={item.sku}
                          item={item}
                          onClick={() => {
                            setIsOpen(false);
                            navigate("/product/" + item.sku);
                            setSearchTerm("");
                          }}
                        />
                      ))}
                    </ul>
                  ) : (
                    <p className="text-center text-gray-400 dark:text-gray-500 py-4">
                      No results found for "{searchTerm}"
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
