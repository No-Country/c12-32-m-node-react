import { CgArrowLongDown } from "react-icons/cg";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const SectionHomeThree = () => {

 useEffect(() => {
   Aos.init({
     duration: 1800,
     offset: 100,
   });
 }, []);

  return (
    <>
      {/* Código de waves*/}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ marginTop: "-400px" }}
        className="w-full"
      >
        <path
          fill="#e5e7eb"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="flex flex-col items-center bg-gray-200">
        {/* Código del contenido 3 */}
        <h1
          className="text-5xl font-semibold  text-center mb-4"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          ¿COMO FUNCIONA PET SOCIETY?
        </h1>
        <div className="flex justify-between w-[85rem] pl-[5rem] pt-[4rem]">
          <p
            className="text-3xl font-semibold"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            ¡Si tu mascota se perdió!
          </p>
          <p
            className="text-3xl font-semibold"
            data-aos="fade-down"
            data-aos-delay="700"
          >
            ¡Si tienes una MASCOTA para adopción!
          </p>
        </div>
        <div className="p-4 mt-4 flex justify-between w-[90rem]">
          <p className="border border-gray-500 bg-gray-400 rounded-full p-4 pl-10 ml-[5rem] w-[24rem]">
            Crea un anuncio con la mayor información <br />
            para una búsqueda con mayor precisión
          </p>
          <p className="border border-gray-500 bg-gray-400 rounded-full p-4 pl-10 w-[24rem] mr-[10rem]">
            Crea un anuncio con la mayor información <br />
            para una búsqueda con mayor precisión
          </p>
        </div>

        <div className="mt-[-1/2rem] flex justify-center w-[90rem]">
          <p className="w-1/2 text-center pr-[20rem] ml-[5rem]">
            <CgArrowLongDown className="text-4xl mx-auto ml-[11rem]" />
          </p>
          <p className=" w-1/2 text-center pl-[-10rem]">
            <CgArrowLongDown className="text-4xl mx-auto ml-[18rem]" />
          </p>
        </div>
        <div className="p-4 mb-0 flex justify-between w-[90rem]">
          <p className="border border-gray-500 bg-gray-400 rounded-full p-4 pl-10 w-[24rem] ml-[5rem]">
            Crea un anuncio con la mayor información <br />
            para una búsqueda con mayor precisión
          </p>
          <p className="border border-gray-500 bg-gray-400 rounded-full p-4 pl-10 w-[24rem] mr-[10rem]">
            Crea un anuncio con la mayor información <br />
            para una búsqueda con mayor precisión
          </p>
        </div>
        <div className="mt-[-1/2rem] flex justify-center w-[90rem]">
          <p className="w-1/2 text-center pr-[20rem] ">
            <CgArrowLongDown className="text-4xl mx-auto ml-[16rem] " />
          </p>
          <p className=" w-1/2 text-center pl-[-10rem]">
            <CgArrowLongDown className="text-4xl mx-auto ml-[21rem]" />
          </p>
        </div>
        <div className="p-4 mb-0 flex justify-between w-[90rem]">
          <p className="border border-gray-500 bg-gray-400 rounded-full ml-[5rem] p-4 pl-10 w-[24rem]">
            Crea un anuncio con la mayor información <br />
            para una búsqueda con mayor precisión
          </p>
          <p className="border border-gray-500 bg-gray-400 rounded-full p-4 pl-10 w-[24rem] mr-[10rem]">
            Crea un anuncio con la mayor información <br />
            para una búsqueda con mayor precisión
          </p>
        </div>
        <div className="flex flex-col items-center bg-gray-200 pt-[6rem] ">
          <p
            className="mr-[10rem] text-3xl font-semibold text-center mb-4"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            ¡Si sabes info de alguna MASCOTA!
          </p>
        </div>
        <div className="p-4 mt-4 mr-[10rem] flex justify-center">
          <p className="border border-gray-500 bg-gray-400 rounded-full p-4 pl-10 w-[24rem]">
            Busca en{" "}
            <Link to={"/anuncios"} className="text-gray-300">
              Anuncios
            </Link>{" "}
            la mascota <br />
            de la cual tengas información
          </p>
        </div>

        <div className="mt-[-1/2rem] mr-[10rem]">
          <p className=" text-center">
            <CgArrowLongDown className="text-4xl mx-auto" />
          </p>
        </div>
        <div className="p-4 mb-0 flex justify-center w-[75rem] mr-[10rem]">
          <p className="border border-gray-500 bg-gray-400 rounded-full p-4 pl-10 w-[24rem]">
            Comentale al dueño lo que sabes, y
            <br />
            dejale tu contacto
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionHomeThree;
