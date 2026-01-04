import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DBMS Notes",
  description: "Database Management Systems study notes and resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2070675915080880"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}
      >
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 md:ml-64 min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
