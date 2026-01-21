import type { Metadata } from "next";
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
      <div className="flex">
        <Sidebar />
        <main className="flex-1 md:ml-64 min-h-screen">
          {children}
        </main>
      </div>
    </>
  );
}
