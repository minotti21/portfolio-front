import rgbUtils from "@/utils/rgbUtils";
import { keyframes, styled } from "styled-components";

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
    backdrop-filter: blur( 4px );
`

export const StyledLogo = styled.h1`
    color: ${({ theme }) => theme.fontColor};
    font-size: 1.8em;
    font-weight: 600;
    text-shadow: ${({ theme }) => `-2px -2px 1px ${rgbUtils.lightenRGBColor(theme.defaultColor, 0)}`};
`

export const StyledNavItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: 40%;
    text-decoration: none;
    `

export const StyledNavItem = styled.li`
    color: ${({ theme }) => theme.fontColor};
    cursor: pointer;
    font-weight: 400;
    transition: 0.3s;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 1.1em;
    &:hover {
        background-color: ${({ theme }) => rgbUtils.makeRGBColorTransparent(theme.defaultColor, 0.25)};
    }
`

export const StyledThemeIcon = styled.div`
    display: flex;
    transition: 0.3s;
    align-items: center;
    color: ${({ theme }) => theme.fontColor};
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    &:hover {
        background-color: ${({ theme }) => rgbUtils.makeRGBColorTransparent(theme.defaultColor, 0.25)};
    }
`
