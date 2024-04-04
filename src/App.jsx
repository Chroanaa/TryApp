import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
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
import Pricing from "./Pages/Host/VansDetails/Pricing.jsx";
import Photos from "./Pages/Host/VansDetails/Photos.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
        <Route path="/host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          {/* this index property what it does is once the parent route (Host) is rendered it will render this child route first and always */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans/:id" element={<HostVansDetails />}>
            <Route index element={<Description />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="photos" element={<Photos />} />
          </Route>
          <Route path="dashboard/:id" element={<HostVansDetails />}>
            <Route index element={<Description />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="photos" element={<Photos />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
