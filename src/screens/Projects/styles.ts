import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3em;
`;

export const StyledText = styled.p`
  font-size: 1.5em;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 1480px) {
    font-size: 1.4em;
  }
`;

export const ProjectsFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5em 0;
  gap: 5em;
`;
