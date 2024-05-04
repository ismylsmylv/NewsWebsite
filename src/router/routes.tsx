import { createBrowserRouter } from "react-router-dom";
import World from "../Pages/World";
import App from "../App";
import Home from "../Pages/Home";
import Business from "../Pages/Business";
import Entertainment from "../Pages/Entertainment";
import Health from "../Pages/Health";
import Local from "../Pages/Local";
import Science from "../Pages/Science";
import Sport from "../Pages/Sports";
import Tech from "../Pages/Technology";
import Admin from "../Pages/Admin";
import ForYouPage from "../Pages/Foryou";
import Details from "../Pages/Details";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/world",
        element: <World />,
      },
      {
        path: "/business",
        element: <Business />,
      },
      {
        path: "/entertainment",
        element: <Entertainment />,
      },
      {
        path: "/health",
        element: <Health />,
      },
      {
        path: "/local",
        element: <Local />,
      },
      {
        path: "/science",
        element: <Science />,
      },
      {
        path: "/sport",
        element: <Sport />,
      },
      {
        path: "/tech",
        element: <Tech />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/foryou",
        element: <ForYouPage />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
]);

export default router;
