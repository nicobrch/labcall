"use client"
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import SidebarStudent from "@/components/Sidebar-Student";
import SidebarTeacher from "@/components/Sidebar-Profesor";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";

export default function AppLayout({
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
                    {user !== null && user !== undefined && (user as any).type === 'student' ? (
                        <SidebarStudent
                            sidebarOpen={sidebarOpen}
                            setSidebarOpen={setSidebarOpen}
                        />
                    ) : null}

                    {user !== null && user !== undefined && (user as any).type === 'teacher' ? (
                        <SidebarTeacher
                            sidebarOpen={sidebarOpen}
                            setSidebarOpen={setSidebarOpen}
                        />
                    ) : null}
                    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                        {user !== null ? (
                            <Header
                                sidebarOpen={sidebarOpen}
                                setSidebarOpen={setSidebarOpen}
                            />
                        ) : null}
                        <main>
                            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
