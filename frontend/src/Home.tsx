import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import chicaperro from "./assets/chicaperro.jpg"
function Home() {
  return (
    <div className="flex">
      <div
        className="rounded-tl-full rounded-bl-full overflow-hidden w-1/2 h-screen"
        style={{
          backgroundImage: `url(${chicaperro})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "0 50% 50% 0",
        }}
      ></div>
      {/* Código del contenido 1 */}
      <div className="flex flex-col justify-center items-center w-1/2 p-8">
        <h1 className="text-5xl font-semibold mb-4">
          ¡ENCONTREMOS TU MASCOTA!
        </h1>
        <p className="text-2xl font-semibold text-gray-600 text-center">
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
            <button className="flex items-center justify-center py-3 px-3 rounded-full bg-gray-400 hover:bg-gray-700 transition-all duration-300 text-white">
              <IoIosArrowDown />
            </button>
          </div>
          {/* Código del contenido 2*/}
          {/* <div>
            <h1>COMO FUNCIONA PET SOCIETY?</h1>
            <p>Si tu mascota se perdio</p>
            <p>Si tienes una MASCOTA para adopcion</p>
          </div> */}
        </p>
      </div>
    </div>
  );
}

export default Home;

