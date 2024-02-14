"use client";

import SectionContainer from "@/components/Section";
import { ProjectsContainer, ProjectsFlex, StyledText } from "./styles";
import SnakeGame from "@/components/SnakeGame";
import Paint from "@/components/Paint";
import QuoteOfTheday from "@/components/QuoteOfTheDay";
import Title from "@/components/Title";

export default function Projects() {
  return (
    <SectionContainer id="projects">
      <ProjectsContainer>
        <Title style={{ marginBottom: "0.4em" }}>Projetos</Title>
        <StyledText>
          Codei alguns projetos interativos, você não vai precisar sair do site
          pra ver 🤙
        </StyledText>
        <ProjectsFlex>
          <SnakeGame />
          <Paint />
          <QuoteOfTheday />
        </ProjectsFlex>
      </ProjectsContainer>
    </SectionContainer>
  );
}
