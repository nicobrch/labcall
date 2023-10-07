"use client"
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar-Student";
import Header from "@/components/Header";
import DashEstudiante from "@/components/Dashboard/dashEstudiante";

// pendiente
// se debe hacer la separacion de estudiante y profesor, tendran diferentes dashboard y menus de navegacion

export default function Home({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      setTimeout(() => setLoading(false), 1000);
    }, []);
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
            <DashEstudiante/>
          </div>
      </main>
      </div>
    </>
  );
}
