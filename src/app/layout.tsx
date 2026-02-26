import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Центр Психического Здоровья г. Алматы",
  description: "Официальный интернет-ресурс Центра психического здоровья города Алматы. Психиатрическая и наркологическая помощь населению.",
  keywords: "центр психического здоровья, Алматы, психиатрия, наркология, cpzalmaty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
