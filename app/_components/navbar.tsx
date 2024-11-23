import { SidebarTrigger } from './ui/sidebar';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-4 py-2">
            <h6 className="text-xs font-semibold">
                <span className="text-primary">KD</span>eveloper
            </h6>

            <SidebarTrigger className="rounded-full p-0" />
        </nav>
    );
};

export default Navbar;
