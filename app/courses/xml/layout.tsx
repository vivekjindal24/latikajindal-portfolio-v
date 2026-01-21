import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
  title: "XML Notes - XML and Related Technologies",
  description: "Comprehensive study material for XML and Related Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-50 text-gray-900 antialiased">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 md:ml-64 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
