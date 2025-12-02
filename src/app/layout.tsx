import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nuestra Boda | Matrimonio",
  description: "Te invitamos a celebrar nuestro matrimonio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        playfair.variable,
        lato.variable
      )}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
