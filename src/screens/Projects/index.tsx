"use client";

import SectionContainer from "@/components/Section";
import {
  ProjectsContainer,
  ProjectsFlex,
  StyledText,
} from "./styles";
import SnakeGame from "@/components/SnakeGame";
import Paint from "@/components/Paint";
import QuoteOfTheday from "@/components/QuoteOfTheDay";
import Title from "@/components/Title";
import { useContext } from "react";
import { IsMobileContext } from "@/context/IsMobileContext";

export default function Projects() {
  const { isMobile } = useContext(IsMobileContext);

  return (
    <SectionContainer id="projects">
      <ProjectsContainer>
        <Title style={{ marginBottom: "0.4em" }}>Projetos</Title>
        {isMobile ? (
          <StyledText>
            Não é possível visualizar todos os projetos em um dispositivo móvel,
            sugiro que você veja depois em um computador 😆
          </StyledText>
        ) : (
          <StyledText>
            Codei alguns projetos interativos, você não vai precisar sair do
            site pra ver 🤙
          </StyledText>
        )}
        <ProjectsFlex>
          {!isMobile && <SnakeGame />}
          {!isMobile && <Paint />}
          <QuoteOfTheday />
        </ProjectsFlex>
      </ProjectsContainer>
    </SectionContainer>
  );
}
