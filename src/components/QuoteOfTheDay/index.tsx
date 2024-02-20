import api from "@/api/api";
import {
  Description,
  RestartIcon,
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
  const [isRequesting, setIsRequesting] = useState(false);

  useEffect(() => {
    getQuote();
  }, []);

  const getAnotherQuote = async () => {
    if (isRequesting) return;

    setIsRequesting(true);

    setQuote({
      quote: "😁",
      author: "A citação está carregando...",
    });

    await getQuote();

    setIsRequesting(false);
  };

  const getQuote = async () => {
    try {
      const { data } = await api.get("/quote");

      setQuote(data);
    } catch (error) {
      setQuote({ quote: "Houve um erro ao carregar a citação", author: "😪" });
    }
  };

  return (
    <StyledQuoteOfTheDay>
      <StyledTitle>Citação do Dia ✍📖</StyledTitle>
      <StyledQuote>
        <RestartIcon style={{ color: isRequesting ? "#444" : "#f3f3f3" }} onClick={getAnotherQuote} size={36} />"{quote.author}"
        <StyledAuthor>{quote.quote}</StyledAuthor>
      </StyledQuote>
      <Description>Reflita sobre a frase e caso queira ler mais alguma, basta clicar no botão localizado no canto superior direito 😊</Description>
      <Description>
        Para esse projeto, populei uma collection no MongoDB com citações de grandes filósofos que
        admiro, então criei uma API em Node com Express para puxar uma citação
        aleatória do banco.
      </Description>
    </StyledQuoteOfTheDay>
  );
}
