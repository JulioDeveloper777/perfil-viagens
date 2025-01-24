import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Perfil de viagens",
  description: "Guarde suas melhores fotos aqui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
