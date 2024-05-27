"use client"

import ToggleButton from "@/components/ToggleButton";
import "./globals.css";
import Navigator from "@/components/Navigator";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  return (
    <html lang="en">
      <body className="flex flex-row">
        {isMounted ? (
          <ThemeProvider attribute="class" defaultTheme="dark">
            <nav className="flex flex-col justify-between bg-white dark:bg-[#1e1e1e] w-[20em] h-screen sticky top-0 left-0">
              <div className="p-4 border-b border-gray-300 dark:border-[#454545]">
                <span className="text-black dark:text-white font-bold">Project Math</span>
              </div>
              <Navigator />
              <ToggleButton />
            </nav>
            <main className="bg-gray-100 dark:bg-[#2d2d2d] w-full p-5">{children}</main>
          </ThemeProvider>
        ) : (
          <div className="load-container w-full h-screen bg-white dark:bg-[#2d2d2d] flex justify-center items-center">
            <div className="loader"></div>
          </div>
        )}
      </body>
    </html>
  );
}
