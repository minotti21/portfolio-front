import styled, { keyframes } from "styled-components";

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  z-index: 2;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
`;

const animation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: ${({ theme }) => `16px solid ${theme.fontColor}`};
  border-top: ${({ theme }) => `16px solid ${theme.defaultColor}`};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${animation} 2s linear infinite;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
