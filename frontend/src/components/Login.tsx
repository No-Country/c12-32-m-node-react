import { useState } from "react";
import FormLogin from "./FormLogin";
import FormUserRegister from "./FormUserRegister";
import bgMainLogin from '../assets/bgLoginMain.webp'

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const verifyAccess = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className=" lg:h-heightPublicationVh sm:h-96  bg-customBgLogin">
      <img src={bgMainLogin} alt="" className="h-full w-full" />
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







