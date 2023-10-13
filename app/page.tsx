"use client"
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import SidebarStudent from "@/components/Sidebar-Student";
import SidebarTeacher from "@/components/Sidebar-Profesor";
import Header from "@/components/Header";
import useLocalStorage from "@/hooks/useLocalStorage";
import DashEstudiante from "@/components/Dashboard/dashEstudiante";
import Loader from "@/components/common/Loader";

// pendiente
// se debe hacer la separacion de estudiante y profesor, tendran diferentes dashboard y menus de navegacion

export default function Home({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [user, setUser] = useLocalStorage("user", null);

    const router = useRouter();

    useEffect(() => {
        // Check if the user is not logged in, and if so, redirect to /ingresar
        if (!user) {
            router.push("/ingresar");
        }
    }, [user]);

  return (
    <>
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
        <div className="flex h-screen overflow-hidden">
            { user !== null ? (
                <>
                    {user.type === 'student' ? (
                        <SidebarStudent
                            sidebarOpen={sidebarOpen}
                            setSidebarOpen={setSidebarOpen}
                        />
                    ) : null}
                    {user.type === 'teacher' ? (
                        <SidebarTeacher
                            sidebarOpen={sidebarOpen}
                            setSidebarOpen={setSidebarOpen}
                        />
                    ) : null}
                </>
            ) : null }
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                { user !== null ? (
                    <Header
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                    />
                ) : null }
                <main>
                    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                        { user !== null ? (
                            <>
                                {user.type === 'student' ? (
                                    <DashEstudiante/>
                                ) : null}
                                {user.type === 'teacher' ? (
                                    <DashEstudiante/>
                                ) : null}
                            </>
                        ) : null }
                    </div>
                </main>
            </div>
        </div>
    </div>
    </>
  );
}
