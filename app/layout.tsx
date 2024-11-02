// app/layout.jsx
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import localFont from "next/font/local";
import "./globals.css";
import { menuItems } from "./components/MenuItems";
import { ThemeProvider } from "./providers/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "cabinet medical estethique lazer",
  description: "epilation lazer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen transition-colors duration-300 dark:bg-gray-900 dark:text-white`}
      >
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header menuItems={menuItems} />
            <main className="flex-1 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
              {children}
            </main>
           
            <Footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
