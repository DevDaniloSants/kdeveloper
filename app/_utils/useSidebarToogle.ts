import { useSidebar } from '../_components/ui/sidebar';

export const useSidebarToogle = () => {
    const { toggleSidebar, open: isSidebarOpen } = useSidebar();

    const handleToggleSidebar = () => {
        toggleSidebar();
    };

    return {
        handleToggleSidebar,
        isSidebarOpen,
    };
};
