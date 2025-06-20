import { ParticleAuthkit } from "@/components/auth/AuthKit";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/landing/navbar/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LynqFi – The Seamless Cross-Chain Trading Platform",
  description: "Trade any token across any chain with LynqFi. No bridges, no gas headaches—just instant, secure, chain-agnostic swaps powered by your Universal Account.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ParticleAuthkit>
         <NavBar />
          {children}
        </ParticleAuthkit>
      </body>
    </html>
  );
}
