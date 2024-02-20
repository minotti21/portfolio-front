"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

interface IsMobileContextType {
  isMobile: boolean;
}

export const IsMobileContext = createContext<IsMobileContextType>(
  {} as IsMobileContextType,
);

export default function IsMobileProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(
      navigator.maxTouchPoints > 0 &&
        /Android|iPhone/i.test(navigator.userAgent),
    );
  }, []);

  return (
    <IsMobileContext.Provider value={{ isMobile }}>
      {children}
    </IsMobileContext.Provider>
  );
}
