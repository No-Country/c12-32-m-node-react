import { useForm } from "react-hook-form";
import imgGoogle from '../assets/googleImg.png'
import { useState, SyntheticEvent } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuMailQuestion } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase/config";
import "sweetalert2/dist/sweetalert2.min.css";
import swal from "sweetalert";
import { SET_ACTIVE_USER } from "./redux/slice/authSlice";
import { useDispatch } from "react-redux";


interface LoginProps {
  verifyAccess: () => void;
}

const FormLogin: React.FC<LoginProps> = ({ verifyAccess }) => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = (data: any) => {
    axios
      .post("http://localhost:7500/api/v1/user-register/login", data, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === false) {
          swal("Error", 'Contraseña Incorrecta', "error");
        }
        const token = res.data.data.token;
        // Almacenar el token en las cookies
        document.cookie = `token=${token}; Secure; SameSite=Strict; path=/`;
        console.log("Token almacenado en las cookies:", document.cookie);

        // Almacenar el token en el localStorage
        localStorage.setItem("token", token);
        console.log(
          "Token almacenado en el localStorage:",
          localStorage.getItem("token")
        );

        const emailcompleto = data.email;
        const email = emailcompleto.split("@")[0];
        dispatch(
          SET_ACTIVE_USER({
            email,
            name: "",
            userID: "",
          })
        );
        swal("Excelente", "Inicio de sesión exitoso!", "success");
        navigate("/form");
      })
      .catch((error) => {
        console.error(error.message)
      });
  };

  const getTokenFromLocalStorage = (): string | null => {
    return localStorage.getItem("token");
  };

  const [showPassword, setShowPassword] = useState<boolean>(true);

  const showPassw = (e: SyntheticEvent) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        swal("Excelente", "Inicio de sesión exitoso!", "success");
        navigate("/form");
      })
      .catch((error) => {
        swal("Error", error.message, "error");
      });
  };

  return (
    <div className="static">
      <form
        onSubmit={handleSubmit(submit)}
        className="  bg-gray-300  my-8 w-96 h-height-Login 
                m-auto px-8 rounded-lg flex-col justify-center  absolute top-24 bottom-0 right-20"
      >
        <h2 className="text-center text-3xl py-12">¡INGRESA!</h2>
        <div>
          <section className="inputContainer my-2">
            <div className="flex items-center gap-1">
              <label htmlFor="email">Mail </label>
              <LuMailQuestion />
            </div>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="w-full rounded-lg h-8 bg-white"
            />
          </section>
          <section className="inputContainer my-2">
            <div className="flex items-center gap-1">
              <label htmlFor="password">Contraseña</label>
              <RiLockPasswordLine />
            </div>
            <div className="flex relative">
              <input
                type={showPassword ? "password" : "text"}
                id="password"
                {...register("password")}
                className="w-full rounded-lg h-8 bg-white"
              />
              <button
                onClick={(e) => showPassw(e)}
                className="h-auto bg-transparent text-3xl absolute right-2 bottom-1/2 translate-y-1/2"
              >
                {showPassword ? <IoEyeSharp className="" /> : <BsFillEyeSlashFill />}
              </button>
            </div>
          </section>
        </div>
        <div className="w-12/12 flex justify-center mt-5">
          <button className="bg-black px-12 py-2 rounded-full hover:bg-gray-700 text-slate-100 font-bold">
            Acceder
          </button>
        </div>
        <p className="text-center m-4">o</p>
        <div
          className="bg-white w-56 py-2 rounded-full flex justify-center items-center m-auto hover:cursor-pointer"
          onClick={signInWithGoogle}
        >
          <img src={imgGoogle} alt="imgGoogle" className="mr-2" />
          <p className="text-center">Continuar Con Google</p>
        </div>
        <div>
          <p className="text-xs text-center my-3">
            ¿Aún no formas parte?{" "}
            <span
              className="text-blue-700 hover:cursor-pointer"
              onClick={() => verifyAccess()}
            >
              Registrate
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
