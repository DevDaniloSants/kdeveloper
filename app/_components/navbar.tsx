import { SidebarTrigger } from './ui/sidebar';

const Navbar = () => {
    return (
        <nav className="fixed z-50 mb-24 flex w-dvw items-center justify-between bg-background p-5">
            <h6 className="text-xs font-semibold">
                <span className="text-primary">KD</span>eveloper
            </h6>

            <SidebarTrigger className="fixed right-4 top-2.5 z-50 rounded-full p-0 duration-0" />
        </nav>
    );
};

export default Navbar;
