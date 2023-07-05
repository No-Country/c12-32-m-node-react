
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {



  return (
    <HashRouter>
      <header>
        <nav className='flex items-center  justify-between px-10 bg-blue-300 h-20  '>
          <div className="Logo bg-black h-16 w-16 flex items-center justify-center text-white">
            <span>LOGO</span>
          </div>
          <ul className='flex  space-x-10 text-lg' >
            <li><a href="">Inicio</a></li>
            <li><a href="">Anuncios</a></li>
            <li><a href=""></a>¡Como Funciona?</li>
            <li><a href="">Adocta!</a></li>
          </ul>
          <button className='border-2 rounded-full h-10 w-48  bg-slate-400 color- text-white font-semibold'>
            Crear Anuncio
          </button>
        </nav>
      </header>
      <Routes>
        <Route path='/' />
      </Routes>
    </HashRouter>
  )
}

export default App
