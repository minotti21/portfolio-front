import { ReactNode } from "react";
import { StyledSectionContainer } from "./styles";

interface SectionProps {
  children: ReactNode;
}

export default function SectionContainer({ children }: SectionProps) {
  return <StyledSectionContainer>{children}</StyledSectionContainer>;
}
