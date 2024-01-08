"use client";

import SectionContainer from "@/components/Section";
import {
  AboutContainer,
  IconsContainer,
  StyledImage,
  StyledMiddleText,
  StyledSkillsText,
  StyledTechnologyImage,
  StyledText,
  StyledTitle,
  Technologies,
  TechnologyInfoContainer,
  TechnologyInfoSpan,
  TechnologyInfoText,
  TechnologyInfoTitle,
  TextAndImageContainer,
  TextContainer,
} from "./styles";
import Image from "next/image";
import { useState } from "react";

interface TechnologyInfoProps {
  title: string;
  paragraph1: string;
  paragraph2: string;
}

function TechnologyInfo({ title, paragraph1, paragraph2 }: TechnologyInfoProps) {
  return (
    <>
      <TechnologyInfoTitle>{title}</TechnologyInfoTitle>
      <TechnologyInfoText>{paragraph1}</TechnologyInfoText>
      <TechnologyInfoText>{paragraph2}</TechnologyInfoText>
    </>
  );
}

export default function About() {
  const [currentSkill, setCurrentSkill] = useState("");
  const tecnologyInfo = "Passe o mouse sob as tecnologias acima 👆";

  let technologyText = <TechnologyInfoSpan>{tecnologyInfo}</TechnologyInfoSpan>;

  switch (currentSkill) {
    case "html": {
      technologyText = <TechnologyInfo title="HTML" paragraph1="A primeira linguagem da tríade do front-end, porém, não se trata de uma linguagem de programação e sim de marcação, contém toda a semântica de um site e pode se dizer que é também seu esqueleto." paragraph2="HTML significa HyperText Markup Language (Linguagem de Marcação de Hipertexto em portguês) e foi criado em uma organização europeia de pesquisa nuclear para facilitar o compartilhamento de documentos feitos no computador." />;
      break;
    }
    case "css": {
      technologyText = <TechnologyInfo title="CSS" paragraph1="A segunda linguagem da tríade do front-end, esse aqui é uma linguagem de estilo, com ela podemos dar cor ao nosso HTML e também posicionar elementos de forma mais simples." paragraph2="CSS significa Cascading Style Sheets (Folha de Estilo em Cascatas em português) e permitiu que os desenvolvedores separassem o arquivos de estilo e texto, trazendo maior escalabilidade para os projetos." />;
      break;
    }
    case "sass": {
      technologyText = <TechnologyInfo title="SASS" paragraph1="Um pré-processador para o CSS, nos fornece uma sintaxe mais simplificada, permitindo escrever o mesmo código com menos linhas e fornecendo recursos muito úteis e inovadores." paragraph2="SASS significa Syntactically Awesome Stylesheets (Folhas de Estilo Incrivelmente Sintáticas em português), como o navegador fornece suporte ao SASS, ele é transpilado para o CSS no momento que o projeto é buildado." />;
      break;
    }
    case "tailwind": {
      technologyText = <TechnologyInfo title="Tailwind" paragraph1="Um framework que utiliza o conceito de Atomic CSS, tem uma grande lista de classes pré definidas que são uma abreviação das propriedades do CSS, podendo ser reutilizadas." paragraph2="Diferente de frameworks como Booststrap, é altamente flexível, podendo ser personalizado do seu jeito. Na hora de buildar o projeto para produção, remove todas as classes não utilizadas, reduzindo o tamanho do arquivo final." />;
      break;
    }
    case "styled": {
      technologyText = <TechnologyInfo title="Styled Components" paragraph1="Uma tecnologia que nos permite estilizar no nível de componente, traz grande flexibilidade e facilidade na hora da implementação e manutenção do código (esse portfólio está sendo codado com ele 😅)" paragraph2="Foi criado com foco no React, com a intenção de inovar e solucionar algumas limitações que eram comuns na hora de estilizar um componente." />;
      break;
    }
    case "javascript": {
      technologyText = <TechnologyInfo title="Javascript" paragraph1="A terceira e última linguagem da tríade do front-end, uma linguagem de programação interpretada que trouxe grande dinamismo para os sites e foi crescendo exponencialmente com o passar do tempo." paragraph2='Foi desenvolvida em apenas 10 dias, leva "Java" em seu nome para surfar no hype da linguagem de programação "Java" e hoje, pode ser utilizado para desenvolvimento de sites, APIs, aplicativos móveis, aplicações desktop, machine learning, internet das coisas, etc.' />;
      break;
    }
    case "react": {
      technologyText = <TechnologyInfo title="React" paragraph1="" paragraph2="" />;
      break;
    }
    case "redux": {
      technologyText = <TechnologyInfo title="Redux" paragraph1="" paragraph2="" />;
      break;
    }
    case "next": {
      technologyText = <TechnologyInfo title="Next" paragraph1="" paragraph2="" />;
      break;
    }
    case "node": {
      technologyText = <TechnologyInfo title="Node" paragraph1="" paragraph2="" />;
      break;
    }
    case "java": {
      technologyText = <TechnologyInfo title="Java" paragraph1="" paragraph2="" />;
      break;
    }
    case "android": {
      technologyText = <TechnologyInfo title="Android" paragraph1="" paragraph2="" />;
      break;
    }
    case "database": {
      technologyText = <TechnologyInfo title="Banco de Dados" paragraph1="" paragraph2="" />;
      break;
    }
    case "git": {
      technologyText = <TechnologyInfo title="Git" paragraph1="" paragraph2="" />;
      break;
    }
    default: {
      technologyText = <TechnologyInfoSpan>{tecnologyInfo}</TechnologyInfoSpan>;;
    }
  }

  return (
    <SectionContainer>
      <AboutContainer>
        <StyledTitle>Minha história</StyledTitle>
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
              <Image src="/quality.svg" width={50} height={50} alt="icon" />
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
              <Image src="/html.svg" width={50} height={50} alt="icon" />
              <Image src="/css.svg" width={50} height={50} alt="icon" />
              <Image src="/javascript.svg" width={50} height={50} alt="icon" />
            </IconsContainer>
          </StyledImage>
        </TextAndImageContainer>

        <StyledMiddleText>
          Após muita dedicação, consegui um emprego como desenvolvedor full
          stack e hoje, posso dizer que sou proficiente em todas as seguintes
          tecnologias:
        </StyledMiddleText>

        <Technologies>
          <StyledTechnologyImage
            onMouseEnter={() => setCurrentSkill("html")}
            onMouseLeave={() => setCurrentSkill("")}
            src="/html.svg"
            width={80}
            height={80}
            alt="icon"
          />
          <StyledTechnologyImage
            onMouseEnter={() => setCurrentSkill("css")}
            onMouseLeave={() => setCurrentSkill("")}
            src="/css.svg"
            width={80}
            height={80}
            alt="icon"
          />
          <StyledTechnologyImage
            onMouseEnter={() => setCurrentSkill("sass")}
            onMouseLeave={() => setCurrentSkill("")}
            src="/sass.svg"
            width={80}
            height={80}
            alt="icon"
          />
          <StyledTechnologyImage
            onMouseEnter={() => setCurrentSkill("tailwind")}
            onMouseLeave={() => setCurrentSkill("")}
            src="/tailwind.svg"
            width={80}
            height={80}
            alt="icon"
          />
          <StyledTechnologyImage
            onMouseEnter={() => setCurrentSkill("styled")}
            onMouseLeave={() => setCurrentSkill("")}
            src="/styled.svg"
            width={80}
            height={80}
            alt="icon"
          />
          <StyledTechnologyImage
            onMouseEnter={() => setCurrentSkill("javascript")}
            onMouseLeave={() => setCurrentSkill("")}
            src="/javascript.svg"
            width={80}
            height={80}
            alt="icon"
          />
          <StyledTechnologyImage
            onMouseEnter={() => setCurrentSkill("react")}
            onMouseLeave={() => setCurrentSkill("")}
            src="/react.svg"
            width={80}
            height={80}
            alt="icon"
          />
          <StyledTechnologyImage
            onMouseEnter={() => setCurrentSkill("redux")}
            onMouseLeave={() => setCurrentSkill("")}
            src="/redux.svg"
            width={80}
            height={80}
            alt="icon"
          />
          <StyledTechnologyImage
            onMouseEnter={() => setCurrentSkill("next")}
            onMouseLeave={() => setCurrentSkill("")}
            src="/next.svg"
            width={80}
            height={80}
            alt="icon"
          />
          <StyledTechnologyImage
            onMouseEnter={() => setCurrentSkill("node")}
            onMouseLeave={() => setCurrentSkill("")}
            src="/node.svg"
            width={80}
            height={80}
            alt="icon"
          />
          <StyledTechnologyImage
            onMouseEnter={() => setCurrentSkill("java")}
            onMouseLeave={() => setCurrentSkill("")}
            src="/java.svg"
            width={80}
            height={80}
            alt="icon"
          />
          <StyledTechnologyImage
            onMouseEnter={() => setCurrentSkill("android")}
            onMouseLeave={() => setCurrentSkill("")}
            src="/android.svg"
            width={80}
            height={80}
            alt="icon"
          />
          <StyledTechnologyImage
            onMouseEnter={() => setCurrentSkill("database")}
            onMouseLeave={() => setCurrentSkill("")}
            src="/database.svg"
            width={80}
            height={80}
            alt="icon"
          />
          <StyledTechnologyImage
            onMouseEnter={() => setCurrentSkill("git")}
            onMouseLeave={() => setCurrentSkill("")}
            src="/git.svg"
            width={80}
            height={80}
            alt="icon"
          />
        </Technologies>

        <TechnologyInfoContainer>
          {technologyText}
        </TechnologyInfoContainer>

      </AboutContainer>
    </SectionContainer>
  );
}
