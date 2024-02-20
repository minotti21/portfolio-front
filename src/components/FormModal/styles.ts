import styled from "styled-components";

export const ModalContainer = styled.div`
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

export const StyledModal = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  gap: 2em;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.fontColor};
  padding: 30px;
  border-radius: 16px;
`;

export const Message = styled.p`
    font-size: 2em;
    font-weight: 500;
    text-align: center;
`
