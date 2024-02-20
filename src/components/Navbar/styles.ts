import { white } from "@/constants/colors";
import rgbUtils from "@/utils/rgbUtils";
import { styled } from "styled-components";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";


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
  height: 80px;
  display: flex;
  margin: 0 auto;
  max-width: 1280px;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1480px) {
    max-width: 1100px;
  }

  @media screen and (max-width: 1100px) {
    max-width: 800px;
  }

  @media screen and (max-width: 800px) {
    max-width: 100%;
    padding: 0 2em;
  }
`;

export const Menu = styled(IoIosMenu)`
  display: none;

  @media screen and (max-width: 1100px) {
    display: block;
  }
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
  gap: 1em;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  width: 40%;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.fontColor};
  }

  @media screen and (max-width: 1100px) {
    display: none;
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

export const StyledThemeIcon = styled.li`
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

export const MobileNavbar = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${({ theme }) => theme.backgroundColor};
  z-index: 3;
`;

export const CloseIcon = styled(IoClose)`
  position: absolute;
  right: 2em;
  top: 16px;
`

export const MobileNavItems = styled.ul`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  gap: 2em;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.fontColor};
  }
`

export const MobileNavItem = styled.li`
  font-size: 2em;
`

export const StyledColorIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid rgb(255, 255, 255);
  background-color: ${(props) => props.color};
  border: ${({ theme: { defaultColor }, color }) =>
    defaultColor === color ? "3px solid white" : "none"};
  cursor: pointer;
`;

export const ColorsContainer = styled.li`
  display: flex;
  gap: 1em;
`