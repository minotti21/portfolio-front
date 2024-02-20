import styled from "styled-components";

export const StyledQuoteOfTheDay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 1em;

  @media screen and (max-width: 1480px) {
    font-size: 1.75em;
  }
`;

export const StyledQuote = styled.blockquote`
  text-align: center;
  font-size: 2.4em;
  padding: 0 2em;

  @media screen and (max-width: 1480px) {
    font-size: 2em;
  }
`;

export const StyledAuthor = styled.cite`
  display: block;
  font-size: 0.9em;
  margin-top: 0.4em;
  font-weight: 600;

  @media screen and (max-width: 1480px) {
    font-size: 0.8em;
  }
`;
