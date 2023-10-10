'use client'

import React, { createContext, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Home from "@/screens/Home";
import { GlobalStyle } from "@/utils/globalTheme";
import { ThemeProvider, styled } from "styled-components";
import { ThemeType } from "../../styled";
import Modal from "@/components/Modal";
import getThemeFromLocalStorage from "@/utils/getThemeFromLocalStorage";
import NameProvider from "@/context/NameContext";

export default function Main() {

  return (
    <MainContainer>
      <Modal />
      <Home />
    </MainContainer>
  );
}

const MainContainer = styled.nav`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.backgroundColor};

  ::-moz-selection {
  color: ${({ theme }) => theme.backgroundColor};
  background: ${({ theme }) => theme.defaultColor};
}

::selection {
  color: ${({ theme }) => theme.backgroundColor};
  background: ${({ theme }) => theme.defaultColor};
}
`
