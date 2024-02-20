"use client";

import { ReactNode, useContext } from "react";
import { GlobalStyle } from "@/utils/globalTheme";
import { ThemeProvider } from "styled-components";
import Navbar from "../Navbar";
import { UserThemeContext } from "@/context/UserThemeContext";
import Footer from "../Footer";
import MainContainer from "../MainContainer";
import InitialModal from "../InitialModal";
import ArrowUp from "../ArrowUp";
import { ScrollbarContext } from "@/context/ScrollbarContext";

export default function AppContainer({ children }: { children: ReactNode }) {
  const { theme } = useContext(UserThemeContext);
  const { showScrollbar } = useContext(ScrollbarContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle showScrollbar={showScrollbar} />
      <MainContainer>
        <ArrowUp />
        <InitialModal />
        <Navbar />
        {children}
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
}
