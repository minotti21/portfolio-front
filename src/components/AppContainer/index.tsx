"use client";

import { ReactNode, useContext } from "react";
import { GlobalStyle } from "@/utils/globalTheme";
import { ThemeProvider } from "styled-components";
import Navbar from "../Navbar";
import { UserThemeContext } from "@/context/UserThemeContext";
import Footer from "../Footer";
import MainContainer from "../MainContainer";
import InitialModal from "../InitialModal";

export default function AppContainer({ children }: { children: ReactNode }) {
  const { theme } = useContext(UserThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer>
        <InitialModal />
        <Navbar />
        {children}
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
}
