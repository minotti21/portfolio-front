import { white } from "@/constants/colors";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3em;
`;

export const TechnologiesImageContainer = styled.div`
  display: grid;
  row-gap: 4em;
  grid-template-columns: repeat(8, 1fr);
  justify-items: center;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  margin-top: 4em;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StyledMiddleText = styled.p`
  font-size: 1.4em;
  font-weight: 400;
  text-align: center;
  
  @media screen and (max-width: 1480px) {
    font-size: 1.3em;
  }

  @media screen and (max-width: 1100px) {
    font-size: 1.1em;
  }
  
  @media screen and (max-width: 800px) {
    font-size: 0.9em;
  }
`;

const animation = keyframes`
 0% { rotate: 0 }
 25% { rotate: 12deg }
 75% { rotate: -12deg}
 100% { rotate: 0 }
`;

export const StyledTechnologyImage = styled(Image)`
  transition: 0.3s;
  opacity: 0.4;
  width: 80px;
  height: 80px;

  @media screen and (max-width: 1480px) {
    width: 72px;
    height: 72px;
  }

  @media screen and (max-width: 1100px) {
    width: 64px;
    height: 64px;
  }
  
  @media screen and (max-width: 800px) {
    width: 44px;
    height: 44px;
  }

  &:hover {
    opacity: 1;
    animation: ${animation} 1s linear infinite backwards;
  }

`;

export const TechnologieImageBackground = styled.div`
  width: 92px;
  height: 92px;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme.backgroundColor == white ? "transparent" : "#fafafa"};
  opacity: 0.4;

  &:hover {
    opacity: 1;
  }
`;

export const TechnologyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1em;
  height: 360px;

  @media screen and (max-width: 800px) {
    height: auto;
    margin: 2em 0;
  }
`;

export const TechnologyInfoTitle = styled.h2`
  font-size: 2em;
  font-weight: 600;
  
  @media screen and (max-width: 1480px) {
    font-size: 1.8em;
  }

  @media screen and (max-width: 1100px) {
    font-size: 1.6em;
  }

  @media screen and (max-width: 800px) {
    font-size: 1.4em;
  }
`;

export const TechnologyInfoText = styled.p`
  font-size: 1.3em;
  font-weight: 300;
  text-align: center;
  
  @media screen and (max-width: 1480px) {
    font-size: 1.2em;
  }

  @media screen and (max-width: 1100px) {
    font-size: 1.1em;
  }

  @media screen and (max-width: 800px) {
    font-size: 0.9em;
  }
`;

export const ExperienceText = styled.p`
  font-size: 1.6em;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 1480px) {
    font-size: 1.5em;
  }

  @media screen and (max-width: 1100px) {
    font-size: 1.4em;
  }

  @media screen and (max-width: 800px) {
    font-size: 1.1em;
  }
`;

export const TechnologyInfoSpan = styled.span`
  font-size: 1.6em;
  font-weight: 600;
  text-align: center;
`;
