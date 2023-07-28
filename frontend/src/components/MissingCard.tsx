import { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoLocationSharp, IoMaleOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import Aos from "aos";
import siluetas from "../assets/siluetas.png";
import { FaArrowCircleLeft, FaPaw } from "react-icons/fa";
import { BsGenderFemale } from "react-icons/bs";

interface Animal {
  images: any;
  id: string;
  url: any;
  pet_name: string;
  direction: string;
  gender: string;
}

const AdoptionList = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  }, []);

  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://petsociety.up.railway.app/api/v1/pets")
      .then((response) => response.json())
      .then((data) => {
        // Filtrar los datos por la propiedad "post_category" con valor "categoria2" que es "Adopcion"
        const filteredData = data.filter(
          (animal: any) => animal.post_category === "categoria2"
        );
        setAnimals(filteredData);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  useEffect(() => {
    // carga de datos con un retraso de 1 segundos
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="h-auto">
      <div className="h-10 w-14 cursor-pointer top-30 left-0 m-4 bg-customBgNavBar hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-md">
        <FaArrowCircleLeft size={25} onClick={() => navigate(-1)} />
      </div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          {/* Muestra el spinner mientras carga */}
          <FaPaw className="h-20 w-40 pt-3 animate-spin " />
        </div>
      ) : animals.length === 0 ? (
        <div className="h-screen  bg-gray-300">
          <div className="text-center pt-[5rem]">
            <p className="text-4xl font-bold text-gray-700 uppercase ">
              OOPS! No hay ninguna mascota <br /> perdida por el momento!
            </p>
            <img
              src={siluetas} // Agrega la variable 'siluetas' con la ruta de la imagen
              alt="Imagen"
              className="w-[30rem] h-[30rem] object-contain ml-[30rem] pt-[5rem]"
            />
          </div>
        </div>
      ) : (
        <>
          <div>
            <h2
              className="text-center py-12 text-4xl pb-4"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              ¡AYUDANOS A ENCONTRAR LAS MASCOTAS!
            </h2>
            <p className="text-lg text-center mb-10">
              Si viste o sabes algo de estas mascotas, ¡No te olvides comentar!
              Entre todos podemos hacer que cada mascota esté en su hogar
            </p>
          </div>
          <section className="my-10 m-auto grid grid-cols-3 w-9/12 gap-8 bg-red justify-center">
            {/* Map through the animals data and render cards */}
            {animals.map((animal) =>
              animal.images && animal.images.length > 0 ? (
                <div
                  key={animal.id} // Replace 'id' with the unique identifier property in your data
                  className="card bg-customBtnNavBar1 h-heightCards w-72  rounded-md flex flex-col items-center py-3"
                >
                  <div className="w-11/12 h-3/4 bg-slate-100 rounded-md">
                    <img
                      src={animal.images[0].url}
                      alt={animal.images[0].url}
                      className="rounded-md h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-11/12 h-32 flex flex-col justify-between">
                    <div className="w-12/12 flex items-center justify-between">
                      <div className="flex items-center">
                        <h3 className="my-2 font-bold text-lg">
                          {animal.pet_name}
                        </h3>
                        {animal.gender === "macho" ? (
                          <IoMaleOutline className="mx-2 text-2xl text-blue-700" />
                        ) : (
                          <BsGenderFemale className="mx-2 text-2xl text-pink-500" />
                        )}
                      </div>
                      <NavLink
                        to={`/animalInfo/${animal.id}`}
                        className="border-3 rounded-full h-[24px] w-20 text-center bg-customBgNavBar hover:bg-gray-700 transition-all duration-300 text-white font-semibold"
                      >
                        Info +
                      </NavLink>
                    </div>
                    <div className="flex">
                      <IoLocationSharp className="text-red-600" />
                      <p className="text-xs font-semibold mx-1">
                        {animal.direction}
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
              ) : null
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default AdoptionList;
