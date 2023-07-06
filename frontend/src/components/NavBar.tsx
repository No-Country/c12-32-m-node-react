import { useState } from "react";
import SectionHomeOne from "./SectionHomeOne";
import SectionHomeTwo from "./SectionHomeTwo";
import SectionHomeThree from "./SectionHomeThree";

const NavBar = () => {
  const [shouldShowSections, setShouldShowSections] = useState(false);

  //HandleClick que si se clickea algo de la navBar se setea en true el estado
  const handleMenuClick = () => {
    setShouldShowSections(true);
  };

  return (
    <header>
      <nav className="flex items-center justify-between px-10 bg-gray-300 h-20">
        <div className="Logo bg-black h-16 w-16 flex items-center justify-center text-white">
          <span>LOGO</span>
        </div>
        <ul className="flex space-x-10 text-lg">
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
            <a href="" className="hover:text-white transition-all duration-300">
              ¡Adópta!
            </a>
          </li>
        </ul>
        <button className="border-3 rounded-full h-[45px] w-48 bg-gray-400 hover:bg-gray-700 transition-all duration-300 text-white font-semibold">
          Crear Anuncio
        </button>
      </nav>
      {/* Muestro solo los componentes cuando hagan clic en uno de ellos sino no se muestran */}
      {shouldShowSections && (
        <>
          <SectionHomeOne />
          <SectionHomeTwo />
          <SectionHomeThree />
        </>
      )}
    </header>
  );
};

export default NavBar;
