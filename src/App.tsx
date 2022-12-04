import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

import "./App.css";
import RegionsRoot from "./components/RegionsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegionsRoot />,
  },
]);

const App = () => (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

export default App;
