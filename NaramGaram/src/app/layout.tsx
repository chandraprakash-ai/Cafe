import type { Metadata } from "next";
import "./globals.css";
import "../components/NaramGaram.css"; // Global CSS import

export const metadata: Metadata = {
  title: "Naram-Garam",
  description: "Family Restaurant",
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
