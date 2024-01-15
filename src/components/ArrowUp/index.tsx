import { FaArrowUp } from "react-icons/fa";
import { ArrowContainer } from "./styles";

export default function ArrowUp() {
  return (
    <ArrowContainer $screenWidth={screen.width}>
      <FaArrowUp size={24} />
    </ArrowContainer>
  );
}
