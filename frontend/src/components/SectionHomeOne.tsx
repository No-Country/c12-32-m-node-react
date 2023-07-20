import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import chicaPerro1 from "../assets/chicaPerro1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { MdArrowUpward } from "react-icons/md";
import { NavLink } from "react-router-dom";

interface SectionHomeProps {
  handleCreateAdClick: () => void;
}

const SectionHomeOne: React.FC<SectionHomeProps> = ({
  handleCreateAdClick,
}) => {
  const [showButton, setShowButton] = useState(false);

  const handleClick = () => {
    const element = document.getElementById("quienesSomos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  }, []);

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
    <>
      <div>
        <div className="lg:flex">
          <div
            className="rounded-tl-full rounded-bl-full overflow-hidden w-full md:w-1/2 h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url(${chicaPerro1})`,
              borderRadius: "0 50% 50% 0",
              minHeight: "100vh",
              backgroundSize: "cover",
            }}
          ></div>
          {/* Código del contenido 1 */}
          <div
            id="inicio"
            className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-1/2 lg:p-8 md:py-35"
          >
            <h1
              className="lg:text-5xl text-center text-4xl mobile:text-center mobile:ml-[-5rem] text-gray-800 font-semibold lg:mb-4 mobile:absolute mobile:top-1/2 mobile:mt-[-20rem] transform -translate-y-1/2"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              ¡ENCONTREMOS TU MASCOTA!
            </h1>
            <div className="text-2xl font-semibold text-gray-600 text-center md:block hidden">
              Si tienes una mascota perdida, sabes <br />
              información de alguna MASCOTA publicada,
              <br />
              o simplemente quieres adoptar una,
              <br />
              coméntanos y ayuda a que cada mascota esté en su HOGAR
              <br />
              <NavLink to="/login">
                <button
                  className="py-2 px-10 rounded-full bg-customBgNavBar hover:bg-gray-300 transition-all duration-300 text-white lg:mt-8 mt-[-100rem]"
                  style={{ letterSpacing: "0.1em" }}
                  onClick={handleCreateAdClick}
                >
                  ¡ÚNETE!
                </button>
              </NavLink>
              {/* Código del icono de flecha hacia abajo */}
              <div className="absolute bottom-8">
                <button
                  className="flex items-center justify-center py-3 px-3 rounded-full bg-gray-400 hover:bg-gray-700 transition-all duration-300 text-white"
                  onClick={handleClick}
                >
                  <IoIosArrowDown />
                </button>
              </div>
            </div>
          </div>
        </div>
        {showButton && (
          <button
            className="fixed bottom-4 right-4 rounded-full bg-gray-400 hover:bg-gray-700 text-white p-2 z-20"
            onClick={handleScrollToTop}
          >
            <MdArrowUpward size={20} />
          </button>
        )}
      </div>
    </>
  );
};

export default SectionHomeOne;
