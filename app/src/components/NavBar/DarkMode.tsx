import React, {useEffect, useState} from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const colorTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ?? "light"
    );

    const element = document.documentElement;

    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme == "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    }, [theme])
  return (
    <>
        <ThemeProvider theme={colorTheme}>
            {theme == "dark" ? 
                <IconButton onClick={() => setTheme("light")}>
                    <LightModeIcon className="text-white"/>
                </IconButton>
                : 
                <IconButton onClick={() => setTheme("dark")}>
                    <DarkModeIcon className="text-neutral-900"/>
                </IconButton>
            }
        </ThemeProvider>
    </>
  )
}

export default DarkMode;
