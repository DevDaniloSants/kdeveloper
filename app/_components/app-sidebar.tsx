'use client';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/app/_components/ui/sidebar';

import CardUserSidebar from './card-user-sidebar';
import { useSidebarToogle } from '../_utils/useSidebarToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { SIDEBAR_DATA } from '../_constants/sidebar';

const AppSidebar = () => {
    const { handleToggleSidebar } = useSidebarToogle();
    const pathName = usePathname();

    useEffect(() => {
        console.log(pathName);
    }, [pathName]);
    return (
        <Sidebar>
            <SidebarContent className="pt-6">
                <SidebarHeader className="flex flex-row items-center justify-center gap-0 pt-3">
                    <span className="rounded-full bg-primary p-1 text-xs text-primary-foreground">
                        KD
                    </span>
                    eveloper
                </SidebarHeader>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-2">
                            {SIDEBAR_DATA.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        onClick={handleToggleSidebar}
                                    >
                                        <Link
                                            href={item.url}
                                            className={`link ${pathName === '/' && window.location.hash === item.url ? 'bg-sidebar-accent' : ''}`}
                                        >
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="p-2">
                <CardUserSidebar
                    image="danilo.jpeg"
                    name="Danilo Santos"
                    description="Full Stack"
                    githubUrl="https://github.com/DevDaniloSants"
                    linkedinUrl="https://www.linkedin.com/in/danilodss/"
                />
                <CardUserSidebar
                    image="kaio.jpeg"
                    name="Kaio Melo"
                    description="Backend"
                    githubUrl="https://github.com/KaioMelo"
                    linkedinUrl="https://www.linkedin.com/in/kaiomelo/"
                />
            </SidebarFooter>
        </Sidebar>
    );
};

export default AppSidebar;
