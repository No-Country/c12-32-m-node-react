
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoLocationSharp, IoMaleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import animalCard from "../../src/assets/img-card.jpg";
import gatito from "../assets/gatito.jpg"
import perro from "../assets/perro.jpg"

const AdoptionList = () => {
  return (
    <div className="h-auto">
      <div>
        <h2 className="text-center py-12 text-4xl pb-4">
          {" "}
          ¡AYUDANOS A ENCONTRAR LAS MASCOTAS!
        </h2>
        <p className="text-lg text-center mb-10">
          Si viste o sabes algo de estas mascotas, ¡No te olvides comentar!
          Entre todos
          <br />
          podemos hacer que cada mascota este en su hogar
          <br />
        </p>
        <section className="my-10 m-auto grid grid-cols-3 w-9/12 gap-8 bg-red justify-center">
          <div className="card bg-customGrayCard w-full h-full rounded-md flex flex-col items-center py-3">
            <div className="w-11/12 h-3/4 bg-slate-100 rounded-md">
              <img
                src={animalCard}
                alt=""
                className="rounded-md h-full"
              />
            </div>
            <div className="w-11/12 h-32  flex flex-col justify-between">
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
          <div className="card bg-customGrayCard w-full h-full rounded-md flex flex-col items-center py-3">
            <div className="w-11/12 h-3/4 bg-slate-100 rounded-md">
              <img
                src={gatito}
                alt=""
                className="rounded-lg h-full"
              />
            </div>
            <div className="w-11/12 h-32 flex flex-col justify-between">
              <div className="w-12/12 flex items-center justify-between">
                <div className="flex items-center">
                  <h3 className="my-2 font-bold text-lg">TADEO</h3>
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
          <div className="card bg-customGrayCard w-full h-full rounded-md flex flex-col items-center py-3">
            <div className="w-11/12 h-3/4 bg-slate-100 rounded-md">
              <img
                src={perro}
                alt=""
                className="rounded-md h-full"
              />
            </div>
            <div className="w-11/12 h-32  flex flex-col justify-between">
              <div className="w-12/12 flex items-center justify-between">
                <div className="flex items-center">
                  <h3 className="my-2 font-bold text-lg">REX</h3>
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
          <div className="card bg-customGrayCard w-full h-full rounded-md flex flex-col items-center py-3">
            <div className="w-11/12 h-3/4 bg-slate-100 rounded-md">
              <img
                src={animalCard}
                alt=""
                className="rounded-md h-full"
              />
            </div>
            <div className="w-11/12 h-32  flex flex-col justify-between">
              <div className="w-12/12 flex items-center justify-between">
                <div className="flex items-center">
                  <h3 className="my-2 font-bold text-lg">CARLOS</h3>
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
  );
};

export default AdoptionList;
