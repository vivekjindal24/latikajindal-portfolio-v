import { notFound } from 'next/navigation';
import { units } from '@/data/syllabus';
import TopicContent from '@/components/TopicContent';

interface PageProps {
  params: Promise<{
    unit: string;
    topic: string;
  }>;
}

export async function generateStaticParams() {
  const params = [];
  for (const unit of units) {
    for (const topic of unit.topics) {
      params.push({
        unit: unit.id,
        topic: topic.id,
      });
    }
  }
  return params;
}

export default async function TopicPage({ params }: PageProps) {
  const { unit: unitId, topic: topicId } = await params;

  const unit = units.find((u) => u.id === unitId);
  const topic = unit?.topics.find((t) => t.id === topicId);

  if (!topic) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <TopicContent topic={topic} unitId={unitId} topicId={topicId} />
      </div>
    </div>
  );
}
