import { AiOutlineClockCircle } from "react-icons/ai";
import { IoLocationSharp, IoMaleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import animalCard from "../../src/assets/img-card.jpg";
import gatito from "../assets/gatito.jpg";
import perro from "../assets/perro.jpg";
import userImg from "../assets/userImg.png";
import { useEffect } from "react";
import Aos from "aos";
import { useSelector } from "react-redux";
import { selectEmail } from "./redux/slice/authSlice";
import { useForm } from "react-hook-form";

const Profile = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const userEmail = useSelector(selectEmail);
  const getEmailRegex = (): RegExp =>
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const submit = (data: any) => {
    console.log("Datos enviados:", data);
  };

  // Función para validar la contraseña
  const validatePassword = (value: string) => {
    if (!value) {
      return "Contraseña es requerida";
    }
    if (value.length < 8) {
      return "La contraseña debe tener al menos 8 caracteres";
    }
    // Validar si la contraseña tiene al menos una letra mayúscula
    if (!/[A-Z]/.test(value)) {
      return "La contraseña debe contener al menos una letra mayúscula";
    }

    // Validar si la contraseña tiene al menos una letra minúscula
    if (!/[a-z]/.test(value)) {
      return "La contraseña debe contener al menos una letra minúscula";
    }

    // Validar si la contraseña tiene al menos un número
    if (!/\d/.test(value)) {
      return "La contraseña debe contener al menos un número";
    }
    return true;
  };

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-auto ">
      <div className="w-5/6">
        <div className="text-center mb-8">
          <h1
            className="text-4xl mt-[4rem] text-center"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            ¡Hola {userEmail}!
          </h1>
        </div>
        <div className="flex mr-10">
          <div className="w-2/3 pr-4">
            <div className="h-auto">
              <div>
                <h2 className="text-2xl  mb-[-1rem] ml-40 mt-[0rem] first-line:">
                  Mis Publicaciones
                </h2>
                <section className="my-10 m-auto grid grid-cols-3 w-9/12 gap-8 bg-red justify-center ml-[0rem]">
                  <div className="card bg-customBgSectionTwo w-full h-full rounded-md flex flex-col items-center py-3">
                    <div className="w-11/12 h-3/4 bg-slate-100 rounded-md">
                      <img
                        src={animalCard}
                        alt=""
                        className="rounded-md h-full"
                      />
                    </div>
                    <div className="card w-11/12 h-32  flex flex-col justify-between">
                      <div className="w-12/12 flex items-center justify-between">
                        <div className="flex items-center">
                          <h3 className="my-2 font-bold text-lg">TOBY</h3>
                          <IoMaleOutline className="mx-2 text-2xl text-blue-700" />
                        </div>
                        <NavLink
                          to={"/animalInfo"}
                          className="border-3 rounded-full h-[24px] w-20 text-center bg-customBgNavBar hover:bg-gray-700 transition-all duration-300 text-white font-semibold"
                        >
                          Info +
                        </NavLink>
                      </div>
                      <div className="flex">
                        <IoLocationSharp className="text-red-600" />
                        <p className="text-xs font-semibold mx-1">
                          Recoleta, Provincia de Buenos Aires, ARG
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
                      <img src={gatito} alt="" className="rounded-lg h-full" />
                    </div>
                    <div className="w-11/12 h-32 flex flex-col justify-between">
                      <div className="w-12/12 flex items-center justify-between">
                        <div className="flex items-center">
                          <h3 className="my-2 font-bold text-lg">TADEO</h3>
                          <IoMaleOutline className="mx-2 text-2xl text-blue-700" />
                        </div>
                        <NavLink
                          to={"/animalInfo"}
                          className="border-3 rounded-full h-[24px] w-20 text-center bg-customBgNavBar hover:bg-gray-700 transition-all duration-300 text-white font-semibold"
                        >
                          Info +
                        </NavLink>
                      </div>
                      <div className="flex">
                        <IoLocationSharp className="text-red-600" />
                        <p className="text-xs font-semibold mx-1">
                          Recoleta, Provincia de Buenos Aires, ARG
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
                      <img src={perro} alt="" className="rounded-md h-full" />
                    </div>
                    <div className="w-11/12 h-32 flex flex-col justify-between">
                      <div className="w-12/12 flex items-center justify-between">
                        <div className="flex items-center">
                          <h3 className="my-2 font-bold text-lg">REX</h3>
                          <IoMaleOutline className="mx-2 text-2xl text-blue-700" />
                        </div>
                        <NavLink
                          to={"/animalInfo"}
                          className="border-3 rounded-full h-[24px] w-20 text-center bg-customBgNavBar hover:bg-gray-700 transition-all duration-300 text-white font-semibold"
                        >
                          Info +
                        </NavLink>
                      </div>
                      <div className="flex">
                        <IoLocationSharp className="text-red-600" />
                        <p className="text-xs font-semibold mx-1">
                          Recoleta, Provincia de Buenos Aires, ARG
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
                      <img
                        src={animalCard}
                        alt=""
                        className="rounded-md h-full"
                      />
                    </div>
                    <div className="w-11/12 h-32 flex flex-col justify-between">
                      <div className="w-12/12 flex items-center justify-between">
                        <div className="flex items-center">
                          <h3 className="my-2 font-bold text-lg">CARLOS</h3>
                          <IoMaleOutline className="mx-2 text-2xl text-blue-700" />
                        </div>
                        <NavLink
                          to={"/animalInfo"}
                          className="border-3 rounded-full h-[24px] w-20 text-center bg-customBgNavBar hover:bg-gray-700 transition-all duration-300 text-white font-semibold"
                        >
                          Info +
                        </NavLink>
                      </div>
                      <div className="flex">
                        <IoLocationSharp className="text-red-600" />
                        <p className="text-xs font-semibold mx-1">
                          Recoleta, Provincia de Buenos Aires, ARG
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
                    id="name"
                    {...register("name", {
                      required: "Nombre es requerido",
                    })}
                  />
                  {errors.name && typeof errors.name.message === "string" && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
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
                    id="lastName"
                    {...register("lastName", {
                      required: "Apellido es requerido",
                    })}
                  />
                  {errors.lastName &&
                    typeof errors.lastName.message === "string" && (
                      <p className="text-red-500">{errors.lastName.message}</p>
                    )}
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
                    {...register("mail", {
                      required: "Correo electrónico es requerido",
                      pattern: {
                        value: getEmailRegex(), // Usamos la función para obtener la expresión regular
                        message: "Ingrese un correo electrónico válido",
                      },
                    })}
                  />
                  {errors.mail && (
                    <p className="text-red-500">
                      {typeof errors.mail.message === "string"
                        ? errors.mail.message
                        : "Error en el formato del correo electrónico"}
                    </p>
                  )}
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
                    id="contraseña"
                    {...register("contraseña", {
                      required: true,
                      validate: validatePassword,
                    })}
                  />
                  {errors.contraseña && (
                    <p className="text-red-500">
                      {typeof errors.contraseña.message === "string"
                        ? errors.contraseña.message
                        : "Error en la contraseña"}
                    </p>
                  )}
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
                    id="phone"
                    {...register("phone", {
                      pattern: /^\d{10}$/,
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-500">
                      Ingrese un número de teléfono válido de 10 dígitos
                    </p>
                  )}
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
                    id="direction"
                    {...register("direction", {
                      required: "La dirección es obligatoria",
                    })}
                  />
                  {errors.direction &&
                    typeof errors.direction.message === "string" && (
                      <p className="text-red-500">{errors.direction.message}</p>
                    )}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleSubmit(submit)}
                className="bg-customBgNavBar rounded-full text-black font-semibold px-10 py-2 mt-0"
              >
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
