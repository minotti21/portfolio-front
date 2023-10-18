import { AiFillHeart } from "react-icons/ai";
import styled from "styled-components";

export const StyledFooter = styled.footer`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 1em;
`

export const StyledText = styled.p`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.fontColor};
`

export const HeartIcon = styled(AiFillHeart)`
    margin: 0 0.3em;
    color: ${({ theme }) => theme.defaultColor};
`
