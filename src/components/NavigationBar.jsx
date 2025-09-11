import { useEffect, useState, useRef } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
// import Logo from "../assets/Logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";
import CurrencySelector from "./CurrencySelector";
import Logo from "../assets/Logo.svg";

// Menu items data
// eslint-disable-next-line react-refresh/only-export-components
export const menuItems = [
  {
    name: "Home",
    id: "home",
    link: "/#",
  },
  {
    name: "Category",
    link: "/products",
    id: "category",
    subMenu: null,
  },
  {
    name: "About",
    link: "/#",
    id: "about",
    subMenu: null,
  },
  {
    name: "Contact",
    link: "/#",
    id: "contact",
    subMenu: null,
  },
];

const NavigationBar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const mobileMenuRef = useRef(null);

  // Gérer le changement de style au scroll
  useEffect(() => {
    // Gérer le changement de style au scroll
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;
      setScrolled(isScrolled);

      // Calculer la progression du défilement
      const winHeight = window.innerHeight;
      // Height totale du document
      const docHeight = document.documentElement.scrollHeight - winHeight;
      // Pourcentage de progression
      const progress = (window.scrollY / docHeight) * 100;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        mobileOpen
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  // Manage active submenu item
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [hasChildren, setHasChildren] = useState(false);

  useEffect(() => {
    // console.log("location.pathname : ", location.pathname);
    // Définir l'élément de menu actif en fonction du chemin d'accès actuel
    const matched = menuItems.find((item) =>
      location.pathname.startsWith(item.link)
    );
    const link = location.pathname.split("/");
    setCurrentLocation(link[1].toLowerCase());
    setHasChildren(link.length > 2);
    // console.log("hasChildren: ", link.length > 2);
    // console.log("condiction: ", currentLocation === "product" && hasChildren);
    setActiveItem(matched?.id || null);
  }, [location.pathname]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`z-30 
        
        ${scrolled ? "fixed" : "sticky"} 
        top-0 w-full flex items-center lg:px-10 justify-center backdrop-blur-sm transition-all duration-300 ease-in-out text-[16px] 
        ${activeItem === "category" ? "bg-white" : "bg-primary"}
        ${
          currentLocation === "product" && hasChildren
            ? "bg-white hidden md:flex"
            : "bg-primary"
        }
         ${scrolled ? "" : "h-[57px]  lg:h-[100px]"}`}
      >
        <div className="w-full flex justify-between items-center gap-4 select-none">
          <button
            className="lg:hidden text-secondary-100 text-xl z-20 px-4 py-1"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Logo */}
          <div className="relative z-10 flex justify-center lg:justify-start items-center">
            {/* rectangle jaune derrière le logo */}
            <div
              className={`${
                activeItem === "category" ||
                (currentLocation === "product" && hasChildren)
                  ? "hidden"
                  : "visible"
              } absolute -top-[656px] lg:-bottom-[697px] -left-[398px] lg:-left-[335px] h-full w-full pointer-events-none z-0`}
            >
              <div className="rounded-[61px] lg:rounded-[99px] w-[635px] h-[635px] rotate-[19.42deg] lg:rotate-[25.23 deg] opacity-1 bg-primary-100 z-0" />
            </div>

            {/* Logo */}
            <Link
              to={"/"}
              className="text-xl font-bold flex items-center gap-2 cursor-pointer z-10 relative"
            >
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          <ul className="hidden lg:flex z-10 gap-6 items-center text-secondary  font-[700] ">
            {menuItems.map((item, key) => (
              <li
                key={key}
                // className="group relative cursor-pointer underline-offset-4"
                className={`group relative cursor-pointer ${
                  activeItem === item.id
                    ? "bg-secondary-100 p-2 rounded-lg text-primary font-bold"
                    : "hover:bg-secondary-100 hover:text-primary hover:font-bold p-2 rounded-lg transition"
                }`}
                onClick={() => navigate(item.link)}
              >
                <span
                // className={`${
                //   currentSection === item.id ? "text-secondary-100" : ""
                // } hover:text-secondary-100 transition`}
                >
                  {" "}
                  {item.name}
                </span>
              </li>
            ))}
          </ul>

          {/* Search */}
          <Search />

          <div className="hidden lg:flex  gap-4 items-center font-[700] ">
            <button className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-secondary hover:text-secondary-500 transition">
              Join the community
            </button>

            <CurrencySelector />
          </div>
        </div>

        {/* Buttons */}

        {/* Barre de progression */}
        <div className="fixed bottom-0 left-0 w-full h-1 z-20">
          <div
            className="h-full bg-secondary transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </nav>

      {/* Offcanvas Menu (Left side) */}
      <div
        className={`z-40 fixed inset-0 bg-primary text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto px-6 py-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <img src={Logo} alt="Monito" />
            <button onClick={toggleMenu} className="text-secondary">
              {mobileOpen ? (
                <FaTimes color={"#003459"} />
              ) : (
                <FaBars color={"#003459"} />
              )}
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col gap-4 text-xl">
            {menuItems.map((item, key) => (
              <li key={key}>
                <button
                  onClick={() => {
                    navigate(item.link, item.id);
                    toggleMenu();
                  }}
                  className="text-left text-secondary font-[700] hover:pl-2 hover:underline transition"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Bottom Button */}
          <div className="mt-auto pt-6 flex flex-col gap-4">
            <button className="w-full bg-secondary text-white px-4 py-2 rounded-full">
              Join the community
            </button>
            <CurrencySelector />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
