import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { StyledButton } from "./styles";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}

export default function Button({ text, ...props }: ButtonProps) {
  return <StyledButton {...props}>{text}</StyledButton>;
}
