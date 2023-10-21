'use client'

import SectionContainer from "@/components/Section";
import { AboutContainer, StyledText, StyledTitle, TextAndImageContainer } from "./styles";

export default function About() {
    return (
        <SectionContainer>
            <AboutContainer>
                <StyledTitle>Minha história</StyledTitle>
                <TextAndImageContainer>
                    <StyledText>Minha jornada no mercado de trabalho começou aos 18 anos em 2019, quando entrei na empresa Lupo S/A para trabalhar como menor aprendiz de auxiliar administrativo! Fui efetivado após seis meses e segui desenvolvendo minhas habilidades.</StyledText>
                </TextAndImageContainer>
                <TextAndImageContainer>
                    <h1></h1>
                    <StyledText>Então a pandemia entrou em nossas vidas! Após dois meses em casa jogando, alcancei um dos ranks mais altos no Brasil no jogo League of Legends, chegou o momento de eu tentar algo diferente, saí da Lupo e me dediquei totalmente para ser jogador profissional.</StyledText>
                </TextAndImageContainer>
                <TextAndImageContainer>
                    <StyledText>Nem tudo são flores, após mais ou menos um ano tentando ser contratado por um time e as reservas acabando, decidi que era hora de desistir do meu sonho e tentar outra coisa... Então conheci a programação por meio de amigos que já eram da area, me dediquei como nunca aos estudos.</StyledText>
                </TextAndImageContainer>
            </AboutContainer>
        </SectionContainer>
    );
}