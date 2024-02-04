import {
  StyledAuthor,
  StyledQuote,
  StyledQuoteOfTheDay,
  StyledTitle,
} from "./style";

export default function QuoteOfTheday() {
  return (
    <StyledQuoteOfTheDay>
      <StyledTitle>Citação do Dia</StyledTitle>
      <StyledQuote>
        "Você tem poder sobre sua mente, não sobre eventos externos. Perceba
        isso e você encontrará sua força."
        <StyledAuthor>Marco Aurélio</StyledAuthor>
      </StyledQuote>
    </StyledQuoteOfTheDay>
  );
}
