import userRegister from '../assets/userRegister.png'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <header>
            <nav className="flex items-center  justify-between px-10 bg-customBgNavBar h-20  ">
                <div className="Logo bg-black h-16 w-16 flex items-center justify-center text-white">
                    <span>LOGO</span>
                </div>
                <ul className="flex  space-x-10 text-lg">
                    <li>
                        <a href="">Inicio</a>
                    </li>
                    <li>
                        <a href="">¿Como Funciona?</a>
                    </li>
                    <li>
                        <a href="">Anuncios</a>
                    </li>
                    <li>
                        <a href="">¡Adopta!</a>
                    </li>
                </ul>
                <section className="flex gap-10">
                    <button className="border-3 rounded-full h-[50px] w-48 bg-customBtnNavBar hover:bg-gray-700 transition-all duration-300 font-semibold">
                        Crear Anuncio
                    </button>
                    <div className="bg-white w-12 h-12 rounded-full">
                        <Link to={'/Login'}><img src={userRegister} alt="" /></Link>
                    </div>
                </section>
            </nav>
        </header>
    );
};

export default NavBar;

