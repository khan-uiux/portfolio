import { act, createContext, useEffect, useState } from "react";

export const PortfolioContext = createContext()

export const ContextProvider = (props) => {

    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        window.location.hash = activeSection
    },[ activeSection ])

    // themeContext
    
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    // themeContext

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