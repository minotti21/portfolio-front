"use client";

import getNameFromLocalStorage from "@/utils/getNameFromLocalStorage";
import { ReactNode, createContext, useState } from "react";

interface ScrollbarContextType {
  showScrollbar: boolean;
  setShowScrollbar: (showScrollbar: boolean) => void;
}

export const ScrollbarContext = createContext<ScrollbarContextType>(
  {} as ScrollbarContextType,
);

export default function ScrollbarProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [showScrollbar, setShowScrollbar] = useState(true);

  return (
    <ScrollbarContext.Provider value={{ showScrollbar, setShowScrollbar }}>
      {children}
    </ScrollbarContext.Provider>
  );
}
