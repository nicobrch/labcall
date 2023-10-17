"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import SidebarStudent from "@/components/Sidebar-Student";
import SidebarTeacher from "@/components/Sidebar-Profesor";
import Header from "@/components/Header";
import useLocalStorage from "@/hooks/useLocalStorage";
import DashEstudiante from "@/components/Dashboard/dashEstudiante";
import DashProfesor from "@/components/Dashboard/dashProfesor";
import Loader from "@/components/common/Loader";

export default function Home({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useLocalStorage("user", null);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/ingresar");
    }
  }, [user]);

  if (!user) {
    return <Loader />; //Cargador mientras redirigimos
  }

  const SidebarComponent =
    user?.type === "student" ? SidebarStudent : SidebarTeacher;
  const DashboardComponent =
    user?.type === "student" ? <DashEstudiante></DashEstudiante> : <DashProfesor></DashProfesor>; //Falta el dashboard profesor

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <SidebarComponent
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {DashboardComponent}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
