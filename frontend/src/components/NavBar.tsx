import { useState } from "react";
import { NavLink } from "react-router-dom";
import SectionHomeOne from "./SectionHomeOne";
import SectionHomeTwo from "./SectionHomeTwo";
import SectionHomeThree from "./SectionHomeThree";
import userRegister from "../assets/userRegister.png";
import { Link } from "react-router-dom";
import SectionHomeFour from "./SectionHomeFour";

const NavBar = () => {
     const [shouldShowSections, setShouldShowSections] = useState(false);

     const handleMenuClick = () => {
       setShouldShowSections(true);
     };

     const handleCreateAdClick = () => {
       setShouldShowSections(false);
     };
  return (
    <header>
      <nav className="flex items-center  justify-between px-10 bg-customBgNavBar h-20  ">
        <div className="Logo bg-black h-16 w-16 flex items-center justify-center text-white">
          <span>LOGO</span>
        </div>
        <ul className="flex  space-x-10 text-lg">
          <li>
            <a
              href="#inicio"
              className="hover:text-white transition-all duration-300"
              onClick={handleMenuClick}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#comoFunciona"
              className="hover:text-white transition-all duration-300"
              onClick={handleMenuClick}
            >
              ¿Cómo Funciona?
            </a>
          </li>
          <li>
            <a href="" className="hover:text-white transition-all duration-300">
              Anuncios
            </a>
          </li>
          <li>
            <NavLink
              to="/adoption"
              className="hover:text-white transition-all duration-300"
              onClick={handleCreateAdClick}
            >
              ¡Adópta!
            </NavLink>
          </li>
        </ul>
        <section className="flex gap-10">
          <NavLink to="/form">
            <button
              className="border-3 rounded-full h-[45px] w-48 bg-bottonNavBar transition-all duration-300 text-black font-semibold text-lg"
              onClick={handleCreateAdClick}
            >
              Crear Anuncio
            </button>
          </NavLink>
          <div
            className="bg-white w-12 h-12 rounded-full"
            onClick={handleCreateAdClick}
          >
            <Link to={"/Login"}>
              <img src={userRegister} alt="" />
            </Link>
            {/* <NavLink to="/profile">
              <div className="flex items-center justify-center ">
                <p>Info del Perfil</p>
              </div>
            </NavLink> */}
          </div>
        </section>
      </nav>
      {shouldShowSections && (
        <>
          <SectionHomeOne />
          <SectionHomeTwo />
          <SectionHomeThree />
          <SectionHomeFour />
        </>
      )}
    </header>
  );
};

export default NavBar;
