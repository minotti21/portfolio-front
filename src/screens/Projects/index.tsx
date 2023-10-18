'use client'

import { useContext } from "react";
import { UserThemeContext } from "@/context/UserThemeContext";

export default function Projects() {
    const { theme } = useContext(UserThemeContext);

    return (
        <h1>Projetos</h1>
    );
}