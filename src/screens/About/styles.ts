import { white } from "@/constants/colors";
import rgbUtils from "@/utils/rgbUtils";
import Image from "next/image";
import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8em;
`;

export const StyledText = styled.p`
  font-size: 1.5em;
  font-weight: 400;

  @media screen and (max-width: 1480px) {
    font-size: 1.4em;
  }
`;

export const TextContainer = styled.div`
  flex: 0.5;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6em;
`;

export const TextAndImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6em;
`;

export const StyledSkillsText = styled.p`
  font-size: 1em;
  color: #999;
  margin-top: 0.4em;
`;

export const StyledImage = styled.div`
  width: 600px;
  height: 300px;
  position: relative;
  flex: 0.5;
  border-radius: 12px;
`;

export const IconsContainer = styled.div`
  position: absolute;
  padding: 0.5em 1em;
  bottom: -67.5px;
  left: -32px;
  display: flex;
  gap: 2em;
  transition: 0.3s;
  background-color: ${({ theme }) =>
    theme.backgroundColor === white
      ? rgbUtils.lightenRGBColor(theme.fontColor, 20)
      : rgbUtils.darkenRGBColor(theme.fontColor, 20)};
  border-radius: 12px;

  @media screen and (max-width: 1480px) {
    bottom: -12.5px;
    left: -32px;
  }
`;

export const ResponsiveImage = styled(Image)`
  width: 600px;
  height: 337.5px;

  @media screen and (max-width: 1480px) {
    width: 500px;
    height: 281.25px;
  }
`;
