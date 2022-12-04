import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { StrictMode } from "react";

import "./App.css";
import Regions from "./components/Regions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Regions />,
  },
]);

const App = () => (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

export default App;
