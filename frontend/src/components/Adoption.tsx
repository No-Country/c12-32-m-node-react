import perroDuenio from "../../src/assets/perroDuenio.jpg"
import lostDog from "../../src/assets/lostDog1.jpg"
import { NavLink } from "react-router-dom";

const Adoption = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full overflow-hidden">
      <div className="bg-gray-600 relative min-h-full mobile:h-76">
        <img
          src={perroDuenio}
          alt="Foto Izquierda"
          className="w-full object-cover lg:h-[90vh] h-[80vh] mobile:object-contain mobile:h-full"
        />
        <NavLink to='/adoption/cards'>
          <button className="lg:bg-black bg-navBarColor text-white font-semibold lg:px-4 lg:py-5 py-3 mt-0 lg:w-70 w-[10rem] md:w-96 rounded-full absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 lg:hover:text-black lg:hover:bg-gray-200 lg:hover:opacity-70 transition duration-300">
            ADOPTAR
          </button>
        </NavLink>
      </div>
      <div className="bg-gray-200 relative   min-h-full mobile:h-76">
        <img
          src={lostDog}
          alt="Foto Derecha"
          className="w-full object-cover  lg:h-[90vh] h-[80vh] mobile:object-contain"
        />
        <NavLink to="/missing-list">
          <button className="lg:bg-black bg-navBarColor rounded-full text-white font-semibold lg:px-4 lg:py-4 py-3 mt-0 lg:w-70 md:w-96 w-[10rem] absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2  lg:hover:text-black lg:hover:bg-gray-200 lg:hover:opacity-70 transition duration-300">
            BUSQUEDAS
          </button>
        </NavLink>
      </div>
    </div>
  );
}




export default Adoption;










