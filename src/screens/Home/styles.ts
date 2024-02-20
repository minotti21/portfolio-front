import Image from "next/image";
import { keyframes, styled } from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding: 8em 0;
    gap: 2em;
    height: auto;
  }
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.fontColor};
  font-weight: 600;
  font-size: 2.6em;
  line-height: 1.25em;

  @media screen and (max-width: 1480px) {
    font-size: 2.2em;
  }

  @media screen and (max-width: 1100px) {
    font-size: 1.6em;
  }

  @media screen and (max-width: 800px) {
    font-size: 1.2em;
  }
`;

export const StyledText = styled.p`
  font-size: 1.6em;
  color: ${({ theme }) => theme.fontColor};

  @media screen and (max-width: 1480px) {
    font-size: 1.4em;
  }

  @media screen and (max-width: 1100px) {
    font-size: 1.2em;
  }

  @media screen and (max-width: 800px) {
    font-size: 1em;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4em;

  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
    list-style-position: inside;
  }
`;

export const TitleContainer = styled.div``;

export const StyledList = styled.ul``;

const animation = keyframes`
 0% { scale: 1 }
 50% { scale: 0.94 }
 100% { scale: 1 }
`;

export const StyledName = styled.span`
  background-color: ${({ theme }) => theme.defaultColor};
  color: #fff;
  transition: 0.3s;
  padding: 0 0.1em;
  margin-right: 0.2em;
  display: inline-block;
  text-shadow:
    -1px 1px 1px rgb(0, 0, 0),
    -1px 1px 1px rgb(0, 0, 0);
  transform: rotate(-5deg);
  border-radius: 4px;
  animation: ${animation} 1.8s ease-in-out infinite;
`;

export const StyledItemList = styled.li`
  color: ${({ theme }) => theme.fontColor};
  line-height: 1.8em;
  margin-left: 1.2em;
  font-size: 1.4em;
  font-weight: 300;

  @media screen and (max-width: 1480px) {
    font-size: 1.2em;
  }

  @media screen and (max-width: 1100px) {
    font-size: 1.0em;
  }
`;

export const Imagecontainer = styled(Image)`
  transition: 0.6s;
  width: 720px;
  height: 540px;
  
  @media screen and (max-width: 1480px) {
    width: 600px;
    height: 450px;
  }

  @media screen and (max-width: 1100px) {
    width: 300px;
    height: 213px;
  }

  &:hover {
    scale: 1.02;
  }
`;
