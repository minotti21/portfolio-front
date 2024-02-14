import { DetailedHTMLProps, HTMLAttributes } from "react";
import { StyledTitle } from "./styles";

interface TitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: string;
}

export default function Title({ children, ...props }: TitleProps) {
  return <StyledTitle {...props}>{children}</StyledTitle>;
}
