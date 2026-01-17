'use client';
import Link from 'next/link';
import { units } from '../data/syllabus';
import { useState } from 'react';

const Sidebar = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setIsMobileSidebarOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Open navigation"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Desktop always visible, Mobile drawer */}
      <aside
        className={`
          w-64 bg-white border-r border-gray-200 fixed top-16 bottom-0 overflow-y-auto z-50 transition-transform duration-300 ease-in-out
          md:translate-x-0
          ${
            isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }
        `}
      >
        {/* Mobile Close Button */}
        <div className="md:hidden flex justify-end p-4 border-b border-gray-200">
          <button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            aria-label="Close navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <h2 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wide">Contents</h2>
          <nav className="space-y-6 sm:space-y-8">
            {units.map((unit, idx) => (
              <div key={unit.id}>
                <div className="text-xs font-bold text-gray-500 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center text-xs flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="break-words">{unit.title}</span>
                </div>
                <ul className="space-y-1 ml-1">
                  {unit.topics.map((topic) => (
                    <li key={topic.id}>
                      <Link
                        href={`/courses/dbms/${unit.id}/${topic.id}`}
                        className="block py-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors break-words"
                        onClick={() => setIsMobileSidebarOpen(false)}
                      >
                        {topic.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

