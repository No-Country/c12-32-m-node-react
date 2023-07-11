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
                style={{ marginTop: "-300px" }}
                className="w-full"
            >
                <path
                    fill="white"
                    fill-opacity="1"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
            <div className="h-screen" >
                <div>
                    <h2 className="text-center py-12 text-4xl font-bold"> Busquedas Más Recientes</h2>
                    <section className="w-356 m-auto h-96 flex justify-evenly" data-aos="fade-down"
                        data-aos-delay="500">
                        <div className="card bg-customGrayCard w-3/12 h-full rounded-md flex flex-col items-center py-3" >
                            <div className="w-11/12 h-3/4 bg-slate-100 rounded-md" >
                                <img src={animalCard} alt="" className="rounded-md object-contain" />
                            </div>
                            <div className="w-11/12 h-32 4 flex flex-col justify-between">
                                <div className="w-12/12 flex items-center justify-between" >
                                    <div className="flex items-center">
                                        <h3 className="my-2 font-bold text-lg">TOBY</h3>
                                        <IoMaleOutline className="mx-2 text-2xl text-blue-700" />
                                    </div>
                                    <Link to={'/animalInfo'} className="border-3 rounded-full h-[24px] w-20 text-center bg-gray-400 hover:bg-gray-700 transition-all duration-300 text-white font-semibold">Info  +</Link>
                                </div>
                                <div className="flex">
                                    <IoLocationSharp className="text-red-600" />
                                    <p className="text-xs font-semibold mx-1"> Recoleta, Provincia de buenos aires, ARG</p>
                                </div>
                                <div className="flex items-center">
                                    <AiOutlineClockCircle />
                                    <span className="text-xs my-3 text-slate-500 mx-1">Publicado hace 2 semanas</span>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-customGrayCard w-3/12 h-full rounded-md flex flex-col items-center py-3" >
                            <div className="w-11/12 h-3/4 bg-slate-100 rounded-md" >
                                <img src={animalCard} alt="" className="rounded-md object-contain" />
                            </div>
                            <div className="w-11/12 h-32 4 flex flex-col justify-between">
                                <div className="w-12/12 flex items-center justify-between" >
                                    <div className="flex items-center">
                                        <h3 className="my-2 font-bold text-lg">TOBY</h3>
                                        <IoMaleOutline className="mx-2 text-2xl text-blue-700" />
                                    </div>
                                    <Link to={'/animalInfo'} className="border-3 rounded-full h-[24px] w-20 text-center bg-gray-400 hover:bg-gray-700 transition-all duration-300 text-white font-semibold">Info  +</Link>
                                </div>
                                <div className="flex">
                                    <IoLocationSharp className="text-red-600" />
                                    <p className="text-xs font-semibold mx-1"> Recoleta, Provincia de buenos aires, ARG</p>
                                </div>
                                <div className="flex items-center">
                                    <AiOutlineClockCircle />
                                    <span className="text-xs my-3 text-slate-500 mx-1">Publicado hace 2 semanas</span>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-customGrayCard w-3/12 h-full rounded-md flex flex-col items-center py-3" >
                            <div className="w-11/12 h-3/4 bg-slate-100 rounded-md" >
                                <img src={animalCard} alt="" className="rounded-md object-contain" />
                            </div>
                            <div className="w-11/12 h-32 4 flex flex-col justify-between">
                                <div className="w-12/12 flex items-center justify-between" >
                                    <div className="flex items-center">
                                        <h3 className="my-2 font-bold text-lg">TOBY</h3>
                                        <IoMaleOutline className="mx-2 text-2xl text-blue-700" />
                                    </div>
                                    <Link to={'/animalInfo'} className="border-3 rounded-full h-[24px] w-20 text-center bg-gray-400 hover:bg-gray-700 transition-all duration-300 text-white font-semibold">Info  +</Link>
                                </div>
                                <div className="flex">
                                    <IoLocationSharp className="text-red-600" />
                                    <p className="text-xs font-semibold mx-1"> Recoleta, Provincia de buenos aires, ARG</p>
                                </div>
                                <div className="flex items-center">
                                    <AiOutlineClockCircle />
                                    <span className="text-xs my-3 text-slate-500 mx-1">Publicado hace 2 semanas</span>
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

