import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";

const roboto_condensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Church App - Eita Glória",
  description: "Aplicativo da benção",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto_condensed.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem >

          <main className="h-screen w-screen flex flex-col bg-zinc-50 dark:bg-zinc-950" >
            <Header />
            {children}
          </main>
        </ThemeProvider>


      </body>
    </html>
  );
}
