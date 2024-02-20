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

  @media screen and (max-width: 1100px) {
    font-size: 1.1em;
  }

  @media screen and (max-width: 800px) {
    font-size: 0.6em;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6em;

  @media screen and (max-width: 1100px) {
    gap: 4em;
  }
`;

export const TextAndImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6em;

  @media screen and (max-width: 1100px) {
    gap: 4em;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const StyledSkillsText = styled.p`
  font-size: 1em;
  color: #999;
  margin-top: 0.4em;

  @media screen and (max-width: 1100px) {
    font-size: 0.8em;
  }
`;

export const StyledImage = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
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

  @media screen and (max-width: 1100px) {
    bottom: 42px;
    left: -32px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const ResponsiveImage = styled(Image)`
  object-fit: cover;
  width: 100%;
`;
