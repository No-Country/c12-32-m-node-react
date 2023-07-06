import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <HashRouter>
      <header>
        <nav className="flex items-center  justify-between px-10 bg-gray-300 h-20  ">
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
          <button className="border-3 rounded-full h-[50px] w-48 bg-gray-400 hover:bg-gray-700 transition-all duration-300 text-white font-semibold">
            Crear Anuncio
          </button>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
