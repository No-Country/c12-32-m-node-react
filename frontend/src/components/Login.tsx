import { useState } from "react";
import FormLogin from "./FormLogin";
import FormUserRegister from "./FormUserRegister";
import bgMainLogin from '../assets/bgLoginMain.webp'

const Login = () => {

    const [isLogin, setIsLogin] = useState<boolean>(true)

    const verifyAccess = () => {
        setIsLogin(!isLogin)
    }


    return (
      <div className="Login h-full bg-customBgLogin">
        <img src={bgMainLogin} alt="" className="h-[80vh]" />
        <div>
          {isLogin ? (
            <FormLogin verifyAccess={verifyAccess} />
          ) : (
            <FormUserRegister verifyAccess={verifyAccess} />
          )}
        </div>
      </div>
    );
};

export default Login;