import { createContext, useContext, useState, ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";

interface ThemeContextType {
    toggleTheme: () => void;
    isDarkTheme: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
    toggleTheme: () => { },
    isDarkTheme: false,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => setIsDarkTheme((prev) => !prev);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
            <StyledThemeProvider theme={theme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);