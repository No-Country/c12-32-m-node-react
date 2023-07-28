import { IoReturnUpBackOutline } from "react-icons/io5";
import { GoKebabHorizontal, GoShareAndroid } from "react-icons/go";
import exampleImage from "../assets/gatito.jpg";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineMessage, AiOutlineSend } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";
import "../App.css";
import io from "socket.io-client";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import whatsapp from "../assets/whatsapp.png";
import facebook from "../assets/Facebook.png";

interface Image {
  id: string;
  url: string;
}
interface Animal {
  id: string;
  title: string;
  post_description: string;
  is_found: boolean;
  likes: number;
  pet_name: string;
  pet_description: string;
  size: string;
  age: string;
  gender: string;
  comments: any[]; // El tipo de los comentarios debe ajustarse a la estructura real
  direction: string;
  images: Image[];
  lastSeen: string;
  phone: string;
  post_category: string;
}

const getTokenFromLocalStorage = (): string | null => {
  return localStorage.getItem("token");
};

const socket = io("https://petsociety.up.railway.app/socket.io/socket.io.js", {
  extraHeaders: {
    authentication: `Bearer ${getTokenFromLocalStorage()}`,
  },
});

socket.on("error", (error) => {
  console.error("Error en la conexión WebSocket:", error);
});

console.log("desde publication", socket);

const Publication = () => {
  const [isShare, setIsShare] = useState<boolean>(false);

  const shared = () => {
    setIsShare(!isShare);
  };

  // GET petID

  const { id } = useParams();
  const [animalPublic, setAnimalPublic] = useState<Animal | null>(null);

  useEffect(() => {
    axios
      .get(`https://petsociety.up.railway.app/api/v1/pets/${id}`)
      .then((res) => setAnimalPublic(res.data));
  }, []);
  const navigate = useNavigate();

  const sliderImagePublication = animalPublic?.images;

  // socket.io

  const [comment, setComment] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit("comment", comment);
    console.log(comment);
    setComment("");
  };

  useEffect(() => {
    socket.on("comment", (comment) => {
      console.log(comment);
    });
  }, []);

  return (
    <div className=" flex h-heightPublicationVh">
      <section className="mainContainSlider mainContainSlider  bg-black w-2/4 h-full">
        {sliderImagePublication && (
          <Carousel
            showArrows={true}
            dynamicHeight={true}
            showThumbs={false}
            infiniteLoop={true}
            className="flex justify-center items-center"
          >
            {sliderImagePublication.map((image) => (
              <div className="h-full" key={image.id}>
                <img
                  src={image.url}
                  alt=""
                  className="object-contain h-heightPublicationVh w-full"
                />
              </div>
            ))}
          </Carousel>
        )}
      </section>

      {/* section Comment */}

      <section className="w-2/4 px-5 relative">
        <div className="w-full h-20 flex justify-between items-center">
          <img src={exampleImage} alt="" className="h-12 w-12 rounded-full" />
          <div className="flex justify-center items-center h-full gap-4 text-2xl font-bold">
            <IoReturnUpBackOutline
              onClick={() => navigate(-1)}
              className="hover:cursor-pointer hover:text-3xl"
            />
            <GoKebabHorizontal />
          </div>
        </div>
        <div className="w-11/12 m-auto text-justify text-sm">
          <p>
            Quería pedir su colaboración para que {animalPublic?.pet_name} pueda
            volver a casa, Todos estamos preocupados! la ultima vez que lo vimos
            fue {animalPublic?.lastSeen} Si lo viste o sabes algo, déjalo en los
            comentarios <br />
            <b>
              Info de {animalPublic?.pet_name}: {"  "}
            </b>{" "}
            --- <b>Genero:</b> {animalPublic?.gender},{" "}
            <b> Descripción de Mascota:</b> {animalPublic?.pet_description},{" "}
            <b>Tamaño:</b> {animalPublic?.size}{" "}
          </p>
          <p className="my-4 text-FsTextPublicationTime text-slate-500">
            - Publicado hace 2 semanas
          </p>
        </div>
        <div className="w-full h-auto bg-customBgComment absolute bottom-0 left-0">
          <div className="h-20 flex items-center gap-3 text-3xl px-7">
            <IoMdHeartEmpty />
            <AiOutlineMessage className="hover:cursor-pointer" />
            <div className="flex">
              <GoShareAndroid
                onClick={() => shared()}
                className="mr-7  hover:cursor-pointer"
              />
              {isShare && (
                <div className="flex items-center justify-center text-xl gap-4 static">
                  <a
                    href="https://api.whatsapp.com/send?text=https://pet-society-eight.vercel.app/"
                    target="_blank"
                  >
                    <img src={whatsapp} alt="logoWhatsapp" className="w-7" />
                  </a>
                  <a
                    href="http://www.facebook.com/sharer.php?u=https://pet-society-eight.vercel.app/"
                    target="_blank"
                  >
                    <img src={facebook} alt="logoFacebook" className="w-8" />
                  </a>
                </div>
              )}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              value={comment}
              className="w-full h-10 bg-white"
              placeholder="  Agrega tu comentario..."
              onChange={(e) => setComment(e.target.value)}
            />
            <div>
              <button className="text-3xl w-16 h-10 flex items-center justify-center border-2 hover:bg-customHoverGreen text-white">
                <AiOutlineSend />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Publication;
