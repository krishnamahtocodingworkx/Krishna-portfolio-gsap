import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Montserrat,
  Raleway,
  Open_Sans,
} from "next/font/google";
import "./globals.css";
import "./style.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krishna Mahto | Portfolio",
  keywords: [
    "Krishna Mahto",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Frontend Developer",
    "Full Stack Developer",
  ],
  description:
    "Welcome to my portfolio! I am Krishna Mahto, a passionate web developer with expertise in creating dynamic and responsive web applications. Explore my projects and skills.",
  authors: [{ name: "Krishna Mahto", url: "https://krishnamahto.com" }],
  creator: "Krishna Mahto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${raleway.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
