import { useState } from "react";

import {
  TechnologyInfoSpan,
  TechnologyInfoText,
  TechnologyInfoTitle,
  ExperienceText,
  StyledMiddleText,
  StyledTechnologyImage,
  TechnologiesImageContainer,
  TechnologyInfoContainer,
  TechnologiesContainer,
  TechnologieImageBackground,
} from "./styles";
import SectionContainer from "@/components/Section";
import Title from "@/components/Title";

export default function Technologies() {
  const [currentSkill, setCurrentSkill] = useState("");
  const tecnologyInfo = "Passe o mouse sobre as tecnologias acima 👆";

  let technologyText = <TechnologyInfoSpan>{tecnologyInfo}</TechnologyInfoSpan>;

  switch (currentSkill) {
    case "html": {
      technologyText = (
        <>
          <TechnologyInfoTitle>HTML</TechnologyInfoTitle>
          <TechnologyInfoText>
            A primeira linguagem da tríade front-end, porém, não se trata de uma
            linguagem de programação e sim de marcação, contém toda a semântica
            de um site e pode se dizer que é também seu esqueleto.
          </TechnologyInfoText>
          <TechnologyInfoText>
            HTML significa HyperText Markup Language (Linguagem de Marcação de
            Hipertexto em portguês) e foi criado em uma organização europeia de
            pesquisa nuclear para facilitar o compartilhamento de documentos
            feitos no computador.
          </TechnologyInfoText>
          <ExperienceText>
            Tempo de experiência: 2 anos e 5 meses
          </ExperienceText>
        </>
      );

      break;
    }
    case "css": {
      technologyText = (
        <>
          <TechnologyInfoTitle>CSS</TechnologyInfoTitle>
          <TechnologyInfoText>
            A segunda linguagem da tríade front-end, essa aqui é uma linguagem
            de estilo, com ela podemos dar cor ao nosso HTML e também posicionar
            elementos de forma mais simples.
          </TechnologyInfoText>
          <TechnologyInfoText>
            CSS significa Cascading Style Sheets (Folha de Estilo em Cascatas em
            português) e permitiu que os desenvolvedores separassem o arquivos
            de estilo e texto, trazendo mais organização aos projetos.
          </TechnologyInfoText>
          <ExperienceText>
            Tempo de experiência: 2 anos e 5 meses
          </ExperienceText>
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
            simplificada, permitindo escrever o mesmo código com menos linhas
            fornecendo recursos muito úteis e inovadores.
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
            Uma tecnologia que nos permite estilizar a nível de componente, traz
            grande flexibilidade e facilidade na hora da implementação e
            manutenção do código (esse portfólio está sendo codado com ele 😅)
          </TechnologyInfoText>
          <TechnologyInfoText>
            Foi criado com foco no React, com a intenção de inovar e solucionar
            algumas limitações que eram comuns na hora de estilizar um
            componente, é bem útil em projetos que necessitam de lógica nos
            estilos.
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
            surfar no hype da época, pode ser utilizada para desenvolver sites,
            APIs, aplicativos móveis, aplicações desktop, machine learning,
            internet das coisas, etc.
          </TechnologyInfoText>
          <ExperienceText>
            Tempo de experiência: 2 anos e 4 meses
          </ExperienceText>
        </>
      );

      break;
    }
    case "typescript": {
      technologyText = (
        <>
          <TechnologyInfoTitle>TypeScript</TechnologyInfoTitle>
          <TechnologyInfoText>
            Foi desenvolvido pela Microsoft com o intuito de solucionar todos os
            problemas que o JavaScript puro tem, o maior deles, claro: sua
            tipagem fraca. É essencial para detectar erros durante o
            desenvolvimento e escalar projetos.
          </TechnologyInfoText>
          <TechnologyInfoText>
            O framework Angular (desenvolvido pela Google) utiliza o TypeScript
            por padrão. Traz também alguns recursos para orientação a objeto,
            é ótimo para manter o código organizado sem a utilização de
            frameworks.
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
            componentes e foi desenvolvida pelo time do Facebook para gerenciar
            melhor o estado e o reaproveitamento de código.
          </TechnologyInfoText>
          <TechnologyInfoText>
            Conta com muitos benefícios para web, mas tem também sua versão para
            desenvolvimento de aplicativos móveis, o React Native, trabalho
            utilizando ele e particularmente, sou um grande estusiasta das duas
            tecnologias.
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
            Biblioteca feita para gerenciamento de estados complexos no React
            (pois os recusors oferecidos não eram suficientes para grandes
            projetos) e acabou ganhando grande popularidade entre os
            desenvolvedores.
          </TechnologyInfoText>
          <TechnologyInfoText>
            Torna o gerenciamento de estado global mais robusto e previsível,
            segue o padrão de arquitetura Flux. Nos últimos tempos acabou
            perdendo um pouco de força por conta da poderosa combinação de hooks
            useContext e useReducer do React.
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
            Next é um framework para o React, foi desenvolvido com o intuito de
            facilitar e melhorar funcionalidades já existentes, lidar com rotas
            é mais simples, tem suporte a renderização do lado do servidor e pré
            renderização estática.
          </TechnologyInfoText>
          <TechnologyInfoText>
            Na documentação oficial do React, o Next é recomendado como
            principal framework para desenvolvimento de aplicações, oferece até
            mesmo recursos para desenvolvimento de código no lado do servidor.
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
            Node é um ambiente de execução que nos permite executar JavaScript
            até mesmo em uma geladeira inteligente. É baseado em eventos,
            permitindo que diferentes requisições possam ser processadas
            simultaneamente.
          </TechnologyInfoText>
          <TechnologyInfoText>
            Com ele, surgiu o NPM (Node Package Manager), utilizado para lidar
            com bibliotecas de terceiros nos projetos. Geralmente é utilizado
            para desenvolvimento de APIs, aplicações em tempo real, frameworks
            para desenvolvimento de interfaces, etc.
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
            Um framework para o Node, projetado para facilitar o desenvolvimento
            de APIs na web. É simples de configurar e tem uma sintaxe muito
            amigável.
          </TechnologyInfoText>
          <TechnologyInfoText>
            Essencial para criação de APIs Restful e praticamente obrigatório
            para qualquer desenvolvedor de Node na web, tem uma estrutura leve e
            poderosa auxiliando a lidar com rotas, middlewares e manipulações de
            diferentes tipos de requisição.
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
            Linguagem de programação com tipagem forte e orientada a objeto,
            Java foi lançado com o intuito de rodar em qualquer tipo de
            eletrônico (qualquer mesmo), bastando apens ter sua máquina virtual
            que é capaz de compilar seu código.
          </TechnologyInfoText>
          <TechnologyInfoText>
            Ganhou grande popularidade por conta de sua portabilidade e
            segurança, ainda é muito utilizada para projetos robustos e mobile.
            Além da possibilidade de desenvolver APIs para web com o framework
            Spring Boot.
          </TechnologyInfoText>
          <ExperienceText>Tempo de experiência: 1 ano</ExperienceText>
        </>
      );

      break;
    }
    case "android": {
      technologyText = (
        <>
          <TechnologyInfoTitle>Android</TechnologyInfoTitle>
          <TechnologyInfoText>
            Surgiu com a premissa de desenvolver sistemas operacionais para
            câmeras, mas viu uma grande oportunidade com o surgimento dos
            smartphones, foi adquirido pela Google e logo dominou o mercado de
            software dessa área.
          </TechnologyInfoText>
          <TechnologyInfoText>
            Sua principal linguagem de programação é o Java, tornando-o um
            sistema bem robusto, porém, a mesma vem sendo substituída pela
            linguagem Kotlin no desenvolvimento Android, linguagem de uso mais
            dinâmico e conciso.
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
            Os bancos de dados surgiram com a necessidade de armazenar dados de
            contextos variados. Atualmente são indispensáveis em qualquer área,
            contendo todos os dados de uma aplicação.
          </TechnologyInfoText>
          <TechnologyInfoText>
            Há bancos de dados relacionais (organizado a partir de tabelas,
            linhas e colunas) e os não relacionais (organizado a partir de
            documentos como JSON, chave-valor, etc).
          </TechnologyInfoText>
          <ExperienceText>Tempo de experiência: 1 ano e 6 meses</ExperienceText>
        </>
      );

      break;
    }
    case "git": {
      technologyText = (
        <>
          <TechnologyInfoTitle>Git</TechnologyInfoTitle>
          <TechnologyInfoText>
            Um sistema de gerenciamento de versões, permitindo com que vários
            desenvolvedores trabalhem em um projeto simultaneamente. Utiliza um
            repositório remoto ou local para hospedar o projeto.
          </TechnologyInfoText>
          <TechnologyInfoText>
            Esse repositório é separado por branchs master (projeto em produção)
            e dev (projeto em fase de desenvolvimento), os desenvolvedores tem
            uma cópia local do projeto e podem passar suas alterações conforme
            necessidade.
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
    <SectionContainer id="technologies">
      <TechnologiesContainer>
        <Title style={{ marginBottom: "0.4em" }}>Tecnologias</Title>
        <StyledMiddleText>
          Depois de muita dedicação, consegui um emprego
          como desenvolvedor full stack e aprimorei ainda mais meus
          conhecimentos. Logo abaixo, você vai encontrar as tecnologias que
          utilizo, um breve resumo feito por mim e também o tempo que tenho de
          experiência com cada uma:
        </StyledMiddleText>

        <TechnologiesImageContainer>
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
          <TechnologieImageBackground>
            <StyledTechnologyImage
              onMouseEnter={() => setCurrentSkill("next")}
              onMouseLeave={() => setCurrentSkill("")}
              src="/next.svg"
              width={80}
              height={80}
              alt="icon"
            />
          </TechnologieImageBackground>
          <StyledTechnologyImage
            onMouseEnter={() => setCurrentSkill("node")}
            onMouseLeave={() => setCurrentSkill("")}
            src="/node.svg"
            width={80}
            height={80}
            alt="icon"
          />
          <TechnologieImageBackground>
            <StyledTechnologyImage
              onMouseEnter={() => setCurrentSkill("express")}
              onMouseLeave={() => setCurrentSkill("")}
              src="/express.svg"
              width={80}
              height={80}
              alt="icon"
            />
          </TechnologieImageBackground>
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
        </TechnologiesImageContainer>

        <TechnologyInfoContainer>{technologyText}</TechnologyInfoContainer>
      </TechnologiesContainer>
    </SectionContainer>
  );
}
