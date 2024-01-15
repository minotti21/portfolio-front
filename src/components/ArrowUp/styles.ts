import styled from "styled-components";

export const ArrowContainer = styled.div<{ $screenWidth: number }>`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.defaultColor};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  right: 40px;
  bottom: 40px;
`;
