import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react'
import { cn } from '../lib/utils';

export default function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check for saved theme preference or use system preference
        const storedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (storedTheme === "dark" || (!storedTheme && systemPrefersDark)) {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
            if (!storedTheme) localStorage.setItem("theme", "light");
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return ( 
        <button 
            onClick={toggleTheme} 
            className={cn(
                "fixed z-50 p-3 rounded-full transition-colors duration-300 bg-card border border-border shadow-md",
                "top-18 right-7", // Position for mobile
                "sm:top-5 sm:right-5", // Position for larger screens
                "focus:outline-none focus:ring-2 focus:ring-primary"
            )}
            aria-label="Toggle dark mode"
        >
            {isDarkMode ? (
                <Sun className='h-5 w-5 text-yellow-300 sm:h-6 sm:w-6'/>
            ) : (
                <Moon className='h-5 w-5 text-blue-900 sm:h-6 sm:w-6'/>
            )}
        </button>
    );
}