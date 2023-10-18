"use client"

import getNameFromLocalStorage from "@/utils/getNameFromLocalStorage";
import { ReactNode, createContext, useState } from "react";

interface NameContextType {
    name: string
    setName: (name: string) => void
}

export const NameContext = createContext<NameContextType>({} as NameContextType);

export default function NameProvider({ children }: { children: ReactNode }) {
    const [name, setName] = useState(getNameFromLocalStorage());

    return (
        <NameContext.Provider value={{ name, setName }}>{children}</NameContext.Provider>
    )

}