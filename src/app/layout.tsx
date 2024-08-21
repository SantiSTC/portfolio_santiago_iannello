import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClientSideToaster } from "./components/toast/ClientSideToaster";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santiago Iannello",
  description: "Bienvenido a mi portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.className} overflow-x-hidden w-screen bg-black [scrollbar-width:none]`}
      >
        {children}
        <ClientSideToaster />
      </body>
    </html>
  );
}
