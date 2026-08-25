export default function NoSqlLabManualPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">NoSQL Lab Manual</h1>
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        <div className="w-full h-[calc(100vh-200px)]">
          <iframe
            src="/NOSQL Lab Manual.pdf"
            className="w-full h-full"
            title="NoSQL Lab Manual"
          />
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <a
            href="/NOSQL Lab Manual.pdf"
            download
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Lab Manual PDF
          </a>
        </div>
      </div>
    </div>
  );
}