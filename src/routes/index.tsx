import App from "@/App";
import Dashboard from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import AddTour from "@/pages/AdminDashboard/AddTour";
import AddTourType from "@/pages/AdminDashboard/AddTourType";
import Analytics from "@/pages/AdminDashboard/Analytics";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Bookings from "@/pages/UserDashboard/Bookings";
import Verify from "@/pages/Verify";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: About,
        path: "about",
      },
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
  {
    Component: Dashboard,
    path: '/user',
    children:[
      {
        Component: Bookings,
        path: "bookings"
      }
    ]
  },
  {
    Component: Dashboard,
    path: '/admin',
    children:[
      {
        Component: Analytics,
        path: "analytics"
      },
      {
        Component: AddTour,
        path: "addTour"
      },
      {
        Component: AddTourType,
        path: "addTourType"
      },
    ]
  }
]);
