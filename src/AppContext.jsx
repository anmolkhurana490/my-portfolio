import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(true)

    return (
        <AppContext.Provider value={{darkTheme, setDarkTheme}}>
            {children}
        </AppContext.Provider>
    )
}