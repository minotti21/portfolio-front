import { ButtonHTMLAttributes, DetailedHTMLProps, useContext } from "react";
import { StyledButton } from "./styles";
import { IsMobileContext } from "@/context/IsMobileContext";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}

export default function Button({ text, ...props }: ButtonProps) {
  const { isMobile } = useContext(IsMobileContext);

  return <StyledButton ismobile={isMobile} {...props}>{text}</StyledButton>;
}
