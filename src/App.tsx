import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

import "./App.css";
import RegionsRoot from "./components/RegionsRoot";
import RegionInfo from "./components/RegionInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegionsRoot />,
  },
  {
    path: "regions/:regionName",
    element: <RegionInfo />,
  },
]);

const App = () => (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

export default App;
