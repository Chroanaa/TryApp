import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "../src/components/About.jsx";
import Home from "../src/components/Home.jsx";
import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";
import Vans from "./components/Vans.jsx";
import VanDetails from "./components/VanDetails.jsx";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
