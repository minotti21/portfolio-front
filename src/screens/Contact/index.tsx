"use client";

import { useContext, useEffect } from "react";
import { UserThemeContext } from "@/context/UserThemeContext";
import SectionContainer from "@/components/Section";
import {
  ContactContainer,
  StyledInput,
  StyledLabel,
  StyledText,
  StyledTextArea,
} from "./styles";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import { NameContext } from "@/context/NameContext";
import Title from "@/components/Title";

interface FormType {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { name } = useContext(NameContext);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setFocus,
  } = useForm<FormType>();

  const onSubmit = ({ name, email, message }: FormType) => {
    console.log(name, email, message);
  };

  return (
    <SectionContainer id="contact">
      <ContactContainer>
        <Title style={{ marginBottom: "0.4em" }}>Contato</Title>
        <StyledText>
          Preencha o formulário abaixo e me envie uma mensagem! Receberei no meu
          e-mail via uma API feita em Node com Express
        </StyledText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledLabel>Nome</StyledLabel>
          <StyledInput
            type="text"
            defaultValue={name}
            maxLength={25}
            {...register("name", { required: true })}
          />
          <StyledLabel>E-mail</StyledLabel>
          <StyledInput
            type="text"
            maxLength={25}
            {...register("email", { required: true })}
          />
          <StyledLabel>Mensagem</StyledLabel>
          <StyledTextArea
            maxLength={600}
            {...register("message", { required: true, minLength: 60 })}
          />
          {errors.name?.type === "required" && <p>O nome é obrigatório!</p>}
          {errors.email?.type === "required" && <p>O e-mail é obrigatório!</p>}
          {errors.message?.type === "required" && (
            <p>A mensagem é obrigatória!</p>
          )}
          {errors.message?.type === "minLength" && (
            <p>A mensagem deve conter mais de 60 letras!</p>
          )}
          <Button
            text="Confirmar"
            type="submit"
            style={{ alignSelf: "flex-end", marginTop: "0.5em" }}
          />
        </form>
      </ContactContainer>
    </SectionContainer>
  );
}
