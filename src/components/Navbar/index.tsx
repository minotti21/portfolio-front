"use client";

import { StyledLogo, StyledNavItem, StyledNavItems, NavbarContainer, StyledThemeIcon } from "./styles";
import { Sun, Moon } from "react-feather";
import { useContext } from "react";
import ColorSelector from "../ColorSelector";
import { isEqual } from "lodash";
import Link from "next/link";
import { ThemeContext } from "@/app/layout";

export default function Navbar() {
    const { theme, changeTheme } = useContext(ThemeContext);

    console.log(theme);

    const isThemeLight = theme.backgroundColor === 'rgb(248, 250, 252)';

    const toggleTheme = () => {
        const newTheme = {
            ...theme,
            fontColor: isThemeLight ? 'rgb(248, 250, 252)' : 'rgb(17, 17, 17)',
            backgroundColor: isThemeLight ? 'rgb(17, 17, 17)' : 'rgb(248, 250, 252)',
        }

        if (isEqual(theme, newTheme)) {
            return;
        }

        changeTheme(newTheme);
    }

    return (
        <NavbarContainer>
            <StyledLogo>minotti.dev</StyledLogo>
            <StyledNavItems>
                <StyledNavItem><Link href="/">Início</Link></StyledNavItem>
                <StyledNavItem><Link href="/about">Sobre</Link></StyledNavItem>
                <StyledNavItem><Link href="/projects">Projetos</Link></StyledNavItem>
                <StyledNavItem><Link href="/contact">Contato</Link></StyledNavItem>
                <StyledThemeIcon onClick={toggleTheme}>{isThemeLight ? <Sun height={25} /> : <Moon />} </StyledThemeIcon>
                <ColorSelector />
            </StyledNavItems>
        </NavbarContainer>
    );
}