import { FaArrowUp } from "react-icons/fa";
import { ArrowContainer } from "./styles";
import { WindowHeightContext } from "@/context/WindowHeightContext";
import { useContext } from "react";

export default function ArrowUp() {
  const { currentHeight } = useContext(WindowHeightContext);

  return (
    <ArrowContainer $show={currentHeight > window.innerHeight * 0.8}>
      <FaArrowUp color="#fff" size={20} />
    </ArrowContainer>
  );
}
