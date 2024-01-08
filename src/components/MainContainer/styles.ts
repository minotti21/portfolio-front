import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.fontColor};
  transition: 0.2s;
`;
