import {
  ClerkProvider
} from '@clerk/nextjs';
import type { Metadata } from "next";
import localFont from "next/font/local";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 400 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 400 900",
});

export const metadata: Metadata = {
  title: "Admin RentalCars",
  description: "Alquiles de autos en Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader color='#000' />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
