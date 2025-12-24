import type { Metadata } from "next";
import "./globals.css";
import "../components/RetroCafe.css"; // Global CSS import

export const metadata: Metadata = {
  title: "Retro Cafe",
  description: "A retro-themed cafe experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
