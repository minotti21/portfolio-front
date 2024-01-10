"use client";

import SectionContainer from "@/components/Section";
import {
  AboutContainer,
  ExperienceText,
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

export default function About() {
  const [currentSkill, setCurrentSkill] = useState("");
  const tecnologyInfo = "Passe o mouse sobre as tecnologias acima 👆";

  let technologyText = <TechnologyInfoSpan>{tecnologyInfo}</TechnologyInfoSpan>;

  switch (currentSkill) {
    case "html": {
      technologyText = (
        <>
          <TechnologyInfoTitle>HTML</TechnologyInfoTitle>
          <TechnologyInfoText>
            A primeira linguagem da tríade front-end, porém, não se trata de
            uma linguagem de programação e sim de marcação, contém toda a
            semântica de um site e pode se dizer que é também seu esqueleto.
          </TechnologyInfoText>
          <TechnologyInfoText>
            HTML significa HyperText Markup Language (Linguagem de Marcação de
            Hipertexto em portguês) e foi criado em uma organização europeia de
            pesquisa nuclear para facilitar o compartilhamento de documentos
            feitos no computador.
          </TechnologyInfoText>
          <ExperienceText>Tempo de experiência: 2 anos e 5 meses</ExperienceText>
        </>
      );

      break;
    }
    case "css": {
      technologyText = (
        <>
          <TechnologyInfoTitle>CSS</TechnologyInfoTitle>
          <TechnologyInfoText>
            A segunda linguagem da tríade do front-end, esse aqui é uma
            linguagem de estilo, com ela podemos dar cor ao nosso HTML e também
            posicionar elementos de forma mais simples.
          </TechnologyInfoText>
          <TechnologyInfoText>
            CSS significa Cascading Style Sheets (Folha de Estilo em Cascatas em
            português) e permitiu que os desenvolvedores separassem o arquivos
            de estilo e texto, trazendo maior escalabilidade para os projetos.
          </TechnologyInfoText>
          <ExperienceText>Tempo de experiência: 2 anos e 5 meses</ExperienceText>
        </>
      );

      break;
    }
    case "sass": {
      technologyText = (
        <>
          <TechnologyInfoTitle>SASS</TechnologyInfoTitle>
          <TechnologyInfoText>
            Um pré-processador para o CSS, nos fornece uma sintaxe mais
            simplificada, permitindo escrever o mesmo código com menos linhas fornecendo recursos muito úteis e inovadores.
          </TechnologyInfoText>
          <TechnologyInfoText>
            SASS significa Syntactically Awesome Stylesheets (Folhas de Estilo
            Incrivelmente Sintáticas em português), como o navegador fornece
            suporte ao SASS, ele é transpilado para o CSS no momento que o
            projeto é buildado.
          </TechnologyInfoText>
          <ExperienceText>Tempo de experiência: 2 anos</ExperienceText>
        </>
      );

      break;
    }
    case "tailwind": {
      technologyText = (
        <>
          <TechnologyInfoTitle>Tailwind</TechnologyInfoTitle>
          <TechnologyInfoText>
            Um framework que utiliza o conceito de Atomic CSS, tem uma grande
            lista de classes pré definidas que são uma abreviação das
            propriedades do CSS, podendo ser reutilizadas.
          </TechnologyInfoText>
          <TechnologyInfoText>
            Diferente de grande parte dos frameworks, é altamente flexível,
            podendo ser personalizado do seu jeito. Na hora de buildar o projeto
            para produção, remove todas as classes não utilizadas, reduzindo o
            tamanho do arquivo final.
          </TechnologyInfoText>
          <ExperienceText>Tempo de experiência: 10 meses</ExperienceText>
        </>
      );

      break;
    }
    case "styled": {
      technologyText = (
        <>
          <TechnologyInfoTitle>Styled Components</TechnologyInfoTitle>
          <TechnologyInfoText>
            Uma tecnologia que nos permite estilizar a nível de componente,
            traz grande flexibilidade e facilidade na hora da implementação e
            manutenção do código (esse portfólio está sendo codado com ele 😅)
          </TechnologyInfoText>
          <TechnologyInfoText>
            Foi criado com foco no React, com a intenção de inovar e solucionar
            algumas limitações que eram comuns na hora de estilizar um
            componente, é bem útil em projetos que necessitam de lógica nos estilos.
          </TechnologyInfoText>
          <ExperienceText>Tempo de experiência: 1 ano e 6 meses</ExperienceText>
        </>
      );

      break;
    }
    case "javascript": {
      technologyText = (
        <>
          <TechnologyInfoTitle>Javascript</TechnologyInfoTitle>
          <TechnologyInfoText>
            A terceira e última linguagem da tríade do front-end, uma linguagem
            de programação interpretada que trouxe grande dinamismo para os
            sites e foi crescendo exponencialmente com o passar do tempo.
          </TechnologyInfoText>
          <TechnologyInfoText>
            Foi desenvolvida em apenas 10 dias, levou "Java" em seu nome para
            surfar no hype da época, pode ser utilizada para desenvolver sites, APIs, aplicativos móveis, aplicações desktop, machine
            learning, internet das coisas, etc.
          </TechnologyInfoText>
          <ExperienceText>Tempo de experiência: 2 anos e 4 meses</ExperienceText>
        </>
      );

      break;
    }
    case "typescript": {
      technologyText = (
        <>
          <TechnologyInfoTitle>TypeScript</TechnologyInfoTitle>
          <TechnologyInfoText>
            Foi desenvolvido pela Microsoft com o intuito de solucionar todos os problemas que o JavaScript puro tem, o maior deles, claro: sua tipagem fraca. É essencial para detectar erros durante o desenvolvimento e escalar projetos.
          </TechnologyInfoText>
          <TechnologyInfoText>
            O framework Angular (desenvolvido pela Google) utiliza o TypeScript por padrão. Traz também alguns recursos para orientação a objeto, ótimo para manter o código organizado sem a utilização de frameworks.
          </TechnologyInfoText>
          <ExperienceText>Tempo de experiência: 1 ano e 6 meses</ExperienceText>
        </>
      );

      break;
    }
    case "react": {
      technologyText = (
        <>
          <TechnologyInfoTitle>React</TechnologyInfoTitle>
          <TechnologyInfoText>
            A biblioteca queridinha dos programadores front-end, segue a
            categoria de SPA (Single Page Application), é orientada a
            componentes e foi desenvolvida pelo time do Facebook para gerenciar melhor o estado e o reaproveitamento de código da aplicação.
          </TechnologyInfoText>
          <TechnologyInfoText>
            Além de todos benefícios, há também o React Native para desenvolvimento de aplicativos móveis, trabalho utilizando ele e particularmente, sou um grande estusiasta das duas tecnologias.
          </TechnologyInfoText>
          <ExperienceText>Tempo de experiência: 2 anos</ExperienceText>
        </>
      );

      break;
    }
    case "redux": {
      technologyText = (
        <>
          <TechnologyInfoTitle>Redux</TechnologyInfoTitle>
          <TechnologyInfoText>
            Biblioteca feita para gerenciamento de estados complexos no React (pois os recusors oferecidos não eram suficientes para grandes projetos) e acabou ganhando grande popularidade entre os desenvolvedores.
          </TechnologyInfoText>
          <TechnologyInfoText>
            Torna o gerenciamento de estado global mais robusto e previsível, segue o padrão de arquitetura Flux. Nos últimos tempos acabou perdendo um pouco de força por conta da poderosa combinação de hooks useContext e
            useReducer do React.
          </TechnologyInfoText>
          <ExperienceText>Tempo de experiência: 1 ano e 4 meses</ExperienceText>
        </>
      );

      break;
    }
    case "next": {
      technologyText = (
        <>
          <TechnologyInfoTitle>Next</TechnologyInfoTitle>
          <TechnologyInfoText>
            Next é um framework para o React, foi desenvolvido com o intuito de facilitar e melhorar funcionalidades já existentes, lidar com rotas é mais simples, tem suporte a renderização do lado do servidor e pré renderização estática.
          </TechnologyInfoText>
          <TechnologyInfoText>
            Foi desenvolvida em apenas 10 dias, levou "Java" em seu nome para
            surfar no hype da época, pode ser utilizada para desenvolver de
            sites, APIs, aplicativos móveis, aplicações desktop, machine
            learning, internet das coisas, etc.
          </TechnologyInfoText>
          <ExperienceText>Tempo de experiência: 1 ano</ExperienceText>
        </>
      );

      break;
    }
    case "node": {
      technologyText = (
        <>
          <TechnologyInfoTitle>Node</TechnologyInfoTitle>
          <TechnologyInfoText>
            Diferente do que muitos pensam, Node não é uma linguagem e sim um ambiente de execução, isso nos permite executar JavaScript até mesmo em uma geladeira inteligente. É baseado em eventos, permitindo que diferentes requisições possam ser processadas simultaneamente.
          </TechnologyInfoText>
          <TechnologyInfoText>
            Com ele, surgiu o NPM (Node Package Manager), utilizado para lidar com bibliotecas de terceiros nos projetos. Geralmente é utilizado para desenvolvimento de APIs, aplicações em tempo real, bibliotecas SPA (como React), etc.
          </TechnologyInfoText>
          <ExperienceText>Tempo de experiência: 1 ano</ExperienceText>
        </>
      );

      break;
    }
    case "express": {
      technologyText = (
        <>
          <TechnologyInfoTitle>Express</TechnologyInfoTitle>
          <TechnologyInfoText>
            Um framework para o Node, projetado para facilitar o desenvolvimento de APIs na web. É simples de configurar e tem uma sintaxe muito amigável.
          </TechnologyInfoText>
          <TechnologyInfoText>
            Essencial para criação de APIs Restful e obrigatório para qualquer desenvolvedor web, tem uma estrutura leve e poderosa auxiliando a lidar com rotas, middlewares e manipulacões de diferentes tipos de requisição.
          </TechnologyInfoText>
          <ExperienceText>Tempo de experiência: 1 ano</ExperienceText>
        </>
      );

      break;
    }
    case "java": {
      technologyText = (
        <>
          <TechnologyInfoTitle>Java</TechnologyInfoTitle>
          <TechnologyInfoText>
            Uma linguagem de programação com tipagem forte e orientada a objeto, Java foi lançado com o intuito de rodar em qualquer tipo de eletrônico (qualquer mesmo), bastando ter uma máquina virtual que fosse capaz de compilar seu código.
          </TechnologyInfoText>
          <TechnologyInfoText>
            Ganhou grande popularidade por conta de sua portabilidade e segurança, ainda é muito utilizada para projetos robustos e mobile. Além da possibilidade de desenvolver APIs para web com o framework Spring Boot.
          </TechnologyInfoText>
          <ExperienceText>Tempo de experiência: 1 ano e 4 meses</ExperienceText>
        </>
      );

      break;
    }
    case "android": {
      technologyText = (
        <>
          <TechnologyInfoTitle>Android</TechnologyInfoTitle>
          <TechnologyInfoText>
            Surgiu com a premissa de desenvolver sistemas operacionais para câmeras, mas viu uma grande oportunidade com o surgimento dos smartphones, após ser adquirido pela Google, foi codado o sistema que todos conhecem hoje.
          </TechnologyInfoText>
          <TechnologyInfoText>
            Sua principal linguagem de programação é o Java, tornando um sistema bem robusto, porém, a mesma vem sendo substituída pelo Kotlin, linguagem de uso mais dinâmico.
          </TechnologyInfoText>
          <ExperienceText>Tempo de experiência: 8 meses</ExperienceText>
        </>
      );

      break;
    }
    case "database": {
      technologyText = (
        <>
          <TechnologyInfoTitle>Banco de Dados</TechnologyInfoTitle>
          <TechnologyInfoText>
            Os bancos de dados surgiram com uma necessidade de armazenar dados de contextos variados. Atualmente são indispensáveis em qualquer área, contendo todas as informações necessárias para uma aplicação rodar.
          </TechnologyInfoText>
          <TechnologyInfoText>
            Os bancos de dados mais utilizados atualmente são os relacionais (que organiza os dados a partir de tabelas, linhas e colunas) e os não relacionais, que surgiram com a necessidade de dados não estruturados e escalabilidade horizontal, o relacional acaba sendo mais engessado e o não relacional mais flexível.
          </TechnologyInfoText>
          <ExperienceText>Tempo de experiência: 1 ano e 4 meses</ExperienceText>
        </>
      );

      break;
    }
    case "git": {
      technologyText = (
        <>
          <TechnologyInfoTitle>Git</TechnologyInfoTitle>
          <TechnologyInfoText>
            Um sistema de gerenciamento de versões, permitindo com que vários desenvolvedores trabalhem em um projeto simultaneamente. É eficiente, simples e permite o desenvolvimento local.
          </TechnologyInfoText>
          <TechnologyInfoText>
            O Git permite que o projeto tenha uma versão remota e uma cópia local no pc dos devs, as alterações feitas localmente podem ser transferidas para o remoto com alguns simples comando.
          </TechnologyInfoText>
          <ExperienceText>Tempo de experiência: 2 anos</ExperienceText>
        </>
      );

      break;
    }
    default: {
      technologyText = <TechnologyInfoSpan>{tecnologyInfo}</TechnologyInfoSpan>;
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
            onMouseEnter={() => setCurrentSkill("typescript")}
            onMouseLeave={() => setCurrentSkill("")}
            src="/typescript.svg"
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
            onMouseEnter={() => setCurrentSkill("express")}
            onMouseLeave={() => setCurrentSkill("")}
            src="/express.svg"
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

        <TechnologyInfoContainer>{technologyText}</TechnologyInfoContainer>
      </AboutContainer>
    </SectionContainer>
  );
}
