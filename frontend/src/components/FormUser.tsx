import React, { useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  SET_ACTIVE_USER,
  selectEmail,
} from "./redux/slice/authSlice";
import swal from "sweetalert";
import "sweetalert2/dist/sweetalert2.min.css";
import axios from "axios";

const FormUser = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  
  const dispatch = useDispatch();
  const userEmail = useSelector(selectEmail);
  const userEmailSlice = userEmail?.split("@")[0];
  const [displayName] = useState("");

  const [imagenes, setImagenes] = useState<string[]>([]);

  useEffect(() => {
    dispatch(
      SET_ACTIVE_USER({
        email: userEmail,
        name: "",
        userID: "",
      })
    );
  }, [dispatch]);

  // Codigo para la funcion de tomar una imagen de tu pc
const handleAgregarImagen = (event: React.ChangeEvent<HTMLInputElement>) => {
  const files = event.target.files;
  if (files) {
    const newImagenes: string[] = [];
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          newImagenes.push(reader.result as string);
          // Utiliza la función setState con una función callback para acceder al estado actualizado
          setImagenes((prevImagenes) => [
            ...prevImagenes,
            reader.result as string,
          ]);
        }
      };
      reader.readAsDataURL(file);
    });

    console.log([...imagenes, ...newImagenes]); // Aquí aún puede mostrar el estado desactualizado
  }
  };
  
    const handleRemoveImagen = (index: number) => {
      // uso el index para borrar la imagen del estado
      const updatedImagenes = [...imagenes];
      updatedImagenes.splice(index, 1);
      setImagenes(updatedImagenes);
    };

const getTokenFromLocalStorage = (): string | null => {
  const token = localStorage.getItem("token");
  console.log("Token almacenado en localStorage:", token);
  return token;
};
const submit = async (data: any) => {
  try {
    // Si no envían ninguna imagen, no deja subir el formulario
    if (!imagenes || imagenes.length === 0) {
      swal("Warning", "Debes seleccionar por lo menos una imagen", "error");
    }

    // Obtener el token de autenticación desde el localStorage
   const token = getTokenFromLocalStorage();

    if (!token) {
      swal("Error", "Token no encontrado", "error");
      return;
    }

    // Agregar el token al encabezado de autorización
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };
      console.log("Encabezado de autorización:", config.headers.Authorization);

    // el objeto de datos que se enviará al backend 
    const formData = {
      name: data.name,
      description: data.description,
      size: Number(data.size),
      age: Number(data.age),
      gender: data.gender,
      lastSeen: data.lastSeen,
      category: data.category,
      phone: data.phone,
      direction: data.direction,
      descriptionPublication: data.descriptionPublication,
    };

    // Solicitud al backend para crear una nueva mascota
    const response = await axios.post(
      "http://localhost:7500/api/v1/api/v1/pets",
      formData,
      config
    );

    // Tomar el ID de la mascota creada
    const petId = response.data.data;
    console.log("ID de la mascota creada:", petId);

    // Subir las imágenes asociadas a la mascota
    const uploadImagesResponse = await axios.post(
      `http://localhost:7500/api/v1/pets-images/${petId}/`,
      formData,
      config
    );

    console.log("imágenes:", uploadImagesResponse.data);

    swal("Éxito", "Anuncio publicado correctamente", "success");
    navigate("/profile");
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
    swal("Error", "Ocurrió un error al enviar el formulario", "error");
  }
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
              id="input-imagenes"
              accept="image/*"
              className="hidden"
              {...register("images")}
              onChange={handleAgregarImagen}
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
          <NavLink to={"/"}>
            <button className="absolute top-20 left-0 m-4 bg-customBgNavBar hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-md">
              Volver
            </button>
          </NavLink>
        </div>
        <div>
         <div className="grid grid-cols-3 gap-4 mt-[-15rem]">
  {imagenes.map((imagen, index) => (
    <div key={index} className="relative">
      <img
        src={imagen}
        alt={`Imagen ${index + 1}`}
        className="mb-4 w-[15rem] h-auto"
      />
      <button
        className="absolute top-0 right-0 bg-red-500 text-white font-medium py-1 px-2 rounded-md"
        onClick={() => handleRemoveImagen(index)}
      >
        X
      </button>
    </div>
  ))}
</div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <form onSubmit={handleSubmit(submit)}>
          <div className="flex items-center ml-[-2rem] mb-4 mt-4">
            <label htmlFor="input-foto" className="mr-2 lg:pl-10"></label>
            <div className="w-12 h-12 sm:w-24 sm:h-24 bg-gray-300 transition duration-300 hover:bg-gray-600 rounded-full"></div>
            <p className="lg:pl-5 pl-4 text-lg font-semibold tracking-widest">
              {displayName ? <>{displayName}</> : <>{userEmailSlice}</>}
            </p>
            <div className="ml-4 lg:ml-60 mb-4">
              <label htmlFor="category" className="block mb-2 font-semibold">
                Categoría:
              </label>
              <select
                id="category"
                {...register("category", {
                  required: "Seleccionar categoría es obligatorio",
                })}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Seleccionar categoría</option>
                <option value="categoria1">Adopción</option>
                <option value="categoria2">Mascota Perdida</option>
              </select>
              {errors.category &&
                typeof errors.category.message === "string" && (
                  <p className="text-red-500">{errors.category.message}</p>
                )}
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-4 mt-14 lg:ml-8">
            Datos de la mascota
          </h2>
          <div className="lg:flex mb-4">
            <div className="lg:mr-16 lg:mb-10 lg:mt-10 lg:ml-2">
              <label
                htmlFor="name"
                style={{ display: "block" }}
                className="mr-2 font-semibold"
              >
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Nombre es requerido" })}
                className="w-full lg:mt-2 p-2 border border-gray-800 rounded-md"
              />
              {errors.name && typeof errors.name.message === "string" && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="lg:mr-16 lg:mt-10 lg:mb-10">
              <label
                htmlFor="phone"
                style={{ display: "block" }}
                className="mr-2 font-semibold"
              >
                Teléfono:
              </label>
              <input
                type="text"
                id="phone"
                {...register("phone", {
                  pattern: /^\d{10}$/,
                })}
                className="w-full lg:mt-2 p-2 border border-gray-800 rounded-md"
              />
              {errors.phone && (
                <p className="text-red-500">
                  Ingrese un número de teléfono válido de 10 dígitos
                </p>
              )}
            </div>
            <div className="lg:mt-10 lg:mb-10 mb-4">
              <label
                htmlFor="direction"
                style={{ display: "block" }}
                className="lg:mr-2 mb-2 font-semibold"
              >
                Dirección:
              </label>
              <input
                type="text"
                id="direction"
                {...register("direction", {
                  required: "Dirección es requerida",
                })}
                className="w-full p-2 lg:mt-0 border border-gray-800 rounded-md"
              />
              {errors.direction &&
                typeof errors.direction.message === "string" && (
                  <p className="text-red-500">{errors.direction.message}</p>
                )}
            </div>
          </div>
          <div className="lg:flex mb-4">
            <div className="lg:mr-16 lg:mt-10 lg:mb-10 lg:ml-2">
              <label
                htmlFor="size"
                style={{ display: "block" }}
                className="lg:mr-2 font-semibold"
              >
                Tamaño:
              </label>
              {/* <input
                type="number"
                id="size"
                {...register("size", {
                  required: "size es requerida",
                })}
                className="w-full p-2 lg:mt-0 border border-gray-800 rounded-md"
              /> */}
              <select
                id="size"
                {...register("size", {
                  required: "Seleccionar tamaño es obligatorio",
                })}
                className="w-full p-2 lg:mt-2 border border-gray-800 rounded-md"
              >
                <option value="">Seleccionar tamaño</option>
                <option value="pequeno">Pequeño</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
              </select>
              {errors.size && typeof errors.size.message === "string" && (
                <p className="text-red-500">{errors.size.message}</p>
              )}
            </div>
            <div className="lg:mr-16 mb-4">
              <label
                htmlFor="gender"
                style={{ display: "block" }}
                className="mr-2 mt-10 font-semibold"
              >
                Género:
              </label>
              <select
                id="gender"
                {...register("gender", {
                  required: "Seleccionar genero es obligatorio",
                })}
                className="w-full p-2 border lg:mt-2 border-gray-800 rounded-md"
              >
                <option value="">Seleccionar género</option>
                <option value="macho">Macho</option>
                <option value="hembra">Hembra</option>
              </select>
              {errors.gender && typeof errors.gender.message === "string" && (
                <p className="text-red-500">{errors.gender.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="age"
                style={{ display: "block" }}
                className="lg:mr-2 lg:mt-10 mb-2 font-semibold"
              >
                Edad:
              </label>
              <input
                type="number"
                id="age"
                {...register("age", {
                  pattern: {
                    value: /^\d+$/,
                    message: "Ingrese una edad válida (solo números positivos)",
                  },
                })}
                className="w-full p-2 mt-0 border border-gray-800 rounded-md"
              />
              {errors.age && typeof errors.age.message === "string" && (
                <p className="text-red-500">{errors.age.message}</p>
              )}
            </div>
          </div>
          <div className="lg:flex mb-4 lg:ml-20">
            <div className="lg:mr-20 lg:mt-10 lg:mb-10 ">
              <label
                htmlFor="description"
                className="mr-2 font-semibold"
                style={{ display: "block" }}
              >
                Descripción:
              </label>
              <textarea
                id="description"
                {...register("description", {
                  required: "La descripción es obligatoria",
                })}
                placeholder="Escribe características de tu mascota como: color, apodo, collar, etc..."
                className="w-full p-2 lg:mt-2 border border-gray-800 rounded-md"
              ></textarea>
              {errors.description &&
                typeof errors.description.message === "string" && (
                  <p className="text-red-500">{errors.description.message}</p>
                )}
            </div>
            <div className="lg:mr-4 lg:mt-10 lg:mb-10 mb-4">
              <label
                htmlFor="lastSeen"
                className="lg:mr-2 mb-2 font-semibold"
                style={{ display: "block" }}
              >
                Última vez visto:
              </label>
              <textarea
                id="lastSeen"
                {...register("lastSeen", {
                  required: " Última vez visto es obligatoria",
                })}
                placeholder="Escribe fecha, hora estimada y lugar..."
                className="w-full p-2 lg:mt-0 border border-gray-800 rounded-md"
              ></textarea>
              {errors.lastSeen &&
                typeof errors.lastSeen.message === "string" && (
                  <p className="text-red-500">{errors.lastSeen.message}</p>
                )}
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="lg:ml-0 mb-2 font-semibold"
              style={{ display: "block", textAlign: "center" }}
            >
              Descripción de la publicación:
            </label>
            <textarea
              id="descriptionPublication"
              {...register("descriptionPublication", {
                required: "La descripción de la publicación es obligatoria",
              })}
              className="w-full p-2 lg:mt-2 border border-gray-800 rounded-md"
              style={{ display: "block", margin: "0 auto" }}
            ></textarea>
            {errors.descriptionPublication &&
              typeof errors.descriptionPublication.message === "string" && (
                <p className="text-red-500">
                  {errors.descriptionPublication.message}
                </p>
              )}
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
};

export default FormUser;
