import React from "react";
import { UserCard } from "../../ui/userCard";
import { ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger } from "../../ui/dropdown-menu";
import { UserMenu } from "./UserMenu";
import { SidebarTrigger } from "../../ui/sidebar";

export default function Header() {
  return (
    <div className="flex justify-between sm:items-center flex-col sm:flex-row gap-4 sticky top-0 p-2 sm:p-6 backdrop-blur-sm z-10">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <div>
          <h1 className="text-2xl font-medium">Track your daily activity</h1>
          <p className="text-sm">Check your daily fitness activities and maintain your Health. </p>
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex ml-auto sm:ml-0">
          <UserCard name="Talha Qazi" role="Software engineer" />

          <ChevronDown className="text-muted-foreground" />
        </DropdownMenuTrigger>
        <UserMenu />
      </DropdownMenu>
    </div>
  );
}
