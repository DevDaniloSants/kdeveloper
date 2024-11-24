import { useSidebar } from '../_components/ui/sidebar';

export const useSidebarToogle = () => {
    const { toggleSidebar } = useSidebar();

    const handleToggleSidebar = () => {
        return toggleSidebar();
    };

    return {
        handleToggleSidebar,
    };
};
