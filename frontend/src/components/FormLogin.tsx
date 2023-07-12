import { useForm } from "react-hook-form";
import imgGoogle from '../assets/googleImg.png'
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase/config";


interface LoginProps {
    verifyAccess: () => void
}

const FormLogin: React.FC<LoginProps> = ({ verifyAccess }) => {

    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();

    const submit = () => {
        console.log('tested');
    }

    const [showPassword, setShowPassword] = useState(true);

    const showPassw = () => {
        setShowPassword(!showPassword)
    }

    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                window.alert("Login Successfully");
                navigate("/form")
            })
            .catch((error) => {
                window.alert(error.message);
            });
    }


    return (
        <form
            onSubmit={handleSubmit(submit)}
            className="  bg-gray-300  my-8 w-96 h-height-Login 
                m-auto px-8 rounded-lg flex-col justify-center  fixed top-28 right-28"
        >
            <h2 className="text-center text-3xl py-12">¡INGRESA!</h2>
            <div>
                <section className="inputContainer my-2">
                    <label htmlFor="email">Mail:</label>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                        className="w-full rounded-lg bg-white"
                    />
                </section>
                <section className="inputContainer my-2">
                    <label htmlFor="password">Contraseña:</label>
                    <div className="flex ju">
                        <input
                            type={showPassword ? "password" : "text"}
                            id="password"
                            {...register("password")}
                            className="w-11/12 rounded-l-lg bg-white"
                        />
                        <button
                            onClick={() => showPassw()}
                            className="h-6 w-6 bg-white rounded-r-lg"
                        >
                            {showPassword ? <IoEyeSharp /> : <BsFillEyeSlashFill />}
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
    );
};

export default FormLogin;