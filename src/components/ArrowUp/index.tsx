import { FaArrowUp } from "react-icons/fa";
import { ArrowContainer } from "./styles";
import { WindowHeightContext } from "@/context/WindowHeightContext";
import { useContext } from "react";
import { animateScroll } from 'react-scroll';
import { IsMobileContext } from "@/context/IsMobileContext";


const options = {
  duration: 1000,
  smooth: true,
};

const scrollToTop = () => {
  animateScroll.scrollToTop(options);
}

export default function ArrowUp() {
  const { currentHeight } = useContext(WindowHeightContext);
  const { isMobile } = useContext(IsMobileContext);

  if (isMobile) return null;

  return (
    <ArrowContainer onClick={scrollToTop} $show={currentHeight > window.innerHeight * 0.8}>
      <FaArrowUp color="#fff" size={20} />
    </ArrowContainer>
  );
}
