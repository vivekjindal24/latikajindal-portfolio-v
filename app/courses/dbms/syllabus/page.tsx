import { units } from '../data/syllabus';
import Link from 'next/link';

export default function SyllabusPage() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Complete Syllabus</h1>
      <div className="space-y-6 sm:space-y-8">
        {units.map((unit) => (
          <div key={unit.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">{unit.title}</h2>
            </div>
            <div className="p-4 sm:p-6">
              <ul className="space-y-4 sm:space-y-5">
                {unit.topics.map((topic) => (
                  <li key={topic.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1">
                          <Link href={`/courses/dbms/${unit.id}/${topic.id}`} className="hover:text-blue-600 hover:underline break-words">
                            {topic.title}
                          </Link>
                        </h3>
                        {topic.subtopics && (
                          <p className="text-xs sm:text-sm text-gray-600 break-words">
                            {topic.subtopics.join(', ')}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 flex-wrap">
                        <div className="flex gap-1 flex-wrap">
                          {topic.clos.map(clo => (
                            <span key={clo} className="text-xs font-mono bg-blue-100 text-blue-800 px-2 py-1 rounded whitespace-nowrap">
                              {clo}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-1 flex-wrap">
                          {topic.cos.map(co => (
                            <span key={co} className="text-xs font-mono bg-green-100 text-green-800 px-2 py-1 rounded whitespace-nowrap">
                              {co}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
