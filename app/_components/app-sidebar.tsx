import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/app/_components/ui/sidebar';
import { Calendar, Home, Inbox, Search } from 'lucide-react';

const items = [
    {
        title: 'Home',
        url: '#',
        icon: Home,
    },
    {
        title: 'Serviços',
        url: '#',
        icon: Inbox,
    },
    {
        title: 'Projetos',
        url: '#',
        icon: Calendar,
    },
    {
        title: 'Contato',
        url: '#',
        icon: Search,
    },
];

const AppSidebar = () => {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarHeader>
                    <span>KDeveloper</span>
                </SidebarHeader>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
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
        </Sidebar>
    );
};

export default AppSidebar;
