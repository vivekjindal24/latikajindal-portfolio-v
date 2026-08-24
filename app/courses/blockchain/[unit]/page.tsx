import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PptxViewer from "../components/PptxViewer";
import { materials } from "../data/materials";

type UnitPageProps = {
  params: Promise<{ unit: string }>;
};

export function generateStaticParams() {
  return materials.map((material) => ({ unit: material.id }));
}

export async function generateMetadata({ params }: UnitPageProps): Promise<Metadata> {
  const { unit } = await params;
  const material = materials.find((item) => item.id === unit);

  if (!material) return { title: "Unit Not Found | Blockchain Architecture Course" };

  return {
    title: `${material.unit}: ${material.title} | Blockchain Architecture Course`,
    description: `View the ${material.title} presentation for the Blockchain Architecture course.`,
  };
}

export default async function UnitPage({ params }: UnitPageProps) {
  const { unit } = await params;
  const materialIndex = materials.findIndex((material) => material.id === unit);
  const material = materials[materialIndex];

  if (!material) notFound();

  const previousMaterial = materials[materialIndex - 1];
  const nextMaterial = materials[materialIndex + 1];

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <Link href="/courses/blockchain" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline mb-8">
        <ArrowLeft size={16} />
        All Blockchain materials
      </Link>
      <PptxViewer material={material} />
      <nav aria-label="Course material navigation" className="flex justify-between gap-4 mt-8 pt-6 border-t border-gray-200">
        {previousMaterial ? (
          <Link href={`/courses/blockchain/${previousMaterial.id}`} className="text-sm text-gray-600 hover:text-blue-700">
            Previous: {previousMaterial.unit}
          </Link>
        ) : <span />}
        {nextMaterial && (
          <Link href={`/courses/blockchain/${nextMaterial.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline">
            Next: {nextMaterial.unit}
            <ArrowRight size={16} />
          </Link>
        )}
      </nav>
    </main>
  );
}