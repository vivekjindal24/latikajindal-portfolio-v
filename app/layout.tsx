import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dr. Latika Jindal",
  description: "Associate Professor, Computer Science & Engineering at MediCaps University with 11+ years of teaching, research supervision, and institutional leadership.",
  keywords: "Dr. Latika Jindal, Associate Professor, Computer Science, MediCaps University, Machine Learning, Cyber Security, Research",
  authors: [{ name: "Dr. Latika Jindal" }],
  openGraph: {
    title: "Dr. Latika Jindal",
    description: "Associate Professor in Computer Science & Engineering at MediCaps University, Indore.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2070675915080880"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
