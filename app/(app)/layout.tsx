"use client"
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar-Student";
import Header from "@/components/Header";

export default function AppLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}   
            />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
            <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
                </div>
            </main>
            </div>
        </>
    );
}