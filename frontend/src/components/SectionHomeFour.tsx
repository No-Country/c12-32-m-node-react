import { Link } from "react-router-dom";

const SectionHomeFour = () => {
    return (
        <div className="h-screen">
            <div>
                <h2 className="text-center py-12 text-4xl font-bold">Busquedas Más Recientes</h2>
                <section className="w-3/4 m-auto h-96 flex justify-evenly">
                    <div className="card bg-customGrayCard w-3/12 h-full rounded-md flex flex-col items-center py-3" >
                        <div className="w-11/12 h-3/4 bg-slate-100 rounded-md" >

                        </div>
                        <div className="w-11/12 h-32 4 flex flex-col justify-between">
                            <div className="w-12/12 flex items-center justify-between" >
                                <h3 className="my-2 font-bold text-lg">TOBY</h3>
                                <Link to={'/animalInfo'} className="border-3 rounded-full h-[24px] w-20 text-center bg-gray-400 hover:bg-gray-700 transition-all duration-300 text-white font-semibold">Info  +</Link>
                            </div>
                            <div>
                                <p className="text-sm font-semibold"> Recoleta, Provincia de buenos aires, ARG</p>
                            </div>
                            <div>
                                <span className="text-xs my-3 text-slate-500">Publicado hace 2 semanas</span>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default SectionHomeFour

