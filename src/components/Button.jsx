import { useEffect, useState } from 'react';
import "./assets/components/Button.css";

const Button = () => {
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }
        return 'light';
      });
    
      useEffect(() => {
        if (theme === 'dark') {
          document.querySelector('html').classList.add('dark');
        } else {
          document.querySelector('html').classList.remove('dark');
        }
      }, [theme]);
    
      const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };
    
      return (
        <div className="h-screen flex justify-center items-center dark:bg-neutral-900">
          <label htmlFor="theme" className="theme">
            <span className="theme__toggle-wrap">
              <input
                id="theme"
                className="theme__toggle"
                type="checkbox"
                role="switch"
                name="theme"
                value={theme}
                checked={theme === 'dark'} //hola
                onChange={handleChangeTheme}
              />
              <span className="theme__fill"></span>
              <span className="theme__icon">
                {[...Array(9)].map((_, index) => (
                  <span key={index} className="theme__icon-part"></span>
                ))}
              </span>
            </span>
          </label>
        </div>
    
    
      );
    };
export default Button
