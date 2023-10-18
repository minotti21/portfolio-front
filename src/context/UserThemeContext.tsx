"use client"

import { ReactNode, createContext, useState } from "react";
import { ThemeType } from "../../styled";
import getThemeFromLocalStorage from "@/utils/getThemeFromLocalStorage";

interface UserThemeContextProps {
    theme: ThemeType
    changeTheme: (theme: ThemeType) => void;
}

export const UserThemeContext = createContext<UserThemeContextProps>({} as UserThemeContextProps);

export default function UserThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<ThemeType>(getThemeFromLocalStorage());

    const changeTheme = (newTheme: ThemeType) => {
        localStorage.setItem('theme', JSON.stringify(newTheme));

        setTheme(newTheme);
    }

    return (
        <UserThemeContext.Provider value={{ theme, changeTheme }}>{children}</UserThemeContext.Provider>
    )
}