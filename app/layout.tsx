import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const iFellGreat = localFont({
  src: "./fonts/IMFellGreatPrimerSC.ttf",
  variable: "--font-imfell-great",
  weight: "100 900",
});
const orbitron = localFont({
  src: "./fonts/Orbitron-VariableFont_wght.ttf",
  variable: "--font-orbitron",
  weight: "100 900",
});

const inter = localFont({
  src: "./fonts/Inter-VariableFont.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NickelFox",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${iFellGreat.variable} ${orbitron.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}