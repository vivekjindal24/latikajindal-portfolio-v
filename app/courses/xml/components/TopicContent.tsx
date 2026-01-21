'use client';

import { useEffect, useMemo, useState } from 'react';
import { Topic, units } from '@/data/syllabusData2';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

interface TopicContentProps {
  topic: Topic;
  unitId: string;
  topicId: string;
}

const Markdown = ({ content }: { content: string }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm, remarkBreaks]}
    components={{
      img: ({ src, alt }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src ?? ''}
          alt={alt ?? ''}
          className="my-4 rounded-lg shadow-md w-full"
        />
      ),
      a: ({ href, children }) => (
        <a
          href={href ?? '#'}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      ),
      code: ({ children, ...props }) => (
        <code
          className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm text-gray-900"
          {...props}
        >
          {children}
        </code>
      ),
      pre: ({ children }) => (
        <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto my-6">{children}</pre>
      ),
    }}
  >
    {content}
  </ReactMarkdown>
);

const TopicContent = ({ topic, unitId, topicId }: TopicContentProps) => {
  const storageKey = useMemo(() => `xml-study-${unitId}-${topicId}`, [unitId, topicId]);
  const baseChecklist = useMemo(
    () => [
      { id: 'intro', label: 'Read the intro and basics' },
      { id: 'examples', label: 'Try the examples in an editor' },
      { id: 'practice', label: 'Complete the practical task' },
      { id: 'exam', label: 'Draft a 3-bullet exam answer' },
    ],
    [],
  );

  const [checklist, setChecklist] = useState(
    () => baseChecklist.map((item) => ({ ...item, done: false })),
  );
  const [openPrompt, setOpenPrompt] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved) as typeof checklist;
        setChecklist(parsed);
      } else {
        setChecklist(baseChecklist.map((item) => ({ ...item, done: false })));
      }
    } catch (err) {
      setChecklist(baseChecklist.map((item) => ({ ...item, done: false })));
    }
  }, [storageKey, baseChecklist]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(checklist));
    } catch (err) {
      /* ignore */
    }
  }, [checklist, storageKey]);

  const completed = checklist.filter((item) => item.done).length;
  const progress = Math.round((completed / checklist.length) * 100);

  // Find current unit and topic indices for navigation
  const currentUnitIndex = units.findIndex(u => u.id === unitId);
  const currentUnit = units[currentUnitIndex];
  const currentTopicIndex = currentUnit?.topics.findIndex(t => t.id === topicId) ?? -1;

  // Calculate previous and next topics
  let prevTopic = null;
  let prevUnit = null;
  let nextTopic = null;
  let nextUnit = null;

  if (currentTopicIndex > 0) {
    prevTopic = currentUnit.topics[currentTopicIndex - 1];
    prevUnit = currentUnit;
  } else if (currentUnitIndex > 0) {
    prevUnit = units[currentUnitIndex - 1];
    prevTopic = prevUnit.topics[prevUnit.topics.length - 1];
  }

  if (currentUnit && currentTopicIndex < currentUnit.topics.length - 1) {
    nextTopic = currentUnit.topics[currentTopicIndex + 1];
    nextUnit = currentUnit;
  } else if (currentUnitIndex < units.length - 1) {
    nextUnit = units[currentUnitIndex + 1];
    nextTopic = nextUnit.topics[0];
  }

  return (
    <article className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{topic.title}</h1>
        <div className="flex gap-3 text-sm text-gray-500">
          <span>Unit {unitId.split('-')[1]}</span>
          <span>•</span>
          <span>{topic.clos.map(id => id).join(', ')}</span>
        </div>
      </div>

      {/* CLO-CO Mapping */}
      <div className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border-2 border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Objectives</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">Course Learning Outcomes</h3>
            <div className="space-y-2">
              {topic.clos.map(cloId => (
                <div key={cloId} className="flex items-start gap-2">
                  <span className="font-mono text-xs font-bold bg-blue-600 text-white px-2 py-1 rounded">{cloId}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">Course Outcomes</h3>
            <div className="space-y-2">
              {topic.cos.map(coId => (
                <div key={coId} className="flex items-start gap-2">
                  <span className="font-mono text-xs font-bold bg-green-600 text-white px-2 py-1 rounded">{coId}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      {topic.content.introduction && (
        <div className="mb-12 bg-gradient-to-r from-slate-50 to-gray-50 p-8 rounded-lg border-l-4 border-blue-500">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">ℹ️</span>
            <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            {topic.content.introduction}
          </p>
        </div>
      )}

      {/* Study tracker */}
      <div className="mb-12 bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Study tracker</h3>
            <p className="text-sm text-gray-600">Mark what you have completed for this topic.</p>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold text-gray-700">{progress}% done</div>
            <div className="w-32 h-2 bg-gray-100 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {checklist.map((item) => (
            <label
              key={item.id}
              className="flex items-start gap-3 p-3 border border-gray-100 rounded-lg hover:border-blue-200 cursor-pointer"
            >
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded"
                checked={item.done}
                onChange={() =>
                  setChecklist((prev) =>
                    prev.map((c) => (c.id === item.id ? { ...c, done: !c.done } : c)),
                  )
                }
              />
              <span className="text-sm text-gray-800">{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Concept */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Basics</h2>
        <div className="prose prose-lg text-gray-700">
          <Markdown content={topic.content.concept} />
        </div>
      </div>

      {/* Technical Depth */}
      <div className="mb-12 bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-lg border-2 border-indigo-200 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Details</h2>
        <div className="prose prose-lg text-gray-700">
          <Markdown content={topic.content.technicalDepth} />
        </div>
      </div>

      {/* Examples */}
      <div className="mb-12 bg-green-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Examples</h2>
        <div className="prose prose-lg text-gray-700 font-mono text-sm">
          <Markdown content={topic.content.examples} />
        </div>
      </div>

      {/* Self-check prompts */}
      <div className="mb-12 bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Self-check</h2>
        <div className="space-y-3">
          {[
            {
              id: 'recap',
              prompt: `Summarize ${topic.title} in three lines.`,
              hint: 'Hit the what, why, and one place it appears in practice.',
            },
            {
              id: 'apply',
              prompt: 'Write a 5-line XML snippet that would validate for this topic.',
              hint: 'Include one attribute and one nested element; keep it syntactically correct.',
            },
            {
              id: 'avoid',
              prompt: 'Name one common mistake to avoid and how to detect it.',
              hint: 'Think of parser errors you have seen: bad nesting, unescaped characters, or wrong order.',
            },
          ].map((item) => (
            <div key={item.id} className="border border-gray-100 rounded-lg p-3">
              <button
                type="button"
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpenPrompt((prev) => (prev === item.id ? null : item.id))}
              >
                <span className="text-sm font-semibold text-gray-900">{item.prompt}</span>
                <span className="text-xs text-blue-600 font-semibold">
                  {openPrompt === item.id ? 'Hide hint' : 'Show hint'}
                </span>
              </button>
              {openPrompt === item.id && (
                <p className="mt-2 text-sm text-gray-600">{item.hint}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Practical */}
      <div className="mb-12 border-l-4 border-purple-500 pl-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-World Use</h2>
        <div className="prose prose-lg text-gray-700">
          <Markdown content={topic.content.practical} />
        </div>
      </div>

      {/* Exam & Takeaways Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
          <h3 className="text-lg font-bold text-gray-900 mb-3">📝 For exams</h3>
          <div className="prose prose-sm text-gray-700">
            <Markdown content={topic.content.exam} />
          </div>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-lg font-bold text-gray-900 mb-3">✨ Key points</h3>
          <div className="prose prose-sm text-gray-700">
            <Markdown content={topic.content.takeaways} />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center gap-4 pt-8 mt-16 border-t border-gray-200">
        {prevTopic && prevUnit ? (
          <Link
            href={`/${prevUnit.id}/${prevTopic.id}`}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <div>
              <div className="text-xs text-gray-500">Previous</div>
              <div className="text-sm font-medium">{prevTopic.title}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}
        
        {nextTopic && nextUnit ? (
          <Link
            href={`/${nextUnit.id}/${nextTopic.id}`}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group text-right ml-auto"
          >
            <div>
              <div className="text-xs text-gray-500">Next</div>
              <div className="text-sm font-medium">{nextTopic.title}</div>
            </div>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </article>
  );
};

export default TopicContent;
