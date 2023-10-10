import Section from "@/components/Section";
import { HomeButton, HomeContainer, StyledItemList, StyledList, StyledSubtitle, StyledText, StyledTitle, TextAndImageContainer, TextContainer } from "./styles";
import eublob from '../../../public/eublob.png';
import { useContext, useEffect, useState } from "react";
import { NameContext } from "@/context/NameContext";
import Image from "next/image";

export default function Home() {
    const { name } = useContext(NameContext);

    return (
        <Section>
            <HomeContainer>
                <TextAndImageContainer>
                    <TextContainer>
                        <StyledTitle>Olá {name}, seja bem-vindo(a)</StyledTitle>
                        <StyledTitle>ao meu portfólio! 😄</StyledTitle>
                        <StyledText>Aqui você vai encontrar:</StyledText>
                        <StyledList>
                            <StyledItemList>Um pouco da minha história</StyledItemList>
                            <StyledItemList>Meus hobbies e tecnologias</StyledItemList>
                            <StyledItemList>Jogos desenvolvidos por mim</StyledItemList>
                            <StyledItemList>Redes sociais para contato</StyledItemList>
                        </StyledList>
                        {/* <StyledSubtitle>Vamos nessa?</StyledSubtitle> */}
                        <HomeButton>Conhecer</HomeButton>
                    </TextContainer >
                    <Image src={eublob} width={600} alt="eu"/>
                </TextAndImageContainer>
            </HomeContainer>
        </Section>
    )
}