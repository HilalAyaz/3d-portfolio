import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header ">
      <NavLink
        to="/"
        className="w-fit h-12 rounded-lg bg-white/80 items-center justify-center flex font-bold shadow-md text-xl px-2"
      >
        <p className="blue-gradient_text">Hilal Ayaz</p>
      </NavLink>
      <nav className="flex text-xl gap-7 font-bold ">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-black" : "text-blue-400"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-black" : "text-blue-400"
          }
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-black" : "text-blue-400"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
