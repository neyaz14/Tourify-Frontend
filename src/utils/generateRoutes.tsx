import { ISidebarItem } from "@/types";


export const generateRoutes = (sidebarItems: ISidebarItem[]) => {

    return sidebarItems.map((section) => section.items.map(
        (route) => ({
            path: route.url,
            Component: route.component
         })
    ))
}