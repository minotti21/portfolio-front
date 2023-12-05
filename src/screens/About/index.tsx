'use client'

import SectionContainer from "@/components/Section";
import { AboutContainer, IconsContainer, StyledImage, StyledSkillsText, StyledText, StyledTitle, TextAndImageContainer, TextContainer } from "./styles";
import Image from "next/image";

export default function About() {
    return (
        <SectionContainer>
            <AboutContainer>
                <StyledTitle>Minha história</StyledTitle>
                <TextAndImageContainer>
                    <TextContainer>
                        <StyledText>Minha jornada no mercado de trabalho começou aos 18 anos em 2019, quando entrei na empresa Lupo S/A para trabalhar como menor aprendiz de auxiliar administrativo! Fui efetivado após seis meses e segui desenvolvendo minhas habilidades.</StyledText>
                        <StyledSkillsText>Soft Skills: Comunicação assertiva, pensamento crítico e resolução de problemas</StyledSkillsText>
                        <StyledSkillsText>Hard Skills: SAP, Excel e Word</StyledSkillsText>
                    </TextContainer>
                    <StyledImage>
                        <Image src="/img3.jpg" alt="escritório" fill={true} sizes="" style={{ borderRadius: 12 }} quality={100} />
                        <IconsContainer>
                            <Image src="/sap.svg" width={50} height={50} alt="icon" />
                            <Image src="/excel.svg" width={50} height={50} alt="icon" />
                            <Image src="/word.svg" width={50} height={50} alt="icon" />
                        </IconsContainer>
                    </StyledImage>
                </TextAndImageContainer>
                <TextAndImageContainer>
                    <StyledImage>
                        {/* <Image src="/yi.jpg" alt="escritório" fill={true} sizes="" style={{ borderRadius: 12 }} quality={100} />
                        <IconsContainer>
                            <Image src="/lol.svg" width={50} height={50} alt="icon" />
                            <Image src="/mask.png" width={50} height={50} alt="icon" />
                            <Image src="/word.svg" width={50} height={50} alt="icon" />
                        </IconsContainer> */}
                    </StyledImage>
                    <TextContainer>
                        <StyledText>Então a pandemia entrou em nossas vidas! Após dois meses em casa jogando, alcancei um dos ranks mais altos do Brasil no jogo League of Legends, chegou o momento de eu tentar algo diferente, saí da Lupo e me dediquei totalmente a ser jogador profissional.</StyledText>
                        <StyledSkillsText>Soft Skills: Raciocínio rápido</StyledSkillsText>
                        <StyledSkillsText>Hard Skills: SAP, Excel e Word</StyledSkillsText>
                    </TextContainer>
                </TextAndImageContainer>
                <TextAndImageContainer>
                    <TextContainer>
                        <StyledText>Nem tudo são flores, após mais ou menos um ano tentando ser contratado por um time e as reservas acabando, decidi que era hora de desistir do meu sonho e tentar outra coisa... Então conheci a programação por meio de amigos que já eram da area, me dediquei como nunca aos estudos.</StyledText>
                        <StyledSkillsText>Soft Skills: Comunicação assertiva, pensamento crítico e resolução de problemas</StyledSkillsText>
                        <StyledSkillsText>Hard Skills: SAP, Excel e Word</StyledSkillsText>
                    </TextContainer>
                </TextAndImageContainer>
                <StyledText style={{ textAlign: 'center' }} >Então cheguei onde estou, atualmente atuo como desenvolvedor front, back e também mobile. Para chegar aqui, bastou me dedicar e trilhar meu caminho, se eu consegui, você também pode.</StyledText>
            </AboutContainer>
        </SectionContainer>
    );
}