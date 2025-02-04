import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const storedTheme = localStorage.getItem('my-app-theme');
    const [darkTheme, setDarkTheme] = useState(storedTheme? JSON.parse(storedTheme) : true);

    useEffect(() => {
        localStorage.setItem('my-app-theme', darkTheme)
    }, [darkTheme])

    return (
        <AppContext.Provider value={{ darkTheme, setDarkTheme }}>
            {children}
        </AppContext.Provider>
    )
}