import { Link } from "react-router-dom";
import animalCard from "../assets/img-card.jpg"
import { useEffect } from "react";
import Aos from "aos";
import { IoLocationSharp, IoMaleOutline } from 'react-icons/io5';
import { AiOutlineClockCircle } from 'react-icons/ai';


const SectionHomeFour = () => {
    useEffect(() => {
        Aos.init({
            duration: 1800,
            offset: 100,
        });
    }, []);

    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ marginTop: "-400px" }}
        >
          <path
            fill="white"
            fill-opacity="1"
            d="M0,64L40,69.3C80,75,160,85,240,112C320,139,400,181,480,181.3C560,181,640,139,720,138.7C800,139,880,181,960,192C1040,203,1120,181,1200,154.7C1280,128,1360,96,1400,80L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        <div className="h-screen">
          <div>
            <h2 className="text-center py-12 text-4xl font-bold">
              {" "}
              Busquedas Más Recientes
            </h2>
            <section
              className="w-356 m-auto h-96 flex justify-evenly"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              <div className="card bg-customGrayCard w-3/12 h-full rounded-md flex flex-col items-center py-3">
                <div className="w-11/12 h-3/4 bg-slate-100 rounded-md">
                  <img
                    src={animalCard}
                    alt=""
                    className="rounded-md object-contain"
                  />
                </div>
                <div className="w-11/12 h-32 4 flex flex-col justify-between">
                  <div className="w-12/12 flex items-center justify-between">
                    <div className="flex items-center">
                      <h3 className="my-2 font-bold text-lg">TOBY</h3>
                      <IoMaleOutline className="mx-2 text-2xl text-blue-700" />
                    </div>
                    <Link
                      to={"/animalInfo"}
                      className="border-3 rounded-full h-[24px] w-20 text-center bg-gray-400 hover:bg-gray-700 transition-all duration-300 text-white font-semibold"
                    >
                      Info +
                    </Link>
                  </div>
                  <div className="flex">
                    <IoLocationSharp className="text-red-600" />
                    <p className="text-xs font-semibold mx-1">
                      {" "}
                      Recoleta, Provincia de buenos aires, ARG
                    </p>
                  </div>
                  <div className="flex items-center">
                    <AiOutlineClockCircle />
                    <span className="text-xs my-3 text-slate-500 mx-1">
                      Publicado hace 2 semanas
                    </span>
                  </div>
                </div>
              </div>
              <div className="card bg-customGrayCard w-3/12 h-full rounded-md flex flex-col items-center py-3">
                <div className="w-11/12 h-3/4 bg-slate-100 rounded-md">
                  <img
                    src={animalCard}
                    alt=""
                    className="rounded-md object-contain"
                  />
                </div>
                <div className="w-11/12 h-32 4 flex flex-col justify-between">
                  <div className="w-12/12 flex items-center justify-between">
                    <div className="flex items-center">
                      <h3 className="my-2 font-bold text-lg">TOBY</h3>
                      <IoMaleOutline className="mx-2 text-2xl text-blue-700" />
                    </div>
                    <Link
                      to={"/animalInfo"}
                      className="border-3 rounded-full h-[24px] w-20 text-center bg-gray-400 hover:bg-gray-700 transition-all duration-300 text-white font-semibold"
                    >
                      Info +
                    </Link>
                  </div>
                  <div className="flex">
                    <IoLocationSharp className="text-red-600" />
                    <p className="text-xs font-semibold mx-1">
                      {" "}
                      Recoleta, Provincia de buenos aires, ARG
                    </p>
                  </div>
                  <div className="flex items-center">
                    <AiOutlineClockCircle />
                    <span className="text-xs my-3 text-slate-500 mx-1">
                      Publicado hace 2 semanas
                    </span>
                  </div>
                </div>
              </div>
              <div className="card bg-customGrayCard w-3/12 h-full rounded-md flex flex-col items-center py-3">
                <div className="w-11/12 h-3/4 bg-slate-100 rounded-md">
                  <img
                    src={animalCard}
                    alt=""
                    className="rounded-md object-contain"
                  />
                </div>
                <div className="w-11/12 h-32 4 flex flex-col justify-between">
                  <div className="w-12/12 flex items-center justify-between">
                    <div className="flex items-center">
                      <h3 className="my-2 font-bold text-lg">TOBY</h3>
                      <IoMaleOutline className="mx-2 text-2xl text-blue-700" />
                    </div>
                    <Link
                      to={"/animalInfo"}
                      className="border-3 rounded-full h-[24px] w-20 text-center bg-gray-400 hover:bg-gray-700 transition-all duration-300 text-white font-semibold"
                    >
                      Info +
                    </Link>
                  </div>
                  <div className="flex">
                    <IoLocationSharp className="text-red-600" />
                    <p className="text-xs font-semibold mx-1">
                      {" "}
                      Recoleta, Provincia de buenos aires, ARG
                    </p>
                  </div>
                  <div className="flex items-center">
                    <AiOutlineClockCircle />
                    <span className="text-xs my-3 text-slate-500 mx-1">
                      Publicado hace 2 semanas
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
};

export default SectionHomeFour

