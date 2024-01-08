import { HeartIcon, StyledFooter, StyledText } from "./styles";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledText>
        Desenvolvido com <HeartIcon size={24} /> por Vinicius Minotti
      </StyledText>
    </StyledFooter>
  );
}
