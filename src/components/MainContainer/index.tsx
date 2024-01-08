import { ReactNode } from "react";
import { StyledMain } from "./styles";

interface MainContainer {
  children: ReactNode;
}

export default function MainContainer({ children }: MainContainer) {
  return <StyledMain>{children}</StyledMain>;
}
