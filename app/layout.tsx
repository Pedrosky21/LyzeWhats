import type { Metadata } from "next";
import { Oooh_Baby } from "next/font/google";
import { Orelega_One } from "next/font/google";
import { Oranienbaum } from "next/font/google";
import { Coiny } from "next/font/google";
import { Caprasimo } from "next/font/google";
import "./globals.css";

const ooohBaby = Oooh_Baby({ weight: ["400"], variable: "--font-cursiva" });
const orelegaOne = Orelega_One({ weight: ["400"], variable: "--font-principal" });
const oranienbaum = Oranienbaum({ weight: ["400"], variable: "--font-elegante" });
const coiny = Coiny({ weight: ["400"], variable: "--font-divertida" });
const caprasimo = Caprasimo({ weight: ["400"], variable: "--font-divertida2" });

export const metadata: Metadata = {
  title: "LyzeWhats",
  description: "Un analisis de tus chats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${ooohBaby.variable} ${oranienbaum.variable} ${coiny.variable} ${caprasimo.variable} ${orelegaOne.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
