import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

import "./App.css";
import RegionsRoot from "./components/RegionsRoot";
import RegionInfo from "./components/RegionInfo";
import LocationInfo from "./components/LocationInfo";

const router = createBrowserRouter([
  {
    path: "/random-pokemon",
    element: <RegionsRoot />,
  },
  {
    path: "/random-pokemon/regions/:regionName",
    element: <RegionInfo />,
  },
  {
    path: "/random-pokemon/locations/:locationName",
    element: <LocationInfo />,
  },
]);

const App = () => (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

export default App;
