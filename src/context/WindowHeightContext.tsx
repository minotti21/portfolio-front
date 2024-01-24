"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

interface WindowHeightContextType {
  currentHeight: number;
}

export const WindowHeightContext = createContext<WindowHeightContextType>(
  {} as WindowHeightContextType,
);

export default function WindowHeightProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentHeight, setCurrentHeight] = useState(0);

  const updateWindowHeight = () => {
    setCurrentHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateWindowHeight);

    return () => {
      window.removeEventListener("scroll", updateWindowHeight);
    };
  }, []);

  return (
    <WindowHeightContext.Provider value={{ currentHeight }}>
      {children}
    </WindowHeightContext.Provider>
  );
}
