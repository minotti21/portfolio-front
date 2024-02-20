import rgbUtils from "@/utils/rgbUtils";
import styled from "styled-components";

export const StyledSnakeGame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
`;

export const StyledScore = styled.p`
  font-size: 1.4em;
  font-weight: bold;
`;

export const StyledTitle = styled.h1`
  font-size: 2.2em;
  margin: 1em;
`;

export const StyledGameScreen = styled.div`
  width: 900px;
  height: 400px;
  outline: ${({ theme }) =>
    `2px solid ${rgbUtils.darkenRGBColor(theme.defaultColor, 50)}`};
  display: flex;
  flex-direction: column;
  gap: 3em;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 0 5em;
`;

export const StyledTipsTitle = styled.h1`
  font-size: 2em;
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 1480px) {
    font-size: 1.75em;
  }
`;

export const GameTitle = styled.h1`
  font-size: 1.6em;
  text-align: center;
  font-weight: bold;
`;

export const StyledTips = styled.p`
  font-size: 1.4em;
  text-align: center;
  font-weight: 500;
`;
