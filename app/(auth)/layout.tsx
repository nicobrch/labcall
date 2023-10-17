"use client"
import Loader from "@/components/common/Loader";
import React, {useEffect, useState} from "react";

export default function SignInLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {

    return (
        <>
        <div className="relative flex flex-1 flex-col justify-center h-screen overflow-x-hidden">
        <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
            </div>
        </main>
        </div>
        </>
    );
}
