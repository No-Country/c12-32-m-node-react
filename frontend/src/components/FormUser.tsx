import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const FormUser = () => {
  const [imagenes, setImagenes] = useState<string[]>([]);
  const [foto, setFoto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [tamanio, setTamanio] = useState("");
  const [genero, setGenero] = useState("");
  const [edad, setEdad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [ultimaVezVisto, setUltimaVezVisto] = useState("");
  const [descripcionPublicacion, setDescripcionPublicacion] = useState("");

  const handleAgregarImagen = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImagenes: string[] = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            newImagenes.push(reader.result as string);
          }
        };
        reader.readAsDataURL(file);
      });
      setImagenes([...imagenes, ...newImagenes]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Datos enviados:", {
      imagenes,
      foto,
      categoria,
      nombre,
      telefono,
      direccion,
      tamanio,
      genero,
      edad,
      descripcion,
      ultimaVezVisto,
      descripcionPublicacion,
    });
  };
  return (
    <div className="lg:flex flex-initial">
      <div className="container mx-auto px-4 bg-gray-200 lg:w-1/2">
        <div className="flex flex-col justify-center items-center lg:min-h-screen h-96">
          <h1 className="text-gray-600 text-2xl tracking-widest mb-8">
            AGREGAR IMÁGENES
          </h1>
          <div className="mb-4 flex items-center">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleAgregarImagen}
              className="hidden"
              id="input-imagenes"
            />
            <label
              htmlFor="input-imagenes"
              className="p-4 border border-dashed cursor-pointer rounded-lg"
            >
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 4v16m8-8H4"></path>
              </svg>
            </label>
          </div>
          <NavLink to = {"/"}>
            <button className="absolute top-20 left-0 m-4 bg-customBgNavBar hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-md">
              Volver
            </button>
          </NavLink>
        </div>
        <div>
          {imagenes.map((imagen, index) => (
            <img
              key={index}
              src={imagen}
              alt={`Imagen ${index + 1}`}
              className="mb-4 w-full h-auto"
            />
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center ml-[-2rem] mb-4 mt-4">
            <label htmlFor="input-foto" className="mr-2 lg:pl-10"></label>
            <div className="w-12 h-12 sm:w-24 sm:h-24 bg-gray-300 transition duration-300 hover:bg-gray-600 rounded-full"></div>
            <p className="lg:pl-5 pl-4 text-lg font-semibold tracking-widest">
              Paula Castro
            </p>
            <div className="ml-4 lg:ml-60 mb-4">
              <label
                htmlFor="select-categoria"
                className="block mb-2 font-semibold"
              >
                Categoría:
              </label>
              <select
                id="select-categoria"
                onChange={(e) => setCategoria(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Seleccionar categoría</option>
                <option value="categoria1">Adopción</option>
                <option value="categoria2">Mascota Perdida</option>
              </select>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-4 mt-14 lg:ml-8">
            Datos de la mascota
          </h2>
          <div className="lg:flex mb-4">
            <div className="lg:mr-16 lg:mb-10 lg:mt-10 lg:ml-2">
              <label
                htmlFor="input-nombre"
                style={{ display: "block" }}
                className="mr-2 font-semibold"
              >
                Nombre:
              </label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                id="input-nombre"
                className="w-full lg:mt-2 p-2 border border-gray-800 rounded-md"
              />
            </div>
            <div className="lg:mr-16 lg:mt-10 lg:mb-10">
              <label
                htmlFor="input-telefono"
                style={{ display: "block" }}
                className="mr-2 font-semibold"
              >
                Teléfono:
              </label>
              <input
                type="text"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                id="input-telefono"
                className="w-full lg:mt-2 p-2 border border-gray-800 rounded-md"
              />
            </div>
            <div className="lg:mt-10 lg:mb-10 mb-4">
              <label
                htmlFor="input-direccion"
                style={{ display: "block" }}
                className="lg:mr-2 mb-2 font-semibold"
              >
                Dirección:
              </label>
              <input
                type="text"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                id="input-direccion"
                className="w-full p-2 lg:mt-0 border border-gray-800 rounded-md"
              />
            </div>
          </div>
          <div className="lg:flex mb-4">
            <div className="lg:mr-16 lg:mt-10 lg:mb-10 lg:ml-2">
              <label
                htmlFor="select-tamanio"
                style={{ display: "block" }}
                className="lg:mr-2 font-semibold"
              >
                Tamaño:
              </label>
              <select
                id="select-tamanio"
                onChange={(e) => setTamanio(e.target.value)}
                className="w-full p-2 lg:mt-2 border border-gray-800 rounded-md"
              >
                <option value="">Seleccionar tamaño</option>
                <option value="pequeno">Pequeño</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
              </select>
            </div>
            <div className="lg:mr-16 mb-4">
              <label
                htmlFor="select-genero"
                style={{ display: "block" }}
                className="mr-2 mt-10 font-semibold"
              >
                Género:
              </label>
              <select
                id="select-genero"
                onChange={(e) => setGenero(e.target.value)}
                className="w-full p-2 border lg:mt-2 border-gray-800 rounded-md"
              >
                <option value="">Seleccionar género</option>
                <option value="macho">Macho</option>
                <option value="hembra">Hembra</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="input-edad"
                style={{ display: "block" }}
                className="lg:mr-2 lg:mt-10 mb-2 font-semibold"
              >
                Edad:
              </label>
              <input
                type="text"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                id="input-edad"
                className="w-full p-2 mt-0 border border-gray-800 rounded-md"
              />
            </div>
          </div>
          <div className="lg:flex mb-4 lg:ml-20">
            <div className="lg:mr-20 lg:mt-10 lg:mb-10 ">
              <label
                htmlFor="textarea-descripcion"
                className="mr-2 font-semibold"
                style={{ display: "block" }}
              >
                Descripción:
              </label>
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                id="textarea-descripcion"
                placeholder="Escribe características de tu mascota como: color, apodo, collar, etc..."
                className="w-full p-2 lg:mt-2 border border-gray-800 rounded-md"
              ></textarea>
            </div>
            <div className="lg:mr-4 lg:mt-10 lg:mb-10 mb-4">
              <label
                htmlFor="textarea-ultima-vez-visto"
                className="lg:mr-2 mb-2 font-semibold"
                style={{ display: "block" }}
              >
                Última vez visto:
              </label>
              <textarea
                value={ultimaVezVisto}
                onChange={(e) => setUltimaVezVisto(e.target.value)}
                id="textarea-ultima-vez-visto"
                placeholder="Escribe fecha, hora estimada y lugar..."
                className="w-full p-2 lg:mt-0 border border-gray-800 rounded-md"
              ></textarea>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="textarea-descripcion-publicacion"
              className="lg:ml-0 mb-2 font-semibold"
              style={{ display: "block", textAlign: "center" }}
            >
              Descripción de la publicación:
            </label>
            <textarea
              value={descripcionPublicacion}
              onChange={(e) => setDescripcionPublicacion(e.target.value)}
              id="textarea-descripcion-publicacion"
              className="w-full p-2 lg:mt-2 border border-gray-800 rounded-md"
              style={{ display: "block", margin: "0 auto" }}
            ></textarea>
          </div>
          <div className="flex lg:justify-end justify-center">
            <button
              type="submit"
              className="bg-customBgNavBar text-white hover:bg-gray-500 font-bold py-3 px-20 tracking-widest rounded-lg mt-3"
            >
              Publicar Anuncio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormUser;