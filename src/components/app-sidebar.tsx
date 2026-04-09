import * as React from "react"
import { GalleryVerticalEnd, LoaderIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Logo from "@/assets/icons/Logo"
import { useUserInfoQuery } from "@/redux/features/auth/auth.api"
import { NavUser } from "./ui/nav-user"
import { Link } from "react-router"
import { adminSidebarItems } from "@/routes/adminSidebarItems"

// This is sample sidebarNavData.
const sidebarNavData = {
  navMain: adminSidebarItems
   
 
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const {data, isLoading, error} = useUserInfoQuery(undefined);

  if(isLoading){
    return <LoaderIcon></LoaderIcon>
  }


  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground">
                  <Logo/>
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="text-xl font-medium">Tourify</span>
                  
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {sidebarNavData.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link to={item?.url} className="font-medium">
                    {item.title}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        {
          data?.data?.email ?
          (
            <NavUser user={data?.data}></NavUser>
          )
          :
          (
            <div>
              <p>Nothing found</p>
            </div>
          )
        }
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
