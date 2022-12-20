import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

import "./App.css";
import RegionsRoot from "./components/RegionsRoot";
import RegionInfo from "./components/RegionInfo";
import LocationInfo from "./components/LocationInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegionsRoot />,
  },
  {
    path: "regions/:regionName",
    element: <RegionInfo />,
  },
  {
    path: "locations/:locationName",
    element: <LocationInfo />,
  },
]);

const App = () => (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

export default App;
