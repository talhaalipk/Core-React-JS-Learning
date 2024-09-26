import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import Header from "./Components/Header";
import CountryDetailsPage from "./CountryDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: [<Header />, <h1>kmrek</h1>],
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/country/:name",
        element: <CountryDetailsPage />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
