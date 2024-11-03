import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feedbag Agrihub",
  description: "Feedbag Agrihub",
};

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Poppins-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-pop",
});

const boldPoppins = localFont({
  src: [
    {
      path: "../public/fonts/Poppins-Bold.ttf",
      weight: "600",
    },
  ],
  variable: "--font-pops",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.variable} ${boldPoppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
