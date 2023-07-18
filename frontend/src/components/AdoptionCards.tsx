import {useEffect} from "react"
import { Link } from "react-router-dom";
import animalCard from "../assets/img-card.jpg";
import { IoLocationSharp, IoMaleOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import Aos from "aos";

const AdoptionCards = () => {
      useEffect(() => {
        Aos.init({
          duration: 1800,
          offset: 100,
        });
      }, []);
  return (
    <div>
      <div className="text-center my-8">
        <h1
          className="text-center  text-4xl pb-4"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          ¡ADOPTA UNA MASCOTA!
        </h1>
        <p className="text-lg">
          Si te gustaría tener un compañero, ¡Aquí es el lugar! <br />
          Adopta la mascota que más se adapte con vos y cualquier duda déjala en
          los <br />
          comentarios.
        </p>
      </div>
      <section className="my-10 m-auto grid grid-cols-3 w-9/12 gap-8 bg-red justify-center">
        <div className="card bg-customGrayCard w-full h-full rounded-md flex flex-col items-center py-3">
          <div className="w-11/12 h-3/4 bg-slate-100 rounded-md">
            <img src={animalCard} alt="" className="rounded-md h-full" />
          </div>
          <div className="w-11/12 h-32  flex flex-col justify-between">
            <div className="w-12/12 flex items-center justify-between">
              <div className="flex items-center">
                <h3 className="my-2 font-bold text-lg">TOBY</h3>
                <IoMaleOutline className="mx-2 text-2xl text-blue-700" />
              </div>
              <Link
                to={"/animalInfo"}
                className="border-3 rounded-full h-[24px] w-20 text-center bg-customBgNavBar hover:bg-gray-700 transition-all duration-300 text-white font-semibold"
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
        <div className="card bg-customBgSectionTwo w-full h-full rounded-md flex flex-col items-center py-3">
          <div className="w-11/12 h-3/4 bg-slate-100 rounded-md">
            <img src={animalCard} alt="" className="rounded-lg h-full" />
          </div>
          <div className="w-11/12 h-32 flex flex-col justify-between">
            <div className="w-12/12 flex items-center justify-between">
              <div className="flex items-center">
                <h3 className="my-2 font-bold text-lg">TOBY</h3>
                <IoMaleOutline className="mx-2 text-2xl text-blue-700" />
              </div>
              <Link
                to={"/animalInfo"}
                className="border-3 rounded-full h-[24px] w-20 text-center bg-customBgNavBar hover:bg-gray-700 transition-all duration-300 text-white font-semibold"
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
        <div className="card bg-customBgSectionTwo w-full h-full rounded-md flex flex-col items-center py-3">
          <div className="w-11/12 h-3/4 bg-slate-100 rounded-md">
            <img src={animalCard} alt="" className="rounded-md h-full" />
          </div>
          <div className="w-11/12 h-32  flex flex-col justify-between">
            <div className="w-12/12 flex items-center justify-between">
              <div className="flex items-center">
                <h3 className="my-2 font-bold text-lg">TOBY</h3>
                <IoMaleOutline className="mx-2 text-2xl text-blue-700" />
              </div>
              <Link
                to={"/animalInfo"}
                className="border-3 rounded-full h-[24px] w-20 text-center bg-customBgNavBar hover:bg-gray-700 transition-all duration-300 text-white font-semibold"
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
        <div className="card bg-customBgSectionTwo w-full h-full rounded-md flex flex-col items-center py-3">
          <div className="w-11/12 h-3/4 bg-slate-100 rounded-md">
            <img src={animalCard} alt="" className="rounded-md h-full" />
          </div>
          <div className="w-11/12 h-32  flex flex-col justify-between">
            <div className="w-12/12 flex items-center justify-between">
              <div className="flex items-center">
                <h3 className="my-2 font-bold text-lg">TOBY</h3>
                <IoMaleOutline className="mx-2 text-2xl text-blue-700" />
              </div>
              <Link
                to={"/animalInfo"}
                className="border-3 rounded-full h-[24px] w-20 text-center bg-customBgNavBar hover:bg-gray-700 transition-all duration-300 text-white font-semibold"
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
  );
};

export default AdoptionCards;
