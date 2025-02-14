import React from "react";
import logo from "../../assets/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DarkMode from "./DarkMode";
import { Button, IconButton } from "@mui/material";
import ResponsiveMenu from "./ResponsiveMenu";
import { Outlet, Link } from "react-router-dom";

const links = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "About",
        link: "/aboutus",
    },
    {
        id: 3,
        name: "Features",
        link: "/features",
    },
    {
        id: 4,
        name: "Contact Us",
        link: "/contactus",
    },
]
const NavBar = () => {

    const [showMenuBar, setShowMenuBar] = React.useState(false);

    const toggleMenu = () => {
        setShowMenuBar(!showMenuBar);
    }
    return (
        <>
            <nav className="bg-white py-4 px-20 dark:bg-black">
                <div className="containers py-0.5 md:py-1">
                    <div className="flex justify-between items-center px-8">
                        {/* Logo section */}
                        <div className="flex items-center space-x-3">
                            <img src={logo} alt="Logo" className="h-12 w-auto" />
                        </div>
                        {/* Navlinks section */}
                        <div className="hidden md:block">
                            <nav>
                            <ul className="flex items-center gap-8">
                                {links.map(({ id, name, link }) => {
                                    return (
                                        <li key={id} className="cursor-pointer py-4">
                                            <Link to={link} className="text-md text-stone-900 font-light
                                                                    hover:text-qupiqpurple py-2
                                                                    transition-colors duration-500
                                                                    dark:text-white">
                                                {name}
                                            </Link>
                                        </li>
                                    )
                                })}
                                <DarkMode />
                                <Button
                                    variant='contained'
                                    sx={{
                                        background: 'oklch(60.12% 0.1 292.39)',
                                        borderRadius: "6px",
                                        height: '30px',
                                        margin: '1px',
                                        fontSize: 12.5,
                                        transition: '0.3s',
                                        "&:hover": {
                                            background: 'oklch(70% 0.12 292.39)',
                                            transform: 'scale(1.05',
                                        },
                                    }}
                                >
                                    Try QUBIQ
                                </Button>
                            </ul>
                            </nav>
                        </div>
                        {/* Mobile View */}
                        <div className="flex items-center gap-4 md:hidden">
                            <DarkMode />

                            {
                                showMenuBar ?

                                    (<IconButton onClick={toggleMenu}>
                                        <MenuOpenIcon className="dark:text-white text-3xl md:hidden text-neutral-800" />
                                    </IconButton>) :

                                    (<IconButton onClick={toggleMenu}>
                                        <MenuIcon className="dark:text-white text-3xl md:hidden text-neutral-800" />
                                    </IconButton>)
                            }
                        </div>
                    </div>
                </div>
                {/* Mobile Nav View */}
                <ResponsiveMenu
                    showMenu={showMenuBar}
                    menuLinks={links}
                />
            </nav>

            <Outlet/>
        </>
    )
}

export default NavBar;