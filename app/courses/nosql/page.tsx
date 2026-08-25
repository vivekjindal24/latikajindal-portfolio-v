import Link from "next/link";
import { BookOpen, Presentation } from "lucide-react";
import { materials } from "./data/materials";

export default function NoSQLCourse() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="pt-8 pb-14">
        <div className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-md mb-4">
          CSE NoSQL Course
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Learn NoSQL Databases
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
          Unit-wise course presentations covering non-relational data models, distributed systems, scalability, and practical NoSQL database design.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link href={`/courses/nosql/${materials[0].id}`} className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            <BookOpen size={18} />
            Start Unit 1
          </Link>
          <Link href="/courses/nosql/lab-manual" className="bg-white text-gray-700 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors">
            Lab Manual
          </Link>
        </div>
      </section>

      <section aria-labelledby="course-materials" className="bg-gray-50 -mx-4 px-4 py-10 md:rounded-2xl">
        <h2 id="course-materials" className="text-3xl font-bold text-gray-900 mb-3">Course materials</h2>
        <p className="text-gray-600 mb-8">Open any presentation directly in the browser.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {materials.map((material, index) => (
            <Link key={material.id} href={`/courses/nosql/${material.id}`} className="group bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-bold">
                  {index + 1}
                </div>
                <div className="grow">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">{material.unit}</p>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{material.title}</h3>
                  <p className="text-sm text-gray-500 mt-2 flex items-center gap-2"><Presentation size={15} /> {material.fileName}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
