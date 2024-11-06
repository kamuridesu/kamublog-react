import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useState } from "react";

interface HeaderProps {
    blogTitle: string;
}

function getInitialState() {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
        return true;
    }
    return false;
}

export function Header(props: HeaderProps) {

    const [dark, setDark] = useState(false);
    const darkModeHandler = () => {
        setDark(!dark);
        localStorage.setItem("darkMode", dark ? "disabled" : "enabled");
        document.documentElement.classList.toggle("dark");
    }

    const hoverColor = dark ? "hover:bg-gray-800" : "hover:bg-gray-100";

    return (
        <>
        <header className={cn("flex", "justify-between", "items-center", "p-5")}>
            <div className={cn("flex", "items-center")}>
            <h1 className={cn("text-2xl", "font-bold", "ml-2")}><a href="/">{props.blogTitle}</a></h1>
            </div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={cn("p-2", "rounded-md", `${hoverColor}`)} href="/">Home</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={cn("p-2", "rounded-md", `${hoverColor}`)} href="/about">About</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={cn("p-2", "rounded-md", `${hoverColor}`)} href="/contact">Contact</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <button className={cn("p-2", "rounded-md", `${hoverColor}`)} type="button" onClick={() => darkModeHandler && darkModeHandler()}>
                                {
                                    !dark && <MoonIcon className={cn("w-5", "h-5")} />
                                }
                                {
                                    dark && <SunIcon className={cn("w-5", "h-5")} />
                                }
                        </button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
        <div className={cn("w-full", "border-b", `${hoverColor}`)}></div>
        </>
    )
}
