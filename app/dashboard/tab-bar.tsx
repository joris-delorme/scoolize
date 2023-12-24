"use client"

import { AtomIcon, Files, Heart, Map, User2 } from "lucide-react";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const tabBarItems = [
    {
        name: 'Profile',
        icon: <User2 />,
        href: '/profile'
    },
    {
        name: 'Bulletins',
        icon: <Files />,
        href: '/bulletins'
    },
    {
        name: 'Map',
        icon: <Map />,
        href: '/map'
    },
    {
        name: 'Like',
        icon: <Heart />,
        href: '/like'
    },
    {
        name: 'Assistant Virtuel',
        icon: <AtomIcon />,
        href: '/assistant'
    },
]


const TabBarItems = ({ item, active }: { item: { name: string, icon: ReactNode, href: string }, active: boolean }) => (
    <TooltipProvider delayDuration={100}>
        <Tooltip>
            <TooltipTrigger asChild>
                <li className={cn(active && "bg-red-300 text-white", "p-3 transition-all rounded-full")} ><Link className="h-4 w-4" href={`/dashboard${item.href}`}>{item.icon}</Link></li>
            </TooltipTrigger>
            <TooltipContent>
                <p>{item.name}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
)


export function TabBar() {

    const pathname = usePathname()

    return (
        <nav className="fixed bottom-10 left-1/2 bg-white/70 rounded-full border backdrop-blur-lg py-1.5 px-6 -translate-x-1/2">
            <ul className="flex gap-4">

                { tabBarItems.map((item, key) => <TabBarItems key={key} item={item} active={pathname.includes(item.href)} />) }

            </ul>
        </nav>
    )
}