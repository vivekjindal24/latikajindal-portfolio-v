import Link from 'next/link';
import { units } from '@/data/syllabus';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen fixed overflow-y-auto hidden md:block">
      <div className="p-6">
        <h2 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wide">Contents</h2>
        <nav className="space-y-8">
          {units.map((unit, idx) => (
            <div key={unit.id}>
              <div className="text-xs font-bold text-gray-500 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center text-xs">
                  {idx + 1}
                </span>
                {unit.title}
              </div>
              <ul className="space-y-1 ml-1">
                {unit.topics.map((topic) => (
                  <li key={topic.id}>
                    <Link
                      href={`/${unit.id}/${topic.id}`}
                      className="block py-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
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
  );
};

export default Sidebar;

