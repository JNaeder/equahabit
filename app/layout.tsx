import type { Metadata } from "next";
import { Sedan, Sora } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Equahabit",
  description: "Equahabit",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  // if (!session?.user) {
  //   redirect("/login");
  // }

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={` ${sora.className} antialiased`}>{children}</body>
      </SessionProvider>
    </html>
  );
}
