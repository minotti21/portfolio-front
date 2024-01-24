import styled from "styled-components";

export const ArrowContainer = styled.div<{ $show: boolean }>`
  width: 44px;
  height: 44px;
  background-color: ${({ theme }) => theme.defaultColor};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  right: 40px;
  bottom: 40px;
  transition: 0.3s;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transform: ${({ $show }) => ($show ? "scale(1)" : "scale(0)")};
`;
