"use client";

import SectionContainer from "@/components/Section";
import {
  AboutContainer,
  IconsContainer,
  StyledImage,
  StyledSkillsText,
  StyledText,
  TextAndImageContainer,
  TextContainer,
} from "./styles";
import Image from "next/image";
import Title from "@/components/Title";

export default function About() {
  return (
    <SectionContainer id="about">
      <AboutContainer>
        <Title>Sobre mim</Title>
        <TextAndImageContainer>
          <TextContainer>
            <StyledText>
              Entrei na empresa Lupo S/A aos 18 anos para trabalhar como menor
              aprendiz de auxiliar administrativo! Fui efetivado após seis meses
              e segui desenvolvendo minhas habilidades, então, a pandemia chegou
              com tudo.
            </StyledText>
            <StyledSkillsText>
              Soft Skills: Pensamento crítico, resolução de problemas e
              atendimento aos representantes
            </StyledSkillsText>
            <StyledSkillsText>Hard Skills: SAP, Excel e Word</StyledSkillsText>
          </TextContainer>
          <StyledImage>
            <Image
              src="/office.jpg"
              alt="escritório"
              fill={true}
              sizes=""
              style={{ borderRadius: 12 }}
              quality={100}
            />
            <IconsContainer>
              <Image src="/sap.svg" width={50} height={50} alt="icon" />
              <Image src="/excel.svg" width={50} height={50} alt="icon" />
              <Image src="/word.svg" width={50} height={50} alt="icon" />
            </IconsContainer>
          </StyledImage>
        </TextAndImageContainer>
        <TextAndImageContainer>
          <StyledImage>
            <Image
              src="/league-of-legends.png"
              alt="escritório"
              fill={true}
              sizes=""
              style={{ borderRadius: 12 }}
              quality={100}
            />
            <IconsContainer>
              <Image
                src="/league-of-legends.svg"
                width={50}
                height={50}
                alt="icon"
              />
              <Image src="/joystick.svg" width={50} height={50} alt="icon" />
              <Image src="/medal.svg" width={50} height={50} alt="icon" />
            </IconsContainer>
          </StyledImage>
          <TextContainer>
            <StyledText>
              Depois de algum tempo em casa jogando, alcancei uma das posições
              mais altas no jogo League of Legends e optei por investir meu
              tempo em me tornar um jogador profissional. Mas não aconteceu como
              eu esperava...
            </StyledText>
            <StyledSkillsText>
              Soft Skills: Comunicação assertiva e tomada rápida de decisão
            </StyledSkillsText>
            <StyledSkillsText>
              Hard Skills: Gestão de recursos e mecânica
            </StyledSkillsText>
          </TextContainer>
        </TextAndImageContainer>
        <TextAndImageContainer>
          <TextContainer>
            <StyledText>
              Após um ano tentando, decidi seguir outro caminho. A programação
              sempre esteve comigo, eu apenas não enxergava. Logo comecei a me
              dedicar aos estudos, tive um grande apoio de amigos que já eram da
              área.
            </StyledText>
            <StyledSkillsText>
              Soft Skills: Criatividade, adaptabilidade e melhoria nas skills
              anteriores
            </StyledSkillsText>
            <StyledSkillsText>Hard Skills: Você vai ver já 😄</StyledSkillsText>
          </TextContainer>
          <StyledImage>
            <Image
              src="/programming.webp"
              alt="escritório"
              fill={true}
              sizes=""
              style={{ borderRadius: 12 }}
              quality={100}
            />
            <IconsContainer>
              <Image src="/cpu.svg" width={50} height={50} alt="icon" />
              <Image src="/monitor.svg" width={50} height={50} alt="icon" />
              <Image src="/code.svg" width={50} height={50} alt="icon" />
            </IconsContainer>
          </StyledImage>
        </TextAndImageContainer>
      </AboutContainer>
    </SectionContainer>
  );
}
