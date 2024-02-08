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
import { useContext } from "react";
import ColorSelector from "../ColorSelector";
import { isEqual } from "lodash";
import { UserThemeContext } from "@/context/UserThemeContext";
import { black, white } from "@/constants/colors";
import { WindowHeightContext } from "@/context/WindowHeightContext";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const { currentHeight } = useContext(WindowHeightContext);

  const { theme, changeTheme } = useContext(UserThemeContext);
  const showBorder = currentHeight !== 0;

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
            <Link to="home" >Início</Link>
          </StyledNavItem>
          <StyledNavItem>
            <Link to="about" smooth={true}>Sobre</Link>
          </StyledNavItem>
          <StyledNavItem>
            <Link to="projects" smooth={true}>Projetos</Link>
          </StyledNavItem>
          <StyledNavItem>
            <Link to="contact" smooth={true}>Contato</Link>
          </StyledNavItem>
          <StyledThemeIcon onClick={toggleTheme}>
            {isThemeLight ? <PiMoon size={25} /> : <PiSun size={25} />}
          </StyledThemeIcon>
          <ColorSelector />
        </StyledNavItems>
      </NavbarContainer>
    </NavbarPosition>
  );
}
