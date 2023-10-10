import rgbUtils from "@/utils/rgbUtils";
import { styled } from "styled-components";

export const HomeContainer = styled.div`
    height: 80vh;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundColor};
`

export const StyledTitle = styled.h1`
    color: ${({ theme }) => theme.fontColor};
    width: 75%;
    font-weight: 600;
    transition: 0.2s;
    font-size: 2.4em;
    `

export const StyledText = styled.p`
    font-size: 1.6em;
    margin-top: 0.5em;
    margin-bottom: 1em;
    color: ${({ theme }) => theme.fontColor};
    font-weight: 400;
`

export const StyledSubtitle = styled.p`
    font-size: 2em;
    color: ${({ theme }) => theme.fontColor};
    font-weight: 500;
`

export const TextContainer = styled.div`
width: 100%;
`

export const TextAndImageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledList = styled.ul`
`

export const StyledItemList = styled.li`
    color: ${({ theme }) => theme.fontColor};
    margin: 0.5em 0;
    margin-left: 1.2em;
    font-size: 1.4em;
    font-weight: 300;
`

export const HomeButton = styled.button`
    width: 200px;
    margin-top: 1em;
    height: 50px;
    transition: 0.2s;
    cursor: pointer;
    background-color: ${({ theme: { defaultColor } }) => defaultColor};
    border-radius: 8px;
    border: none;
    color: white;
    text-shadow: -1px 1px 1px rgb(0, 0, 0), -1px 1px 1px rgb(0, 0, 0);
    font-weight: 600;
    font-size: 1.6em;
    align-self: flex-end;
    
    &:hover {
        background-color: ${({ theme: { defaultColor, backgroundColor } }) =>
        backgroundColor === 'rgb(248, 250, 252)' ? rgbUtils.darkenRGBColor(defaultColor, 20) : rgbUtils.darkenRGBColor(defaultColor, 40)};
    }
`