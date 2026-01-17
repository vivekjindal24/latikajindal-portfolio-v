import Link from 'next/link';
import { units, clos, cos } from '@/data/syllabus';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-16">
      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4">
        <div className="max-w-4xl">
          <div className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-md mb-4">
            CSE DBMS Course
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Learn Database Management Systems
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Everything you need to understand databases—from basic concepts to advanced topics. 
            Built to help you actually learn, not just memorize.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link 
              href={`/${units[0].id}/${units[0].topics[0].id}`} 
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Jump into Unit 1
            </Link>
            <Link 
              href="/syllabus" 
              className="bg-white text-gray-700 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors"
            >
              View Full Syllabus
            </Link>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="bg-gray-50 -mx-4 px-4 py-12 md:rounded-2xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">What you&apos;ll learn</h2>
          <p className="text-gray-600 mb-10">The course covers everything from data modeling to transaction management.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Learning Goals</h3>
              <ul className="space-y-3">
                {clos.map((clo) => (
                  <li key={clo.id} className="flex gap-3 text-gray-700">
                    <span className="font-mono text-xs font-bold text-blue-600 mt-0.5">{clo.id}</span>
                    <span className="text-sm">{clo.description}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Skills You&apos;ll Build</h3>
              <ul className="space-y-3">
                {cos.map((co) => (
                  <li key={co.id} className="flex gap-3 text-gray-700">
                    <span className="font-mono text-xs font-bold text-blue-600 mt-0.5">{co.id}</span>
                    <span className="text-sm">{co.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Course content</h2>
        <p className="text-gray-600 mb-8">Five units covering the complete DBMS curriculum</p>
        
        <div className="space-y-4">
          {units.map((unit, idx) => (
            <Link 
              key={unit.id} 
              href={`/${unit.id}/${unit.topics[0].id}`}
              className="block group"
            >
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 font-bold text-lg">
                    {idx + 1}
                  </div>
                  <div className="grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {unit.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{unit.topics.length} topics</p>
                    <div className="flex flex-wrap gap-2">
                      {unit.topics.map(t => (
                        <span key={t.id} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                          {t.title}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 text-gray-400 group-hover:text-blue-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
        </div>
      </div>
    </div>
  );
}
