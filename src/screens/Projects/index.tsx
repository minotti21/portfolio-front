"use client";

import { useContext } from "react";
import { UserThemeContext } from "@/context/UserThemeContext";
import SectionContainer from "@/components/Section";
import {
  ProjectsContainer,
  ProjectsFlex,
  StyledText,
  StyledTitle,
} from "./styles";
import SnakeGame from "@/components/SnakeGame";
import Paint from "@/components/Paint";
import QuoteOfTheday from "@/components/QuoteOfTheDay";

export default function Projects() {
  return (
    <SectionContainer>
      <ProjectsContainer>
        <StyledTitle>Projetos</StyledTitle>
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
