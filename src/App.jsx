import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./server";
import About from "../src/components/About.jsx";
import Home from "../src/components/Home.jsx";
import Vans from "./Pages/vans/Vans.jsx";
import VanDetails from "./Pages/vans/SeeVanDetails.jsx";
import Layout from "./components/Layout.jsx";
import HostLayout from "./components/HostLayout.jsx";
import Dashboard from "./Pages/Host/Dashboard.jsx";
import Income from "./Pages/Host/Income.jsx";
import HostVans from "./Pages/Host/Vans.jsx";
import Reviews from "./Pages/Host/Reviews.jsx";
import HostVansDetails from "./Pages/Host/VansDetails/SeeVanDetails.jsx";
import Description from "./Pages/Host/VansDetails/Description.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The element layout will always render and renders the first and it will render out its children components as it is a parent route and the layout contents will render too  */}
        {/* only nest when you want to display the same component over multiple components */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
          <Route path="/host" element={<HostLayout />}>
            {/* a wildcard route (*) this just says that any route that matches the /host in its route it will render that as its child route  */}
            <Route index element={<Dashboard />} />
            {/* this index property what it does is once the parent route (Host) is rendered it will render this child route first and always */}

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans/:id" element={<HostVansDetails />}>
              <Route index element={<Description />} />
              <Route path="details" element={<Description />} />
            </Route>
            <Route path="dashboard/:id" element={<HostVansDetails />}>
              <Route index element={<Description />} />
              <Route path="details" element={<Description />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
