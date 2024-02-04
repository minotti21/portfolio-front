import rgbUtils from "@/utils/rgbUtils";
import styled from "styled-components";

export const StyledCanvas = styled.canvas`
  background-color: #fff;
  outline: ${({ theme }) =>
    `2px solid ${rgbUtils.darkenRGBColor(theme.defaultColor, 50)}`};
  border-radius: 4px;
  position: relative;
  display: block;
`;

export const StyledScore = styled.span`
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 1em;
  font-weight: bold;
  z-index: 3;
`;
