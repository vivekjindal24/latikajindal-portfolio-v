import type { Metadata } from "next";
import Link from "next/link";
import "../dbms/globals.css";

export const metadata: Metadata = {
  title: "NoSQL Course Materials",
  description: "NoSQL course materials and unit-wise PPTX presentations",
};

export default function NoSQLLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-gray-50 text-gray-900 antialiased min-h-screen">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center min-h-16 gap-4">
            <Link href="/courses/nosql" className="text-xl font-bold text-gray-900">
              NoSQL Course
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/courses/nosql" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/courses/archive" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                Archive
              </Link>
            </nav>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
