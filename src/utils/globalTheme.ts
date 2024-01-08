import { createGlobalStyle } from "styled-components";
import rgbUtils from "./rgbUtils";
import { white } from "@/constants/colors";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        ::-moz-selection {
            color: ${({ theme }) => theme.backgroundColor};
            background: ${({ theme }) =>
              rgbUtils.lightenRGBColor(theme.defaultColor, 20)};
        }


        ::selection {
            color: ${({ theme }) => theme.backgroundColor};
            background: ${({ theme }) =>
              rgbUtils.lightenRGBColor(theme.defaultColor, 20)};
        }

        ::-webkit-scrollbar {
            width: 12px;
        }

        ::-webkit-scrollbar-track {
            background: ${({ theme }) =>
              theme.backgroundColor === white
                ? rgbUtils.darkenRGBColor(theme.backgroundColor, 28)
                : rgbUtils.lightenRGBColor(theme.backgroundColor, 28)};
        }
        
        ::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.defaultColor};
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: ${({ theme }) =>
              rgbUtils.darkenRGBColor(theme.defaultColor, 30)};
        }
    }
`;
