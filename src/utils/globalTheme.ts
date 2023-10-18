import { createGlobalStyle } from "styled-components";
import rgbUtils from "./rgbUtils";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        ::-moz-selection {
            color: ${({ theme }) => theme.backgroundColor};
            background: ${({ theme }) => rgbUtils.lightenRGBColor(theme.defaultColor, 20)};
        }


        ::selection {
            color: ${({ theme }) => theme.backgroundColor};
            background: ${({ theme }) => rgbUtils.lightenRGBColor(theme.defaultColor, 20)};
        }

        ::-webkit-scrollbar {
            width: 12px;
            transition: 0.3s;
        }

        ::-webkit-scrollbar-track {
            background: ${({ theme }) => theme.backgroundColor};
        }
        
        ::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.defaultColor};
        }

        ::-webkit-scrollbar-thumb:hover {
            background: ${({ theme }) => rgbUtils.darkenRGBColor(theme.defaultColor, 30)}
        }
    }
`;
