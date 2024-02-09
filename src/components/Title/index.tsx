import { StyledTitle } from "./styles";

interface TitleProps {
    children: string;
}

export default function Title({ children }: TitleProps) {
    return (
        <StyledTitle>{children}</StyledTitle>
    )
}