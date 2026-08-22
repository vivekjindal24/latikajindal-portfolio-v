import Link from "next/link";
import { Archive, ArrowLeft } from "lucide-react";

const archivedCourses = [
  {
    title: "Database Management Systems",
    subtitle: "DBMS",
    description: "Archived unit-wise notes, diagrams, SQL examples, and practice questions.",
    href: "/courses/dbms",
  },
  {
    title: "XML and Related Technologies",
    subtitle: "XML",
    description: "Archived syllabus-aligned notes covering XML, DTD, XSD, XSLT, and XPath.",
    href: "/courses/xml",
  },
];

export default function ArchivePage() {
  return (
    <main className="bg-gray-50 min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-10">
          <ArrowLeft size={16} />
          Back to teaching platforms
        </Link>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Archive className="text-blue-700" size={26} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Teaching Platforms</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Archive</h1>
          </div>
        </div>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl">Previously available courses remain accessible here with their original content preserved.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {archivedCourses.map((course) => (
            <article key={course.subtitle} className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-colors">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">{course.subtitle} · Archived</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h2>
              <p className="text-gray-600 mb-6">{course.description}</p>
              <Link href={course.href} className="inline-flex items-center justify-center bg-gray-900 text-white font-semibold py-3 px-5 rounded-lg hover:bg-gray-700 transition-colors">
                Open archived course
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
