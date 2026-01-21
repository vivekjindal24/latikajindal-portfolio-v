export const ERDiagram = () => (
  <div className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-lg my-8">
    <h3 className="text-xl font-bold mb-4 text-gray-800">📊 Entity-Relationship Diagram Example</h3>
    <svg viewBox="0 0 800 400" className="w-full h-auto">
      {/* Student Entity */}
      <rect x="50" y="150" width="150" height="100" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" rx="5" />
      <text x="125" y="180" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">STUDENT</text>
      <text x="125" y="205" textAnchor="middle" fill="white" fontSize="12">StudentID (PK)</text>
      <text x="125" y="225" textAnchor="middle" fill="white" fontSize="12">Name</text>
      <text x="125" y="245" textAnchor="middle" fill="white" fontSize="12">Email</text>
      
      {/* Course Entity */}
      <rect x="600" y="150" width="150" height="100" fill="#10b981" stroke="#059669" strokeWidth="2" rx="5" />
      <text x="675" y="180" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">COURSE</text>
      <text x="675" y="205" textAnchor="middle" fill="white" fontSize="12">CourseID (PK)</text>
      <text x="675" y="225" textAnchor="middle" fill="white" fontSize="12">CourseName</text>
      <text x="675" y="245" textAnchor="middle" fill="white" fontSize="12">Credits</text>
      
      {/* Enrollment Relationship */}
      <path d="M 200 200 L 600 200" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrowhead)" />
      <polygon points="595,196 595,204 605,200" fill="#f59e0b" id="arrowhead"/>
      <rect x="350" y="170" width="100" height="60" fill="#f59e0b" stroke="#d97706" strokeWidth="2" rx="30" />
      <text x="400" y="195" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">ENROLLS</text>
      <text x="400" y="215" textAnchor="middle" fill="white" fontSize="10">M:N</text>
      
      {/* Cardinality labels */}
      <text x="250" y="190" fill="#6b7280" fontSize="14" fontWeight="bold">M</text>
      <text x="550" y="190" fill="#6b7280" fontSize="14" fontWeight="bold">N</text>
    </svg>
    <p className="text-sm text-gray-600 mt-4 text-center">
      Many-to-Many Relationship: A student can enroll in many courses, and a course can have many students
    </p>
  </div>
);

export const ThreeSchemaArchitectureDiagram = () => (
  <div className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-lg my-8">
    <h3 className="text-xl font-bold mb-4 text-gray-800">🏛️ Three-Schema Architecture Diagram</h3>
    <svg viewBox="0 0 600 500" className="w-full h-auto">
      {/* External Level */}
      <rect x="50" y="50" width="500" height="80" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" rx="5" />
      <text x="300" y="85" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">EXTERNAL LEVEL (View Level)</text>
      <text x="300" y="110" textAnchor="middle" fill="white" fontSize="12">User Views: Student Portal, Faculty Dashboard</text>
      
      {/* Conceptual Level */}
      <rect x="50" y="180" width="500" height="80" fill="#10b981" stroke="#059669" strokeWidth="2" rx="5" />
      <text x="300" y="215" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">CONCEPTUAL LEVEL (Logical Level)</text>
      <text x="300" y="240" textAnchor="middle" fill="white" fontSize="12">Entire Database Schema: Tables, Relationships, Constraints</text>
      
      {/* Internal Level */}
      <rect x="50" y="310" width="500" height="80" fill="#f59e0b" stroke="#d97706" strokeWidth="2" rx="5" />
      <text x="300" y="345" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">INTERNAL LEVEL (Physical Level)</text>
      <text x="300" y="370" textAnchor="middle" fill="white" fontSize="12">Storage Details: Indexes, Files, Data Blocks</text>
      
      {/* Arrows */}
      <path d="M 300 130 L 300 180" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M 300 260 L 300 310" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
      
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280" />
        </marker>
      </defs>
      
      {/* Data Independence Labels */}
      <text x="570" y="140" fill="#dc2626" fontSize="12" fontWeight="bold">Logical</text>
      <text x="570" y="155" fill="#dc2626" fontSize="12" fontWeight="bold">Data</text>
      <text x="570" y="170" fill="#dc2626" fontSize="12" fontWeight="bold">Independence</text>
      
      <text x="570" y="270" fill="#dc2626" fontSize="12" fontWeight="bold">Physical</text>
      <text x="570" y="285" fill="#dc2626" fontSize="12" fontWeight="bold">Data</text>
      <text x="570" y="300" fill="#dc2626" fontSize="12" fontWeight="bold">Independence</text>
      
      {/* Storage representation */}
      <rect x="200" y="420" width="200" height="50" fill="#1f2937" stroke="#374151" strokeWidth="2" rx="3" />
      <text x="300" y="450" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">💾 Physical Storage (Disk)</text>
    </svg>
  </div>
);

export const NormalizationDiagram = () => (
  <div className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-lg my-8">
    <h3 className="text-xl font-bold mb-4 text-gray-800">🎯 Normalization Process Flow</h3>
    <svg viewBox="0 0 700 400" className="w-full h-auto">
      {/* Unnormalized */}
      <rect x="50" y="50" width="120" height="80" fill="#ef4444" stroke="#dc2626" strokeWidth="2" rx="5" />
      <text x="110" y="85" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Unnormalized</text>
      <text x="110" y="105" textAnchor="middle" fill="white" fontSize="10">Repeating</text>
      <text x="110" y="120" textAnchor="middle" fill="white" fontSize="10">Groups</text>
      
      {/* Arrow to 1NF */}
      <path d="M 170 90 L 230 90" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowBlack)" />
      <text x="200" y="80" textAnchor="middle" fill="#374151" fontSize="10">Remove</text>
      <text x="200" y="110" textAnchor="middle" fill="#374151" fontSize="10">Repeating</text>
      
      {/* 1NF */}
      <rect x="230" y="50" width="120" height="80" fill="#f97316" stroke="#ea580c" strokeWidth="2" rx="5" />
      <text x="290" y="85" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1NF</text>
      <text x="290" y="105" textAnchor="middle" fill="white" fontSize="10">Atomic</text>
      <text x="290" y="120" textAnchor="middle" fill="white" fontSize="10">Values</text>
      
      {/* Arrow to 2NF */}
      <path d="M 350 90 L 410 90" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowBlack)" />
      <text x="380" y="80" textAnchor="middle" fill="#374151" fontSize="10">Remove</text>
      <text x="380" y="110" textAnchor="middle" fill="#374151" fontSize="10">Partial Dep.</text>
      
      {/* 2NF */}
      <rect x="410" y="50" width="120" height="80" fill="#eab308" stroke="#ca8a04" strokeWidth="2" rx="5" />
      <text x="470" y="85" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">2NF</text>
      <text x="470" y="105" textAnchor="middle" fill="white" fontSize="10">No Partial</text>
      <text x="470" y="120" textAnchor="middle" fill="white" fontSize="10">Dependencies</text>
      
      {/* Arrow to 3NF */}
      <path d="M 470 130 L 470 190" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowBlack)" />
      <text x="500" y="165" fill="#374151" fontSize="10">Remove</text>
      <text x="500" y="180" fill="#374151" fontSize="10">Transitive Dep.</text>
      
      {/* 3NF */}
      <rect x="410" y="190" width="120" height="80" fill="#84cc16" stroke="#65a30d" strokeWidth="2" rx="5" />
      <text x="470" y="225" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">3NF</text>
      <text x="470" y="245" textAnchor="middle" fill="white" fontSize="10">No Transitive</text>
      <text x="470" y="260" textAnchor="middle" fill="white" fontSize="10">Dependencies</text>
      
      {/* Arrow to BCNF */}
      <path d="M 410 230 L 350 230" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowBlack)" />
      <text x="380" y="220" textAnchor="middle" fill="#374151" fontSize="10">Every Determinant</text>
      <text x="380" y="250" textAnchor="middle" fill="#374151" fontSize="10">= Candidate Key</text>
      
      {/* BCNF */}
      <rect x="230" y="190" width="120" height="80" fill="#10b981" stroke="#059669" strokeWidth="2" rx="5" />
      <text x="290" y="225" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">BCNF</text>
      <text x="290" y="245" textAnchor="middle" fill="white" fontSize="10">Strongest</text>
      <text x="290" y="260" textAnchor="middle" fill="white" fontSize="10">Normal Form</text>
      
      <defs>
        <marker id="arrowBlack" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#374151" />
        </marker>
      </defs>
      
      {/* Legend */}
      <text x="50" y="320" fill="#6b7280" fontSize="12" fontWeight="bold">Benefits of Normalization:</text>
      <text x="50" y="340" fill="#6b7280" fontSize="10">✓ Eliminates data redundancy</text>
      <text x="50" y="355" fill="#6b7280" fontSize="10">✓ Prevents update anomalies</text>
      <text x="50" y="370" fill="#6b7280" fontSize="10">✓ Improves data integrity</text>
      
      <text x="400" y="320" fill="#6b7280" fontSize="12" fontWeight="bold">Potential Trade-offs:</text>
      <text x="400" y="340" fill="#6b7280" fontSize="10">⚠ May require more joins</text>
      <text x="400" y="355" fill="#6b7280" fontSize="10">⚠ Slightly complex queries</text>
    </svg>
  </div>
);

export const TransactionStateDiagram = () => (
  <div className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-lg my-8">
    <h3 className="text-xl font-bold mb-4 text-gray-800">🔄 Transaction State Diagram</h3>
    <svg viewBox="0 0 700 400" className="w-full h-auto">
      {/* Active State */}
      <circle cx="100" cy="200" r="50" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
      <text x="100" y="205" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">ACTIVE</text>
      
      {/* Partially Committed */}
      <circle cx="300" cy="100" r="50" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
      <text x="300" y="100" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">PARTIALLY</text>
      <text x="300" y="115" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">COMMITTED</text>
      
      {/* Committed */}
      <circle cx="500" cy="100" r="50" fill="#10b981" stroke="#059669" strokeWidth="2" />
      <text x="500" y="105" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">COMMITTED</text>
      
      {/* Failed */}
      <circle cx="300" cy="300" r="50" fill="#ef4444" stroke="#dc2626" strokeWidth="2" />
      <text x="300" y="305" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">FAILED</text>
      
      {/* Aborted */}
      <circle cx="500" cy="300" r="50" fill="#6b7280" stroke="#374151" strokeWidth="2" />
      <text x="500" y="305" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">ABORTED</text>
      
      {/* Arrows */}
      <defs>
        <marker id="arrowTrans" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#374151" />
        </marker>
      </defs>
      
      {/* Active to Partially Committed */}
      <path d="M 140 170 L 270 120" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowTrans)" />
      <text x="200" y="140" fill="#374151" fontSize="10">Last statement</text>
      <text x="200" y="155" fill="#374151" fontSize="10">executed</text>
      
      {/* Partially Committed to Committed */}
      <path d="M 350 100 L 450 100" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowTrans)" />
      <text x="400" y="90" fill="#374151" fontSize="10">Success</text>
      
      {/* Active to Failed */}
      <path d="M 140 230 L 270 280" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowTrans)" />
      <text x="200" y="260" fill="#374151" fontSize="10">Error</text>
      
      {/* Partially Committed to Failed */}
      <path d="M 300 150 L 300 250" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowTrans)" />
      <text x="320" y="205" fill="#374151" fontSize="10">Error</text>
      
      {/* Failed to Aborted */}
      <path d="M 350 300 L 450 300" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowTrans)" />
      <text x="400" y="290" fill="#374151" fontSize="10">Rollback</text>
      
      {/* Legend */}
      <text x="50" y="370" fill="#6b7280" fontSize="10">✓ Green = Success Path</text>
      <text x="250" y="370" fill="#6b7280" fontSize="10">⚠ Orange = Processing</text>
      <text x="450" y="370" fill="#6b7280" fontSize="10">✗ Red = Failure Path</text>
    </svg>
  </div>
);

export const BTreeDiagram = () => (
  <div className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-lg my-8">
    <h3 className="text-xl font-bold mb-4 text-gray-800">🌳 B+ Tree Index Structure</h3>
    <svg viewBox="0 0 700 350" className="w-full h-auto">
      {/* Root Node */}
      <rect x="300" y="20" width="100" height="40" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" rx="3" />
      <text x="350" y="45" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">50</text>
      
      {/* Level 2 - Left */}
      <rect x="100" y="100" width="100" height="40" fill="#10b981" stroke="#059669" strokeWidth="2" rx="3" />
      <text x="150" y="125" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">20 | 35</text>
      
      {/* Level 2 - Right */}
      <rect x="500" y="100" width="100" height="40" fill="#10b981" stroke="#059669" strokeWidth="2" rx="3" />
      <text x="550" y="125" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">70 | 85</text>
      
      {/* Level 3 - Leaf Nodes */}
      <rect x="20" y="180" width="80" height="40" fill="#f59e0b" stroke="#d97706" strokeWidth="2" rx="3" />
      <text x="60" y="205" textAnchor="middle" fill="white" fontSize="10">10,15,18</text>
      
      <rect x="120" y="180" width="80" height="40" fill="#f59e0b" stroke="#d97706" strokeWidth="2" rx="3" />
      <text x="160" y="205" textAnchor="middle" fill="white" fontSize="10">20,25,30</text>
      
      <rect x="220" y="180" width="80" height="40" fill="#f59e0b" stroke="#d97706" strokeWidth="2" rx="3" />
      <text x="260" y="205" textAnchor="middle" fill="white" fontSize="10">35,40,45</text>
      
      <rect x="420" y="180" width="80" height="40" fill="#f59e0b" stroke="#d97706" strokeWidth="2" rx="3" />
      <text x="460" y="205" textAnchor="middle" fill="white" fontSize="10">50,55,60</text>
      
      <rect x="520" y="180" width="80" height="40" fill="#f59e0b" stroke="#d97706" strokeWidth="2" rx="3" />
      <text x="560" y="205" textAnchor="middle" fill="white" fontSize="10">70,75,80</text>
      
      <rect x="620" y="180" width="80" height="40" fill="#f59e0b" stroke="#d97706" strokeWidth="2" rx="3" />
      <text x="660" y="205" textAnchor="middle" fill="white" fontSize="10">85,90,95</text>
      
      {/* Arrows from Root */}
      <path d="M 330 60 L 150 100" stroke="#374151" strokeWidth="1.5" />
      <path d="M 370 60 L 550 100" stroke="#374151" strokeWidth="1.5" />
      
      {/* Arrows from Level 2 Left */}
      <path d="M 120 140 L 60 180" stroke="#374151" strokeWidth="1.5" />
      <path d="M 150 140 L 160 180" stroke="#374151" strokeWidth="1.5" />
      <path d="M 180 140 L 260 180" stroke="#374151" strokeWidth="1.5" />
      
      {/* Arrows from Level 2 Right */}
      <path d="M 520 140 L 460 180" stroke="#374151" strokeWidth="1.5" />
      <path d="M 550 140 L 560 180" stroke="#374151" strokeWidth="1.5" />
      <path d="M 580 140 L 660 180" stroke="#374151" strokeWidth="1.5" />
      
      {/* Horizontal links between leaf nodes */}
      <path d="M 100 200 L 120 200" stroke="#dc2626" strokeWidth="2" strokeDasharray="3" />
      <path d="M 200 200 L 220 200" stroke="#dc2626" strokeWidth="2" strokeDasharray="3" />
      <path d="M 300 200 L 420 200" stroke="#dc2626" strokeWidth="2" strokeDasharray="3" />
      <path d="M 500 200 L 520 200" stroke="#dc2626" strokeWidth="2" strokeDasharray="3" />
      <path d="M 600 200 L 620 200" stroke="#dc2626" strokeWidth="2" strokeDasharray="3" />
      
      {/* Labels */}
      <text x="350" y="280" textAnchor="middle" fill="#6b7280" fontSize="12" fontWeight="bold">Leaf Level (Actual Data/Pointers)</text>
      <text x="350" y="300" textAnchor="middle" fill="#dc2626" fontSize="10">← Sequential Links for Range Queries →</text>
      
      <text x="50" y="330" fill="#6b7280" fontSize="10">✓ Balanced height</text>
      <text x="250" y="330" fill="#6b7280" fontSize="10">✓ Fast search O(log n)</text>
      <text x="450" y="330" fill="#6b7280" fontSize="10">✓ Efficient range queries</text>
    </svg>
  </div>
);
