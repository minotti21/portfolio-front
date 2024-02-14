"use client";

import SectionContainer from "@/components/Section";
import { NameContext } from "@/context/NameContext";
import { useContext } from "react";
import {
  HomeContainer,
  Imagecontainer,
  StyledItemList,
  StyledList,
  StyledName,
  StyledText,
  StyledTitle,
  TextContainer,
  TitleContainer,
} from "./styles";
import Button from "@/components/Button";
import { UserThemeContext } from "@/context/UserThemeContext";
import { Link } from "react-scroll";

export default function Home() {
  const { name } = useContext(NameContext);
  const { theme } = useContext(UserThemeContext);

  let color = "";

  switch (theme.defaultColor) {
    case "rgb(220, 38, 38)": {
      color = "vermelho";
      break;
    }
    case "rgb(249, 115, 22)": {
      color = "laranja";
      break;
    }
    case "rgb(250, 204, 21)": {
      color = "amarelo";
      break;
    }
    case "rgb(34, 197, 94)": {
      color = "verde";
      break;
    }
    case "rgb(37, 99, 235)": {
      color = "azul";
      break;
    }
    case "rgb(168, 85, 247)": {
      color = "lilas";
      break;
    }
  }

  return (
    <SectionContainer>
      <HomeContainer>
        <TextContainer>
          <TitleContainer>
            <StyledTitle>
              Olá <StyledName>{name}</StyledName>!
            </StyledTitle>
            <StyledTitle>Seja muito bem-vindo&#40;a&#41;</StyledTitle>
            <StyledTitle>ao meu portfólio! 😄👋</StyledTitle>
          </TitleContainer>
          <StyledText>Aqui você vai encontrar:</StyledText>
          <StyledList>
            <StyledItemList>Um pouco sobre mim</StyledItemList>
            <StyledItemList>Hobbies e tecnologias</StyledItemList>
            <StyledItemList>Alguns projetos</StyledItemList>
            <StyledItemList>Formas de me contatar</StyledItemList>
          </StyledList>
          <Link to="about" duration={1000} offset={-92} smooth={true}>
            <Button text="Conhecer" />
          </Link>
        </TextContainer>
        {/* <Imagecontainer
          width={600}
          height={450}
          src={`/${color}.png`}
          alt="eu"
        /> */}
      </HomeContainer>
    </SectionContainer>
  );
}
