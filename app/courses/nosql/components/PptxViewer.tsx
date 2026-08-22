"use client";

import { useEffect, useRef, useState } from "react";
import { Download, FileWarning, LoaderCircle } from "lucide-react";
import { init } from "pptx-preview";
import type { CourseMaterial } from "../data/materials";

type PptxViewerProps = {
  material: CourseMaterial;
};

export default function PptxViewer({ material }: PptxViewerProps) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let isMounted = true;
    const viewerElement = viewerRef.current;

    async function loadPresentation() {
      if (!viewerElement) return;

      try {
        const response = await fetch(material.path);
        if (!response.ok) throw new Error("Presentation unavailable");
        const buffer = await response.arrayBuffer();
        if (!isMounted || !viewerElement) return;

        viewerElement.replaceChildren();
        const viewer = init(viewerElement, { width: 960, height: 540 });
        viewer.preview(buffer);
        setState("ready");
      } catch {
        if (isMounted) setState("error");
      }
    }

    loadPresentation();
    return () => {
      isMounted = false;
      viewerElement?.replaceChildren();
    };
  }, [material.path]);

  return (
    <section className="space-y-4" aria-labelledby="viewer-title">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm text-gray-500">{material.unit}</p>
          <h2 id="viewer-title" className="text-2xl font-bold text-gray-900">
            {material.title}
          </h2>
        </div>
        <a
          href={material.path}
          download={material.fileName}
          className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-700 transition-colors"
        >
          <Download size={18} />
          Download original
        </a>
      </div>

      <div className="bg-gray-100 border border-gray-200 rounded-xl p-3 md:p-6 min-h-[320px] overflow-x-auto">
        {state === "loading" && (
          <div className="min-h-[280px] flex flex-col items-center justify-center gap-3 text-gray-600">
            <LoaderCircle className="animate-spin text-blue-600" size={32} />
            <p>Loading presentation...</p>
          </div>
        )}
        {state === "error" && (
          <div className="min-h-[280px] flex flex-col items-center justify-center gap-3 text-center text-gray-700">
            <FileWarning className="text-amber-600" size={32} />
            <p>We could not display this presentation right now.</p>
            <a href={material.path} download={material.fileName} className="text-blue-700 font-semibold hover:underline">
              Download the original PPTX
            </a>
          </div>
        )}
        <div ref={viewerRef} className={state === "ready" ? "mx-auto w-fit" : "hidden"} />
      </div>
    </section>
  );
}
