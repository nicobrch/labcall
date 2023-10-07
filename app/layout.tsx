"use client";
import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import React, { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? (
            <Loader />
          ) : (
            <div className="flex h-screen overflow-hidden">
              {children}
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
