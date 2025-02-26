import React from 'react'
import { Link } from 'react-router-dom';

interface ResponsiveMenuOptions {
    showMenu: boolean;
    menuLinks: LinkItem[];
    toggleMenu: () => void;
}

interface LinkItem {
    id: number;
    name: string;
    link: string;
}

const ResponsiveMenu: React.FC<ResponsiveMenuOptions> = ({showMenu, menuLinks, toggleMenu}) => {
  return (
    <div className={`fixed py-16 px-10 shadow-2xl shadow-slate-950 bg-purple-100 z-80 bottom-0 top-0 w-[75%] transition-all duration-300 ${showMenu ? "left-0" : "left-[-100%]"}`}>
      <div className='h-screen'>
        <nav className='mt-12'>
            <ul className='space-y-6 text-xl'>
                {menuLinks.map(({id, name, link}) => (
                    <li key={id} onClick={toggleMenu}>
                        <Link to={link} className='text-lg text-neutral-900 dark:text-white mb-6 inline-block 
                                                    hover:text-primary transition-colors duration-500'>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default ResponsiveMenu
