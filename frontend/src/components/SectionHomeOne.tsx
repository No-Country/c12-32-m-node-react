import { useEffect, useState} from "react";
import { IoIosArrowDown } from "react-icons/io";
import chicaperro from "../assets/chicaperro.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import {MdArrowUpward} from "react-icons/md"

const SectionHomeOne = () => {
  const [shouldShowSections, setShouldShowSections] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleMenuClick = () => {
    setShouldShowSections(true);
  };


  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  }, []);

  //Codigo para que scrollee para arriba al tocar la flecha
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        setShowButton(scrollTop > 0);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

  return (
    <div>
      <div className="flex">
        <div
          className="rounded-tl-full rounded-bl-full overflow-hidden w-full md:w-1/2 h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${chicaperro})`,
            borderRadius: "0 50% 50% 0",
            minHeight: "100vh",
            backgroundSize: "cover",
          }}
        ></div>
        {/* Código del contenido 1 */}
        <div
          id="inicio"
          className="flex flex-col justify-center items-center w-1/2 p-8 "
        >
          <h1
            className="text-5xl font-semibold mb-4"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            ¡ENCONTREMOS TU MASCOTA!
          </h1>
          <p className="text-2xl font-semibold text-gray-600 text-center md:block hidden">
            Si tienes una mascota perdida, sabes <br />
            información de alguna MASCOTA publicada,
            <br />
            o simplemente quieres adoptar una,
            <br />
            coméntanos y ayuda a que cada mascota esté en su HOGAR
            <br />
            <button
              className="py-2 px-10 rounded-full bg-gray-400 hover:bg-gray-700 transition-all duration-300 text-white mt-8"
              style={{ letterSpacing: "0.1em" }}
            >
              ¡ÚNETE!
            </button>
            {/* Código del icono de flecha hacia abajo */}
            <div className="absolute bottom-8">
              <a
                href="#quieneSomos"
                className="flex items-center justify-center py-3 px-3 rounded-full bg-gray-400 hover:bg-gray-700 transition-all duration-300 text-white"
                onClick={handleMenuClick}
              >
                <IoIosArrowDown />
              </a>
            </div>
          </p>
        </div>
      </div>
      {showButton && (
        <button
          className="fixed bottom-4 right-4 rounded-full bg-gray-400 hover:bg-gray-700 text-white p-2 z-20"
          onClick={handleScrollToTop}
        >
          <MdArrowUpward size={20}  />
        </button>
      )}
    </div>
  );
};

export default SectionHomeOne;
