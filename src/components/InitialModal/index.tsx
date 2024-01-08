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
  StyledTitle,
} from "./styles";
import { colors } from "@/constants/colors";
import { UserThemeContext } from "@/context/UserThemeContext";
import { isEqual } from "lodash";
import { NameContext } from "@/context/NameContext";
import Button from "../Button";
import { useForm } from "react-hook-form";

export default function InitialModal() {
  const { theme, changeTheme } = useContext(UserThemeContext);
  const { name, setName } = useContext(NameContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<{ name: string }>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (name === "") {
      setIsVisible(true);
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

  const onSubmit = ({ name }: { name: string }) => {
    localStorage.setItem("name", name);
    setName(name);

    setIsVisible(false);
  };

  return (
    <ModalContainer>
      <StyledModal>
        <StyledTitle>Calma aí!</StyledTitle>
        <StyledText>
          Antes da gente começar, escolhe sua cor favorita:{" "}
        </StyledText>
        <StyledSubText>Você poderá escolher outra depois :&#41;</StyledSubText>
        <ColorsContainer>
          {colors.map((color) => (
            <StyledColorIcon
              onClick={() => handleColorClick(color)}
              key={color}
              color={color}
            />
          ))}
        </ColorsContainer>
        <StyledText>Agora, me diz seu nome: </StyledText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
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
