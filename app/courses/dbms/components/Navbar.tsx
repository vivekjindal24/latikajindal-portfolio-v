import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              DBMS Notes
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/syllabus"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Syllabus
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
