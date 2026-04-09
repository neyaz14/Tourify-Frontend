import AddTour from "@/pages/AdminDashboard/AddTour";
import AddTourType from "@/pages/AdminDashboard/AddTourType";
import Analytics from "@/pages/AdminDashboard/Analytics";
import { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "Tour Management",
    items: [
      {
        title: "Add Tour Type",
        url: "/admin/add-tour-type",
        component: AddTourType,
      },
      {
        title: "Add Tour",
        url: "/admin/add-tour",
        component: AddTour,
      },
      {
        title: "Habi Jabi",
        url: "/admin/habijabi",
        component: AddTour,
      },
    ],
  },
  {
    title: "User Management",
    items: [
      {
        title: "All User",
        url: "/admin/add-tour-type",
        component: AddTourType,
      }
    ],
  },
];