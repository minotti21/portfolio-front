import rgbUtils from "@/utils/rgbUtils";
import { styled } from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    z-index: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(4px);
`

export const StyledModal = styled.div`
    width: 800px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
    padding: 30px;
    border-radius: 16px;
`

export const StyledTitle = styled.h1`
    font-size: 4.5em;
`

export const StyledText = styled.p`
    font-size: 1.75em;
`

export const StyledSubText = styled.p`
    margin-top: 0.5em;
    font-size: 1em;
    color: #888;
`

export const StyledInput = styled.input`
    width: 100%;
    border-radius: 16px;
    margin-top: 1em;
    margin-bottom: 0.5em;
    padding: 0 20px;
    height: 70px;
    background-color: ${({ theme }) => rgbUtils.lightenRGBColor(theme.backgroundColor, 30)};
    color: ${({ theme }) => theme.fontColor};
    font-weight: bold;
    caret-color: ${({ theme }) => theme.defaultColor};
    font-size: 1.6em;
    outline: none;
    border: none;

    &::placeholder {
        font-size: 0.6em;
    }
`

export const ColorsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 32px 0;
`

export const StyledColorIcon = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid rgb(255, 255, 255);
    background-color: ${props => props.color};
    border: ${({ theme: { defaultColor }, color }) => defaultColor === color ? "3px solid white" : "none"};
    cursor: pointer;
`

export const StyledError = styled.p`
`