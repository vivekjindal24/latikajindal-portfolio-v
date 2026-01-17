'use client';

import { Topic, units } from '@/data/syllabus';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { 
  ThreeSchemaArchitecture, 
  DatabaseModelsTimeline, 
  SQLQueryBuilder, 
  NormalizationChecker, 
  ACIDProperties,
  QuickQuiz 
} from './InteractiveDiagrams';
import {
  ERDiagram,
  ThreeSchemaArchitectureDiagram,
  NormalizationDiagram,
  TransactionStateDiagram,
  BTreeDiagram
} from './DatabaseDiagrams';

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
          className="my-4 rounded-lg shadow-md bg-white dark:bg-gray-900 mx-auto"
          style={{ 
            mixBlendMode: 'multiply',
            maxWidth: '100%',
            maxHeight: '600px',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain'
          }}
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
          className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100"
          {...props}
        >
          {children}
        </code>
      ),
      pre: ({ children }) => (
        <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">{children}</pre>
      ),
    }}
  >
    {content}
  </ReactMarkdown>
);

const TopicContent = ({ topic, unitId, topicId }: TopicContentProps) => {
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
    // Previous topic in same unit
    prevTopic = currentUnit.topics[currentTopicIndex - 1];
    prevUnit = currentUnit;
  } else if (currentUnitIndex > 0) {
    // Last topic of previous unit
    prevUnit = units[currentUnitIndex - 1];
    prevTopic = prevUnit.topics[prevUnit.topics.length - 1];
  }

  if (currentUnit && currentTopicIndex < currentUnit.topics.length - 1) {
    // Next topic in same unit
    nextTopic = currentUnit.topics[currentTopicIndex + 1];
    nextUnit = currentUnit;
  } else if (currentUnitIndex < units.length - 1) {
    // First topic of next unit
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

      {/* Content Sections */}
      <div className="prose prose-lg max-w-none">
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            {topic.content.introduction}
          </p>
        </div>
      </div>

      {/* Interactive Components based on topic */}
      {topicId === 'intro-to-db' && (
        <>
          <DatabaseModelsTimeline />
          <div className="my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Database Models Evolution</h3>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/unit1/database-evolution.svg" 
              alt="Evolution of Database Models"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </>
      )}
      {topicId === 'db-architecture' && (
        <>
          <ThreeSchemaArchitecture />
          <ThreeSchemaArchitectureDiagram />
          <div className="my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Three-Schema Architecture Diagram</h3>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/unit1/three-schema-architecture.svg" 
              alt="Three-Schema Architecture"
              className="w-full rounded-lg shadow-md mb-8"
            />
          </div>
          <div className="my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Data Independence Explained</h3>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/unit1/data-independence.svg" 
              alt="Data Independence"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </>
      )}
      {topicId === 'data-models' && <ERDiagram />}
      {(topicId === 'relational-query' || topicId === 'query-processing') && <SQLQueryBuilder />}
      {topicId === 'relational-design' && (
        <>
          <NormalizationChecker />
          <NormalizationDiagram />
        </>
      )}
      {topicId === 'storage-strategies' && <BTreeDiagram />}
      {topicId === 'transaction-processing' && (
        <>
          <ACIDProperties />
          <TransactionStateDiagram />
        </>
      )}

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Basics</h2>
        <div className="prose prose-lg text-gray-700">
          <Markdown content={topic.content.concept} />
        </div>
      </div>

      <div className="mb-12 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Details</h2>
        <div className="prose prose-lg text-gray-700">
          <Markdown content={topic.content.technicalDepth} />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Examples</h2>
        <div className="prose prose-lg text-gray-700">
          <Markdown content={topic.content.examples} />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-World Use</h2>
        <div className="prose prose-lg text-gray-700">
          <Markdown content={topic.content.practical} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="border-l-4 border-yellow-400 pl-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">For exams</h3>
          <div className="prose prose-sm text-gray-700">
            <Markdown content={topic.content.exam} />
          </div>
        </div>
        <div className="border-l-4 border-green-500 pl-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Key points</h3>
          <div className="prose prose-sm text-gray-700">
            <Markdown content={topic.content.takeaways} />
          </div>
        </div>
      </div>

      {/* Topic-specific Quizzes */}
      {topicId === 'intro-to-db' && (
        <QuickQuiz questions={[
          {
            q: "Which database model uses a tree-like structure?",
            options: ["Relational", "Hierarchical", "Network", "Object-Oriented"],
            correct: 1
          },
          {
            q: "What does DBMS stand for?",
            options: ["Database Management System", "Data Base Made Simple", "Database Modeling System", "Digital Business Management"],
            correct: 0
          },
          {
            q: "Which model is most widely used today?",
            options: ["Hierarchical", "Network", "Relational", "All equally"],
            correct: 2
          }
        ]} />
      )}

      {topicId === 'db-architecture' && (
        <QuickQuiz questions={[
          {
            q: "Which level of Three-Schema Architecture shows how data is physically stored?",
            options: ["View Level", "Logical Level", "Physical Level", "Application Level"],
            correct: 2
          },
          {
            q: "What does DDL stand for?",
            options: ["Data Definition Language", "Database Design Language", "Data Display Language", "Database Definition List"],
            correct: 0
          },
          {
            q: "Which allows changing schema without affecting applications?",
            options: ["Data Redundancy", "Data Independence", "Data Security", "Data Integrity"],
            correct: 1
          }
        ]} />
      )}

      {topicId === 'relational-design' && (
        <QuickQuiz questions={[
          {
            q: "What does 1NF require?",
            options: ["No partial dependencies", "Atomic values only", "No transitive dependencies", "Foreign keys"],
            correct: 1
          },
          {
            q: "Which is the strictest normal form?",
            options: ["1NF", "2NF", "3NF", "BCNF"],
            correct: 3
          },
          {
            q: "Normalization helps reduce which problem?",
            options: ["Query speed", "Data redundancy", "Storage cost", "User access"],
            correct: 1
          }
        ]} />
      )}

      {topicId === 'transaction-processing' && (
        <QuickQuiz questions={[
          {
            q: "What does the 'A' in ACID stand for?",
            options: ["Authentication", "Atomicity", "Authorization", "Association"],
            correct: 1
          },
          {
            q: "Which property ensures changes persist after crashes?",
            options: ["Atomicity", "Consistency", "Isolation", "Durability"],
            correct: 3
          },
          {
            q: "What does Isolation prevent?",
            options: ["Data loss", "Concurrent transaction interference", "Unauthorized access", "Disk failures"],
            correct: 1
          }
        ]} />
      )}

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
