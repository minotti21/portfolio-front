import NameProvider from "@/context/NameContext";
import StyledComponentsRegistry from "@/lib/registry";
import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
import AppContainer from "../components/AppContainer";
import SkeletonLoading from "@/components/SkeletonLoading";

const DynamicUserThemeProvider = dynamic(
  () => import("../context/UserThemeContext"),
  { ssr: false, loading: () => <SkeletonLoading /> },
);

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "minotti.dev",
  description: "Portfólio de Vinicius Minotti",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <DynamicUserThemeProvider>
            <NameProvider>
              <AppContainer>{children}</AppContainer>
            </NameProvider>
          </DynamicUserThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
