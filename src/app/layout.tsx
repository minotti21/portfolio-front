"use client"

import NameProvider from '@/context/NameContext';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/utils/globalTheme';
import { Poppins } from 'next/font/google';
import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeType } from '../../styled';
import getThemeFromLocalStorage from '@/utils/getThemeFromLocalStorage';
import Navbar from '@/components/Navbar';

interface ThemeContextProps {
  theme: ThemeType
  changeTheme: (theme: ThemeType) => void;
}

const poppins = Poppins({ weight: ['200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });

export const metadata = {
  title: 'minotti.dev',
  description: 'Portfólio de Vinicius Minotti',
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<ThemeType>(() => getThemeFromLocalStorage());

  const changeTheme = (newTheme: ThemeType) => {
    typeof window !== 'undefined' && localStorage.setItem('theme', JSON.stringify(newTheme));

    setTheme(newTheme);
  }

  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={{ theme, changeTheme }}>
              <NameProvider>
                <GlobalStyle />
                <Navbar />
                {children}
              </NameProvider>
            </ThemeContext.Provider>
          </ThemeProvider>
        </StyledComponentsRegistry></body>
    </html>
  )
}
