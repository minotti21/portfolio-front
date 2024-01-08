import { white } from "@/constants/colors";
import rgbUtils from "@/utils/rgbUtils";
import { styled } from "styled-components";

export const NavbarPosition = styled.nav<{ $showBorder: boolean }>`
  ${({ $showBorder, theme }) => {
    let shadow = "";

    if ($showBorder) {
      if (theme.backgroundColor === white) {
        shadow = "0px 2px 6px 1px rgba(0, 0, 0, 0.15)";
      } else {
        shadow = "0px 2px 6px 1px rgba(0, 0, 0, 0.75)";
      }
    }

    return `position: fixed;
        top: 0;
        width: 100%;
        background-color: ${theme.backgroundColor};
        -webkit-box-shadow: ${shadow};
        -moz-box-shadow: ${shadow};
        box-shadow: ${shadow}; 
        transition: background-color 0.2s, box-shadow 0.4s, -webkit-box-shadow 0.4s, -moz-box-shadow 0.4s;
        z-index: 1;
        `;
  }}
`;

export const NavbarContainer = styled.div`
  height: 10vh;
  display: flex;
  margin: 0 auto;
  max-width: 1280px;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.h1`
  color: ${({ theme }) => theme.fontColor};
  font-size: 1.8em;
  transition: 0.3s;
  cursor: pointer;
  font-weight: 600;
  text-shadow: ${({ theme }) =>
    `-2px -2px 1px ${rgbUtils.lightenRGBColor(theme.defaultColor, 0)}`};

  &:hover {
    color: ${({ theme }) => theme.defaultColor};
    text-shadow: ${({ theme }) =>
      `-2px -2px 1px ${rgbUtils.lightenRGBColor(theme.fontColor, 0)}`};
  }
`;

export const StyledNavItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 40%;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.fontColor};
  }
`;

export const StyledNavItem = styled.li`
  color: ${({ theme }) => theme.fontColor};
  cursor: pointer;
  font-weight: 400;
  transition: 0.2s;
  border-radius: 8px;
  font-size: 1.1em;

  a {
    display: block;
    padding: 8px 12px;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  &:hover {
    background-color: ${({ theme }) =>
      rgbUtils.makeRGBColorTransparent(theme.defaultColor, 0.25)};
  }

  &:active {
    background-color: ${({ theme }) =>
      rgbUtils.makeRGBColorTransparent(theme.defaultColor, 0.5)};
  }
`;

export const StyledThemeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  color: ${({ theme }) => theme.fontColor};
  cursor: pointer;
  border-radius: 8px;
  padding: 8px;

  &:hover {
    background-color: ${({ theme }) =>
      rgbUtils.makeRGBColorTransparent(theme.defaultColor, 0.25)};
  }

  &:active {
    background-color: ${({ theme }) =>
      rgbUtils.makeRGBColorTransparent(theme.defaultColor, 0.5)};
  }
`;
