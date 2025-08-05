// src/contexts/ThemeContext.jsx
import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // 1. Inizializzazione dello stato del tema
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Controllo se il browser è disponibile (per il server-side rendering)
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem("isDarkMode");
            // Se esiste una preferenza salvata, la usiamo
            if (savedTheme !== null) {
                return JSON.parse(savedTheme);
            }
            // Altrimenti, usiamo la preferenza di sistema
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        // Valore di default se non siamo nel browser
        return false;
    });

    // 2. useEffect per aggiornare la classe 'dark' e il localStorage
    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    // 3. Funzione per il toggle del tema
    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook per usare il contesto
export const useTheme = () => useContext(ThemeContext);