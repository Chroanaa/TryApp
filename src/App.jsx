import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "../src/components/About.jsx";
import Home from "../src/components/Home.jsx";
import Vans from "./Pages/vans/Vans.jsx";
import VanDetails from "./Pages/vans/VanDetails.jsx";
import Layout from "./components/Layout.jsx";
import "./server";
import Host from "./Pages/Host/Host.jsx";
import Dashboard from "./Pages/Host/Dashboard.jsx";
import Income from "./Pages/Host/Income.jsx";
import HostVans from "./Pages/Host/Vans.jsx";
import Reviews from "./Pages/Host/Reviews.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
          <Route path="/host" element={<Host />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<h1>Vans</h1>} />
            <Route path="reviews" element={<h1>Reviews</h1>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
