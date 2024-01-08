"use client";

import {
  StyledLogo,
  StyledNavItem,
  StyledNavItems,
  NavbarContainer,
  StyledThemeIcon,
  NavbarPosition,
} from "./styles";
import { PiSun, PiMoon } from "react-icons/pi";
import { useContext, useEffect, useState } from "react";
import ColorSelector from "../ColorSelector";
import { isEqual } from "lodash";
import Link from "next/link";
import { UserThemeContext } from "@/context/UserThemeContext";
import { black, white } from "@/constants/colors";

export default function Navbar() {
  const [currentWindowHeight, setCurrentWindowHeight] = useState(0);
  const { theme, changeTheme } = useContext(UserThemeContext);
  const showBorder = currentWindowHeight !== 0;

  const updateWindowHeight = () => {
    setCurrentWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateWindowHeight);

    return () => {
      window.removeEventListener("scroll", updateWindowHeight);
    };
  }, []);

  const isThemeLight = theme.backgroundColor === white;

  const toggleTheme = () => {
    const newTheme = {
      ...theme,
      fontColor: isThemeLight ? white : black,
      backgroundColor: isThemeLight ? black : white,
    };

    if (isEqual(theme, newTheme)) {
      return;
    }

    changeTheme(newTheme);
  };

  return (
    <NavbarPosition $showBorder={showBorder}>
      <NavbarContainer>
        <StyledLogo>minotti.dev</StyledLogo>
        <StyledNavItems>
          <StyledNavItem>
            <Link href="#">Início</Link>
          </StyledNavItem>
          <StyledNavItem>
            <Link href="#about">Sobre</Link>
          </StyledNavItem>
          <StyledNavItem>
            <Link href="#projects">Projetos</Link>
          </StyledNavItem>
          <StyledNavItem>
            <Link href="#contact">Contato</Link>
          </StyledNavItem>
          <StyledThemeIcon onClick={toggleTheme}>
            {isThemeLight ? <PiSun size={25} /> : <PiMoon size={25} />}{" "}
          </StyledThemeIcon>
          <ColorSelector />
        </StyledNavItems>
      </NavbarContainer>
    </NavbarPosition>
  );
}
