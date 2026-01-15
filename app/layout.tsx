import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TypewriterTitle } from "@/components/TypewriterTitle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suradit | Portfolio",
  description: "Junior Web Dev | Turning ideas into functional, user-focused applications. Actively seeking opportunities to grow in real-world development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased selection:bg-primary selection:text-black`}
      >

        <TypewriterTitle />
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
