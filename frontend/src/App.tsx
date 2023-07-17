import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import FormUser from "./components/FormUser";
import Adoption from "./components/Adoption";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import AdoptionList from "./components/MissingCard";
import AdoptionCards from "./components/AdoptionCards";
import Publication from "./components/Publication";


function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<FormUser />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/adoption/cards" element={<AdoptionCards />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/missing-list" element={<AdoptionList />} />
        <Route path="/publication" element={<Publication />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
