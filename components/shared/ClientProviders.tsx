"use client";
import React from "react";
import useCartSidebar from "@/hooks/use-cart-sidebar";
import CartSidebar from "./CartSidebar";
import { Toaster } from "../ui/sonner";
import { ThemeProvider } from "./ThemeProvider";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const isCartSidebarOpen = useCartSidebar();

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {isCartSidebarOpen ? (
          <div className="flex min-h-screen">
            <div className="flex-1 overflow-hidden">{children}</div>
            <CartSidebar />
          </div>
        ) : (
          <div>{children}</div>
        )}
        <Toaster />
      </ThemeProvider>
    </>
  );
}
