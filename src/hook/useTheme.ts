import { useEffect, useState } from 'react';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type Theme = 'light' | 'dark';
type UseThemeReturn = [string, (e: ChangeEvent) => void];

export const useTheme = (): UseThemeReturn => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState<Theme>(prefersDarkMode ? 'dark' : 'light');

    const handleChange = (e: ChangeEvent) => setTheme(e.target.checked ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return [theme, handleChange];
};
