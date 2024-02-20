"use client";

import {
  StyledLogo,
  StyledNavItem,
  StyledNavItems,
  NavbarContainer,
  StyledThemeIcon,
  NavbarPosition,
  Menu,
  MobileNavbar,
  CloseIcon,
  MobileNavItems,
  MobileNavItem,
  StyledColorIcon,
  ColorsContainer,
} from "./styles";
import { PiSun, PiMoon } from "react-icons/pi";
import { useContext, useState } from "react";
import ColorSelector from "../ColorSelector";
import { isEqual } from "lodash";
import { UserThemeContext } from "@/context/UserThemeContext";
import { black, colors, white } from "@/constants/colors";
import { WindowHeightContext } from "@/context/WindowHeightContext";
import { Link, animateScroll } from "react-scroll";
import { ScrollbarContext } from "@/context/ScrollbarContext";

export default function Navbar() {
  const { currentHeight } = useContext(WindowHeightContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, changeTheme } = useContext(UserThemeContext);

  const { setShowScrollbar } = useContext(ScrollbarContext);

  const showBorder = currentHeight !== 0;
  const isThemeLight = theme.backgroundColor === white;

  const handleColorClick = (defaultColor: string) => {
    const newTheme = { ...theme, defaultColor };

    if (isEqual(theme, newTheme)) {
      return;
    }

    changeTheme(newTheme);
  };

  const options = {
    duration: 1000,
    smooth: true,
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowScrollbar(isMenuOpen);
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop(options);
  };

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

  if (isMenuOpen) {
    return (
      <MobileNavbar>
        <CloseIcon onClick={toggleMenu} size={52} />
        <MobileNavItems>
          <Link
            href="about"
            to="about"
            duration={1000}
            offset={-92}
            smooth={true}
            onClick={toggleMenu}
          >
            <MobileNavItem>Sobre</MobileNavItem>
          </Link>
          <Link
            href="technologies"
            to="technologies"
            duration={1000}
            offset={-92}
            smooth={true}
            onClick={toggleMenu}
          >
            <MobileNavItem>Tecnologias</MobileNavItem>
          </Link>

          <Link
            href="projects"
            to="projects"
            duration={1000}
            offset={-92}
            smooth={true}
            onClick={toggleMenu}
          >
            <MobileNavItem>Projetos</MobileNavItem>
          </Link>
          <Link
            href="contact"
            to="contact"
            duration={1000}
            offset={-92}
            smooth={true}
            onClick={toggleMenu}
          >
            <MobileNavItem>Contato</MobileNavItem>
          </Link>
          <ColorsContainer>
            {colors.map((color) => (
              <StyledColorIcon
                color={color}
                onClick={() => handleColorClick(color)}
              />
            ))}
          </ColorsContainer>
          <StyledThemeIcon onClick={toggleTheme}>
            {isThemeLight ? <PiMoon size={40} /> : <PiSun size={40} />}
          </StyledThemeIcon>
        </MobileNavItems>
      </MobileNavbar>
    );
  }

  return (
    <NavbarPosition $showBorder={showBorder}>
      <NavbarContainer>
        <StyledLogo onClick={scrollToTop}>minotti.dev</StyledLogo>
        <StyledNavItems>
          <StyledNavItem>
            <Link
              href="about"
              to="about"
              duration={1000}
              offset={-92}
              smooth={true}
            >
              Sobre
            </Link>
          </StyledNavItem>
          <StyledNavItem>
            <Link
              href="technologies"
              to="technologies"
              duration={1000}
              offset={-92}
              smooth={true}
            >
              Tecnologias
            </Link>
          </StyledNavItem>
          <StyledNavItem>
            <Link
              href="projects"
              to="projects"
              duration={1000}
              offset={-92}
              smooth={true}
            >
              Projetos
            </Link>
          </StyledNavItem>
          <StyledNavItem>
            <Link
              href="contact"
              to="contact"
              duration={1000}
              offset={-92}
              smooth={true}
            >
              Contato
            </Link>
          </StyledNavItem>
          <StyledThemeIcon onClick={toggleTheme}>
            {isThemeLight ? <PiMoon size={24} /> : <PiSun size={24} />}
          </StyledThemeIcon>
          <ColorSelector />
        </StyledNavItems>
        <Menu onClick={toggleMenu} size={44} />
      </NavbarContainer>
    </NavbarPosition>
  );
}
