// // app/layout.tsx
// import type { Metadata } from "next";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import localFont from "next/font/local";
// import "./globals.css";
// import { menuItems } from "./components/MenuItems";
// import { ThemeProvider } from "./providers/ThemeProvider";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// // Metadata configuration
// export const metadata: Metadata = {
//   title: "Cabinet Medical Esthétique Laser",
//   description: "Épilation laser et soins esthétiques professionnels",
//   keywords: ["épilation laser", "soins esthétiques", "médecine esthétique"],
//   authors: [{ name: "Cabinet Medical" }],
//   robots: "index, follow",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen transition-colors duration-300 dark:bg-gray-900 dark:text-white`}
//       >
//         <ThemeProvider>
//           <div className="flex flex-col min-h-screen">
//             <Header menuItems={menuItems} />
//             <main className="flex-1 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
//               {children}
//             </main>
//             <Footer className="bg-white dark:bg-gray-900 text-green-900 dark:text-white" />
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }


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

// Metadata configuration
export const metadata: Metadata = {
  title: "Cabinet Medical Esthétique Laser",
  description: "Épilation laser et soins esthétiques professionnels",
  keywords: ["épilation laser", "soins esthétiques", "médecine esthétique"],
  authors: [{ name: "Cabinet Medical" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen transition-colors duration-300 dark:bg-gray-900 dark:text-white`}
      >
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header menuItems={menuItems} />
            <main className="flex-1 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
              {children}
            </main>
            <Footer className="bg-white dark:bg-gray-900 text-green-900 dark:text-white transition-colors duration-300" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}




