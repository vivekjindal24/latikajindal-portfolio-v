import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drlatikajindal.com"),
  title: {
    default: "Dr. Latika Jindal",
    template: "%s | Dr. Latika Jindal",
  },
  description: "Associate Professor, Computer Science & Engineering at MediCaps University with 11+ years of teaching, research supervision, and institutional leadership.",
  keywords: "Dr. Latika Jindal, Associate Professor, Computer Science, MediCaps University, Machine Learning, Cyber Security, Research",
  authors: [{ name: "Dr. Latika Jindal", url: "https://www.drlatikajindal.com" }],
  creator: "Dr. Latika Jindal",
  openGraph: {
    title: "Dr. Latika Jindal",
    description: "Associate Professor in Computer Science & Engineering at MediCaps University, Indore.",
    type: "website",
    locale: "en_IN",
    url: "https://www.drlatikajindal.com",
    siteName: "Dr. Latika Jindal",
    images: [
      {
        url: "/og-image.png",
        width: 502,
        height: 504,
        alt: "Dr. Latika Jindal",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Dr. Latika Jindal",
    description: "Associate Professor in Computer Science & Engineering at MediCaps University, Indore.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
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
