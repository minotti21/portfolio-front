import styled from "styled-components";

export const ArrowContainer = styled.div<{ $show: boolean }>`
  cursor: pointer;
  width: 44px;
  height: 44px;
  background-color: ${({ theme }) => theme.defaultColor};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  right: ${((screen.width - 1280) / 4) - 44}px;
  bottom: 40px;
  transition: 0.3s;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transform: ${({ $show }) => ($show ? "scale(1)" : "scale(0)")};
  
  @media screen and (max-width: 1480px) {
    right: ${((screen.width - 1100) / 4) - 40}px;
    width: 40px;
    height: 40px;
  }
`;
