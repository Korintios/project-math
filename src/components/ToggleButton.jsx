"use client"

import { useTheme } from "next-themes";
import { useState } from "react";

export default function ToggleButton() {

    const {theme, setTheme} = useTheme()
    const [isDarkmode, setIsDarkMode] = useState(theme === "dark")

    const buttonClass = isDarkmode ? "bg-white dark:bg-[#0185fa] translate-x-full" : "bg-white -translate-x-2"
    const buttonLabel = isDarkmode ? "Oscuro" : "Claro"
    const buttonClassName = "flex flex-row px-4 items-center justify-center rounded gap-3 relative w-28 h-10 transition duration-500 transform p-1 " + buttonClass + " text-dark dark:text-white border-2 border-[#d9d9d9] dark:border-[#5c5f65]"
    const reverseClass = isDarkmode ? "-translate-x-[134px]" : "translate-x-[-15px]"
    const reverseClassName = "flex flex-row px-4 items-center justify-center rounded gap-3 relative w-28 h-10 transition " + reverseClass + " duration-500 transform p-1 text-black dark:text-white"
    const reverseLabel = isDarkmode ? "Claro" : "Oscuro"

    const darkIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>

    const lightIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>

    const buttonIcon = isDarkmode ? darkIcon : lightIcon
    const reverseIcon = isDarkmode ? lightIcon : darkIcon

    function switchTheme() {
        setIsDarkMode(!isDarkmode)
        setTheme(isDarkmode ? "light" : "dark")
    }

    return (
        <div className="p-4 border-t border-gray-300 dark:border-[#454545]">
           <div className="flex flex-row w-[15.5em] h-[3.9em] bg-[#f0f0f0] dark:bg-[#2d2d2d] rounded-lg">
                <button className=" px-4 py-8 flex items-center focus:outline-none z-10" onClick={switchTheme}>
                    <div className={buttonClassName}>
                        {buttonIcon}
                        <span className="text-sm font-semibold">{buttonLabel}</span>
                    </div>
                </button>
                <div className="py-8 flex items-center focus:outline-none z-0">
                    <div className={reverseClassName}>
                        {reverseIcon}
                        <span className="text-sm font-semibold">{reverseLabel}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}