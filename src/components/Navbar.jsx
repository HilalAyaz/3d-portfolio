import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (isMenuOpen) {
      body.style.overflow = "hidden"; // Disable scrolling
    } else {
      body.style.overflow = "auto"; // Enable scrolling
    }
    return () => {
      body.style.overflow = "auto"; // Ensure scrolling is enabled when component unmounts
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="flex items-center">
        <NavLink
          to="/"
          className="w-fit h-12 rounded-lg bg-white/80 items-center justify-center flex font-bold shadow-md text-xl px-2"
          onClick={handleMenuClose}
        >
          <p className="blue-gradient_text"         style={{ zIndex: 100 }} 
          >Hilal Ayaz</p>
        </NavLink>
      </div>
      <nav
        className={`${
          isMenuOpen
            ? "flex fixed inset-0 bg-slate-300 flex-col justify-center items-center z-50"
            : "hidden"
        } md:flex text-xl gap-7 font-bold`}
      >
        <NavLink
          to="/about"
          className="text-blue-400"
          onClick={handleMenuClose}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className="text-blue-400"
          onClick={handleMenuClose}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          className="text-blue-400"
          onClick={handleMenuClose}
        >
          Contact
        </NavLink>
      </nav>
      <button
        className="text-blue-400 ml-4 md:hidden text-3xl"
        style={{ zIndex: 100 }} 
        onClick={handleMenuToggle}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>
    </header>
  );
};

export default Navbar;
