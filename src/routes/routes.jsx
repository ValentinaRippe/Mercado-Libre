import { createBrowserRouter } from "react-router-dom";

import { Detail } from "../pages/Detail/Detail.jsx";
import { Home } from "../pages/Home/Home.jsx";
import { Search } from "../pages/Search/Search.jsx";
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
