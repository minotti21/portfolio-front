"use client"

import { ReactNode, useContext } from "react";
import { GlobalStyle } from "@/utils/globalTheme";
import { ThemeProvider } from "styled-components";
import Navbar from "../Navbar";
import { UserThemeContext } from "@/context/UserThemeContext";
import Footer from "../Footer";
import MainContainer from "../MainContainer";

export default function AppContainer({ children }: { children: ReactNode }) {
  const { theme } = useContext(UserThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer>
        <Navbar />
        {children}
        <Footer />
      </MainContainer>
    </ThemeProvider>
  )
}