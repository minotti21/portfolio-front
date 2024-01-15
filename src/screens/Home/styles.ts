import { styled } from "styled-components";
import SVG from "react-inlinesvg";

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.fontColor};
  font-weight: 600;
  font-size: 2.6em;
  line-height: 1.25em;
`;

export const StyledText = styled.p`
  font-size: 1.6em;
  color: ${({ theme }) => theme.fontColor};
`;

export const StyledSubtitle = styled.p`
  font-size: 2em;
  color: ${({ theme }) => theme.fontColor};
  font-weight: 500;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4em;
`;

export const TitleContainer = styled.div``;

export const StyledList = styled.ul``;

export const StyledName = styled.span`
  background-color: ${({ theme }) => theme.defaultColor};
  color: #fff;
  padding: 0 0.1em;
  margin-right: 0.2em;
  display: inline-block;
  text-shadow:
    -1px 1px 1px rgb(0, 0, 0),
    -1px 1px 1px rgb(0, 0, 0);
  transform: rotate(-5deg);
  border-radius: 4px;
`;

export const StyledItemList = styled.li`
  color: ${({ theme }) => theme.fontColor};
  line-height: 1.8em;
  margin-left: 1.2em;
  font-size: 1.4em;
  font-weight: 300;
`;

export const StyledSvgBlob = styled(SVG)`
  & path {
    fill: ${({ theme }) => theme.defaultColor};
    transition: 0.2s;
  }
`;
