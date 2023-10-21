'use client'

import { useContext } from "react";
import { UserThemeContext } from "@/context/UserThemeContext";
import SectionContainer from "@/components/Section";

export default function Contact() {
    const { theme } = useContext(UserThemeContext);

    return (
        <SectionContainer>
            <h1>Contato</h1>
        </SectionContainer>
    );
}