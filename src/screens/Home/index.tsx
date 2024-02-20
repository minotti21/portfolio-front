"use client";

import SectionContainer from "@/components/Section";
import { NameContext } from "@/context/NameContext";
import { useContext, useEffect, useState } from "react";
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

const getImagePath = (backgroundColor: string, defaultColor: string) => {
  let imageSrc = "";
  let whichTheme = "";

  switch (backgroundColor) {
    case "rgb(14, 14, 14)": {
      whichTheme = "w";
      break;
    }
    case "rgb(248, 250, 252)": {
      whichTheme = "b";
      break;
    }
  }

  switch (defaultColor) {
    case "rgb(220, 38, 38)": {
      imageSrc = "red";
      break;
    }
    case "rgb(249, 115, 22)": {
      imageSrc = "orange";
      break;
    }
    case "rgb(250, 204, 21)": {
      imageSrc = "yellow";
      break;
    }
    case "rgb(34, 197, 94)": {
      imageSrc = "green";
      break;
    }
    case "rgb(37, 99, 235)": {
      imageSrc = "blue";
      break;
    }
    case "rgb(168, 85, 247)": {
      imageSrc = "purple";
      break;
    }
  }

  return `/${imageSrc}_${whichTheme}.webp`;
};

export default function Home() {
  const { name } = useContext(NameContext);
  const { theme } = useContext(UserThemeContext);
  const [imagePath, setImagePath] = useState(
    getImagePath(theme.backgroundColor, theme.defaultColor),
  );

  useEffect(() => {
    setImagePath(getImagePath(theme.backgroundColor, theme.defaultColor));
  }, [theme]);

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
          <Link href="about" to="about" duration={1000} offset={-92} smooth={true}>
            <Button text="Conhecer" />
          </Link>
        </TextContainer>
        <Imagecontainer
          priority
          width={720}
          height={540}
          src={imagePath}
          alt="eu"
        />
      </HomeContainer>
    </SectionContainer>
  );
}
