"use client";

import { useContext } from "react";
import { UserThemeContext } from "@/context/UserThemeContext";
import SectionContainer from "@/components/Section";

export default function Projects() {
  const { theme } = useContext(UserThemeContext);

  return (
    <SectionContainer>
      <h1>Projetos</h1>
    </SectionContainer>
  );
}
