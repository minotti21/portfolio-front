"use client";

import { useContext } from "react";
import { UserThemeContext } from "@/context/UserThemeContext";
import SectionContainer from "@/components/Section";
import { ProjectsContainer, StyledText, StyledTitle } from "./styles";
import SnakeGame from "@/components/SnakeGame";

export default function Projects() {
  return (
    <SectionContainer>
      <ProjectsContainer>
        <StyledTitle>Projetos</StyledTitle>
        <StyledText>
          Codei alguns projetos interativos, você não vai precisar sair do site pra ver 🤙
        </StyledText>
        <SnakeGame />
      </ProjectsContainer>
    </SectionContainer>
  );
}



