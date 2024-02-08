import { ReactNode } from "react";
import { StyledSectionContainer } from "./styles";

interface SectionProps {
  children: ReactNode;
  id?: string;
}

export default function SectionContainer({ children, id }: SectionProps) {
  return <StyledSectionContainer id={id}>{children}</StyledSectionContainer>;
}
