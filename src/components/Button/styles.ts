import { white } from "@/constants/colors";
import rgbUtils from "@/utils/rgbUtils";
import styled from "styled-components";

export const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  transition: 0.2s;
  cursor: pointer;
  background-color: ${({ theme: { defaultColor } }) => defaultColor};
  border-radius: 8px;
  border: none;
  color: white;
  text-shadow:
    -1px 1px 1px rgb(0, 0, 0),
    -1px 1px 1px rgb(0, 0, 0);
  font-weight: 600;
  font-size: 1.6em;

  &:hover {
    background-color: ${({ theme: { defaultColor, backgroundColor } }) =>
      backgroundColor === white
        ? rgbUtils.darkenRGBColor(defaultColor, 20)
        : rgbUtils.darkenRGBColor(defaultColor, 32)};
  }
`;
