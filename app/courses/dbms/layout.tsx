import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

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
    <>
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        <main className="flex-1 md:ml-64 min-h-screen w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
