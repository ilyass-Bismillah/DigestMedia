import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import { ThemeProvider } from "../components/Theme-provider";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: "Digest Media",
  description: "Agence Digitale & Média",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} ${jakarta.variable} font-sans antialiased relative min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SmoothScroll>
            {/* ─── NEROVA STYLE BACKGROUND ─── */}
            <div className="fixed inset-0 pointer-events-none z-0">
              <div className="absolute inset-0 opacity-[0.07] dark:opacity-[0.15] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]" />
              
              <div className="absolute top-1/3 right-1/2 w-[50%] h-[50%] dark:bg-[#E72D87]/20 bg-[#E72D87]/20 blur-[150px] opacity-100 dark:opacity-0 transition-opacity duration-500" />
              
              <div className="absolute top-1/3 right-1/5 w-[50%] h-[50%] dark:bg-[#E72D87]/30 bg-[#E72D87]/20 blur-[150px] opacity-100 dark:opacity-100 transition-opacity duration-500" />
            </div>

            {/* ─── SITE CONTENT ─── */}
            <div className="relative z-10 flex flex-col min-h-screen">
              <Navbar />
              <main className="grow">
                {children}
              </main>
              <Footer />
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}