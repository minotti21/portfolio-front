"use client";

import { useContext, useEffect, useState } from "react";
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
import api from "@/api/api";
import FormModal from "@/components/FormModal";
import Loading from "@/components/Loading";
import { ScrollbarContext } from "@/context/ScrollbarContext";

interface FormType {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [formModalState, setFormModalState] = useState({
    isVisible: false,
    message: "",
    statusCode: 0,
  });

  const { setShowScrollbar } = useContext(ScrollbarContext);

  const closeModal = () => {
    setFormModalState({
      isVisible: false,
      message: "",
      statusCode: 0,
    });
    setShowScrollbar(true);
  };

  const openModal = (message: string, statusCode: number) => {
    setFormModalState({ isVisible: true, message, statusCode });
  };

  const { name } = useContext(NameContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>();

  const onSubmit = async ({ name, email, message }: FormType) => {
    try {
      setIsSending(true);
      setShowScrollbar(false);

      const { data } = await api.post("/email", { name, email, message });

      openModal(data, 200);

      reset();
    } catch (error: any) {
      const {
        response: { data, status },
      } = error;

      openModal(data, status);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <FormModal
        isVisible={formModalState.isVisible}
        closeModal={closeModal}
        statusCode={formModalState.statusCode}
        message={formModalState.message}
      />
      <Loading isLoading={isSending} />
      <SectionContainer id="contact">
        <ContactContainer>
          <Title style={{ marginBottom: "0.4em" }}>Contato</Title>
          <StyledText>
            Preencha o formulário abaixo e me envie uma mensagem! Receberei no
            meu e-mail via uma API feita em Node com Express
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
              type="email"
              {...register("email", { required: true })}
            />
            <StyledLabel>Mensagem</StyledLabel>
            <StyledTextArea
              maxLength={600}
              {...register("message", { required: true, minLength: 60 })}
            />
            {errors.name?.type === "required" && <p>O nome é obrigatório!</p>}
            {errors.email?.type === "required" && (
              <p>O e-mail é obrigatório!</p>
            )}
            {errors.message?.type === "required" && (
              <p>A mensagem é obrigatória!</p>
            )}
            {errors.message?.type === "minLength" && (
              <p>A mensagem deve conter mais de 60 caracteres!</p>
            )}
            <Button
              text="Confirmar"
              disabled={isSending}
              type="submit"
              style={{ alignSelf: "flex-end", marginTop: "0.5em" }}
            />
          </form>
        </ContactContainer>
      </SectionContainer>
    </>
  );
}
