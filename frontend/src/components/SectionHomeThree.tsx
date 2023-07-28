import { CgArrowLongDown } from "react-icons/cg";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import huellas from "../assets/huellas.png";
import { IoIosArrowDown } from "react-icons/io";

const SectionHomeThree = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  }, []);

  const handlemobile = () => {
    setOpen(true);
  };

  return (
    <>
      {/* Código de waves*/}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ marginTop: "-400px" }}
        className="w-full hidden md:block"
      >
        <path
          fill="#7f7f7f"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div
        id="comoFunciona"
        className="flex mobile:h-screen flex-col items-center pt-10 mt-[-2rem]"
        style={{
          backgroundImage: `url(${huellas})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Código del contenido 3 */}
        <h1
          className="mobile:hidden lg:text-5xl mobile:text-2xl text-white font-semibold  text-center mt-20"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          ¿COMO FUNCIONA PET SOCIETY?
        </h1>
        <h1
          className="lg:hidden mobile:mr-30 lg:text-5xl mobile:text-3xl text-white font-semibold  text-center mt-20"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          ¿COMO FUNCIONA
          <br />
          PET SOCIETY?
        </h1>
        <div className="mobile:ml-[55rem] flex justify-between w-[85rem] pl-[5rem] pt-[4rem] text-white">
          <p
            className="text-3xl mobile:text-[15px] font-semibold"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            ¡Si tu MASCOTA se perdió!
            <IoIosArrowDown
              className="lg:hidden mt-[-2rem] ml-[13rem]"
              onClick={handlemobile}
            />
          </p>

          <p
            className="mobile:hidden text-3xl font-semibold text-white"
            data-aos="fade-down"
            data-aos-delay="700"
          >
            ¡Si tienes una MASCOTA para adopción!
          </p>
        </div>
        <p
          className="text-3xl lg:hidden  mobile:text-[15px]  mobile:mr-[3rem] mobile:mt-10 font-semibold text-white"
          data-aos="fade-down"
          data-aos-delay="700"
        >
          ¡Si quieres adoptar una MASCOTA!{" "}
          <IoIosArrowDown className="lg:hidden mt-[-2rem] ml-[16rem]" />
        </p>
        <div className="mobile:hidden p-4 mt-4 flex justify-between w-[90rem]">
          <p className="bg-customBgNavBar text-lg rounded-full p-4 pl-10 ml-[5rem] w-[24rem] text-white">
            Crea un Anuncio con la mayor Información <br />
            para una búsqueda con mayor precisión
          </p>
          <p className="bg-customBgNavBar text-lg rounded-full p-4 pl-10 w-[24rem] mr-[10rem] text-white">
            Crea un anuncio con la mayor información <br />
            para una búsqueda con mayor precisión
          </p>
        </div>

        <div className="mobile:hidden mt-[-1/2rem] flex justify-center w-[90rem]">
          <p className="w-1/2 text-center pr-[20rem] ml-[5rem]">
            <CgArrowLongDown className="text-4xl mx-auto ml-[11rem] text-white" />
          </p>
          <p className=" w-1/2 text-center pl-[-10rem]">
            <CgArrowLongDown className="text-4xl mx-auto ml-[18rem] text-white" />
          </p>
        </div>
        <div className="mobile:hidden p-4 mb-0 flex justify-between w-[90rem]">
          <p className="bg-customBgNavBar text-lg rounded-full p-4 pl-10 w-[24rem] ml-[5rem] text-white">
            Publícalo y revisa constantemente los <br />
            nuevos comentarios
          </p>
          <p className="bg-customBgNavBar text-lg rounded-full p-4 pl-10 w-[24rem] mr-[10rem] text-white">
            Publícalo y espera que algún nuevo <br />
            compañero se contacte
          </p>
        </div>

        <div className="flex flex-col items-center pt-[6rem] ">
          <p
            className="mobile:mt-[-3rem]  mobile:text-[15px]  mobile:text-center mobile:ml-[-4rem] text-3xl font-semibold text-center mb-4 text-white"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            ¡Si sabes info de alguna MASCOTA!{" "}
            <IoIosArrowDown className="lg:hidden mt-[-2rem] ml-[18rem]" />
          </p>
        </div>
        <div className="mobile:hidden p-4 mt-4 ml-[-1rem] flex justify-center">
          <p className="bg-customBgNavBar text-lg rounded-full p-4 pl-10 w-[24rem] text-white">
            Revisa los{" "}
            <Link to={"/anuncios"} className="text-gray-800">
              Anuncios
            </Link>{" "}
            en la seccion <br />
            búsqueda
          </p>
        </div>

        <div className="mobile:hidden mt-[-1/2rem] mr-[1rem]">
          <p className=" text-center">
            <CgArrowLongDown className="text-4xl mx-auto text-white" />
          </p>
        </div>
        <div className="mobile:hidden p-4 mb-0 flex justify-center w-[75rem] ml-[-1rem]">
          <p className="bg-customBgNavBar text-lg rounded-full p-4 pl-10 w-[24rem] mb-80 text-white">
            Déjale un comentario al dueño o <br />
            contáctalo a su teléfono
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionHomeThree;
