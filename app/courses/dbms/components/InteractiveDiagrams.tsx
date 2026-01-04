'use client';

import { useState } from 'react';

// Three Schema Architecture Interactive Diagram
export const ThreeSchemaArchitecture = () => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  const layers = [
    {
      id: 'view',
      name: 'View Level',
      color: 'bg-blue-500',
      description: 'User-specific views of the database',
      example: 'Student Portal, Faculty Dashboard'
    },
    {
      id: 'logical',
      name: 'Logical Level',
      color: 'bg-green-500',
      description: 'What data is stored and relationships',
      example: 'Tables: Students, Courses, Enrollments'
    },
    {
      id: 'physical',
      name: 'Physical Level',
      color: 'bg-orange-500',
      description: 'How data is physically stored on disk',
      example: 'B+ Tree indexes, Hash files, Data blocks'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-lg my-8">
      <h3 className="text-xl font-bold mb-4 text-gray-800">🏗️ Interactive: Three-Schema Architecture</h3>
      <p className="text-sm text-gray-600 mb-4">Click on each layer to explore its details</p>
      
      <div className="space-y-3">
        {layers.map((layer) => (
          <div key={layer.id}>
            <button
              onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
              className={`w-full ${layer.color} text-white p-4 rounded-lg font-semibold 
                transition-all duration-300 hover:scale-105 hover:shadow-lg
                ${activeLayer === layer.id ? 'ring-4 ring-offset-2 ring-blue-300' : ''}`}
            >
              {layer.name}
            </button>
            {activeLayer === layer.id && (
              <div className="mt-2 p-4 bg-gray-50 rounded-lg border border-gray-200 animate-fadeIn">
                <p className="font-semibold text-gray-800 mb-2">{layer.description}</p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Example:</span> {layer.example}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Database Models Evolution Timeline
export const DatabaseModelsTimeline = () => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  const models = [
    {
      id: 'hierarchical',
      year: '1960s',
      name: 'Hierarchical',
      structure: '🌳 Tree Structure',
      pros: 'Fast access for 1:N relationships',
      cons: 'Inflexible, redundant data',
      example: 'IBM IMS'
    },
    {
      id: 'network',
      year: '1970s',
      name: 'Network',
      structure: '🕸️ Graph Structure',
      pros: 'Handles M:N relationships',
      cons: 'Complex to navigate',
      example: 'CODASYL'
    },
    {
      id: 'relational',
      year: '1980s-Now',
      name: 'Relational',
      structure: '📊 Table Structure',
      pros: 'Simple, flexible, powerful',
      cons: 'Can be slower for complex hierarchies',
      example: 'MySQL, PostgreSQL, Oracle'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 my-8">
      <h3 className="text-lg font-bold mb-4 text-gray-900">Evolution of Database Models</h3>
      <p className="text-sm text-gray-600 mb-4">See how database technology evolved over time</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {models.map((model) => (
          <div key={model.id} className="relative">
            <button
              onClick={() => setSelectedModel(selectedModel === model.id ? null : model.id)}
              className={`w-full bg-white p-4 rounded-lg border-2 transition-all
                hover:border-blue-400
                ${selectedModel === model.id ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}
            >
              <div className="text-xs font-medium text-gray-500 mb-1">{model.year}</div>
              <div className="text-base font-bold text-gray-900 mb-2">{model.name}</div>
              <div className="text-xl">{model.structure}</div>
            </button>
            
            {selectedModel === model.id && (
              <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-green-700">Pros:</span>
                    <p className="text-gray-700">{model.pros}</p>
                  </div>
                  <div>
                    <span className="font-medium text-red-700">Cons:</span>
                    <p className="text-gray-700">{model.cons}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Example:</span>
                    <p className="text-gray-600">{model.example}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// SQL Query Interactive Builder
export const SQLQueryBuilder = () => {
  const [query, setQuery] = useState({
    operation: 'SELECT',
    columns: '*',
    table: 'Students',
    condition: ''
  });

  const buildQuery = () => {
    let sql = `${query.operation} ${query.columns} FROM ${query.table}`;
    if (query.condition) {
      sql += ` WHERE ${query.condition}`;
    }
    return sql + ';';
  };

  return (
    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border-2 border-cyan-200 shadow-lg my-8">
      <h3 className="text-xl font-bold mb-4 text-gray-800">💻 Interactive: SQL Query Builder</h3>
      <p className="text-sm text-gray-600 mb-4">Build your SQL query and see it in action!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Operation</label>
          <select
            value={query.operation}
            onChange={(e) => setQuery({ ...query, operation: e.target.value })}
            className="w-full p-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          >
            <option>SELECT</option>
            <option>INSERT</option>
            <option>UPDATE</option>
            <option>DELETE</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Columns</label>
          <input
            type="text"
            value={query.columns}
            onChange={(e) => setQuery({ ...query, columns: e.target.value })}
            placeholder="*, Name, ID"
            className="w-full p-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Table</label>
          <input
            type="text"
            value={query.table}
            onChange={(e) => setQuery({ ...query, table: e.target.value })}
            placeholder="Students"
            className="w-full p-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Condition (WHERE)</label>
          <input
            type="text"
            value={query.condition}
            onChange={(e) => setQuery({ ...query, condition: e.target.value })}
            placeholder="Age > 18"
            className="w-full p-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>
      
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
        <div className="text-xs text-gray-400 mb-2">Generated Query:</div>
        <div className="text-base">{buildQuery()}</div>
      </div>
    </div>
  );
};

// Normalization Form Checker
export const NormalizationChecker = () => {
  const [selectedForm, setSelectedForm] = useState<string>('');

  const forms = [
    {
      id: '1nf',
      name: '1NF (First Normal Form)',
      rule: 'All attributes must be atomic (indivisible)',
      example: '❌ Phone: "123, 456" → ✓ Phone1: "123", Phone2: "456"',
      color: 'bg-yellow-100 border-yellow-400'
    },
    {
      id: '2nf',
      name: '2NF (Second Normal Form)',
      rule: 'Must be in 1NF + No partial dependencies',
      example: 'All non-key attributes depend on the whole primary key',
      color: 'bg-orange-100 border-orange-400'
    },
    {
      id: '3nf',
      name: '3NF (Third Normal Form)',
      rule: 'Must be in 2NF + No transitive dependencies',
      example: 'Non-key attributes should not depend on other non-key attributes',
      color: 'bg-red-100 border-red-400'
    },
    {
      id: 'bcnf',
      name: 'BCNF (Boyce-Codd Normal Form)',
      rule: 'Every determinant must be a candidate key',
      example: 'Stricter version of 3NF - eliminates all anomalies',
      color: 'bg-purple-100 border-purple-400'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-lg my-8">
      <h3 className="text-xl font-bold mb-4 text-gray-800">🎯 Interactive: Normalization Forms</h3>
      <p className="text-sm text-gray-600 mb-4">Select a normal form to learn its rules and examples</p>
      
      <div className="space-y-3">
        {forms.map((form) => (
          <div key={form.id}>
            <button
              onClick={() => setSelectedForm(selectedForm === form.id ? '' : form.id)}
              className={`w-full p-4 rounded-lg border-2 transition-all duration-300 
                hover:shadow-lg hover:scale-[1.02] text-left
                ${selectedForm === form.id ? `${form.color} ring-4 ring-offset-2` : 'bg-gray-50 border-gray-200'}`}
            >
              <div className="font-bold text-gray-800">{form.name}</div>
            </button>
            
            {selectedForm === form.id && (
              <div className="mt-2 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 animate-fadeIn">
                <div className="mb-3">
                  <span className="font-semibold text-blue-800">Rule:</span>
                  <p className="text-gray-700 mt-1">{form.rule}</p>
                </div>
                <div>
                  <span className="font-semibold text-green-800">Example:</span>
                  <p className="text-gray-700 mt-1 font-mono text-sm">{form.example}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ACID Properties Interactive
export const ACIDProperties = () => {
  const [hoveredProperty, setHoveredProperty] = useState<string | null>(null);

  const properties = [
    {
      id: 'atomicity',
      letter: 'A',
      name: 'Atomicity',
      description: 'All or Nothing - Transaction either completes fully or not at all',
      example: 'Bank transfer: Debit AND Credit both succeed or both fail',
      icon: '⚛️',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'consistency',
      letter: 'C',
      name: 'Consistency',
      description: 'Database remains in a valid state before and after transaction',
      example: 'Total money in bank remains constant after transfer',
      icon: '⚖️',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'isolation',
      letter: 'I',
      name: 'Isolation',
      description: 'Concurrent transactions don\'t interfere with each other',
      example: 'Two users withdrawing money - each sees consistent balance',
      icon: '🔒',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      id: 'durability',
      letter: 'D',
      name: 'Durability',
      description: 'Once committed, changes are permanent even after system failure',
      example: 'Transaction survives power outage or crash',
      icon: '💾',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-6 rounded-lg border-2 border-gray-300 shadow-lg my-8">
      <h3 className="text-xl font-bold mb-4 text-gray-800">🛡️ Interactive: ACID Properties</h3>
      <p className="text-sm text-gray-600 mb-4">Hover over each property to understand transaction guarantees</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {properties.map((prop) => (
          <div
            key={prop.id}
            onMouseEnter={() => setHoveredProperty(prop.id)}
            onMouseLeave={() => setHoveredProperty(null)}
            className="relative group cursor-pointer"
          >
            <div className={`bg-gradient-to-br ${prop.color} text-white p-6 rounded-xl 
              shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl
              flex flex-col items-center justify-center h-32`}
            >
              <div className="text-4xl mb-2">{prop.icon}</div>
              <div className="text-2xl font-bold">{prop.letter}</div>
              <div className="text-xs font-medium">{prop.name}</div>
            </div>
            
            {hoveredProperty === prop.id && (
              <div className="absolute z-10 mt-2 p-4 bg-white rounded-lg border-2 border-gray-300 
                shadow-xl w-64 animate-fadeIn">
                <div className="font-bold text-gray-800 mb-2">{prop.name}</div>
                <p className="text-sm text-gray-700 mb-2">{prop.description}</p>
                <div className="text-xs bg-blue-50 p-2 rounded border border-blue-200">
                  <span className="font-semibold">Example:</span> {prop.example}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Quiz Component
export const QuickQuiz = ({ questions }: { questions: Array<{ q: string; options: string[]; correct: number }> }) => {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (qIndex: number, optionIndex: number) => {
    setAnswers({ ...answers, [qIndex]: optionIndex });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct) score++;
    });
    return score;
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 my-8">
      <h3 className="text-lg font-bold mb-4 text-gray-900">Quick Quiz</h3>
      
      <div className="space-y-6">
        {questions.map((question, qIndex) => (
          <div key={qIndex} className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium text-gray-900 mb-3">{qIndex + 1}. {question.q}</p>
            <div className="space-y-2">
              {question.options.map((option, oIndex) => (
                <button
                  key={oIndex}
                  onClick={() => handleAnswer(qIndex, oIndex)}
                  className={`w-full text-left p-3 rounded-lg border-2 transition-all text-sm
                    ${answers[qIndex] === oIndex 
                      ? showResults 
                        ? oIndex === question.correct 
                          ? 'bg-green-50 border-green-500 font-medium' 
                          : 'bg-red-50 border-red-500'
                        : 'bg-blue-50 border-blue-400'
                      : showResults && oIndex === question.correct
                        ? 'bg-green-50 border-green-400'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                >
                  {option}
                  {showResults && oIndex === question.correct && ' ✓'}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <button
        onClick={() => setShowResults(!showResults)}
        className="mt-4 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg 
          hover:bg-blue-700 transition-colors text-sm"
      >
        {showResults ? 'Hide answers' : 'Check answers'}
      </button>
      
      {showResults && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="font-medium text-gray-900">
            Score: {calculateScore()} out of {questions.length}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            {calculateScore() === questions.length ? 'Perfect score!' : 
             calculateScore() >= questions.length / 2 ? 'Good work.' : 
             'Keep practicing.'}
          </p>
        </div>
      )}
    </div>
  );
};
