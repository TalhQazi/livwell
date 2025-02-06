"use client";

import * as React from "react";
import { Sidebar, SidebarContent, SidebarMenuButton, SidebarMenu, SidebarGroup, SidebarMenuItem } from "../../ui/sidebar";
import DashboardSidebarHeader from "./SidebarHeader";
import Link from "next/link";
import { CalendarDays, LayoutDashboard, NotepadText, Settings, Timer } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="md:!w-20" {...props}>
      <DashboardSidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="flex flex-col md:items-center md:gap-4">
            {TABS.map((item) => {
              const isActive = pathname === item.link;
              return (
                <Link href={item.link} key={item.title}>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip={item.title} className={cn(isActive && "bg-primary text-primary-foreground", "hover:bg-primary hover:text-primary-foreground")}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </Link>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

const TABS = [
  { title: "Dashboard", icon: LayoutDashboard, link: "/" },
  { title: "Activity", icon: Timer, link: "/activity" },
  { title: "Calendar", icon: CalendarDays, link: "/calendar" },
  { title: "Notes", icon: NotepadText, link: "/notes" },
  { title: "Settings", icon: Settings, link: "/settings" },
];
