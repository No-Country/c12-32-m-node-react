import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../components/redux/slice/authSlice";

interface ShowOnLoginProps {
  children: ReactNode;
}

const ShowOnLogin: React.FC<ShowOnLoginProps> = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <>{children}</>;
  }
  return null;
};

export const ShowOnLogout: React.FC<ShowOnLoginProps> = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return <>{children}</>;
  }
  return null;
};

export default ShowOnLogin;
