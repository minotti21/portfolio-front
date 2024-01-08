import { white } from "@/constants/colors";
import rgbUtils from "@/utils/rgbUtils";
import { styled } from "styled-components";

export const ColorSelectorContainer = styled.div`
  position: relative;
`;

export const StyledColorSelectorIcon = styled.div`
  width: 28px;
  height: 28px;
  transition: 0.2s;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.defaultColor};
`;

export const StyledBorderColorSelectorIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  background: ${({ theme }) => theme.defaultColor};
  cursor: pointer;
`;

export const StyledColorSelector = styled.div<{ $showColors: boolean }>`
  display: flex;
  position: absolute;
  margin-top: 0.6em;
  right: 0;
  padding: 12px;
  border-radius: 12px;
  background-color: ${({ theme }) =>
    theme.backgroundColor === white
      ? rgbUtils.darkenRGBColor(theme.backgroundColor, 6)
      : rgbUtils.lightenRGBColor(theme.backgroundColor, 15)};
  -webkit-box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.8);
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.8);
  pointer-events: ${({ $showColors }) => ($showColors ? "auto" : "none")};
  opacity: ${({ $showColors }) => ($showColors ? 1 : 0)};
  transition: 0.3s;
`;

export const StyledColorIcon = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  cursor: pointer;
  margin: 0 4px;
`;
