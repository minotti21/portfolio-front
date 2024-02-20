import { styled } from "styled-components";

export const StyledSectionContainer = styled.section`
  max-width: 1280px;
  margin: 0 auto;

  @media screen and (max-width: 1480px) {
    max-width: 1100px;
  }

  @media screen and (max-width: 1100px) {
    max-width: 800px;
  }
  
  @media screen and (max-width: 800px) {
    max-width: 100%;
    padding: 0 2em;
  }
`;
