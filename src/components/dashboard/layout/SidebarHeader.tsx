import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SidebarHeader, useSidebar } from "../../ui/sidebar";

export default function DashboardSidebarHeader() {
  const { openMobile } = useSidebar();

  return (
    <SidebarHeader className="flex items-center justify-center py-6 md:py-12 md:mb-8">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          width={44}
          height={44}
          alt="Assistant Logo"
          className="block"
        />
        {openMobile && (
          <span className="text-3xl font-bold uppercase">Tracker</span>
        )}
      </Link>
    </SidebarHeader>
  );
}
