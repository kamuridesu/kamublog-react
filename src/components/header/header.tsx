import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuContent
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

interface HeaderProps {
    blogTitle: string;
}

const HEADER_LINKS = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'About',
        href: '/about'
    },
    {
        title: 'Contact',
        href: '/contact'
    }
];

export function Header(props: HeaderProps) {

    function useDark() {
        const isDark = localStorage.getItem("dark") === "true";
        const [dark, setDark] = useState(isDark);
    
        useEffect(() => dark ? 
            document.documentElement.classList.add("dark") 
            : document.documentElement.classList.remove("dark"), 
        [dark]);
    
        const darkModeHandler = () => {
            setDark(!dark);
            localStorage.setItem("dark", (!dark).toString());
        };
    
        return { dark, darkModeHandler };
    }

    const { dark, darkModeHandler } = useDark();

    const hoverColor = dark ? "hover:bg-gray-800" : "hover:bg-gray-100";

    return (
        <>
        <header className={cn("flex", "justify-between", "items-center", "p-5")}>
            <div className={cn("flex", "items-center")}>
            <h1 className={cn("text-3xl", "font-bold", "ml-2")}><a href="/">{props.blogTitle}</a></h1>
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <button className={cn("lg:hidden", "p-2", "rounded-md", `${hoverColor}`)} type="button">
                        <HamburgerMenuIcon className={cn("w-5", "h-5")} />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={cn("inline-flex", "justify-center", "lg:hidden")}>
                    {HEADER_LINKS.map((link, index) => (
                        <DropdownMenuItem className={cn("p-2", "rounded-md", `${hoverColor}`)} key={index}>
                            <a href={link.href}>{link.title}</a>
                        </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem>
                        <button className={cn("p-2", "rounded-md", `${hoverColor}`)} type="button" onClick={() => darkModeHandler && darkModeHandler()}>
                                {
                                    !dark && <MoonIcon className={cn("w-5", "h-5")} />
                                }
                                {
                                    dark && <SunIcon className={cn("w-5", "h-5")} />
                                }
                        </button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <NavigationMenu className={cn("hidden", "lg:flex")}>
                <NavigationMenuList>
                    {HEADER_LINKS.map((link, index) => (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuLink className={cn("p-2", "rounded-md", `${hoverColor}`)} href={link.href}>{link.title}</NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
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
