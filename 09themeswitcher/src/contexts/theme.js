import { createContext,useContext } from "react";

export const ThemeContext = createContext({

    // creating a context with default values 
    themeMode: "light",
    lightTheme: () => {},
    DarkTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}

