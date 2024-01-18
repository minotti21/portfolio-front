import styled from "styled-components";

export const StyledCanvas = styled.canvas`
  background-color: #fff;
  outline: ${({ theme }) => `2px solid ${theme.fontColor}`};
  border-radius: 4px;
`;
