import React from "react";
import userImg from "../assets/userImg.png";

const Profile = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-5/6">
        <div className="text-center mb-8">
          <h1 className="text-2xl mt-[-1rem] ">Hola Paula!</h1>
        </div>
        <div className="flex">
          <div className="w-2/3 pr-4">
            <h2 className="text-lg font-semibold mb-4 mt-5">
              Mis publicaciones
            </h2>
            <div className="p-4 bg-white">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  Título de la publicación 1
                </h3>
                <p>Contenido de la publicación 1</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  Título de la publicación 2
                </h3>
                <p>Contenido de la publicación 2</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  Título de la publicación 3
                </h3>
                <p>Contenido de la publicación 3</p>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex flex-col justify-center items-center mb-8">
              <div className="rounded-full w-24 h-24 overflow-hidden">
                <img src={userImg} alt="Foto de perfil" />
              </div>
              <div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-semibold"
                    htmlFor="nombre"
                  >
                    Nombre
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    type="text"
                    id="nombre"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-semibold"
                    htmlFor="apellido"
                  >
                    Apellido
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    type="text"
                    id="apellido"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-semibold"
                    htmlFor="mail"
                  >
                    Correo electrónico
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    type="email"
                    id="mail"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-semibold"
                    htmlFor="contrasenia"
                  >
                    Contraseña
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    type="password"
                    id="contrasenia"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-semibold"
                    htmlFor="telefono"
                  >
                    Teléfono
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    type="tel"
                    id="telefono"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-semibold"
                    htmlFor="direccion"
                  >
                    Dirección
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    type="text"
                    id="direccion"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-navBarColor rounded-full text-black font-semibold px-10 py-2 mt-0">
                Editar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
