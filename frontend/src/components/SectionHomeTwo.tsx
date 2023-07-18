import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import sectionTwo from "../assets/sectiontwo.png"

const SectionHomeTwo = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  }, []);

  return (
    <>
      {/* Código de waves */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ marginTop: "-200px" }}
      >
        <path
          fill="#b2d7c3"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      {/* Código del contenido 2 */}
      <div
        id="quienesSomos"
        className="flex justify-center items-center h-screen bg-custombgSectionTwo"
      >
        <div className="text-left">
          <h1
            className="text-6xl font-semibold"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            ¿QUIÉNES SOMOS?
          </h1>
          <p className="text-2xl font-semibold pt-8 mb-[10rem]">
            En <a className="text-white">PET SOCIETY</a>, valoramos la empatía,
            <br />
            la solidaridad y el trabajo en equipo.
            <br />
            <br />
            Facilitamos la comunicación y el intercambio
            <br />
            de información entre los dueños de las mascotas perdidas y las
            <br />
            personas que pueden haber visto o tenido contacto con ellas.
            <br />
            <br />
            También nos encargamos de que las MASCOTAS
            <br />
            sin hogar puedan tener uno.
            <br />
          </p>
        </div>
        <div
          className="w-[45vh] h-80 ml-[10rem] mb-10 bg-customBgSectionTwop-4 rounded-lg"
          data-aos="fade-down"
          data-aos-delay="800"
        >
          <img src={sectionTwo} alt="Imagen" />
        </div>
      </div>
    </>
  );
};

export default SectionHomeTwo;
