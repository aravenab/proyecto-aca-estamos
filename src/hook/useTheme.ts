import { useEffect, useState } from 'react';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type Theme = 'light' | 'dark';
type UseThemeReturn = [string, (e: ChangeEvent) => void];

export const useTheme = (): UseThemeReturn => {
    // Verificar si hay una preferencia de tema almacenada en localStorage
    const storedTheme = localStorage.getItem('theme');
    // Si hay una preferencia almacenada, usarla; de lo contrario, usar la preferencia del sistema
    const initialTheme: Theme = (storedTheme === 'dark' || storedTheme === 'light') ? storedTheme : 
                                  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const [theme, setTheme] = useState<Theme>(initialTheme);

    const handleChange = (e: ChangeEvent) => {
        const selectedTheme = e.target.checked ? 'dark' : 'light';
        setTheme(selectedTheme);
        // Guardar la preferencia del usuario en localStorage
        localStorage.setItem('theme', selectedTheme);
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return [theme, handleChange];
};
