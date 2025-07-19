import { createContext, useEffect, useState } from "react";

export const PortfolioContext = createContext()

export const ContextProvider = (props) => {

    const [activeSection, setActiveSection] = useState('home')

    // themeContext
    
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    // themeContext

      useEffect(() => {
        if (activeSection) {
        window.history.pushState(null, "", `/${activeSection}`);
        }
    }, [activeSection]);

    const allContext = {
        activeSection,
        setActiveSection,
        theme,
        toggleTheme
    }

    return <PortfolioContext.Provider value={allContext}>
        {props.children}
    </PortfolioContext.Provider>
}