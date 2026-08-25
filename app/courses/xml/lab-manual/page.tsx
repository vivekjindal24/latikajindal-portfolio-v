export default function LabManualPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">XML Lab Manual</h1>
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        <div className="hidden md:block w-full h-[calc(100vh-200px)]">
          <iframe
            src="/XML Lab Manual _CS3EL08.pdf"
            className="w-full h-full"
            title="XML Lab Manual"
          />
        </div>
        <div className="md:hidden p-6 text-center space-y-3">
          <p className="text-sm text-gray-600">
            In-browser viewing is not supported on this device. Download the PDF instead:
          </p>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-wrap gap-3 justify-center md:justify-start">
          <a
            href="/XML Lab Manual _CS3EL08.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
          >
            Open in New Tab
          </a>
          <a
            href="/XML Lab Manual _CS3EL08.pdf"
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
