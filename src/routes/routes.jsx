import { createBrowserRouter } from "react-router-dom";

import { Detail } from "../pages/Detail/Detail";
import { Home } from "../pages/Home/Home";
import { Search } from "../pages/Search/Search";
import { Root } from "./root.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "items",
        element: <Search />,
      },
      {
        path: "items/:id",
        element: <Detail />,
      },
    ],
  },
]);
