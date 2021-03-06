import { createContext, useState } from "react";
import { lightTheme, darkTheme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { MuiThemeProvider } from "@material-ui/core";
import muiTheme from '../styles/muiTheme'

type CustomThemeContextData = {
    theme: string,
    toggleTheme: () => void
}

export const CustomThemeContext = createContext({} as CustomThemeContextData)

export default function CustomThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    function toggleTheme() {
        setTheme(prevState => prevState === 'light' ? 'dark' : 'light')
    }

    return (
        <CustomThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <MuiThemeProvider theme={muiTheme}>
                    {children}
                </MuiThemeProvider>
            </ThemeProvider>
        </CustomThemeContext.Provider>
    )
}