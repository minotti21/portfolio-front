'use client'

import { useContext } from "react";
import { ThemeContext } from "@/app/layout";

export default function About() {

    const { theme } = useContext(ThemeContext);

    console.log(theme);

    return (
        <h1>Sobre</h1>
    );
}