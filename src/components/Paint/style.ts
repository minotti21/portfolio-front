import rgbUtils from "@/utils/rgbUtils";
import styled from "styled-components";

export const StyledPaint = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-size: 2.2em;
  margin-bottom: 0.8em;
`;

export const StyledPaintContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  align-items: center;
  justify-content: space-evenly;
  height: 400px;
  outline: ${({ theme }) =>
    `2px solid ${rgbUtils.darkenRGBColor(theme.defaultColor, 50)}`};
  border-radius: 8px;
  width: 80px;
  background-color: ${({ theme }) =>
    rgbUtils.makeRGBColorTransparent(theme.defaultColor, 0.2)};
  border-bottom-right-radius: 4px;
`;

export const StyledBrushSize = styled.div<{
  $size: number;
  $isSelected: boolean;
}>`
  border-radius: 50%;
  transition: 0.3s;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.defaultColor : theme.fontColor};
  cursor: pointer;
`;
