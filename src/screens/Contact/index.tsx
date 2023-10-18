'use client'

import { useContext } from "react";
import { UserThemeContext } from "@/context/UserThemeContext";

export default function Contact() {
    const { theme } = useContext(UserThemeContext);

    return (
        <h1>Contato</h1>
    );
}