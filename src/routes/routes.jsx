import { createBrowserRouter } from "react-router-dom";
import { Detail } from "../pages/detail/Detail.jsx";
import { Home } from "../pages/home/Home.jsx";
import { Search } from "../pages/search/Search.jsx";

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
