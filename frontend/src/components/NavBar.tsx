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
import { MdClose, MdOutlineMenu } from "react-icons/md";

const NavBar = () => {
  const [shouldShowSections, setShouldShowSections] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn1 = useSelector(selectIsLoggedIn);
  const userEmail = useSelector(selectEmail);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCloseIcon, setIsCloseIcon] = useState(false);

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

  const handleMenuClick = () => {
    setShouldShowSections(true);
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

  const handleMenuClickMobile = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCloseIcon(!isCloseIcon);
  };

  return (
    <header>
      <nav className="flex w-full h-[5rem] px-10 z-30  text-white bg-customBgNavBar">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-[-1rem] py-2">
          <div className="flex items-center">
            <div className="Logo w-[6rem] mobile:ml-[-2rem] lg:flex items-center justify-center text-white">
              <NavLink to="/">
                <img src={LOGO} alt="logo" className="mr-10" />
              </NavLink>
            </div>
          </div>
          <button
            id="navAction"
            className="lg:hidden text-black mr-[13rem] duration-300 ease-in-out absolute top-12 right-0"
            onClick={handleMenuClickMobile}
          >
            {isCloseIcon ? <MdClose size={35} /> : <MdOutlineMenu size={35} />}
          </button>

          <div
            className={`w-full h-30 bg-customBgNavBar ml-6 text-center flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 text-white p-4 lg:p-0 z-20 ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="nav-content"
          >
            <ul className="ml-10 text-lg list-reset lg:flex justify-center flex-1 items-center">
              <li className="mr-10">
                <a
                  href="#inicio"
                  className="hover:text-white transition-all duration-300 text-black"
                  onClick={handleMenuClick}
                >
                  Inicio
                </a>
              </li>
              <li className="mr-10">
                <a
                  href="#quienesSomos"
                  className="hover:text-white transition-all duration-300 text-black"
                  onClick={handleMenuClick}
                >
                  Nosotros
                </a>
              </li>
              <li className="mr-10">
                <a
                  href="#comoFunciona"
                  className="hover:text-white transition-all duration-300 text-black"
                  onClick={handleMenuClick}
                >
                  ¿Cómo Funciona?
                </a>
              </li>
              <li className="mr-10">
                <NavLink
                  to="/adoption"
                  className="hover:text-white transition-all duration-300 text-black"
                  onClick={handleCreateAdClick}
                >
                  Anuncios
                </NavLink>
              </li>
              <NavLink
                to="/adoption"
                className="hover:text-white mobile:ml-9 flex transition-all duration-300 text-black"
                onClick={handleCreateAdClick}
              >
                ¡Adópta!
              </NavLink>
            </ul>
            <button
              id="navAction"
              className="mx-auto lg:mx-0 mobile:text-black bg-customBtnNavBar1 text-white font-bold rounded-full mt-4 lg:mt-0 lg:py-4 lg:px-8 mobile:py-2 mobile:px-2 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              onClick={handleCreateAdClickCrearAnuncio}
            >
              Crear anuncio
            </button>
          </div>
        </div>
        <section className="flex gap-10">
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
              className="bg-white lg:w-12 lg:h-12 mobile:w-12 lg:mr-1 lg:ml-10 mobile:h-12 rounded-full mr-[-2rem] mobile:ml-10 mobile:mt-5 lg:mt-3"
              onClick={handleCreateAdClick}
            >
              <NavLink to={"/login"}>
                <img src={userRegister} alt="" />
              </NavLink>
            </div>
          </ShowOnLogout>
          <ShowOnLogin>
            <button
              className="mr-3 transition-all duration-300  text-black hover:text-white font-semibold text-lg pt-2"
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
