import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/newsDetails",
        element: <NewsDetails></NewsDetails>,
      },
    ],
  },
]);

export default Router;
