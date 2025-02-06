"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/contexts/Theme.context";
import { Toaster } from "@/components/ui/sonner";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/dashboard/layout/DashboardSidebar";
import Page from "@/components/Page";
import Header from "@/components/dashboard/layout/Header";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute={"class"} defaultTheme="dark">
        <Toaster />
        <SidebarProvider open={false}>
          <div className="md:w-20 z-20">
            <DashboardSidebar />
          </div>
          <SidebarInset>
            <Page withBgImage className="!p-0">
              <Header />
              {children}
            </Page>
          </SidebarInset>
        </SidebarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
