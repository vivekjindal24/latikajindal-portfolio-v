"use client";

import { useEffect, useState } from "react";
import { Download, ExternalLink, FileWarning, LoaderCircle } from "lucide-react";
import type { CourseMaterial } from "../data/materials";

type PptxViewerProps = {
  material: CourseMaterial;
};

export default function PptxViewer({ material }: PptxViewerProps) {
  const [viewerUrl, setViewerUrl] = useState<string | null>(null);

  useEffect(() => {
    const publicFileUrl = `${window.location.origin}${material.path}`;
    setViewerUrl(`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(publicFileUrl)}`);
  }, [material.path]);

  return (
    <section className="space-y-4" aria-labelledby="viewer-title" aria-live="polite">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm text-gray-500">{material.unit}</p>
          <h2 id="viewer-title" className="text-2xl font-bold text-gray-900">
            {material.title}
          </h2>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          {viewerUrl && (
            <a href={viewerUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-700 transition-colors">
              <ExternalLink size={18} />
              Open viewer
            </a>
          )}
          <a href={material.path} download={material.fileName} className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-700 transition-colors">
            <Download size={18} />
            Download original
          </a>
        </div>
      </div>

      <div className="bg-gray-100 border border-gray-200 rounded-xl p-3 md:p-6 min-h-[560px]" role="region" aria-label="Presentation viewer" aria-live="polite">
        {viewerUrl ? (
          <iframe src={viewerUrl} title={`${material.title} presentation`} className="w-full h-[70vh] min-h-[520px] border-0 rounded-lg bg-white" allowFullScreen />
        ) : (
          <div className="min-h-[520px] flex flex-col items-center justify-center gap-3 text-gray-600">
            <LoaderCircle className="animate-spin text-blue-600" size={32} />
            <p>Loading presentation viewer...</p>
          </div>
        )}
      </div>
      <p className="flex items-start gap-2 text-sm text-gray-500"><FileWarning size={16} className="mt-0.5 shrink-0" />The viewer requires the published website URL to be publicly reachable. Use the original-file link if the viewer is unavailable.</p>
    </section>
  );
}