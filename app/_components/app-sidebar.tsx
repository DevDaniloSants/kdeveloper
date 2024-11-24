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
import { Mail, Home, Wrench, LaptopMinimal } from 'lucide-react';
import CardUserSidebar from './card-user-sidebar';
import { useSidebarToogle } from '../_utils/useSidebarToggle';

const items = [
    {
        title: 'Home',
        url: '#',
        icon: Home,
    },
    {
        title: 'Serviços',
        url: '#',
        icon: Wrench,
    },
    {
        title: 'Projetos',
        url: '#',
        icon: LaptopMinimal,
    },
    {
        title: 'Contato',
        url: '#',
        icon: Mail,
    },
];

const AppSidebar = () => {
    const { handleToggleSidebar } = useSidebarToogle();

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
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        onClick={handleToggleSidebar}
                                    >
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
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
