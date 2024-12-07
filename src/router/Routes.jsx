import { createBrowserRouter } from "react-router";
import Equipments from "../component/home/Equipments";
import HomeLayout from "../layout/HomeLayout";
import AddEquipment from "../pages/AddEquipment";
import AllSportsEquipment from "../pages/AllSportsEquipment";
import EquipmentDetails from "../pages/EquipmentDetails";
import EquipmentEdit from "../pages/EquipmentEdit";
import Login from "../pages/Login";
import MyEquipmentList from "../pages/MyEquipmentList";
import Register from "../pages/Register";
import Root from "../Root";
import ErrorPage from "./../ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
        loader: () => fetch("http://localhost:3000/sports"),
        children: [
          {
            path: "/",
            element: <Equipments />,
          },
          {
            path: "/:id",
            element: <Equipments />,
          },
        ],
      },
      {
        path: "/all-sports-equipment",
        element: <AllSportsEquipment />,
        loader: () => fetch("http://localhost:3000/sports"),
      },
      {
        path: "/my-equipment-list",
        element: (
          <PrivateRoute>
            <MyEquipmentList />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-equipment",
        element: (
          <PrivateRoute>
            <AddEquipment />
          </PrivateRoute>
        ),
      },
      {
        path: "/equipment-details/:id",
        element: (
          <PrivateRoute>
            <EquipmentDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3000/sports"),
      },
      {
        path: "/equipment-edit/:id",
        element: (
          <PrivateRoute>
            <EquipmentEdit />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/sports/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
