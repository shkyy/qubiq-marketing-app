import React from 'react'

interface ResponsiveMenuOptions {
    showMenu: boolean;
    menuLinks: LinkItem[];
}

interface LinkItem {
    id: number;
    name: string;
    link: string;
}

const ResponsiveMenu: React.FC<ResponsiveMenuOptions> = ({showMenu, menuLinks}) => {
  return (
    <div className={`fixed py-16 px-8 shadow-md bg-purple-100 dark:bg-neutral-800 z-80 bottom-0 top-0 w-[65%] transition-all duration-300 ${showMenu ? "left-0" : "left-[-100%]"}`}>
      <div className='h-screen'>
        <nav className='mt-12'>
            <ul className='space-y-6 text-xl'>
                {menuLinks.map(({id, name, link}) => (
                    <li key={id}>
                        <a href={link} className='text-lg text-neutral-900 dark:text-white mb-6 inline-block 
                                                    hover:text-primary transition-colors duration-500'>
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default ResponsiveMenu
