import { styled } from "styled-components";
import SVG from "react-inlinesvg";

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.fontColor};
  font-weight: 600;
  font-size: 2.6em;
`;

export const StyledText = styled.p`
  font-size: 1.6em;
  color: ${({ theme }) => theme.fontColor};
  margin: 28px 0;
`;

export const StyledSubtitle = styled.p`
  font-size: 2em;
  color: ${({ theme }) => theme.fontColor};
  font-weight: 500;
`;

export const TextContainer = styled.div`
  flex: 1;
`;

export const StyledList = styled.ul`
  margin-bottom: 28px;
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
