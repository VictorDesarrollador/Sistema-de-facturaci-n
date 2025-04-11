import { Inter, Geist_Mono } from "next/font/google";  // Inter en lugar de Geist
import "./globals.css";

const geistSans = Inter({  // Inter es la alternativa recomendada
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sistema de Facturación",
  description: "Sistema de Facturación",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased highlighter-context`}
      >
        {children}
      </body>
    </html>
  );
}
