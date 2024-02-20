import styled from "styled-components";
import { VscDebugRestart } from "react-icons/vsc";


export const StyledQuoteOfTheDay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 1em;

  @media screen and (max-width: 1480px) {
    font-size: 1.75em;
  }

  @media screen and (max-width: 800px) {
    font-size: 1.6em;
  }
`;

export const StyledQuote = styled.blockquote`
  width: 100%;
  position: relative;
  background-color: #222;
  color: #f3f3f3;
  border-radius: 12px;
  text-align: center;
  font-size: 2em;
  padding: 0.5em 3em;

  @media screen and (max-width: 1480px) {
    font-size: 1.9em;
  }

  @media screen and (max-width: 800px) {
    font-size: 1em;
  }
`;

export const StyledAuthor = styled.cite`
  display: block;
  font-size: 0.9em;
  margin-top: 0.5em;
  font-weight: 600;

  @media screen and (max-width: 1480px) {
    font-size: 0.8em;
  }
  
`;

export const Description = styled.p`
  font-size: 1.4em;
  text-align: center;
  font-weight: 500;

  @media screen and (max-width: 800px) {
    font-size: 1em;
  }
`;

export const RestartIcon = styled(VscDebugRestart)`
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;

`