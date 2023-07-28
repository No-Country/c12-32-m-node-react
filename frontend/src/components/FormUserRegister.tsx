import { useForm } from "react-hook-form";
import axios from "axios";
import "sweetalert2/dist/sweetalert2.min.css";
import swal from "sweetalert";
import { useEffect, useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { VscError } from "react-icons/vsc";
import "../App.css";

interface RegisterProps {
  verifyAccess: () => void;
}

interface FormData {
  name: string;
  email: string;
  password: string;
  password2: string;
  city: string;
  lastName: string;
  phone: number;
}

const FormUserRegister: React.FC<RegisterProps> = ({ verifyAccess }) => {
  const { handleSubmit, register, watch } = useForm<FormData>();

  const [passwordConf, setPasswordConf] = useState<string>("");
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const submit = (data: FormData) => {
    if (isConfirmed) {
      axios
        .post("https://petsociety.up.railway.app/user-register/create", data)
        .then((res) => {
          console.log(res.data);
          swal("Excelente", "Registro exitoso!", "success");
          verifyAccess();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      swal(
        "Error",
        "La contraseña de confirmación no coincide con la contraseña original.",
        "error"
      );
    }
  };

  useEffect(() => {
    const password = watch("password");
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    setIsConfirmed(
      passwordConf === password &&
        passwordPattern.test(password) &&
        passwordPattern.test(passwordConf)
    );
  }, [passwordConf, watch]);

  function restrictToNumbers(event: React.KeyboardEvent<HTMLInputElement>) {
    if (
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight" ||
      event.key === "Backspace" ||
      event.key === "Delete"
    ) {
      return;
    }

    if (event.key && !/\d/.test(event.key)) {
      event.preventDefault();
    }
  }

  return (
    <div className="static h-auto">
      <form
        className="lg:h-heightPublicationVh h-heightLoginMobile lg:w-widthFormRegister bg-gray-300 absolute top-20 right-0"
        onSubmit={handleSubmit(submit)}
      >
        <h2 className="text-center text-3xl lg:py-12 lg:pt-8 pt-2">
          ¡Regístrate!
        </h2>
        <div className="lg:flex">
          <div className=" h-auto lg:w-6/12 px-6">
            <section className=" lg:my-4">
              <label htmlFor="name">Nombre *</label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg bg-white h-7 border border-gray-800"
                {...register("name")}
                required
              />
            </section>
            <section className=" lg:my-4">
              <label htmlFor="email">Mail *</label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg bg-white h-7 border border-gray-800"
                {...register("email")}
                required
              />
            </section>
            <section className=" lg:my-4">
              <label htmlFor="pass">Contraseña *</label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full rounded-lg bg-white h-7 border border-gray-800"
                  {...register("password")}
                  required
                  onBlur={() => {}}
                />
                {isConfirmed ? (
                  <GiConfirmed className="absolute top-1/2 -translate-y-1/2 right-2 text-green-700 text-xl" />
                ) : (
                  <VscError className="absolute top-1/2 -translate-y-1/2 right-2 text-red-600 text-xl" />
                )}
              </div>
              {!isConfirmed && (
                <p className="text-red-600 text-FsTextWarningPassword">
                  La contraseña debe tener al menos 8 caracteres y contener
                  combinaciones de números, letras mayúsculas y minúsculas.
                </p>
              )}
            </section>
            <section className=" lg">
              <label htmlFor="address">Dirección</label>
              <input
                type="text"
                id="address"
                className="w-full rounded-lg bg-white h-7 border border-gray-800"
                {...register("city")}
              />
            </section>
          </div>
          <div className="h-auto lg:w-6/12  px-6">
            <section className=" lg:my-4">
              <label htmlFor="lastName">Apellido *</label>
              <input
                type="text"
                id="lastName"
                className="w-full rounded-lg bg-white h-7 border border-gray-800"
                {...register("lastName")}
                required
              />
            </section>
            <section className=" lg:my-4">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="number"
                id="phone"
                inputMode="tel"
                onFocus={(e) => (e.currentTarget.type = "text")}
                className="w-full rounded-lg bg-white h-7 border border-gray-800 custom-number-input"
                {...register("phone")}
                onWheel={(e) => e.currentTarget.blur()}
                onKeyDown={(e) => restrictToNumbers(e)}
              />
            </section>
            <section className=" lg:my-4">
              <label htmlFor="pass"> Repetir Contraseña *</label>
              <div className="flex relative">
                <input
                  type="password"
                  id="pass"
                  value={passwordConf}
                  className="w-full rounded-lg bg-white h-7 border border-gray-800"
                  onChange={(e) => setPasswordConf(e.target.value)}
                  onBlur={() => {}}
                />
                {isConfirmed ? (
                  <GiConfirmed className="absolute top-1/2 -translate-y-1/2 right-2 text-green-700 text-xl" />
                ) : (
                  <VscError className="absolute top-1/2 -translate-y-1/2 right-2 text-red-600 text-xl" />
                )}
              </div>
            </section>
          </div>
        </div>
        <div className="w-12/12 flex justify-center mt-5">
          <button className="bg-black px-12 py-2 rounded-full hover:bg-gray-700 text-slate-100 font-bold">
            Registrarse
          </button>
        </div>
        <p className="text-center lg:my-4 my-3">o</p>
        <div>
          <p className="text-xs text-center my-3">
            ¿Ya tienes Cuenta?{" "}
            <span
              className="text-blue-700 hover:cursor-pointer"
              onClick={() => verifyAccess()}
            >
              Inicia sesión
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormUserRegister;
