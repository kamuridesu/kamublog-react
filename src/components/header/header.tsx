import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

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

function DarkModeToggle(props: { dark: boolean, darkModeHandler?: () => void, hoverColor: string }) {
    return (
        <button className={cn("p-2", "rounded-md", `${props.hoverColor}`)} type="button" onClick={() => props.darkModeHandler && props.darkModeHandler()}>
                {!props.dark && <MoonIcon className={cn("w-5", "h-5")} />}
                {props.dark && <SunIcon className={cn("w-5", "h-5")} />}
        </button>
    )
}

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

export function Header(props: HeaderProps) {

    const { dark, darkModeHandler } = useDark();

    const hoverColor = dark ? "hover:bg-gray-800" : "hover:bg-gray-100";

    return (
        <>
        <header className={cn("flex", "justify-between", "items-center", "p-5")}>
            <div className={cn("flex", "items-center")}>
            <h1 className={cn("font-bold", "ml-2", "text-2xl")}><a href="/">{props.blogTitle}</a></h1>
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
                        <DarkModeToggle dark={dark} darkModeHandler={darkModeHandler} hoverColor={hoverColor} />
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
                        <DarkModeToggle dark={dark} darkModeHandler={darkModeHandler} hoverColor={hoverColor} />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
        <div className={cn("w-full", "border-b", `${hoverColor}`)}></div>
        </>
    )
}
