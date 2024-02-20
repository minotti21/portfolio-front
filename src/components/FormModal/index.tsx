import { useContext, useEffect } from "react";
import { Message, ModalContainer, StyledModal } from "./styles";

import { FaCheckSquare } from "react-icons/fa";
import { BsExclamationSquareFill } from "react-icons/bs";
import { ScrollbarContext } from "@/context/ScrollbarContext";
import { IoIosClose } from "react-icons/io";

interface FormModalProps {
  isVisible: boolean;
  closeModal: () => void;
  message: string;
  statusCode: number;
}

export default function FormModal({
  isVisible,
  closeModal,
  statusCode,
  message,
}: FormModalProps) {
  if (!isVisible) return null;

  const success = statusCode === 200;

  return (
    <ModalContainer>
      <StyledModal>
        <IoIosClose
          size={60}
          color="red"
          onClick={() => {
            closeModal();
          }}
          style={{
            position: "absolute",
            right: 15,
            top: 15,
            cursor: "pointer",
          }}
        />
        {success ? (
          <FaCheckSquare size={100} color="green" />
        ) : (
          <BsExclamationSquareFill size={100} color="red" />
        )}
        {!success && (
          <Message>A mensagem não foi enviada corretamente.</Message>
        )}
        <Message>{message}</Message>
        {!success && <Message>Código do erro: {statusCode}</Message>}
      </StyledModal>
    </ModalContainer>
  );
}
