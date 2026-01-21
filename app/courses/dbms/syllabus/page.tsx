import { units } from '@/data/syllabus';
import Link from 'next/link';

export default function SyllabusPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Complete Syllabus</h1>
      <div className="space-y-8">
        {units.map((unit) => (
          <div key={unit.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">{unit.title}</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {unit.topics.map((topic) => (
                  <li key={topic.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                          <Link href={`/${unit.id}/${topic.id}`} className="hover:text-blue-600 hover:underline">
                            {topic.title}
                          </Link>
                        </h3>
                        {topic.subtopics && (
                          <p className="text-sm text-gray-600">
                            {topic.subtopics.join(', ')}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex gap-1">
                          {topic.clos.map(clo => (
                            <span key={clo} className="text-xs font-mono bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              {clo}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-1">
                          {topic.cos.map(co => (
                            <span key={co} className="text-xs font-mono bg-green-100 text-green-800 px-2 py-1 rounded">
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
