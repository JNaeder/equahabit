import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Equahabit",
  description: "Equahabit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={` ${sora.className} antialiased`}>{children}</body>
      </html>
    </SessionProvider>
  );
}
