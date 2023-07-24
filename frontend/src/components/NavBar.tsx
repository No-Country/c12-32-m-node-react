import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SectionHomeOne from "./SectionHomeOne";
import SectionHomeTwo from "./SectionHomeTwo";
import SectionHomeThree from "./SectionHomeThree";
import userRegister from "../assets/userRegister.png";
import SectionHomeFour from "./SectionHomeFour";
import "sweetalert2/dist/sweetalert2.min.css";
import swal from "sweetalert";
import "./SweetAlert.css";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
  selectEmail,
  selectIsLoggedIn,
} from "./redux/slice/authSlice";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase/config";
import ShowOnLogin, { ShowOnLogout } from "./ShowOnLogin";
import { LuLogOut } from "react-icons/lu";
import LOGO from "../assets/LOGO.png";

const NavBar = () => {
  const [shouldShowSections, setShouldShowSections] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn1 = useSelector(selectIsLoggedIn);
  const userEmail = useSelector(selectEmail);

  const handleMenuClick = () => {
    setShouldShowSections(true);
  };

  const handleCreateAdClickCrearAnuncio = () => {
    if (!isLoggedIn1) {
      setShouldShowSections(true);
      swal({
        title: "Atención",
        text: "Para poder publicar un anuncio debes crearte una cuenta!",
        icon: "warning",
        buttons: {
          cancel: true,
          confirm: {
            text: "Ok",
            value: true,
            className: "btn-confirm ",
          },
        },
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Creemos tu cuenta!", {
            icon: "success",
          }).then(() => {
            setShouldShowSections(false);
            navigate("/login");
          });
        } else {
          swal("Hasta luego", {
            icon: "success",
          }).then(() => {
            setShouldShowSections(false);
            navigate("/");
          });
        }
      });
    } else if (isLoggedIn1) {
      setShouldShowSections(false);
      navigate("/form");
    }
  };

  const handleCreateAdClick = () => {
    setShouldShowSections(false);
  };

  const handleCreateAdClickProfile = () => {
    setShouldShowSections(false);
    navigate("/profile");
  };

  //Monitoreando usuario logueado
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        setDisplayName(user.displayName || "");
        dispatch(
          SET_ACTIVE_USER({
            //envía una acción SET_ACTIVE_USER al store de Redux con un objeto que contiene la información del usuario autenticado.
            email: user.email || "",
            name: user.displayName || "",
            userID: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(
          REMOVE_ACTIVE_USER({
            email: null || "",
            name: null || "",
            userID: "",
          })
        );
      }
    });
  }, [dispatch, displayName]);

  const logoutUser = () => {
    if (displayName) {
      signOut(auth)
        .then(() => {
          swal("Excelente", "Cierre de sesión exitoso", "success");
          navigate("/");
        })
        .catch((error) => {
          swal("Error", error.message, "error");
        });
    } else {
      dispatch(
        REMOVE_ACTIVE_USER({
          email: null || "",
          name: null || "",
          userID: "",
        })
      );
      swal("Excelente", "Cierre de sesión exitoso normal", "success");
      navigate("/");
    }
  };

  const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showColoredSquare, setShowColoredSquare] = useState(false);

   const handleMobileMenuClick = () => {
     setShowMobileMenu(!showMobileMenu);
  };
  
    const handleButtonSquareClick = () => {
      setShowColoredSquare(!showColoredSquare);
    };


  return (
    <header>
      <nav className="flex items-center justify-between px-10 bg-customBgNavBar h-20">
        <div className="Logo w-[6rem] flex items-center justify-center text-white">
          <NavLink to="/">
            <img src={LOGO} alt="logo" className="mr-10" />
          </NavLink>
        </div>
        <div className="md:hidden flex items-center mb-[-6rem] ml-[5rem]">
          <button
            className={`text-black hover:text-gray-700 ${
              showColoredSquare ? "bg-customBgNavBar " : ""
            }`}
            onClick={() => {
              handleMobileMenuClick();
              handleButtonSquareClick();
            }}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M3 5h18a1 1 0 010 2H3a1 1 0 010-2zm0 7h18a1 1 0 010 2H3a1 1 0 010-2zm0 7h18a1 1 0 010 2H3a1 1 0 010-2z"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`${
            showMobileMenu ? "block" : "hidden"
          } md:flex md:space-x-10 md:text-lg mt-8 md:mt-0 absolute md:relative left-0 md:left-auto top-16 md:top-0 bg-customBgNavBar md:bg-transparent z-10`}
        >
          <li>
            <a
              href="#inicio"
              className="hover:text-white transition-all duration-300"
              onClick={handleMenuClick}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#quienesSomos"
              className="hover:text-white transition-all duration-300"
              onClick={handleMenuClick}
            >
              Nosotros
            </a>
          </li>
          <li>
            <a
              href="#comoFunciona"
              className="hover:text-white transition-all duration-300"
              onClick={handleMenuClick}
            >
              ¿Cómo Funciona?
            </a>
          </li>
          <li>
            <NavLink
              to="/adoption"
              className="hover:text-white transition-all duration-300"
              onClick={handleCreateAdClick}
            >
              Anuncios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/adoption"
              className="hover:text-white transition-all duration-300"
              onClick={handleCreateAdClick}
            >
              ¡Adópta!
            </NavLink>
          </li>
        </ul>
        <section className="flex gap-10">
          <button
            className="border-3 rounded-full h-[40px] w-40 bg-customBtnNavBar1 transition-all duration-300 text-white hover:text-gray-700 font-semibold text-lg"
            onClick={handleCreateAdClickCrearAnuncio}
          >
            Crear Anuncio
          </button>
          <ShowOnLogin>
            <button>
              <p className="font-semibold mt-2 ">
                Hola!{" "}
                <a
                  className="text-custombtnNavBarName ml-1 hover:text-white transition-all duration-300"
                  onClick={handleCreateAdClickProfile}
                >
                  {displayName || userEmail}
                </a>
              </p>
            </button>
          </ShowOnLogin>
          <ShowOnLogout>
            <div
              className="bg-white w-12 h-12 rounded-full"
              onClick={handleCreateAdClick}
            >
              <NavLink to={"/login"}>
                <img src={userRegister} alt="" />
              </NavLink>
              {/* <NavLink to="/profile">
              <div className="flex items-center justify-center ">
                <p>Info del Perfil</p>
              </div>
            </NavLink> */}
            </div>
          </ShowOnLogout>
          <ShowOnLogin>
            <button
              className="transition-all duration-300 text-black hover:text-white font-semibold text-lg pt-2"
              onClick={logoutUser}
            >
              <LuLogOut size={20} />
            </button>
          </ShowOnLogin>
        </section>
      </nav>
      {shouldShowSections && (
        <>
          <SectionHomeOne handleCreateAdClick={handleCreateAdClick} />
          <SectionHomeTwo />
          <SectionHomeThree />
          <SectionHomeFour handleCreateAdClick={handleCreateAdClick} />
        </>
      )}
    </header>
  );
};

export default NavBar;
