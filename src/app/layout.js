import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import ThemeCompo from "./components/ThemeCompo";
import { ThemeModeScript } from "flowbite-react";

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

export const metadata = {
  title: "Mankind4dev Website",
  description: "Generated by Mankind4dev",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <ThemeModeScript />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider>
            <ThemeCompo>
              <Header />
              {children}
            </ThemeCompo>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
