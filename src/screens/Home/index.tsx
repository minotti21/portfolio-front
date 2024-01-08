"use client";

import InitialModal from "@/components/InitialModal";
import SectionContainer from "@/components/Section";
import { NameContext } from "@/context/NameContext";
import { useContext } from "react";
import {
  HomeContainer,
  StyledItemList,
  StyledList,
  StyledText,
  StyledTitle,
  TextContainer,
} from "./styles";
import Button from "@/components/Button";

export default function Home() {
  const { name } = useContext(NameContext);

  return (
    <SectionContainer>
      <HomeContainer>
        <TextContainer>
          <StyledTitle>Olá {name}!</StyledTitle>
          <StyledTitle>Seja muito bem-vindo(a)</StyledTitle>
          <StyledTitle>ao meu portfólio! 😄</StyledTitle>
          <StyledText>Aqui você vai encontrar:</StyledText>
          <StyledList>
            <StyledItemList>Um pouco sobre mim</StyledItemList>
            <StyledItemList>Hobbies e tecnologias</StyledItemList>
            <StyledItemList>Alguns projetos</StyledItemList>
            <StyledItemList>Formas de me contatar</StyledItemList>
          </StyledList>
          <Button text="Conhecer" />
        </TextContainer>
        {/* <StyledSvgBlob src="/blob.svg" /> */}
      </HomeContainer>
    </SectionContainer>
  );
}
