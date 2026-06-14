import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { cookies } from "next/headers";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | REST Countries API",
  description:
    "Solution for the Frontend Mentor 'REST Countries API with color theme switcher' challenge",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get("theme")?.value;

  const theme: "dark" | "light" =
    cookieValue === "dark" || cookieValue === "light" ? cookieValue : "light";

  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} h-full antialiased ${theme === "dark" ? "dark" : ""}`}>
      <body className="flex min-h-full min-w-xs flex-col bg-background">
        <Header theme={theme} />
        {children}
      </body>
    </html>
  );
}
