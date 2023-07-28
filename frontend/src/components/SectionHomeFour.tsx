import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Aos from "aos";
import { IoLocationSharp, IoMaleOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "../App.css";
import axios from "axios";
import { BsGenderFemale } from "react-icons/bs";

interface SectionHomeFourProps {
  handleCreateAdClick: () => void;
}
interface Animal {
  images: any;
  id: string;
  url: any;
  pet_name: string;
  direction: string;
  gender: string;
}

const SectionHomeFour: React.FC<SectionHomeFourProps> = ({
  handleCreateAdClick,
}) => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  }, []);

  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    axios
      .get("https://petsociety.up.railway.app/api/v1/pets")
      .then((response) => {
        const data = response.data;
        const primerosTresAnimales = data.slice(0, 3);
        setAnimals(primerosTresAnimales);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
    console.log("ANIMALS:", animals);
  }, []);

  return (
    <>
      <div className="h-screen">
        <div>
          <h2 className="text-center py-12 text-4xl font-bold">
            {" "}
            Busquedas Más Recientes
          </h2>
          <section
            className="my-10 m-auto grid grid-cols-3 w-9/12 gap-8 bg-red justify-center items lg:visible  mobile:hidden"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            {animals.map((animal) => (
              <div
                className="card bg-customBtnNavBar1 w-72 h-heightCards rounded-md flex flex-col items-center py-3"
                key={animal.id}
              >
                <div className="w-64 h-72 bg-slate-100 rounded-md overflow-hidden">
                  <img
                    src={animal.images[0].url}
                    alt={animal.images[0].url}
                    className="rounded-md h-full w-full object-cover"
                  />
                </div>
                <div className="w-11/12 h-32 flex flex-col justify-between">
                  <div className="w-12/12 flex items-center justify-between">
                    <div className="flex items-center">
                      <h3 className="my-2 font-bold text-2xl">
                        {animal.pet_name}
                      </h3>
                      <IoMaleOutline className="mx-2 text-2xl text-blue-700" />
                    </div>
                    <Link
                      to={`/animalInfo/${animal.id}`}
                      className="border-3 rounded-full h-[24px] w-20 text-center bg-gray-400 hover:bg-gray-700 transition-all duration-300 text-white font-semibold"
                      onClick={handleCreateAdClick}
                    >
                      Info +
                    </Link>
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
            ))}
          </section>
          <Carousel infiniteLoop={true} className="w-96 mr-auto lg:hidden">
            {animals.map((animal) => (
              <div
                className="card bg-customBtnNavBar1 w-11/12 m-auto h-full rounded-md flex flex-col items-center justify-center py-3"
                key={animal.id}
              >
                <div className="w-11/12 h-3/4 bg-slate-100 rounded-md">
                  <img
                    src={animal.images[0]?.url ?? "default-image-url.jpg"}
                    alt={animal.images[0]?.url ?? "Default Image"}
                    className="rounded-md h-full"
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
                    <Link
                      to={`/animalInfo/${animal.id}`}
                      className="border-3 rounded-full h-[24px] w-20 text-center bg-gray-400 hover:bg-gray-700 transition-all duration-300 text-white font-semibold"
                      onClick={handleCreateAdClick}
                    >
                      Info +
                    </Link>
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
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};
export default SectionHomeFour;
