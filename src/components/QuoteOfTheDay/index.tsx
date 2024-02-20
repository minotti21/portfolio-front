import api from "@/api/api";
import {
  StyledAuthor,
  StyledQuote,
  StyledQuoteOfTheDay,
  StyledTitle,
} from "./style";
import { useEffect, useState } from "react";

export default function QuoteOfTheday() {
  const [quote, setQuote] = useState({
    quote: "😁",
    author: "A citação está carregando...",
  });

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    try {
      const { data } = await api.get("/quote");

      setQuote(data);
    } catch (error) {
      setQuote({ quote: "Houve um erro ao puxar a citação", author: "😪" });
    }
  };

  return (
    <StyledQuoteOfTheDay>
      <StyledTitle>Citação do Dia ✍📖</StyledTitle>
      <StyledQuote>
        {quote.author}
        <StyledAuthor>{quote.quote}</StyledAuthor>
      </StyledQuote>
    </StyledQuoteOfTheDay>
  );
}
