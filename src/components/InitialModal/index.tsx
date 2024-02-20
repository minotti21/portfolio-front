"use client";

import { useContext, useEffect, useState } from "react";
import {
  ColorsContainer,
  ModalContainer,
  StyledColorIcon,
  StyledError,
  StyledInput,
  StyledModal,
  StyledSubText,
  StyledText,
} from "./styles";
import { colors } from "@/constants/colors";
import { UserThemeContext } from "@/context/UserThemeContext";
import { isEqual } from "lodash";
import { NameContext } from "@/context/NameContext";
import Button from "../Button";
import { useForm } from "react-hook-form";
import Title from "../Title";
import { ScrollbarContext } from "@/context/ScrollbarContext";

interface FormType {
  name: string | undefined;
}

export default function InitialModal() {
  const { theme, changeTheme } = useContext(UserThemeContext);
  const { name, setName } = useContext(NameContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<FormType>();
  const [isVisible, setIsVisible] = useState(false);
  const { setShowScrollbar } = useContext(ScrollbarContext);

  useEffect(() => {
    if (name === "") {
      setIsVisible(true);
      setShowScrollbar(false)
      return;
    }

    setName(name);
  }, []);

  useEffect(() => {
    setFocus("name");
  }, [theme]);

  if (!isVisible) {
    return null;
  }

  const handleColorClick = (defaultColor: string) => {
    const newTheme = { ...theme, defaultColor };

    if (isEqual(theme, newTheme)) {
      return;
    }

    changeTheme(newTheme);
  };

  const onSubmit = ({ name }: FormType) => {
    name != undefined && localStorage.setItem("name", name);
    setName(name);

    setShowScrollbar(true);
    setIsVisible(false);
  };

  return (
    <ModalContainer>
      <StyledModal>
        <Title>Calma aí!</Title>
        <StyledText>
          Antes da gente começar, escolhe sua cor favorita:{" "}
        </StyledText>
        <StyledSubText>Você poderá escolher outra depois 😅</StyledSubText>
        <ColorsContainer>
          {colors.map((color) => (
            <StyledColorIcon
              onClick={() => handleColorClick(color)}
              key={color}
              color={color}
            />
          ))}
        </ColorsContainer>
        <StyledText htmlFor="name">Agora, me diz seu nome: </StyledText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            id="name"
            type="text"
            maxLength={20}
            {...register("name", { pattern: /^[A-zÀ-ú]+$/i, required: true })}
          />
          {errors.name?.type === "required" && (
            <StyledError>O campo é obrigatório!</StyledError>
          )}
          {errors.name?.type === "pattern" && (
            <StyledError>O campo deve conter apenas letras!</StyledError>
          )}
          <Button
            text="Confirmar"
            type="submit"
            style={{ alignSelf: "flex-end", marginTop: "0.5em" }}
          />
        </form>
      </StyledModal>
    </ModalContainer>
  );
}
