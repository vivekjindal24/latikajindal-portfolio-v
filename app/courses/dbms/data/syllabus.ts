export interface CLO {
  id: string;
  description: string;
}

export interface CO {
  id: string;
  description: string;
}

export interface Topic {
  id: string;
  title: string;
  subtopics?: string[];
  clos: string[];
  cos: string[];
  content: {
    introduction: string;
    concept: string;
    technicalDepth: string;
    examples: string;
    practical: string;
    exam: string;
    takeaways: string;
  };
}

export interface Unit {
  id: string;
  title: string;
  topics: Topic[];
}

export const clos: CLO[] = [
  { id: "CLO01", description: "Have a broad understanding of database concepts and database management system software" },
  { id: "CLO02", description: "Have a high-level understanding of major DBMS components and their function" },
  { id: "CLO03", description: "Be able to model an application's data requirements using conceptual modelling tools like ER diagrams and design database schemas based on the conceptual model." },
  { id: "CLO04", description: "Be able to write SQL commands to create tables and indexes, insert/update/delete data, and query data in a relational DBMS." },
  { id: "CLO05", description: "Be able to program a data-intensive application using DBMS APIs." },
];

export const cos: CO[] = [
  { id: "CO01", description: "Define core database concepts including data, information, database management systems, and transaction management systems." },
  { id: "CO02", description: "Explain fundamental database system principles, including distinctions among data, information, databases, and DBMS; DBMS architecture and components; data independence; database design constraints; normalization foundations; and query processing concepts." },
  { id: "CO03", description: "Apply database modeling and implementation techniques by designing conceptual and logical data models (ER diagrams and relational schemas), utilizing appropriate database models, and implementing database solutions using SQL and advanced PL/SQL constructs." },
  { id: "CO04", description: "Analyze database design quality and integrity by identifying dependencies, applying normalization strategies, and validating schemas using standard normal forms and design principles." },
  { id: "CO05", description: "Analyze database performance and reliability mechanisms, including transaction management, concurrency control, recovery, serializability, query processing strategies, indexing techniques, and advanced database." },
];

export const units: Unit[] = [
  {
    id: "unit-1",
    title: "UNIT I: Basic Concepts",
    topics: [
      {
        id: "data-vs-info",
        title: "Data Vs Information and Database Fundamentals",
        subtopics: ["Data Vs Information", "Definition of Database", "Advantages of Database Systems"],
        clos: ["CLO01"],
        cos: ["CO01"],
        content: {
          introduction: "Database systems form the backbone of modern information management, handling everything from banking transactions to social media interactions. Understanding the fundamental distinction between data and information is crucial. Data represents raw, unprocessed facts and figures, while information is processed, organized data that provides meaning and context for decision-making.",
          concept: "A database is a collection of related data organized to serve multiple applications efficiently. Data represents recordable facts with implicit meaning, such as names, addresses, and balances. A DBMS serves as an interface between the database and end users or application programs.\n\n### Data vs Information (Quick Comparison)\n\n| Data | Information |\n|---|---|\n| Raw facts and figures | Processed, organized, and meaningful output |\n| May be unorganized (numbers, symbols, text) | Interpretable and useful for decision-making |\n| Input to a system | Output of processing |\n| Example: 95, 88, 76 | Example: Average = 86.33, Grade = A |\n| By itself may not add value | Adds value and context |\n\n### Key Characteristics of the Database Approach\n\n1. Self-describing nature: Database contains not only data but also metadata (data about data) in the system catalog\n\n2. Insulation between programs and data: Program-data independence allows changing data structure without modifying programs\n\n3. Support for multiple views: Different users can have different perspectives of the same data\n\n4. Sharing of data and multiuser transaction processing: Multiple users can access database simultaneously while maintaining consistency\n\n![Advantages of DBMS](/images/unit1/Advantages%20of%20DBMS.png)\n\n### Advantages of Using a DBMS\n- Controlling redundancy: Eliminates duplicate data storage\n- Restricting unauthorized access: Security and authorization mechanisms\n- Providing persistent storage: Data outlives programs that create it\n- Providing backup and recovery: Protection against hardware/software failures\n- Enforcing integrity constraints: Rules to maintain data accuracy\n- Permitting inference and actions using rules: Database triggers and stored procedures\n\n![Drawbacks of File Systems](/images/unit1/Drawbacks%20of%20using%20file%20systems%20to%20store%20data.png)\n\n### Disadvantages of File-Based Systems\nThe file-based approach suffers from data redundancy, inconsistency, difficulty in accessing data, data isolation, integrity problems, atomicity issues, concurrent access anomalies, and security problems — all of which are addressed by a DBMS.",
          technicalDepth: "A Database Management System (DBMS) is a collection of interrelated data and a set of programs to access that data, providing a convenient and efficient way to store and retrieve database information.\n\n### Fundamental DBMS Characteristics:\n\n1. **Self-Describing Nature**:\n   - Database contains metadata in system catalog\n   - Data dictionary stores structure information\n   - Schema definitions accessible through DBMS\n\n2. **Program-Data Independence**:\n   - Physical data independence: Change storage without affecting programs\n   - Logical data independence: Change logical structure with minimal impact\n\n3. **Multiple Views Support**:\n   - Different users see different perspectives\n   - Views provide security and customization\n   - External schemas tailored to user needs\n\n4. **Concurrent Access Control**:\n   - Multiple users access simultaneously\n   - Transaction management ensures consistency\n   - Locking mechanisms prevent conflicts\n\n### Data vs Information - Technical Perspective:\n\n**Data Characteristics**:\n- Atomic, raw facts\n- Context-independent\n- Not immediately useful\n- Requires processing\n\n**Information Characteristics**:\n- Contextual and meaningful\n- Processed and organized\n- Supports decision-making\n- Adds value to users\n\n### DBMS Advantages - Deep Dive:\n\n1. **Redundancy Control**:\n   - Centralized storage\n   - Normalization techniques\n   - Reference integrity\n\n2. **Data Consistency**:\n   - Single source of truth\n   - Update propagation\n   - Constraint enforcement\n\n3. **Data Sharing**:\n   - Multi-user access\n   - Concurrent transactions\n   - Access control mechanisms\n\n4. **Data Integrity**:\n   - Entity integrity (primary keys)\n   - Referential integrity (foreign keys)\n   - Domain constraints\n   - Business rules enforcement\n\n5. **Security**:\n   - Authentication mechanisms\n   - Authorization levels\n   - Encryption support\n   - Audit trails\n\n6. **Backup and Recovery**:\n   - Automatic backup procedures\n   - Transaction logs\n   - Point-in-time recovery\n   - Disaster recovery planning",
          examples: "EXAMPLE 1: DATA VS INFORMATION\n\nRaw Data:\n95, 88, 76, 92, 85\n\nProcessed Information:\n- Average Score: 87.2\n- Highest Score: 95\n- Lowest Score: 76\n- Grade Distribution: 2 A's, 3 B's\n- Pass Rate: 100%\n\nEXAMPLE 2: FILE SYSTEM VS DBMS\n\nFile System Approach (Problems):\n- Student data in students.txt\n- Course data in courses.txt\n- Enrollment data in enrollment.txt\nProblems:\n- Data redundancy (student name repeated)\n- Update anomalies (change address in multiple files)\n- No integrity checks (enroll in non-existent course)\n- Concurrent access issues (two users update simultaneously)\n\nDBMS Approach (Solutions):\n- Normalized tables (Students, Courses, Enrollments)\n- Foreign key relationships\n- Integrity constraints\n- Transaction management\n- Concurrent access control\n\nEXAMPLE 3: ADVANTAGES IN ACTION\n\nScenario: University Database\n\n**Redundancy Control**:\nBefore DBMS: Student name stored in every enrollment record\nWith DBMS: Student name stored once, referenced by ID\n\n**Data Consistency**:\nBefore: Update student email in 10 different files\nWith DBMS: Update once in Students table, reflected everywhere\n\n**Concurrent Access**:\nBefore: File locking prevents multiple users\nWith DBMS: Thousands of concurrent transactions\n\n**Security**:\nBefore: File permissions only\nWith DBMS: Role-based access, column-level security\n\n**Backup & Recovery**:\nBefore: Manual file backups\nWith DBMS: Automatic incremental backups, point-in-time recovery\n\nEXAMPLE 4: REAL-WORLD APPLICATIONS\n\n1. **Banking System**:\n   - Data: Account numbers, balances, transaction amounts\n   - Information: Monthly statements, spending analysis, fraud alerts\n   - DBMS Benefits: ACID transactions, concurrent access, security\n\n2. **E-Commerce Platform**:\n   - Data: Product IDs, prices, stock quantities\n   - Information: Sales reports, inventory forecasts, customer preferences\n   - DBMS Benefits: Real-time inventory, order processing, personalization\n\n3. **Healthcare System**:\n   - Data: Patient IDs, test results, medications\n   - Information: Medical history, treatment plans, health trends\n   - DBMS Benefits: Data privacy, audit trails, integration across departments",
          practical: "PRACTICAL IMPLEMENTATION:\n\n1. **Choosing a DBMS**:\n   - Small projects: SQLite (embedded, no server)\n   - Web applications: PostgreSQL, MySQL\n   - Enterprise: Oracle, SQL Server\n   - Cloud: AWS RDS, Azure SQL, Google Cloud SQL\n\n2. **Basic DBMS Setup (MySQL Example)**:\n\n```bash\n# Install MySQL\nsudo apt-get install mysql-server\n\n# Secure installation\nsudo mysql_secure_installation\n\n# Connect to MySQL\nmysql -u root -p\n```\n\n3. **Creating a Simple Database**:\n\n```sql\n-- Create database\nCREATE DATABASE UniversityDB;\nUSE UniversityDB;\n\n-- Create table with constraints\nCREATE TABLE Students (\n    StudentID INT PRIMARY KEY AUTO_INCREMENT,\n    Name VARCHAR(100) NOT NULL,\n    Email VARCHAR(100) UNIQUE,\n    Major VARCHAR(50),\n    EnrollmentDate DATE DEFAULT CURRENT_DATE\n);\n\n-- Insert data\nINSERT INTO Students (Name, Email, Major)\nVALUES ('John Doe', 'john@example.com', 'Computer Science');\n\n-- Query information\nSELECT Name, Major, YEAR(EnrollmentDate) as Year\nFROM Students\nWHERE Major = 'Computer Science';\n```\n\n4. **Demonstrating DBMS Advantages**:\n\n```sql\n-- Redundancy Control: Use foreign keys instead of duplicating data\nCREATE TABLE Enrollment (\n    EnrollmentID INT PRIMARY KEY,\n    StudentID INT,\n    CourseID INT,\n    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),\n    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)\n);\n\n-- Data Integrity: Constraints ensure valid data\nALTER TABLE Students\nADD CONSTRAINT chk_email CHECK (Email LIKE '%@%.%');\n\n-- Security: Grant specific permissions\nCREATE USER 'student_user'@'localhost' IDENTIFIED BY 'password';\nGRANT SELECT ON UniversityDB.Students TO 'student_user'@'localhost';\n\n-- Concurrent Access: Transactions ensure consistency\nBEGIN TRANSACTION;\n    UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1;\n    UPDATE Accounts SET Balance = Balance + 100 WHERE AccountID = 2;\nCOMMIT;\n```\n\n5. **Industry Best Practices**:\n   - Always use parameterized queries (prevent SQL injection)\n   - Implement proper backup strategies\n   - Monitor database performance regularly\n   - Use connection pooling for web applications\n   - Follow normalization principles\n   - Document database schema and relationships\n\n6. **Career Relevance**:\n   - Database Administrator (DBA): Manages database systems\n   - Data Engineer: Designs and builds data pipelines\n   - Backend Developer: Implements database interactions\n   - Data Analyst: Extracts insights from databases\n   - Database Architect: Designs enterprise database solutions",
          exam: "IMPORTANT EXAM QUESTIONS:\n\n1. **Define and distinguish between Data and Information with examples.**\n   Answer: Data is raw facts (95, 88, 76), Information is processed data with meaning (Average = 86.33, Grade = A)\n\n2. **What is a Database? List and explain the main characteristics of the database approach.**\n   Key points: Self-describing nature, program-data independence, multiple views, data sharing, multiuser transactions\n\n3. **List and explain at least 5 advantages of using a DBMS over file systems.**\n   Points: Redundancy control, restricted unauthorized access, persistent storage, backup/recovery, integrity constraints, data sharing\n\n4. **What are the disadvantages of file-based systems that led to development of database systems?**\n   Points: Data redundancy, inconsistency, difficulty in access, data isolation, integrity problems, atomicity issues, concurrent access anomalies, security problems\n\n5. **Explain the concept of data independence. Why is it important?**\n   Answer: Ability to change schema at one level without affecting other levels. Important for system maintenance and evolution.\n\n6. **How does a DBMS control redundancy? Why is this important?**\n   Answer: Centralized storage with references (foreign keys), normalization. Prevents update anomalies and saves storage space.\n\n7. **Explain how DBMS provides security and integrity.**\n   Security: Authentication, authorization, encryption\n   Integrity: Entity integrity, referential integrity, domain constraints\n\n8. **What is metadata? Why is it important in a database?**\n   Answer: Data about data stored in system catalog. Enables self-describing nature of databases.\n\n9. **Give real-world examples where DBMS advantages are critical.**\n   Examples: Banking (concurrent transactions), Healthcare (security and integrity), E-commerce (data consistency)\n\n10. **Compare traditional file processing with database approach in a table format.**\n\nQUICK REVISION POINTS:\n• Data = Raw facts; Information = Processed data with meaning\n• Database = Organized collection of related data\n• DBMS = Software to manage database\n• Main advantages: Redundancy control, data integrity, security, concurrent access, backup/recovery\n• File systems lack: Integrity checks, concurrent control, security, recovery mechanisms",
          takeaways: "KEY TAKEAWAYS:\n\n✓ Data is raw, unprocessed facts; Information is processed data with context and meaning\n\n✓ A database is a collection of related data organized for efficient access and management\n\n✓ DBMS provides: data independence, controlled redundancy, concurrent access, security, integrity\n\n✓ File-based systems suffer from: redundancy, inconsistency, lack of integrity, poor concurrent access\n\n✓ Self-describing nature: Database contains both data and metadata (data about data)\n\n✓ Program-data independence allows changing storage/structure without affecting applications\n\n✓ Multiple views enable different users to see different perspectives of same data\n\n✓ Concurrent access control allows multiple users to work simultaneously while maintaining consistency\n\n✓ Integrity constraints ensure data accuracy: entity integrity, referential integrity, domain constraints\n\n✓ Security mechanisms: authentication, authorization, encryption, audit trails\n\n✓ Backup and recovery features protect against data loss from failures\n\n✓ Real-world applications: Banking, healthcare, e-commerce, education all depend on DBMS\n\n✓ Career opportunities: DBA, Data Engineer, Backend Developer, Data Analyst\n\nREMEMBER: The evolution from file systems to DBMS represents a fundamental shift toward centralized, controlled, secure, and efficient data management that enables modern digital applications."
        }
      },
      {
        id: "dbms-components",
        title: "Components of DBMS and Architecture",
        subtopics: ["DBMS Components", "DBMS Architecture", "Data Independence"],
        clos: ["CLO02"],
        cos: ["CO02"],
        content: {
          introduction: "Database architecture defines how a database is structured, stored, managed, and accessed. The architecture provides different views to different users and handles the complexity of physical storage while presenting a simple logical view. Understanding this layered architecture and the components of DBMS is fundamental to designing scalable, maintainable database systems.",
          concept: "A database system is divided into modules that deal with different responsibilities. The overall system structure consists of various components that interact to provide the database services.\n\n### Three-Schema Architecture (ANSI-SPARC)\n\n![Three Level Schema Architecture](/images/unit1/Three%20level%20schema%20architecture%20of%20database.png)\n\n![Levels of Abstraction](/images/unit1/levels%20of%20abstraction.png)\n\nThe three-schema architecture separates user applications from the physical database through three levels of abstraction:\n\n1. EXTERNAL LEVEL (View Level):\n   • Highest level of abstraction\n   • Describes WHAT data is seen by individual users\n   • Multiple external schemas (views) exist\n   • Each view describes the portion of database relevant to a particular user group\n\n2. CONCEPTUAL LEVEL (Logical Level):\n   • Community view of the database\n   • Describes WHAT data is stored and relationships among data\n   • Single conceptual schema for entire database\n   • Focus on entities, data types, relationships, constraints\n\n3. INTERNAL LEVEL (Physical Level):\n   • Lowest level of abstraction\n   • Describes HOW data is physically stored\n   • Deals with: Storage structures, indexes, access paths, file organization\n\n### Data Independence\n\nThe capacity to change schema at one level without affecting schema at the next higher level.\n\n1. LOGICAL DATA INDEPENDENCE:\n   • Ability to change conceptual schema without changing external schemas\n   • Example: Adding a new table doesn't affect existing views\n\n2. PHYSICAL DATA INDEPENDENCE:\n   • Ability to change internal schema without changing conceptual schema\n   • Example: Creating an index doesn't affect queries",
          technicalDepth: "### DBMS COMPONENTS:\n\n![Architecture of DBMS](/images/unit1/Architecture%20of%20%20Database%20Management%20System.jpg)\n\n![DBMS Architecture](/images/unit1/DBMS%20Architecture%20%28Centralized%3AShared-Memory%29.svg)\n\n1. **STORAGE MANAGER**:\n   • Interface between low-level data and application programs\n   • Translates DML statements to low-level file-system commands\n   • Responsible for: Storing, retrieving, updating data\n   \n   Components:\n   • Authorization and Integrity Manager\n   • Transaction Manager\n   • File Manager\n   • Buffer Manager\n\n2. **QUERY PROCESSOR**:\n   • Simplifies and facilitates data access\n   \n   Components:\n   • DDL Interpreter: Interprets DDL statements\n   • DML Compiler: Translates DML to query evaluation plan\n   • Query Optimizer: Chooses lowest-cost evaluation plan\n   • Query Evaluation Engine: Executes query plan\n\n3. **DATABASE USERS**:\n\n![Database Users](/images/unit1/Database%20users.svg)\n\n![Query Processing](/images/unit1/query%20processing.png)\n\n   A. Naive Users: Invoke application programs (ATM users, airline booking)\n   B. Application Programmers: Write application programs using DML\n   C. Sophisticated Users: Use query tools, don't write programs (analysts)\n   D. Database Administrator (DBA): Central control over system\n\n4. **DBA RESPONSIBILITIES**:\n   • Schema definition\n   • Storage structure and access method definition\n   • Schema and physical organization modification\n   • Granting authorization for data access\n   • Routine maintenance: Backups, performance monitoring, security\n\n### CLIENT-SERVER ARCHITECTURE:\n\nTwo-Tier Architecture:\n• Client: Application program, user interface\n• Server: Database system (query processing, transaction management)\n• Communication via database protocols (ODBC, JDBC)\n\nThree-Tier Architecture:\n• Client: Presentation layer (browser, mobile app)\n• Application Server: Business logic layer (web server, API)\n• Database Server: Data layer\n• Benefits: Scalability, maintainability, security",
          examples: "EXAMPLE 1: THREE-SCHEMA ARCHITECTURE IN ACTION\n\nPhysical Level (Internal):\n- Students table stored as heap file\n- B-tree index on StudentID\n- Data blocks of 8KB size\n\nLogical Level (Conceptual):\nCREATE TABLE Students (\n    StudentID INT PRIMARY KEY,\n    Name VARCHAR(100),\n    Email VARCHAR(100),\n    DepartmentID INT\n);\n\nView Level (External):\n-- View for admissions office\nCREATE VIEW AdmissionView AS\nSELECT StudentID, Name, Email\nFROM Students;\n\n-- View for academic department\nCREATE VIEW DepartmentView AS\nSELECT S.Name, S.Email, D.DepartmentName\nFROM Students S\nJOIN Departments D ON S.DepartmentID = D.DepartmentID;\n\nEXAMPLE 2: DATA INDEPENDENCE\n\nPhysical Independence:\n-- Original: No index\nSELECT * FROM Students WHERE LastName = 'Smith';\n-- Slow: Full table scan\n\n-- DBA creates index (physical level change)\nCREATE INDEX idx_lastname ON Students(LastName);\n\n-- Same query, now fast!\nSELECT * FROM Students WHERE LastName = 'Smith';\n-- Application code unchanged, but performance improved!\n\nLogical Independence:\n-- DBA adds new column (conceptual level change)\nALTER TABLE Students ADD COLUMN MiddleName VARCHAR(50);\n\n-- Existing view still works\nSELECT * FROM AdmissionView;\n-- Returns same columns as before, application unaffected\n\nEXAMPLE 3: DBMS COMPONENTS IN ACTION\n\nUser Query:\nSELECT Name FROM Students WHERE GPA > 3.5;\n\nProcessing Flow:\n1. DML Compiler: Parses query, checks syntax\n2. Query Optimizer: Chooses execution plan\n   - Option A: Full table scan\n   - Option B: Use index on GPA\n   - Chooses B (lower cost)\n3. Query Evaluation Engine: Executes plan\n4. Buffer Manager: Fetches required pages into memory\n5. File Manager: Reads data from disk\n6. Result: Returns matching records\n\nEXAMPLE 4: THREE-TIER WEB APPLICATION\n\nPresentation Tier (Frontend):\n  • React/Angular application\n  • Displays student list\n  • User clicks \"View Details\"\n\nApplication Tier (Backend):\n  • Node.js server receives request\n  • Validates user permissions\n  • Queries database\n  • Formats response as JSON\n\nDatabase Tier:\n  • MySQL database\n  • Executes: SELECT * FROM Students WHERE StudentID = ?\n  • Returns data to application tier",
          practical: "IMPLEMENTING DBMS ARCHITECTURE:\n\n1. **Setting Up Three-Tier Application**:\n\n```javascript\n// Application Tier (Node.js + Express)\nconst express = require('express');\nconst mysql = require('mysql2/promise');\n\nconst app = express();\n\n// Create connection pool (efficient connection management)\nconst pool = mysql.createPool({\n  host: 'localhost',\n  user: 'app_user',\n  password: 'password',\n  database: 'UniversityDB',\n  waitForConnections: true,\n  connectionLimit: 10\n});\n\n// API endpoint\napp.get('/api/students/:id', async (req, res) => {\n  try {\n    const [rows] = await pool.query(\n      'SELECT * FROM Students WHERE StudentID = ?',\n      [req.params.id]\n    );\n    res.json(rows[0]);\n  } catch (error) {\n    res.status(500).json({ error: 'Database error' });\n  }\n});\n\napp.listen(3000);\n```\n\n2. **Implementing Views (External Level)**:\n\n```sql\n-- Public view: Hide sensitive data\nCREATE VIEW PublicStudentInfo AS\nSELECT StudentID, Name, Major\nFROM Students;\n-- Email, SSN hidden\n\n-- Department view: Show department-specific data\nCREATE VIEW CSStudents AS\nSELECT StudentID, Name, GPA\nFROM Students\nWHERE Major = 'Computer Science';\n\n-- Grant permissions on views\nGRANT SELECT ON PublicStudentInfo TO public_user;\nGRANT SELECT ON CSStudents TO cs_department;\n```\n\n3. **Physical Independence Example**:\n\n```sql\n-- Application uses this query\nSELECT * FROM Orders WHERE OrderDate BETWEEN '2024-01-01' AND '2024-12-31';\n\n-- DBA optimizes physical storage (no application changes needed)\nCREATE INDEX idx_order_date ON Orders(OrderDate);\n-- Or partition table by year\nCREATE TABLE Orders_2024 PARTITION OF Orders\nFOR VALUES FROM ('2024-01-01') TO ('2024-12-31');\n```\n\n4. **DBA Daily Tasks**:\n\n```bash\n# Monitor database performance\nmysqladmin -u root -p processlist\n\n# Check slow queries\nmysql -u root -p -e \"SELECT * FROM mysql.slow_log;\"\n\n# Backup database\nmysqldump -u root -p UniversityDB > backup_$(date +%Y%m%d).sql\n\n# Monitor disk space\ndf -h /var/lib/mysql\n\n# Analyze table for optimization\nmysql -u root -p -e \"ANALYZE TABLE Students;\"\n```\n\n5. **Best Practices**:\n   - Use connection pooling (don't create connection per request)\n   - Implement views for security and simplification\n   - Create indexes on frequently queried columns\n   - Separate read-only users from write users\n   - Monitor query performance regularly\n   - Document schema changes\n   - Test backup and recovery procedures",
          exam: "IMPORTANT EXAM QUESTIONS:\n\n1. **Explain the three-schema architecture of DBMS with a neat diagram.**\n   Answer: External (views), Conceptual (logical schema), Internal (physical storage). Draw diagram showing mappings.\n\n2. **What is data independence? Distinguish between logical and physical data independence with examples.**\n   - Physical: Change index, file organization without affecting applications\n   - Logical: Change schema without affecting views\n\n3. **List and explain the major components of a DBMS.**\n   Components: Storage Manager, Query Processor, Transaction Manager, Buffer Manager, File Manager\n\n4. **What are the responsibilities of a Database Administrator (DBA)?**\n   Schema definition, access control, backup/recovery, performance tuning, security management\n\n5. **Explain client-server and three-tier database architectures with diagrams.**\n   Two-tier: Client ↔ Database\n   Three-tier: Client ↔ Application Server ↔ Database\n\n6. **How does the query processor work? Explain its components.**\n   DDL Interpreter, DML Compiler, Query Optimizer, Query Evaluation Engine\n\n7. **Describe the different types of database users.**\n   Naive users, Application programmers, Sophisticated users, DBA\n\n8. **What is the role of the buffer manager in DBMS?**\n   Manages memory cache, replacement policies, pin/unpin pages\n\n9. **Explain how mappings between schema levels enable data independence.**\n   External/Conceptual mapping and Conceptual/Internal mapping allow changes at one level without affecting others\n\n10. **Why is three-tier architecture preferred for web applications?**\n    Scalability, maintainability, security, separation of concerns\n\nQUICK REVISION:\n• External Level = User Views\n• Conceptual Level = Logical Schema\n• Internal Level = Physical Storage\n• Physical Independence = Change storage without affecting logic\n• Logical Independence = Change schema without affecting views\n• DBA = Central manager of database system\n• Three-tier = Client, Application Server, Database",
          takeaways: "KEY TAKEAWAYS:\n\n✓ Three-Schema Architecture: External (views), Conceptual (logical), Internal (physical)\n\n✓ Data independence allows changes at one level without affecting other levels\n\n✓ Physical data independence: Change storage details without affecting applications\n\n✓ Logical data independence: Change logical schema with minimal impact on views\n\n✓ DBMS Components: Storage Manager, Query Processor, Transaction Manager, Buffer Manager\n\n✓ Query processing: Parse → Optimize → Execute\n\n✓ Database users: Naive users, Application programmers, Sophisticated users, DBA\n\n✓ DBA responsibilities: Schema management, security, backup, performance tuning\n\n✓ Three-tier architecture: Presentation, Application, Database tiers\n\n✓ Benefits of architecture: Scalability, maintainability, security, flexibility\n\n✓ Views provide security by hiding sensitive data and simplifying complex schemas\n\n✓ Buffer manager improves performance by caching frequently accessed data in memory\n\nREMEMBER: The layered architecture and data independence are what make modern databases flexible, maintainable, and able to evolve with changing requirements without requiring application rewrites!"
        }
      },
      {
        id: "data-modeling",
        title: "Data Modelling and Entity Relationship Model",
        subtopics: ["Data Modelling", "Entity Relationship Model", "ER Diagrams"],
        clos: ["CLO03"],
        cos: ["CO03"],
        content: {
          introduction: "Data modeling is the process of creating a visual representation of an information system to communicate the relationships between different data elements. The Entity-Relationship (ER) model is the most widely used conceptual data modeling technique, providing a graphical representation that is easy to understand and communicate with stakeholders.",
          concept: "A data model is a collection of concepts for describing data, relationships between data, and constraints on data.\n\n### Three Components of Data Models:\n\n1. **Structure part**: Rules that define how databases can be constructed (tables/records/objects)\n2. **Manipulative part**: Operations allowed on data (queries and updates)\n3. **Integrity rules**: Constraints that keep data accurate and consistent\n\n### Entity-Relationship (ER) Model:\n\nThe ER model is a conceptual data model that provides a graphical representation of database structure.\n\n**ER Building Blocks:**\n- **Entity**: Real-world object (Student, Course, Account)\n- **Attribute**: Property of an entity (StudentID, Name, Age)\n- **Relationship**: Association between entities (Student ENROLLS Course)\n\n![ER Symbols](/images/unit2/ER%20data%20model%20symbol%20table.png)\n\n**Entity Types:**\n- **Strong Entity**: Has its own key attribute\n- **Weak Entity**: Depends on another entity for identification\n\n**Attribute Types:**\n- Simple vs Composite\n- Single-valued vs Multi-valued\n- Stored vs Derived\n\n**Relationship Types:**\n- One-to-One (1:1)\n- One-to-Many (1:N)\n- Many-to-Many (M:N)\n\n![Cardinality Examples](/images/unit2/er-cardinality-examples.svg)\n\n![Banking ER Example](/images/unit2/E-R%20diagram%20for%20the%20Banking%20Enterprise.png)",
          technicalDepth: "### DETAILED ER MODEL CONCEPTS:\n\n**1. Entities and Entity Sets:**\n\nAn entity is a \"thing\" or \"object\" in the real world that is distinguishable from other objects.\n- Example: A particular student, a specific course\n\nAn entity set is a collection of entities of the same type.\n- Example: All students, all courses\n\n**Strong Entity:**\n- Has a primary key\n- Can exist independently\n- Represented by single rectangle\n\n**Weak Entity:**\n- Does not have a primary key\n- Depends on another entity (owner/identifying entity)\n- Represented by double rectangle\n- Example: Order_Item depends on Order\n\n**2. Attributes:**\n\n**Simple Attribute:**\n- Cannot be divided further\n- Example: StudentID, Age\n\n**Composite Attribute:**\n- Can be divided into smaller parts\n- Example: Name (FirstName, LastName), Address (Street, City, State, Zip)\n\n**Single-valued Attribute:**\n- Has one value for each entity\n- Example: DateOfBirth\n\n**Multi-valued Attribute:**\n- Can have multiple values\n- Represented by double oval\n- Example: PhoneNumbers, Emails\n\n**Stored Attribute:**\n- Physically stored in database\n- Example: DateOfBirth\n\n**Derived Attribute:**\n- Calculated from other attributes\n- Represented by dashed oval\n- Example: Age (derived from DateOfBirth)\n\n**3. Relationships:**\n\nA relationship is an association among entities.\n\n**Degree of Relationship:**\n- Unary (Recursive): One entity set (Employee manages Employee)\n- Binary: Two entity sets (Student enrolls Course)\n- Ternary: Three entity sets (Doctor treats Patient at Hospital)\n\n**Cardinality Ratios:**\n\n**One-to-One (1:1):**\n- Each entity in A relates to at most one entity in B, and vice versa\n- Example: Person has Passport\n\n**One-to-Many (1:N):**\n- Each entity in A can relate to many entities in B\n- Each entity in B relates to at most one entity in A\n- Example: Department has many Employees\n\n**Many-to-Many (M:N):**\n- Each entity in A can relate to many entities in B\n- Each entity in B can relate to many entities in A\n- Example: Student enrolls in many Courses, Course has many Students\n\n**Participation Constraints:**\n\n**Total Participation (Mandatory):**\n- Every entity must participate in relationship\n- Represented by double line\n- Example: Every Employee must work in a Department\n\n**Partial Participation (Optional):**\n- Some entities may not participate\n- Represented by single line\n- Example: Not all Employees manage a Department\n\n**4. Keys in ER Model:**\n\n**Super Key:** Set of attributes that uniquely identifies an entity\n**Candidate Key:** Minimal super key\n**Primary Key:** Selected candidate key\n**Foreign Key:** References primary key in another entity\n\n**5. Extended ER Features:**\n\n**Generalization:**\n- Bottom-up process\n- Combine similar entities into higher-level entity\n- Example: Employee, Customer → Person\n\n**Specialization:**\n- Top-down process\n- Divide entity into specialized sub-entities\n- Example: Employee → Manager, Engineer, Clerk\n\n**Inheritance:**\n- Sub-entities inherit attributes from super-entity\n\n**Disjoint vs Overlapping:**\n- Disjoint: Entity belongs to at most one sub-entity\n- Overlapping: Entity can belong to multiple sub-entities",
          examples: "EXAMPLE 1: UNIVERSITY ER DIAGRAM\n\nEntities:\n- STUDENT (StudentID, Name, Email, Major)\n- COURSE (CourseID, CourseName, Credits)\n- INSTRUCTOR (InstructorID, Name, Department)\n- DEPARTMENT (DeptID, DeptName, Building)\n\nRelationships:\n- ENROLLS: Student M:N Course\n  Attributes: Semester, Grade\n- TEACHES: Instructor 1:N Course\n- BELONGS_TO: Student N:1 Department\n- WORKS_IN: Instructor N:1 Department\n\n![University ER Diagram](/images/diagrams/university-er-diagram.svg)\n\nEXAMPLE 2: WEAK ENTITY\n\nStrong Entity: ORDER (OrderID, OrderDate, CustomerID)\nWeak Entity: ORDER_ITEM (ItemNumber, Quantity, Price)\n- ORDER_ITEM depends on ORDER\n- Partial key: ItemNumber\n- Full key: OrderID + ItemNumber\n\n![Weak Entity Diagram](/images/diagrams/weak-entity-diagram.svg)\n\nEXAMPLE 3: COMPOSITE AND MULTI-VALUED ATTRIBUTES\n\nEMPLOYEE Entity:\n- EmployeeID (simple, key)\n- Name (composite: FirstName, MiddleName, LastName)\n- DateOfBirth (simple, stored)\n- Age (simple, derived from DateOfBirth)\n- Address (composite: Street, City, State, Zip)\n- PhoneNumbers (multi-valued)\n- Email (simple)\n\nEXAMPLE 4: CARDINALITY EXAMPLES\n\n1:1 Relationship:\nPERSON ──1:1─── PASSPORT\nEach person has one passport, each passport belongs to one person\n\n1:N Relationship:\nDEPARTMENT ──1:N─── EMPLOYEE\nOne department has many employees, each employee works in one department\n\nM:N Relationship:\nSTUDENT ──M:N─── COURSE\nOne student enrolls in many courses, one course has many students\n\nEXAMPLE 5: COMPLETE ER TO RELATIONAL MAPPING\n\nER Model:\nSTUDENT (StudentID, Name, {PhoneNumbers})\nCOURSE (CourseID, CourseName)\nENROLLS (Student M:N Course, Grade)\n\nRelational Schema:\nSTUDENT(StudentID PK, Name)\nSTUDENT_PHONE(StudentID FK, PhoneNumber)\nCOURSE(CourseID PK, CourseName)\nENROLLMENT(StudentID FK, CourseID FK, Grade)\n  PRIMARY KEY (StudentID, CourseID)",
          practical: "PRACTICAL ER MODELING STEPS:\n\n1. **Requirements Analysis:**\n   - Interview stakeholders\n   - Identify entities (nouns)\n   - Identify relationships (verbs)\n   - Identify attributes\n   - Identify constraints\n\n2. **Drawing ER Diagram:**\n\nTools:\n- Draw.io (free, web-based)\n- Lucidchart (cloud-based)\n- MySQL Workbench (database-specific)\n- ERDPlus (educational)\n- Microsoft Visio (commercial)\n\n3. **ER Modeling Example - Library System:**\n\n```text\nRequirements:\n- Library has books\n- Members borrow books\n- Books have authors\n- Members have multiple phone numbers\n- Track borrow date and return date\n\nEntities:\nBOOK (ISBN, Title, Publisher, Year)\nMEMBER (MemberID, Name, Address, JoinDate)\nAUTHOR (AuthorID, Name, Country)\n\nRelationships:\nWRITTEN_BY: BOOK M:N AUTHOR\nBORROWS: MEMBER M:N BOOK (BorrowDate, ReturnDate, Status)\n\nMulti-valued:\nMEMBER has PhoneNumbers\n```\n\n4. **ER to SQL Implementation:**\n\n```sql\n-- Strong entities\nCREATE TABLE Book (\n    ISBN VARCHAR(13) PRIMARY KEY,\n    Title VARCHAR(200) NOT NULL,\n    Publisher VARCHAR(100),\n    Year INT\n);\n\nCREATE TABLE Author (\n    AuthorID INT PRIMARY KEY AUTO_INCREMENT,\n    Name VARCHAR(100) NOT NULL,\n    Country VARCHAR(50)\n);\n\nCREATE TABLE Member (\n    MemberID INT PRIMARY KEY AUTO_INCREMENT,\n    Name VARCHAR(100) NOT NULL,\n    Address VARCHAR(200),\n    JoinDate DATE DEFAULT CURRENT_DATE\n);\n\n-- M:N relationships become junction tables\nCREATE TABLE Book_Author (\n    ISBN VARCHAR(13),\n    AuthorID INT,\n    PRIMARY KEY (ISBN, AuthorID),\n    FOREIGN KEY (ISBN) REFERENCES Book(ISBN),\n    FOREIGN KEY (AuthorID) REFERENCES Author(AuthorID)\n);\n\nCREATE TABLE Borrowing (\n    MemberID INT,\n    ISBN VARCHAR(13),\n    BorrowDate DATE,\n    ReturnDate DATE,\n    Status VARCHAR(20),\n    PRIMARY KEY (MemberID, ISBN, BorrowDate),\n    FOREIGN KEY (MemberID) REFERENCES Member(MemberID),\n    FOREIGN KEY (ISBN) REFERENCES Book(ISBN)\n);\n\n-- Multi-valued attribute becomes separate table\nCREATE TABLE Member_Phone (\n    MemberID INT,\n    PhoneNumber VARCHAR(15),\n    PRIMARY KEY (MemberID, PhoneNumber),\n    FOREIGN KEY (MemberID) REFERENCES Member(MemberID)\n);\n```\n\n5. **Best Practices:**\n   - Start simple, add complexity gradually\n   - Validate with stakeholders at each step\n   - Use meaningful entity and attribute names\n   - Document business rules and constraints\n   - Avoid redundancy in the ER model\n   - Consider future extensions\n   - Use standard notation consistently",
          exam: "IMPORTANT EXAM QUESTIONS:\n\n1. **What is data modeling? Explain the three components of a data model.**\n   Structure, Manipulative, Integrity rules\n\n2. **Explain the Entity-Relationship (ER) model with its basic components.**\n   Entities, Attributes, Relationships\n\n3. **Distinguish between strong and weak entities with examples.**\n   Strong: Independent, has primary key\n   Weak: Dependent, no primary key\n\n4. **Explain different types of attributes with examples.**\n   Simple, Composite, Single-valued, Multi-valued, Stored, Derived\n\n5. **What are the different cardinality ratios in relationships? Explain with examples.**\n   1:1, 1:N, M:N with real-world examples\n\n6. **Explain participation constraints (total and partial) with examples.**\n   Total (double line), Partial (single line)\n\n7. **Draw an ER diagram for a [given scenario, e.g., Hospital Management System].**\n   Identify entities, attributes, relationships, cardinalities\n\n8. **What are the rules for converting ER diagrams to relational tables?**\n   - Entity → Table\n   - 1:1, 1:N → Foreign key in appropriate table\n   - M:N → Junction table\n   - Multi-valued attribute → Separate table\n   - Weak entity → Include owner's key\n\n9. **Convert the following ER diagram to relational schema: [diagram provided]**\n\n10. **Explain specialization and generalization in ER model.**\n    Top-down vs Bottom-up, IS-A relationships\n\nQUICK REVISION:\n• Entity = Real-world object (Rectangle)\n• Attribute = Property (Oval)\n• Relationship = Association (Diamond)\n• 1:1 = One to One\n• 1:N = One to Many\n• M:N = Many to Many (needs junction table)\n• Strong Entity = Single rectangle\n• Weak Entity = Double rectangle\n• Multi-valued = Double oval\n• Derived = Dashed oval",
          takeaways: "KEY TAKEAWAYS:\n\n✓ Data modeling creates visual representations of information systems\n\n✓ ER model uses entities, attributes, and relationships to represent data structure\n\n✓ Strong entities have their own key; weak entities depend on owner entities\n\n✓ Attributes can be: simple/composite, single-valued/multi-valued, stored/derived\n\n✓ Cardinality ratios: 1:1, 1:N, M:N determine relationship multiplicities\n\n✓ Total participation (mandatory): double line; Partial participation (optional): single line\n\n✓ ER diagram symbols: Rectangle (entity), Oval (attribute), Diamond (relationship)\n\n✓ ER to Relational mapping rules:\n  - Entity → Table\n  - 1:N → Foreign key in \"many\" side\n  - M:N → Junction table\n  - Multi-valued → Separate table\n  - Weak entity → Include owner's key\n\n✓ Extended ER features: Generalization, Specialization, Inheritance\n\n✓ Tools: Draw.io, Lucidchart, MySQL Workbench for ER modeling\n\n✓ Best practices: Validate with stakeholders, use standard notation, document constraints\n\nREMEMBER: ER modeling is the bridge between requirements and implementation. A good ER diagram simplifies database design and ensures all stakeholders understand the data structure!"
        }
      },
      {
        id: "database-models",
        title: "Database Models: Relational, Network, Hierarchical, Object-Oriented",
        subtopics: ["Relational Model", "Network Model", "Hierarchical Model", "Object-Oriented Model"],
        clos: ["CLO01", "CLO03"],
        cos: ["CO01", "CO03"],
        content: {
          introduction: "Database models have evolved over decades to meet changing requirements. Understanding different database models—from hierarchical trees to relational tables to object-oriented structures—provides insights into why certain designs work better for specific applications and how modern databases address complex data management challenges.",
          concept: "A database model defines the logical structure of a database and determines how data can be stored, organized, and manipulated.\n\n### Evolution of Database Models:\n\n**1. Hierarchical Model (1960s-1970s)**\n- Tree-like structure\n- Parent-child relationships\n- One-to-many (1:N) only\n\n**2. Network Model (1970s)**\n- Graph-based structure\n- Many-to-many (M:N) supported\n- More flexible than hierarchical\n\n**3. Relational Model (1970-present)**\n- Table-based structure\n- Dominant model today\n- Flexible and powerful\n\n**4. Object-Oriented Model (1980s-present)**\n- Objects with properties and methods\n- Inheritance and encapsulation\n- Complex data types",
          technicalDepth: "### 1. HIERARCHICAL MODEL:\n\n![Hierarchical Data Model](/images/unit1/hirerarchical%20data%20model.png)\n\n**Structure:**\n- Tree-like hierarchy with parent-child relationships\n- Single root for each tree\n- Each child has exactly one parent\n\n**Characteristics:**\n- One-to-many (1:N) relationships only\n- Navigation through explicit paths\n- Fast retrieval along predefined paths\n\n**Example:** IMS (Information Management System) by IBM\n\n**Advantages:**\n- Simple and easy to understand\n- Fast performance for hierarchical queries\n- Data integrity through parent-child links\n\n**Limitations:**\n- Cannot handle many-to-many relationships efficiently\n- Data redundancy when representing complex relationships\n- Limited query flexibility\n- Difficult reorganization\n\n**Example Structure:**\n```\n        University\n           |\n    ┌──────┴──────┐\n    │             │\nDepartment    Department\n    │             │\n┌───┴───┐     ┌───┴───┐\n│       │     │       │\nStudent Student Student Student\n```\n\n### 2. NETWORK MODEL:\n\n![Network Data Model](/images/unit1/network%20data%20model.png)\n\n**Structure:**\n- Graph-based with records (nodes) and sets (edges)\n- Records connected through pointers\n- CODASYL (Conference on Data Systems Languages) standard\n\n**Characteristics:**\n- Many-to-many (M:N) relationships supported\n- Set construct for 1:N relationships\n- More flexible than hierarchical\n\n**Example:** IDMS (Integrated Database Management System)\n\n**Advantages:**\n- More flexible relationship representation\n- Better for complex queries\n- Can represent M:N relationships\n- Faster access than hierarchical for some queries\n\n**Limitations:**\n- Complex navigation logic\n- Difficult to modify structure\n- Application programs tightly coupled with database structure\n- Steep learning curve\n\n**Example Structure:**\n```\n    Student ──── enrolls ──── Course\n       │                         │\n   belongs to                teaches\n       │                         │\n    Department ──── has ───── Instructor\n```\n\n### 3. RELATIONAL MODEL:\n\n![Relational Data Model](/images/unit1/relational%20data%20model.png)\n\n**Foundation:** E.F. Codd's relational model (1970)\n\n**Structure:**\n- Data organized in tables (relations)\n- Rows (tuples) represent records\n- Columns (attributes) represent fields\n\n**Core Concepts:**\n- **Relation:** Table with rows and columns\n- **Domain:** Set of allowed values for an attribute\n- **Primary Key:** Unique identifier for tuples\n- **Foreign Key:** Reference to primary key in another relation\n\n**Characteristics:**\n- Simple tabular structure\n- Data independence (logical and physical)\n- Declarative query language (SQL)\n- Mathematical foundation (relational algebra/calculus)\n- ACID properties (Atomicity, Consistency, Isolation, Durability)\n\n**Advantages:**\n- Structural independence: Changes in structure don't affect applications\n- Ad hoc query capability: Flexible data retrieval\n- Data integrity through constraints\n- Normalization reduces redundancy\n- Standard query language (SQL)\n\n**Examples:** MySQL, PostgreSQL, Oracle, SQL Server, DB2\n\n**Relational Algebra Operations:**\n- Selection (σ): Filter rows\n- Projection (π): Select columns\n- Join (⋈): Combine tables\n- Union (∪): Combine result sets\n- Difference (−): Subtract result sets\n\n### 4. OBJECT-ORIENTED MODEL:\n\n![Object-Oriented Data Model](/images/unit1/object%20oriented%20data%20model.png)\n\n**Structure:**\n- Objects contain both data and methods\n- Classes define object structure\n- Inheritance hierarchies\n\n**Core Concepts:**\n- **Object:** Instance of a class\n- **Class:** Blueprint for objects\n- **Encapsulation:** Data hiding\n- **Inheritance:** Class hierarchies\n- **Polymorphism:** Method overriding\n- **Object Identity (OID):** Unique identifier\n\n**Characteristics:**\n- Complex data types supported\n- Methods stored with data\n- Supports multimedia and complex objects\n- Natural mapping from OOP languages\n\n**Advantages:**\n- Natural for object-oriented programming\n- Handles complex data (multimedia, CAD)\n- Avoids impedance mismatch\n- Encapsulation provides security\n\n**Limitations:**\n- Less mature than relational\n- No standard query language\n- Smaller ecosystem\n- Limited ACID support\n\n**Examples:** db4o, ObjectDB, Versant\n\n### COMPARATIVE ANALYSIS:\n\n| Feature          | Hierarchical | Network  | Relational | Object-Oriented |\n|------------------|--------------|----------|------------|----------------|\n| Structure        | Tree         | Graph    | Tables     | Objects        |\n| Relationships    | 1:N          | M:N      | Any        | Any            |\n| Navigation       | Procedural   | Procedural| Declarative| Procedural     |\n| Flexibility      | Low          | Medium   | High       | High           |\n| Query Language   | Proprietary  | Proprietary| SQL (Standard)| Proprietary|\n| Data Independence| Low          | Low      | High       | Medium         |\n| Performance      | Fast         | Fast     | Moderate   | Fast           |\n| Complexity       | Low          | High     | Medium     | High           |",
          examples: "EXAMPLE 1: HIERARCHICAL DATABASE\n\n![Hierarchical Database Structure](/images/diagrams/hierarchical-model.svg)\n\nLimitation: If John double-majors in CS and Math, must duplicate record or use complex workarounds.\n\nEXAMPLE 2: NETWORK DATABASE\n\n![Network Database Structure](/images/diagrams/network-model.svg)\n\nNetwork allows M:N relationships directly but requires pointer navigation.\n\nEXAMPLE 3: RELATIONAL DATABASE\n\nUniversity Schema (Tables):\n\n**STUDENTS Table:**\n```\nStudentID | Name        | Major    | Email\n----------|-------------|----------|------------------\n101       | John Doe    | CS       | john@uni.edu\n102       | Jane Smith  | Math     | jane@uni.edu\n103       | Bob Johnson | CS       | bob@uni.edu\n```\n\n**COURSES Table:**\n```\nCourseID | CourseName           | Credits | Department\n---------|---------------------|---------|------------\nCS101    | Intro to Programming | 3       | CS\nCS202    | Database Systems     | 4       | CS\nMATH101  | Calculus I          | 4       | Math\n```\n\n**ENROLLMENT Table (Junction):**\n```\nStudentID | CourseID | Semester | Grade\n----------|----------|----------|------\n101       | CS101    | Fall2024 | A\n101       | CS202    | Fall2024 | B+\n102       | MATH101  | Fall2024 | A\n103       | CS101    | Fall2024 | B\n```\n\n**SQL Query Examples:**\n\n```sql\n-- Find all students enrolled in Database Systems\nSELECT S.Name, S.Email\nFROM STUDENTS S\nJOIN ENROLLMENT E ON S.StudentID = E.StudentID\nJOIN COURSES C ON E.CourseID = C.CourseID\nWHERE C.CourseName = 'Database Systems';\n\n-- Count enrollments per course\nSELECT C.CourseName, COUNT(E.StudentID) as Enrollment_Count\nFROM COURSES C\nLEFT JOIN ENROLLMENT E ON C.CourseID = E.CourseID\nGROUP BY C.CourseName;\n```\n\nEXAMPLE 4: OBJECT-ORIENTED DATABASE (db4o - Java)\n\n```java\n// Define classes\nclass Student {\n    int studentID;\n    String name;\n    String email;\n    List<Course> courses;\n    \n    void enroll(Course c) {\n        courses.add(c);\n    }\n}\n\nclass Course {\n    String courseID;\n    String courseName;\n    int credits;\n    List<Student> students;\n}\n\n// Store objects directly\nStudent john = new Student(101, \"John Doe\", \"john@uni.edu\");\nCourse cs101 = new Course(\"CS101\", \"Intro to Programming\", 3);\njohn.enroll(cs101);\n\ndb.store(john); // Stores entire object graph\n\n// Query objects\nList<Student> csStudents = db.query(new Predicate<Student>() {\n    public boolean match(Student s) {\n        for (Course c : s.courses) {\n            if (c.courseID.equals(\"CS101\")) return true;\n        }\n        return false;\n    }\n});\n```\n\nEXAMPLE 5: REAL-WORLD APPLICATIONS\n\n**Hierarchical:**\n- File systems (directory structure)\n- Organization charts\n- XML documents\n\n**Network:**\n- Telecommunications networks\n- Transportation systems\n- Legacy mainframe applications\n\n**Relational:**\n- Banking systems\n- E-commerce platforms\n- Enterprise applications\n- Web applications\n\n**Object-Oriented:**\n- CAD/CAM systems\n- Multimedia databases\n- Scientific applications\n- Real-time systems",
          practical: "PRACTICAL CONSIDERATIONS:\n\n1. **Choosing the Right Model:**\n\n**Use Relational When:**\n- ACID transactions required\n- Complex queries needed\n- Data highly structured\n- Standard SQL queries\n- Example: Banking, E-commerce\n\n**Use Object-Oriented When:**\n- Complex nested objects\n- Tight OOP integration\n- Multimedia content\n- Example: CAD, Gaming, Simulations\n\n**Use Hierarchical/Network When:**\n- Legacy system maintenance\n- Specific performance requirements\n- Predefined access patterns\n\n2. **Migration Strategies:**\n\n```sql\n-- Hierarchical to Relational\n-- From tree:\nCompany -> Department -> Employee\n\n-- To tables:\nCREATE TABLE Company (\n    CompanyID INT PRIMARY KEY,\n    Name VARCHAR(100)\n);\n\nCREATE TABLE Department (\n    DeptID INT PRIMARY KEY,\n    DeptName VARCHAR(100),\n    CompanyID INT,\n    FOREIGN KEY (CompanyID) REFERENCES Company(CompanyID)\n);\n\nCREATE TABLE Employee (\n    EmpID INT PRIMARY KEY,\n    Name VARCHAR(100),\n    DeptID INT,\n    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)\n);\n```\n\n3. **Hybrid Approaches (Object-Relational):**\n\n```sql\n-- PostgreSQL: User-defined types\nCREATE TYPE Address AS (\n    street VARCHAR(100),\n    city VARCHAR(50),\n    zip VARCHAR(10)\n);\n\nCREATE TABLE Employee (\n    EmpID INT PRIMARY KEY,\n    Name VARCHAR(100),\n    HomeAddress Address,  -- Complex type\n    WorkAddress Address\n);\n\n-- Insert\nINSERT INTO Employee VALUES (\n    1,\n    'John Doe',\n    ROW('123 Main St', 'NYC', '10001'),\n    ROW('456 Corp Ave', 'NYC', '10002')\n);\n\n-- Query\nSELECT Name, (HomeAddress).city FROM Employee;\n```\n\n4. **Modern Trends:**\n\n- **Polyglot Persistence:** Use multiple database types\n  - Relational for transactions\n  - Document for flexible data\n  - Graph for relationships\n  - Key-value for caching\n\n- **NoSQL Movement:** Beyond relational\n  - Document (MongoDB)\n  - Key-Value (Redis)\n  - Column-family (Cassandra)\n  - Graph (Neo4j)\n\n5. **Performance Comparison:**\n\n| Operation | Hierarchical | Network | Relational | Object-Oriented |\n|-----------|--------------|---------|------------|----------------|\n| Simple read| Very Fast   | Very Fast| Fast      | Very Fast      |\n| Complex query| Slow     | Fast    | Very Fast  | Medium         |\n| Insert    | Fast         | Medium  | Fast       | Very Fast      |\n| Update    | Medium       | Medium  | Fast       | Fast           |\n| Delete    | Slow         | Medium  | Fast       | Fast           |",
          exam: "IMPORTANT EXAM QUESTIONS:\n\n1. **Compare and contrast Hierarchical, Network, and Relational database models.**\n   Create table showing: Structure, relationships, advantages, disadvantages, examples\n\n2. **Why did the Relational Model become dominant over Hierarchical and Network models?**\n   Focus on: Simplicity, data independence, SQL standardization, flexibility\n\n3. **Explain the structure and limitations of the Hierarchical database model with diagram.**\n   Include: Tree structure, 1:N relationships, navigation, IMS example\n\n4. **Describe the Network database model. How does it overcome limitations of Hierarchical model?**\n   Graph structure, M:N support, set construct, pointer-based navigation\n\n5. **What is the Relational Model? Explain its core concepts and advantages.**\n   Tables, primary/foreign keys, SQL, data independence, normalization\n\n6. **Explain the Object-Oriented database model. When is it preferred over Relational?**\n   Objects, classes, encapsulation, complex data, OOP integration\n\n7. **Draw an example showing how M:N relationships are handled in Hierarchical, Network, and Relational models.**\n\n8. **What is the impedance mismatch problem? How does OODBMS solve it?**\n   OOP vs Relational gap, OODBMS stores objects directly\n\n9. **Explain the concept of data independence in the Relational model.**\n   Logical and physical independence, schema layers\n\n10. **Compare relational and object-oriented database models in terms of:**\n    - Data structure\n    - Query language\n    - Data independence\n    - Performance\n    - Use cases\n\nQUICK REVISION:\n• Hierarchical = Tree structure (1:N only)\n• Network = Graph structure (M:N supported)\n• Relational = Tables (Most flexible, SQL)\n• Object-Oriented = Objects with methods\n• Relational Model dominates: Simplicity + SQL + Flexibility\n• OO Model: Better for complex objects, OOP integration\n• SQL: Declarative, standard query language\n• Data Independence: Physical and Logical separation",
          takeaways: "KEY TAKEAWAYS:\n\n✓ Database models evolved: Hierarchical → Network → Relational → Object-Oriented\n\n✓ Hierarchical model: Tree structure, 1:N only, fast but inflexible\n\n✓ Network model: Graph structure, supports M:N, complex navigation\n\n✓ Relational model: Tables with rows/columns, dominant today, SQL standard\n\n✓ Object-Oriented model: Objects with methods, natural OOP mapping\n\n✓ Relational advantages: Simplicity, data independence, SQL standardization, flexibility\n\n✓ OO advantages: Complex data types, no impedance mismatch, encapsulation\n\n✓ Relational model uses: Banking, e-commerce, enterprise apps, web applications\n\n✓ OO model uses: CAD/CAM, multimedia, scientific simulations\n\n✓ Modern approach: Polyglot persistence (use right model for each use case)\n\n✓ Object-Relational hybrid: PostgreSQL, Oracle support UDTs and complex types\n\n✓ NoSQL emerged as alternative: Document, Key-Value, Column-family, Graph databases\n\nREMEMBER: Understanding the evolution helps appreciate why certain design decisions were made and guides choosing the right model for new applications. The Relational Model's success stems from its elegant balance of simplicity, power, and standardization!"
        }
      }
    ]
  },
  {
    id: "unit-2",
    title: "UNIT II: Relational Database and SQL",
    topics: [
      {
        id: "relational-algebra",
        title: "Relational Algebra and Operations",
        subtopics: ["Selection", "Projection", "Cartesian Product", "Union", "Set Difference", "Rename", "Join Operations"],
        clos: ["CLO04"],
        cos: ["CO03"],
        content: {
          introduction: "Relational algebra provides a formal foundation for relational database operations. It's the theoretical basis for SQL and helps understand how queries are optimized. Just as arithmetic has operators (+, -, ×, ÷), relational algebra has operators that manipulate tables.",
          concept: `Relational algebra is a procedural query language consisting of operations that take one or two relations as input and produce a new relation as output.

### Fundamental Operations:

**1. Selection (σ)**: Selects rows that satisfy a condition
   σcondition(Relation)
   
**2. Projection (π)**: Selects specific columns
   πcolumns(Relation)
   
**3. Union (∪)**: Combines tuples from two relations
   R ∪ S
   
**4. Set Difference (−)**: Tuples in R but not in S
   R − S
   
**5. Cartesian Product (×)**: All combinations of tuples
   R × S
   
**6. Rename (ρ)**: Renames relation or attributes
   ρnew_name(Relation)

### Derived Operations:

**7. Intersection (∩)**: R ∩ S = R − (R − S)

**8. Join (⋈)**: Combines related tuples from two relations
   - Natural Join (⋈): Equi-join on common attributes
   - Theta Join (⋈θ): Join with arbitrary condition
   - Equi-join: Join with equality condition
   - Outer Joins: Include unmatched tuples
     • Left Outer Join (⟕): All from left, matched from right
     • Right Outer Join (⟖): All from right, matched from left
     • Full Outer Join (⟗): All from both

**9. Division (÷)**: R ÷ S finds tuples in R that match all tuples in S

### Properties:

**Closure Property**: Result of operation is also a relation

**Composability**: Operations can be nested
   πname(σsalary>50000(Employee))`,
          technicalDepth: `### DETAILED OPERATIONS:

**1. SELECTION (σ)**

Syntax: σ<condition>(Relation)

Selects tuples that satisfy the condition.

Conditions:
- Comparison: =, ≠, <, >, ≤, ≥
- Logical: ∧ (AND), ∨ (OR), ¬ (NOT)

Properties:
- Commutative: σc1(σc2(R)) = σc2(σc1(R))
- Combine: σc1(σc2(R)) = σ(c1 ∧ c2)(R)
- Idempotent: σc(σc(R)) = σc(R)

Cost: O(n) where n = number of tuples

**2. PROJECTION (π)**

Syntax: π<attribute_list>(Relation)

Selects specified attributes, removes duplicates.

Properties:
- Not commutative: πA(πB(R)) ≠ πB(πA(R)) unless A ⊆ B
- Idempotent: πA(πA(R)) = πA(R)
- Cascade: πA1(πA2(...πAn(R))) = πA1(R) if A1 ⊆ A2 ⊆ ... ⊆ An

Cost: O(n) + duplicate elimination

**3. UNION (∪)**

Syntax: R ∪ S

Combines tuples from both relations, removes duplicates.

Requirements (Union-compatible):
- Same number of attributes
- Corresponding attributes have compatible domains

Properties:
- Commutative: R ∪ S = S ∪ R
- Associative: (R ∪ S) ∪ T = R ∪ (S ∪ T)
- Idempotent: R ∪ R = R

Cost: O(n + m) where n = |R|, m = |S|

**4. SET DIFFERENCE (−)**

Syntax: R − S

Tuples in R but not in S.

Requirements: Union-compatible

Properties:
- NOT commutative: R − S ≠ S − R
- NOT associative: (R − S) − T ≠ R − (S − T)

Identity: R − ∅ = R
Subset: If R ⊆ S, then R − S = ∅

**5. CARTESIAN PRODUCT (×)**

Syntax: R × S

All possible combinations of tuples from R and S.

Result:
- Attributes: All from R, all from S (rename if duplicates)
- Tuples: |R| × |S|

Properties:
- NOT commutative (attribute order differs)
- Associative: (R × S) × T = R × (S × T)

Cost: O(n × m)

**6. RENAME (ρ)**

Syntax: 
- ρX(R): Rename relation R to X
- ρ(A1, A2, ..., An)(R): Rename attributes
- ρX(A1, A2, ..., An)(R): Rename both

Used to:
- Resolve name conflicts
- Self-joins
- Clarify attribute names

**7. INTERSECTION (∩)**

Syntax: R ∩ S

Tuples in both R and S.

Derived: R ∩ S = R − (R − S)
Also: R ∩ S = S − (S − R)

Requirements: Union-compatible

Properties:
- Commutative: R ∩ S = S ∩ R
- Associative: (R ∩ S) ∩ T = R ∩ (S ∩ T)
- Idempotent: R ∩ R = R

**8. JOIN OPERATIONS**

**Natural Join (⋈)**

Syntax: R ⋈ S

Equi-join on all common attributes, one copy retained.

Algorithm:
1. Find common attributes
2. Equi-join on common attributes
3. Project to remove duplicate columns

Example:
Employee(EmpID, Name, DeptID)
Department(DeptID, DeptName)

Employee ⋈ Department:
Result has: EmpID, Name, DeptID, DeptName

**Theta Join (⋈θ)**

Syntax: R ⋈θ S where θ is a condition

General join with arbitrary condition.

Example: Employee ⋈salary>50000 Payroll

Expressed as: σsalary>50000(Employee × Payroll)

**Equi-Join**

Theta join where condition is equality (=).

**Outer Joins**

**Left Outer Join (R ⟕ S)**:
- All tuples from R
- Matched tuples from S
- Unmatched tuples from R padded with NULL for S attributes

**Right Outer Join (R ⟖ S)**:
- All tuples from S
- Matched tuples from R
- Unmatched tuples from S padded with NULL for R attributes

**Full Outer Join (R ⟗ S)**:
- All tuples from both
- Unmatched tuples padded with NULL

**9. DIVISION (÷)**

Syntax: R ÷ S

Finds tuples in R that are associated with ALL tuples in S.

Use case: "Find X such that for all Y in S, (X, Y) is in R"

Example: Find students enrolled in ALL courses
Students_Courses ÷ Required_Courses

Algorithm:
R(A, B) ÷ S(B) = πA(R) − πA((πA(R) × S) − R)

### QUERY OPTIMIZATION WITH RELATIONAL ALGEBRA

**Equivalence Rules:**

1. Cascade of σ: σc1(σc2(R)) = σ(c1 ∧ c2)(R)
2. Commutativity of σ: σc1(σc2(R)) = σc2(σc1(R))
3. Cascade of π: πlist1(πlist2(...(πlistn(R)))) = πlist1(R)
4. Commuting σ with π: πA1,A2,...,An(σc(R)) = σc(πA1,A2,...,An(R)) if c only uses A1,...,An
5. Commutativity of ⋈: R ⋈ S = S ⋈ R
6. Associativity of ⋈: (R ⋈ S) ⋈ T = R ⋈ (S ⋈ T)
7. Distribute σ over ⋈: σc(R ⋈ S) = σc(R) ⋈ S (if c only uses R attributes)
8. Distribute π over ⋈: πL(R ⋈ S) = πL1(R) ⋈ πL2(S) where L = L1 ∪ L2

**Optimization Strategy:**

1. Perform selections early (reduce tuples)
2. Perform projections early (reduce attributes)
3. Combine selections and products into joins
4. Use most restrictive selection first
5. Evaluate selections in order of decreasing cardinality reduction`,
          examples: `EXAMPLE SCHEMA:

**Employee Table:**
| EmpID | Name    | DeptID | Salary |
|-------|---------|--------|--------|
| 101   | Alice   | 10     | 60000  |
| 102   | Bob     | 20     | 55000  |
| 103   | Charlie | 10     | 70000  |
| 104   | Diana   | 30     | 50000  |

**Department Table:**
| DeptID | DeptName | Location |
|--------|----------|----------|
| 10     | IT       | NYC      |
| 20     | HR       | LA       |
| 30     | Sales    | Chicago  |

**Project Table:**
| ProjID | ProjName | DeptID |
|--------|----------|--------|
| P1     | Alpha    | 10     |
| P2     | Beta     | 20     |

### EXAMPLE 1: SELECTION

Query: Find employees with salary > 55000

Relational Algebra:
σsalary>55000(Employee)

Result:
| EmpID | Name    | DeptID | Salary |
|-------|---------|--------|--------|
| 101   | Alice   | 10     | 60000  |
| 103   | Charlie | 10     | 70000  |

SQL:
SELECT * FROM Employee WHERE Salary > 55000;

### EXAMPLE 2: PROJECTION

Query: Get employee names and salaries

Relational Algebra:
πName,Salary(Employee)

Result:
| Name    | Salary |
|---------|--------|
| Alice   | 60000  |
| Bob     | 55000  |
| Charlie | 70000  |
| Diana   | 50000  |

SQL:
SELECT Name, Salary FROM Employee;

### EXAMPLE 3: COMBINED SELECTION AND PROJECTION

Query: Names of employees in Dept 10

Relational Algebra:
πName(σDeptID=10(Employee))

Result:
| Name    |
|---------|
| Alice   |
| Charlie |

SQL:
SELECT Name FROM Employee WHERE DeptID = 10;

### EXAMPLE 4: UNION

Query: All IDs from Employee and Department tables

Relational Algebra:
πEmpID(Employee) ∪ πDeptID(Department)

Note: Must rename for union-compatibility
ρ(ID)(πEmpID(Employee)) ∪ ρ(ID)(πDeptID(Department))

SQL:
SELECT EmpID AS ID FROM Employee
UNION
SELECT DeptID AS ID FROM Department;

### EXAMPLE 5: SET DIFFERENCE

Query: Department IDs that have no employees

Relational Algebra:
πDeptID(Department) − πDeptID(Employee)

Result:
| DeptID |
|--------|
(None in this example, all depts have employees)

SQL:
SELECT DeptID FROM Department
EXCEPT
SELECT DISTINCT DeptID FROM Employee;

### EXAMPLE 6: CARTESIAN PRODUCT

Query: All combinations of employees and projects

Relational Algebra:
Employee × Project

Result: 4 employees × 2 projects = 8 tuples

SQL:
SELECT * FROM Employee, Project;
-- or
SELECT * FROM Employee CROSS JOIN Project;

### EXAMPLE 7: NATURAL JOIN

Query: Employees with their department names

Relational Algebra:
Employee ⋈ Department

Result:
| EmpID | Name    | DeptID | Salary | DeptName | Location |
|-------|---------|--------|--------|----------|----------|
| 101   | Alice   | 10     | 60000  | IT       | NYC      |
| 102   | Bob     | 20     | 55000  | HR       | LA       |
| 103   | Charlie | 10     | 70000  | IT       | NYC      |
| 104   | Diana   | 30     | 50000  | Sales    | Chicago  |

SQL:
SELECT *
FROM Employee
NATURAL JOIN Department;
-- or explicitly
SELECT e.*, d.DeptName, d.Location
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID;

### EXAMPLE 8: THETA JOIN

Query: Employees in departments located in NYC or LA

Relational Algebra:
Employee ⋈Location IN ('NYC','LA') Department

SQL:
SELECT e.*
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID
WHERE d.Location IN ('NYC', 'LA');

### EXAMPLE 9: LEFT OUTER JOIN

Assume we add a department with no employees:

**Department Table (updated):**
| DeptID | DeptName | Location |
|--------|----------|----------|
| 10     | IT       | NYC      |
| 20     | HR       | LA       |
| 30     | Sales    | Chicago  |
| 40     | Finance  | Boston   |

Query: All departments with their employees (including depts with no employees)

Relational Algebra:
Department ⟕ Employee

Result:
| DeptID | DeptName | Location | EmpID | Name    | Salary |
|--------|----------|----------|-------|---------|--------|
| 10     | IT       | NYC      | 101   | Alice   | 60000  |
| 10     | IT       | NYC      | 103   | Charlie | 70000  |
| 20     | HR       | LA       | 102   | Bob     | 55000  |
| 30     | Sales    | Chicago  | 104   | Diana   | 50000  |
| 40     | Finance  | Boston   | NULL  | NULL    | NULL   |

SQL:
SELECT *
FROM Department d
LEFT OUTER JOIN Employee e ON d.DeptID = e.DeptID;

### EXAMPLE 10: DIVISION

**Enrollment Table:**
| StudentID | CourseID |
|-----------|----------|
| S1        | C1       |
| S1        | C2       |
| S1        | C3       |
| S2        | C1       |
| S2        | C3       |
| S3        | C1       |
| S3        | C2       |
| S3        | C3       |

**Required_Courses Table:**
| CourseID |
|----------|
| C1       |
| C2       |
| C3       |

Query: Find students enrolled in ALL required courses

Relational Algebra:
πStudentID,CourseID(Enrollment) ÷ πCourseID(Required_Courses)

Result:
| StudentID |
|-----------|
| S1        |
| S3        |

SQL (using double negation):
SELECT DISTINCT StudentID
FROM Enrollment e1
WHERE NOT EXISTS (
    SELECT CourseID
    FROM Required_Courses
    WHERE CourseID NOT IN (
        SELECT CourseID
        FROM Enrollment e2
        WHERE e2.StudentID = e1.StudentID
    )
);

### EXAMPLE 11: COMPLEX QUERY

Query: Names and salaries of IT department employees earning > 55000

Relational Algebra:
πName,Salary(σDeptName='IT' ∧ Salary>55000(Employee ⋈ Department))

Optimized (push selection down):
πName,Salary(σSalary>55000(Employee) ⋈ σDeptName='IT'(Department))

Result:
| Name    | Salary |
|---------|--------|
| Alice   | 60000  |
| Charlie | 70000  |

SQL:
SELECT e.Name, e.Salary
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID
WHERE d.DeptName = 'IT' AND e.Salary > 55000;

### EXAMPLE 12: QUERY OPTIMIZATION

Original Query:
πName(σDeptName='IT'(Employee × Department))

Problems:
1. Cartesian product creates huge intermediate result
2. Selection after product

Optimized Query:
πName(σDeptID=DeptID(σSalary>55000(Employee) × σDeptName='IT'(Department)))

Better:
πName(σSalary>55000(Employee) ⋈ σDeptName='IT'(Department))

Best:
πName(σSalary>55000(Employee ⋈ σDeptName='IT'(Department)))`,
          practical: `### PRACTICAL APPLICATIONS:

**1. Database Query Optimization:**

Understanding relational algebra helps optimize SQL queries.

Bad Query:
SELECT Name
FROM Employee, Department
WHERE Employee.DeptID = Department.DeptID
  AND Department.DeptName = 'IT'
  AND Salary > 55000;

Execution Plan:
1. Cartesian product (expensive!)
2. Filter conditions
3. Project Name

Better Query (optimizer does this):
SELECT e.Name
FROM (SELECT * FROM Employee WHERE Salary > 55000) e
JOIN (SELECT * FROM Department WHERE DeptName = 'IT') d
ON e.DeptID = d.DeptID;

**2. Query Translation:**

SQL → Relational Algebra → Optimized Algebra → Execution Plan

**3. Understanding Join Algorithms:**

Different join strategies implement ⋈:
- Nested Loop Join: Iterate outer, for each tuple iterate inner
- Hash Join: Hash one relation, probe with other
- Sort-Merge Join: Sort both, merge

**4. Design Query Processors:**

Relational algebra forms basis of query processors in DBMS.

**5. Verify Query Correctness:**

Two SQL queries equivalent if their relational algebra expressions equivalent.

### CONVERSION EXAMPLES:

**SQL to Relational Algebra:**

SQL:
SELECT Name, Salary
FROM Employee
WHERE DeptID = 10 AND Salary > 60000;

Relational Algebra:
πName,Salary(σDeptID=10 ∧ Salary>60000(Employee))

SQL:
SELECT e.Name, d.DeptName
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID
WHERE e.Salary > 55000;

Relational Algebra:
πName,DeptName(σSalary>55000(Employee ⋈ Department))

**Relational Algebra to SQL:**

πName(σSalary>(SELECT AVG(Salary) FROM Employee)(Employee))

SQL:
SELECT Name
FROM Employee
WHERE Salary > (SELECT AVG(Salary) FROM Employee);

### TOOLS FOR PRACTICE:

1. **RelaX** (Web-based):
   - Visual relational algebra
   - Execute operations
   - See results

2. **RA (Relational Algebra Interpreter)**:
   - Command-line tool
   - Text-based queries

3. **Database Textbook Simulators**:
   - Many textbooks provide online tools

### INTERVIEW QUESTIONS:

1. Explain difference between natural join and theta join
2. Why is projection not commutative?
3. How to express intersection using other operations?
4. What is the result cardinality of R × S?
5. Give SQL for relational division
6. Why push selections down in query optimization?
7. Explain left vs right vs full outer join with examples`,
          exam: `### IMPORTANT EXAM QUESTIONS:

**1. Define the following relational algebra operations with syntax and examples:**
   - Selection (σ)
   - Projection (π)
   - Union (∪)
   - Set Difference (−)
   - Cartesian Product (×)
   - Join (⋈)

**2. What are the conditions for two relations to be union-compatible?**
   Answer: Same number of attributes, corresponding attributes have compatible domains

**3. Explain the difference between natural join and equi-join.**
   Answer: Natural join removes duplicate columns, equi-join keeps all columns

**4. Given two tables, perform the following operations:**
   - σcondition(R)
   - πattributes(R)
   - R ∪ S
   - R − S
   - R × S
   - R ⋈ S
   - R ⟕ S (Left Outer Join)

**5. Convert the following SQL to relational algebra:**
   SELECT Name, Salary
   FROM Employee
   WHERE DeptID = 10 AND Salary > 50000;

**6. Convert the following relational algebra to SQL:**
   πName,DeptName(σSalary>55000(Employee ⋈ Department))

**7. Explain query optimization using relational algebra equivalence rules.**
   Show how to optimize:
   πName(σDeptName='IT'(Employee × Department))

**8. What is relational algebra division? Give an example use case.**
   Answer: R ÷ S finds tuples in R associated with ALL tuples in S
   Example: Find students enrolled in all required courses

**9. Compare and contrast the following:**
   - Inner Join vs Outer Join
   - Left Outer Join vs Right Outer Join vs Full Outer Join
   - Natural Join vs Theta Join

**10. Given a complex query, show step-by-step evaluation:**
    πName(σDeptID=10 ∧ Salary>60000(Employee ⋈ Department))

**11. Explain the properties of relational algebra operations:**
    - Which operations are commutative?
    - Which operations are associative?
    - Which operations are idempotent?

**12. Show how to express the following derived operations using fundamental operations:**
    - Intersection: R ∩ S = R − (R − S)
    - Theta Join: R ⋈θ S = σθ(R × S)
    - Natural Join using theta join

### QUICK REVISION FORMULAS:

**Basic Operations:**
- σcondition(R): Filter rows
- πattributes(R): Filter columns
- R ∪ S: Union (remove duplicates)
- R − S: Difference (in R, not in S)
- R × S: Cartesian product (all combinations)
- ρnew_name(R): Rename

**Derived Operations:**
- R ∩ S = R − (R − S): Intersection
- R ⋈ S: Natural join (equi-join on common attributes)
- R ⋈θ S = σθ(R × S): Theta join
- R ⟕ S: Left outer join
- R ⟖ S: Right outer join
- R ⟗ S: Full outer join
- R ÷ S: Division

**Cardinality:**
- |σc(R)| ≤ |R|
- |πA(R)| ≤ |R|
- |R ∪ S| ≤ |R| + |S|
- |R − S| ≤ |R|
- |R × S| = |R| × |S|
- |R ⋈ S| ≤ |R| × |S|

**Optimization Rules:**
1. Push selections down
2. Push projections down
3. Combine selections: σc1(σc2(R)) = σ(c1 ∧ c2)(R)
4. Combine products with selections into joins
5. Use most restrictive selection first`,
          takeaways: `### KEY TAKEAWAYS:

✓ **Relational algebra is the theoretical foundation of SQL** and query processing

✓ **Six fundamental operations**: Selection (σ), Projection (π), Union (∪), Set Difference (−), Cartesian Product (×), Rename (ρ)

✓ **Derived operations**: Intersection, Join, Division (can be expressed using fundamental operations)

✓ **Selection (σ)** filters rows; **Projection (π)** filters columns

✓ **Union** requires union-compatible relations (same number/type of attributes)

✓ **Cartesian product** creates all combinations; size = |R| × |S|

✓ **Natural join (⋈)** is equi-join on common attributes with duplicate columns removed

✓ **Outer joins** preserve unmatched tuples from one or both relations

✓ **Division (÷)** finds "for all" relationships (e.g., students in ALL courses)

✓ **Query optimization** uses equivalence rules to rewrite queries efficiently

✓ **Push selections down** early to reduce intermediate result sizes

✓ **Combine products with selections** to form joins (more efficient)

✓ **Understanding relational algebra** helps write better SQL and understand query plans

✓ **Closure property**: Result of any operation is also a relation (can nest operations)

✓ **Composability**: Operations can be combined to form complex queries

REMEMBER: Relational algebra is procedural (how to compute), SQL is declarative (what to compute). The DBMS translates SQL to optimized relational algebra for execution!`
        }
      },
      {
        id: "relational-calculus",
        title: "Tuple and Domain Relational Calculus",
        subtopics: ["Tuple Relational Calculus", "Domain Relational Calculus", "Quantifiers", "Safety of Expressions"],
        clos: ["CLO04"],
        cos: ["CO03"],
        content: {
          introduction: "While relational algebra is procedural (specifies how to compute), relational calculus is declarative (specifies what to compute). It's the theoretical basis for SQL's SELECT statements and provides an alternative way to express queries using mathematical logic.",
          concept: `Relational calculus is a non-procedural query language based on mathematical logic (predicate calculus). It describes what data to retrieve without specifying how to retrieve it.

### Two Variants:

**1. Tuple Relational Calculus (TRC)**
   Variables range over tuples (rows)
   
**2. Domain Relational Calculus (DRC)**
   Variables range over domain values (individual attributes)

### General Form (TRC):

{ t | P(t) }

Where:
- t is a tuple variable
- P(t) is a predicate (logical formula)
- Result contains all tuples t for which P(t) is true

### Quantifiers:

**Existential (∃)**: "There exists"
∃t ∈ R (P(t)) means: There exists a tuple t in relation R such that P(t) is true

**Universal (∀)**: "For all"
∀t ∈ R (P(t)) means: For all tuples t in relation R, P(t) is true

### Relationship to SQL:

TRC/DRC ≡ SQL SELECT
Relational Algebra ≡ Query execution plans

All three are relationally complete (express same queries)`,
          technicalDepth: `### TUPLE RELATIONAL CALCULUS (TRC)

**Syntax:**

{ t | P(t) }
{ t.A1, t.A2, ..., t.An | P(t) }

**Components:**

1. **Tuple Variables**: t, s, u (range over tuples)

2. **Atoms** (basic predicates):
   - t ∈ R: tuple t is in relation R
   - t.A op s.B: compare attributes
   - t.A op constant: compare with constant
   where op ∈ {=, ≠, <, >, ≤, ≥}

3. **Formulas** (combine atoms):
   - Atoms are formulas
   - If P, Q are formulas: ¬P, P ∧ Q, P ∨ Q, P ⇒ Q are formulas
   - If P is a formula: ∃t ∈ R (P), ∀t ∈ R (P) are formulas

**Operator Precedence:**
1. ¬ (NOT)
2. ∧ (AND)
3. ∨ (OR)
4. ⇒ (IMPLIES)

**Quantifier Scope:**
- ∃t ∈ R (P(t)) binds t in P
- ∀t ∈ R (P(t)) binds t in P
- Free variables: not bound by quantifier
- Bound variables: bound by quantifier

**Examples:**

Simple Query:
{ t | t ∈ Employee ∧ t.Salary > 50000 }
"Find all employees with salary > 50000"

With Projection:
{ t.Name | t ∈ Employee ∧ t.Salary > 50000 }
"Find names of employees with salary > 50000"

With Existential Quantifier:
{ t | t ∈ Employee ∧ ∃d ∈ Department (t.DeptID = d.DeptID ∧ d.DeptName = 'IT') }
"Find employees in IT department"

With Universal Quantifier:
{ t | t ∈ Student ∧ ∀c ∈ Required_Courses (∃e ∈ Enrollment (e.StudentID = t.StudentID ∧ e.CourseID = c.CourseID)) }
"Find students enrolled in ALL required courses"

**Quantifier Equivalences:**

De Morgan's Laws:
- ¬(∃t ∈ R (P(t))) ≡ ∀t ∈ R (¬P(t))
- ¬(∀t ∈ R (P(t))) ≡ ∃t ∈ R (¬P(t))

Implication:
- ∀t (P(t) ⇒ Q(t)) ≡ ∀t (¬P(t) ∨ Q(t))
- ∃t (P(t) ∧ Q(t)) ≡ ¬∀t (P(t) ⇒ ¬Q(t))

### DOMAIN RELATIONAL CALCULUS (DRC)

**Syntax:**

{ <x1, x2, ..., xn> | P(x1, x2, ..., xn) }

**Components:**

1. **Domain Variables**: x, y, z (range over attribute values)

2. **Atoms**:
   - <x1, x2, ..., xn> ∈ R: values form a tuple in R
   - x op y: compare domain variables
   - x op constant: compare with constant

3. **Formulas**: Same as TRC

**Examples:**

Simple Query:
{ <n, s> | <i, n, d, s> ∈ Employee ∧ s > 50000 }
"Find names and salaries of employees earning > 50000"

With Existential Quantifier:
{ <n> | ∃i, d, s (<i, n, d, s> ∈ Employee ∧ ∃dn, l (<d, dn, l> ∈ Department ∧ dn = 'IT')) }
"Find names of IT department employees"

With Universal Quantifier:
{ <sid> | <sid, sn> ∈ Student ∧ ∀cid (∃cn (<cid, cn> ∈ Required_Courses ⇒ ∃g (<sid, cid, g> ∈ Enrollment))) }
"Find student IDs for students enrolled in all required courses"

### SAFETY OF EXPRESSIONS

**Problem**: Some expressions can produce infinite results

Unsafe Expression:
{ t | ¬(t ∈ Employee) }
"All tuples NOT in Employee" → Infinite!

{ t | true }
"All possible tuples" → Infinite!

**Safe Expression Definition:**

An expression is safe if:
1. All values in result are from domain of expression
2. For every atom, variables range over finite sets
3. Domain of expression: set of all values in relations mentioned in expression

**Domain of Expression:**

dom(expression) = ∪ all constants and attribute values in relations mentioned

**Safe Expression Constraints:**

1. For ∃t ∈ R (P(t)): Result tuples must come from dom(R)
2. For ∀t ∈ R (P(t)): Typically written as ∀t (t ∈ R ⇒ P(t))
3. Negation carefully handled to avoid infinite results

**Example Safe Expression:**

{ t | t ∈ Employee ∧ ¬(t.Salary > 50000) }
Safe: Result limited to Employee tuples

**Example Unsafe Expression:**

{ t | ¬(t ∈ Employee) }
Unsafe: Infinite tuples not in Employee

**Making Unsafe Expressions Safe:**

Unsafe:
{ t | ¬∃d ∈ Department (d.DeptID = t.DeptID) }

Safe:
{ t | t ∈ Employee ∧ ¬∃d ∈ Department (d.DeptID = t.DeptID) }
(Restrict to Employee tuples)

### CONVERSION RULES

**TRC to SQL:**

TRC: { t.Name, t.Salary | t ∈ Employee ∧ t.Salary > 50000 }

SQL:
SELECT Name, Salary
FROM Employee
WHERE Salary > 50000;

**DRC to SQL:**

DRC: { <n, s> | <i, n, d, s> ∈ Employee ∧ s > 50000 }

SQL:
SELECT Name, Salary
FROM Employee
WHERE Salary > 50000;

**SQL to TRC:**

SQL:
SELECT e.Name
FROM Employee e, Department d
WHERE e.DeptID = d.DeptID AND d.DeptName = 'IT';

TRC:
{ t.Name | t ∈ Employee ∧ ∃d ∈ Department (t.DeptID = d.DeptID ∧ d.DeptName = 'IT') }

### EXPRESSIVE POWER

**Theorem (Codd's Theorem):**
Relational Algebra ≡ Safe TRC ≡ Safe DRC ≡ SQL (without aggregates)

All express same queries (relationally complete)

**What they CANNOT express:**
- Transitive closure (e.g., find all ancestors)
- Aggregates (SUM, AVG, COUNT) - need extensions
- Recursive queries (need SQL recursive CTEs)`,
          examples: `### EXAMPLE SCHEMA:

**Employee Table:**
| EmpID | Name    | DeptID | Salary |
|-------|---------|--------|--------|
| 101   | Alice   | 10     | 60000  |
| 102   | Bob     | 20     | 55000  |
| 103   | Charlie | 10     | 70000  |
| 104   | Diana   | 30     | 50000  |

**Department Table:**
| DeptID | DeptName | Location |
|--------|----------|----------|
| 10     | IT       | NYC      |
| 20     | HR       | LA       |
| 30     | Sales    | Chicago  |

**Project Table:**
| ProjID | ProjName | DeptID |
|--------|----------|--------|
| P1     | Alpha    | 10     |
| P2     | Beta     | 20     |
| P3     | Gamma    | 10     |

**WorksOn Table:**
| EmpID | ProjID | Hours |
|-------|--------|-------|
| 101   | P1     | 20    |
| 101   | P3     | 15    |
| 102   | P2     | 30    |
| 103   | P1     | 25    |

### TRC EXAMPLES:

**Example 1: Simple Selection**

Query: Find all employees with salary > 55000

TRC:
{ t | t ∈ Employee ∧ t.Salary > 55000 }

Result:
| EmpID | Name    | DeptID | Salary |
|-------|---------|--------|--------|
| 101   | Alice   | 10     | 60000  |
| 103   | Charlie | 10     | 70000  |

SQL:
SELECT * FROM Employee WHERE Salary > 55000;

**Example 2: Projection**

Query: Find names of employees earning > 55000

TRC:
{ t.Name | t ∈ Employee ∧ t.Salary > 55000 }

Result:
| Name    |
|---------|
| Alice   |
| Charlie |

SQL:
SELECT Name FROM Employee WHERE Salary > 55000;

**Example 3: Join with Existential Quantifier**

Query: Find names of employees in IT department

TRC:
{ t.Name | t ∈ Employee ∧ ∃d ∈ Department (t.DeptID = d.DeptID ∧ d.DeptName = 'IT') }

Result:
| Name    |
|---------|
| Alice   |
| Charlie |

SQL:
SELECT e.Name
FROM Employee e
WHERE EXISTS (
    SELECT 1
    FROM Department d
    WHERE e.DeptID = d.DeptID AND d.DeptName = 'IT'
);

**Example 4: Multiple Conditions**

Query: Find employees in NYC earning > 55000

TRC:
{ t.Name, t.Salary | t ∈ Employee ∧ ∃d ∈ Department (t.DeptID = d.DeptID ∧ d.Location = 'NYC' ∧ t.Salary > 55000) }

Result:
| Name    | Salary |
|---------|--------|
| Alice   | 60000  |
| Charlie | 70000  |

SQL:
SELECT e.Name, e.Salary
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID
WHERE d.Location = 'NYC' AND e.Salary > 55000;

**Example 5: Universal Quantifier**

Query: Find employees who work on ALL projects in their department

TRC:
{ t.Name | t ∈ Employee ∧ ∀p ∈ Project (p.DeptID ≠ t.DeptID ∨ ∃w ∈ WorksOn (w.EmpID = t.EmpID ∧ w.ProjID = p.ProjID)) }

Explanation:
- For all projects p
- Either p is not in employee's department OR employee works on p

Result:
| Name  |
|-------|
| Alice |
(Alice works on both IT projects P1 and P3)

SQL:
SELECT e.Name
FROM Employee e
WHERE NOT EXISTS (
    SELECT p.ProjID
    FROM Project p
    WHERE p.DeptID = e.DeptID
    AND p.ProjID NOT IN (
        SELECT w.ProjID
        FROM WorksOn w
        WHERE w.EmpID = e.EmpID
    )
);

**Example 6: Negation**

Query: Find employees NOT in IT department

TRC:
{ t.Name | t ∈ Employee ∧ ¬∃d ∈ Department (t.DeptID = d.DeptID ∧ d.DeptName = 'IT') }

Result:
| Name  |
|-------|
| Bob   |
| Diana |

SQL:
SELECT Name
FROM Employee
WHERE DeptID NOT IN (
    SELECT DeptID FROM Department WHERE DeptName = 'IT'
);

### DRC EXAMPLES:

**Example 7: Simple Selection (DRC)**

Query: Find employee IDs and names with salary > 55000

DRC:
{ <i, n> | ∃d, s (<i, n, d, s> ∈ Employee ∧ s > 55000) }

Result:
| EmpID | Name    |
|-------|---------|
| 101   | Alice   |
| 103   | Charlie |

SQL:
SELECT EmpID, Name FROM Employee WHERE Salary > 55000;

**Example 8: Join (DRC)**

Query: Find employee names and their department names

DRC:
{ <en, dn> | ∃ei, ed, es, did, dl (
    <ei, en, ed, es> ∈ Employee ∧
    <did, dn, dl> ∈ Department ∧
    ed = did
) }

Result:
| EmpName | DeptName |
|---------|----------|
| Alice   | IT       |
| Bob     | HR       |
| Charlie | IT       |
| Diana   | Sales    |

SQL:
SELECT e.Name AS EmpName, d.DeptName
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID;

**Example 9: Universal Quantifier (DRC)**

Query: Find students enrolled in all courses

Assume:
**Student**: <StudentID, Name>
**Course**: <CourseID, CourseName>
**Enrollment**: <StudentID, CourseID>

DRC:
{ <sid> | ∃sn (<sid, sn> ∈ Student ∧
    ∀cid (∃cn (<cid, cn> ∈ Course) ⇒
        ∃ (<sid, cid> ∈ Enrollment))
) }

SQL:
SELECT s.StudentID
FROM Student s
WHERE NOT EXISTS (
    SELECT c.CourseID
    FROM Course c
    WHERE NOT EXISTS (
        SELECT *
        FROM Enrollment e
        WHERE e.StudentID = s.StudentID
          AND e.CourseID = c.CourseID
    )
);

**Example 10: Complex Query with Multiple Quantifiers**

Query: Find departments where all employees earn > 50000

TRC:
{ d.DeptName | d ∈ Department ∧
    ∀t ∈ Employee (t.DeptID ≠ d.DeptID ∨ t.Salary > 50000)
}

Explanation:
- For all employees t
- Either t is not in this department OR t.Salary > 50000

DRC:
{ <dn> | ∃did, dl (<did, dn, dl> ∈ Department ∧
    ∀ei, en, ed, es (
        <ei, en, ed, es> ∈ Employee ⇒
        (ed ≠ did ∨ es > 50000)
    ))
}

SQL:
SELECT d.DeptName
FROM Department d
WHERE NOT EXISTS (
    SELECT *
    FROM Employee e
    WHERE e.DeptID = d.DeptID AND e.Salary <= 50000
);

### SAFETY EXAMPLES:

**Example 11: Unsafe Expression**

Unsafe:
{ t | ¬(t ∈ Employee) }

Why unsafe? Result includes infinite tuples not in Employee

Safe version:
Not possible to make this safe meaningfully

**Example 12: Safe Expression with Negation**

Query: Find employees NOT working on any project

Unsafe:
{ t | t ∈ Employee ∧ ¬∃w ∈ WorksOn (w.EmpID = t.EmpID) }

Actually this IS safe because:
1. t bounded to Employee
2. Result limited to Employee tuples

Result:
| EmpID | Name  | DeptID | Salary |
|-------|-------|--------|--------|
| 104   | Diana | 30     | 50000  |

SQL:
SELECT *
FROM Employee e
WHERE NOT EXISTS (
    SELECT * FROM WorksOn w WHERE w.EmpID = e.EmpID
);`,
          practical: `### PRACTICAL APPLICATIONS:

**1. Query Language Foundation:**

Relational calculus is the theoretical basis for SQL's SELECT statement.

SQL SELECT = TRC/DRC expression

**2. Query Optimization:**

Understanding calculus helps:
- Rewrite queries for efficiency
- Understand query equivalences
- Recognize optimization opportunities

**3. Formal Verification:**

Prove two queries are equivalent using calculus

Query 1 (SQL):
SELECT Name FROM Employee WHERE Salary > 50000;

Query 2 (SQL):
SELECT Name FROM Employee WHERE NOT (Salary <= 50000);

Both equivalent to:
{ t.Name | t ∈ Employee ∧ t.Salary > 50000 }

**4. Database Theory:**

- Prove query language completeness
- Study expressiveness limitations
- Understand decidability

**5. Advanced Query Features:**

Calculus forms basis for:
- Nested subqueries
- Correlated subqueries
- EXISTS/NOT EXISTS
- ALL/ANY quantifiers

### SQL TO CALCULUS PATTERNS:

**EXISTS → ∃**

SQL:
SELECT e.Name
FROM Employee e
WHERE EXISTS (
    SELECT * FROM Department d
    WHERE e.DeptID = d.DeptID AND d.DeptName = 'IT'
);

TRC:
{ t.Name | t ∈ Employee ∧ ∃d ∈ Department (t.DeptID = d.DeptID ∧ d.DeptName = 'IT') }

**NOT EXISTS → ∀ (negated)**

SQL:
SELECT e.Name
FROM Employee e
WHERE NOT EXISTS (
    SELECT * FROM WorksOn w
    WHERE w.EmpID = e.EmpID
);

TRC:
{ t.Name | t ∈ Employee ∧ ¬∃w ∈ WorksOn (w.EmpID = t.EmpID) }

Or equivalently:
{ t.Name | t ∈ Employee ∧ ∀w ∈ WorksOn (w.EmpID ≠ t.EmpID) }

**ALL → ∀**

SQL:
SELECT Name
FROM Employee
WHERE Salary >= ALL (SELECT Salary FROM Employee);

TRC:
{ t.Name | t ∈ Employee ∧ ∀s ∈ Employee (t.Salary ≥ s.Salary) }

**ANY → ∃**

SQL:
SELECT Name
FROM Employee
WHERE Salary > ANY (SELECT Salary FROM Employee WHERE DeptID = 10);

TRC:
{ t.Name | t ∈ Employee ∧ ∃s ∈ Employee (s.DeptID = 10 ∧ t.Salary > s.Salary) }

### TOOLS FOR PRACTICE:

1. **Paper and Pencil**: Best for learning
2. **Logic Proof Assistants**: Coq, Isabelle
3. **Relational Calculus Interpreters**: Some academic tools
4. **SQL**: Practice by writing equivalent SQL

### COMMON MISTAKES:

**Mistake 1: Forgetting Domain Restriction**

Wrong:
{ t | t.Salary > 50000 }

Right:
{ t | t ∈ Employee ∧ t.Salary > 50000 }

**Mistake 2: Incorrect Quantifier Usage**

Wrong (for "employees in IT"):
{ t.Name | ∀d ∈ Department (t.DeptID = d.DeptID ∧ d.DeptName = 'IT') }

Right:
{ t.Name | t ∈ Employee ∧ ∃d ∈ Department (t.DeptID = d.DeptID ∧ d.DeptName = 'IT') }

**Mistake 3: Unsafe Expressions**

Wrong:
{ t | ¬(t ∈ Employee) }

Right:
{ t | t ∈ SomeRelation ∧ ¬(t ∈ Employee) }

**Mistake 4: Confusing ∀ with ∃**

"Find employees working on project P1":
Wrong: ∀w ∈ WorksOn (w.ProjID = 'P1')
Right: ∃w ∈ WorksOn (w.EmpID = t.EmpID ∧ w.ProjID = 'P1')

### INTERVIEW TIPS:

1. Remember: ∃ = OR, ∀ = AND (loosely)
2. Universal quantifier often used with implication (⇒)
3. Double negation for "for all": ¬∃ ≡ ∀¬
4. Always specify tuple variable domain (t ∈ R)
5. Check safety: Result must be finite`,
          exam: `### IMPORTANT EXAM QUESTIONS:

**1. Define Tuple Relational Calculus (TRC) and Domain Relational Calculus (DRC).**
   TRC: Variables range over tuples
   DRC: Variables range over domain values

**2. What are existential (∃) and universal (∀) quantifiers? Give examples.**
   ∃: "There exists", ∀: "For all"

**3. Explain the safety of relational calculus expressions. Why is it important?**
   Prevents infinite results; ensures computability

**4. Give an example of an unsafe expression and explain why it's unsafe.**
   { t | ¬(t ∈ R) } - includes infinite tuples not in R

**5. Convert the following SQL to TRC:**
   SELECT Name FROM Employee WHERE Salary > 50000;
   
   Answer: { t.Name | t ∈ Employee ∧ t.Salary > 50000 }

**6. Convert the following TRC to SQL:**
   { t.Name | t ∈ Employee ∧ ∃d ∈ Department (t.DeptID = d.DeptID ∧ d.DeptName = 'IT') }
   
   Answer:
   SELECT e.Name
   FROM Employee e, Department d
   WHERE e.DeptID = d.DeptID AND d.DeptName = 'IT';

**7. Write TRC expression: Find employees earning more than all employees in Dept 10**

   Answer: { t.Name | t ∈ Employee ∧ ∀s ∈ Employee (s.DeptID ≠ 10 ∨ t.Salary > s.Salary) }

**8. Write DRC expression: Find names and salaries of IT employees**

   Answer: { <n, s> | ∃i, d (<i, n, d, s> ∈ Employee ∧ ∃dn, l (<d, dn, l> ∈ Department ∧ dn = 'IT')) }

**9. Explain De Morgan's laws in context of relational calculus quantifiers.**
   - ¬(∃t (P(t))) ≡ ∀t (¬P(t))
   - ¬(∀t (P(t))) ≡ ∃t (¬P(t))

**10. Compare Tuple Relational Calculus and Domain Relational Calculus.**
   TRC: More compact, closer to SQL
   DRC: More explicit, closer to first-order logic

**11. State and prove Codd's Theorem.**
    Relational Algebra ≡ Safe TRC ≡ Safe DRC (same expressive power)

**12. Write TRC expression: Find students enrolled in all courses**

    Assume: Student(SID, Name), Course(CID, Name), Enrollment(SID, CID)
    
    Answer:
    { t.Name | t ∈ Student ∧ ∀c ∈ Course (∃e ∈ Enrollment (e.SID = t.SID ∧ e.CID = c.CID)) }

**13. Explain the difference between relational algebra and relational calculus.**
    Algebra: Procedural (how to compute)
    Calculus: Declarative (what to compute)
    Both relationally complete

**14. Give TRC expressions for:**
    a) Selection: { t | t ∈ R ∧ t.A > 5 }
    b) Projection: { t.A, t.B | t ∈ R }
    c) Join: { <t, s> | t ∈ R ∧ s ∈ S ∧ t.A = s.A }
    d) Union: { t | t ∈ R ∨ t ∈ S }
    e) Difference: { t | t ∈ R ∧ ¬(t ∈ S) }

**15. Convert complex SQL with nested subqueries to TRC:**

    SQL:
    SELECT e.Name
    FROM Employee e
    WHERE e.Salary > (SELECT AVG(Salary) FROM Employee)
    AND EXISTS (
        SELECT * FROM WorksOn w
        WHERE w.EmpID = e.EmpID AND w.Hours > 20
    );
    
    TRC:
    { t.Name | t ∈ Employee ∧
        t.Salary > (average of all salaries) ∧
        ∃w ∈ WorksOn (w.EmpID = t.EmpID ∧ w.Hours > 20)
    }
    
    Note: Aggregates not directly expressible in basic calculus

### QUICK REVISION:

**TRC Syntax:**
{ t | P(t) } or { t.A1, t.A2, ... | P(t) }

**DRC Syntax:**
{ <x1, x2, ...> | P(x1, x2, ...) }

**Quantifiers:**
- ∃t ∈ R (P(t)): There exists
- ∀t ∈ R (P(t)): For all

**Logical Operators:**
- ∧: AND
- ∨: OR
- ¬: NOT
- ⇒: IMPLIES (A ⇒ B ≡ ¬A ∨ B)

**De Morgan's Laws:**
- ¬(∃t (P(t))) ≡ ∀t (¬P(t))
- ¬(∀t (P(t))) ≡ ∃t (¬P(t))

**SQL Equivalences:**
- SELECT → Projection { t.A, t.B | ... }
- WHERE → Selection { t | ... ∧ condition }
- JOIN → Join { t | ∃s ∈ S (...) }
- EXISTS → ∃
- NOT EXISTS → ¬∃ or ∀¬
- ALL → ∀
- ANY → ∃

**Safety:**
- Must restrict variables to finite domains
- Result must be finite
- { t | t ∈ R ∧ ... } is safe
- { t | ¬(t ∈ R) } is unsafe`,
          takeaways: `### KEY TAKEAWAYS:

✓ **Relational calculus is declarative** (what to compute), algebra is procedural (how to compute)

✓ **Two variants**: Tuple Relational Calculus (TRC) and Domain Relational Calculus (DRC)

✓ **TRC variables range over tuples**, DRC variables range over domain values

✓ **General form**: { t | P(t) } where P(t) is a logical predicate

✓ **Quantifiers**: ∃ (exists) and ∀ (for all) express complex conditions

✓ **∃ used for EXISTS, ANY** in SQL; **∀ used for ALL, NOT EXISTS** (negated)

✓ **Safety crucial**: Expressions must produce finite results

✓ **Unsafe expressions** allow infinite results (e.g., { t | ¬(t ∈ R) })

✓ **Safe expressions** restrict variables to specific relations

✓ **De Morgan's laws**: ¬∃ ≡ ∀¬ (useful for rewriting)

✓ **Codd's Theorem**: Relational Algebra ≡ Safe TRC ≡ Safe DRC (all relationally complete)

✓ **Universal quantifier pattern**: ∀t (P(t) ⇒ Q(t)) means "for all t satisfying P, Q is true"

✓ **TRC is theoretical basis for SQL SELECT** statements

✓ **Understanding calculus helps**: Write complex SQL, understand query semantics, optimize queries

✓ **All three equivalent**: Relational Algebra, TRC, DRC can express same queries

REMEMBER: Relational calculus provides mathematical foundation for SQL. While you write SQL in practice, understanding calculus helps you reason about query correctness, equivalence, and optimization!`
        }
      },
      {
        id: "sql-ddl-dml-plsql",
        title: "SQL DDL, DML, and PL/SQL",
        subtopics: ["Data Definition Language", "Data Manipulation Language", "PL/SQL Basics", "Procedures", "Functions", "Triggers", "Cursors", "Exception Handling"],
        clos: ["CLO04", "CLO05"],
        cos: ["CO03"],
        content: {
          introduction: "SQL (Structured Query Language) is the standard language for relational databases, while PL/SQL (Procedural Language/SQL) extends SQL with procedural programming capabilities. Together, they provide complete database application development—from schema definition to complex business logic implementation.",
          concept: `### SQL Components:

**1. DDL (Data Definition Language)**
   Defines database structure
   Commands: CREATE, ALTER, DROP, TRUNCATE

**2. DML (Data Manipulation Language)**
   Manipulates data
   Commands: SELECT, INSERT, UPDATE, DELETE

**3. DCL (Data Control Language)**
   Controls access
   Commands: GRANT, REVOKE

**4. TCL (Transaction Control Language)**
   Manages transactions
   Commands: COMMIT, ROLLBACK, SAVEPOINT

### PL/SQL:

Oracle's procedural extension to SQL that adds:
- Variables and constants
- Control structures (IF, LOOP, CASE)
- Procedures and functions
- Exception handling
- Cursors for row-by-row processing
- Triggers for automatic actions

PL/SQL Block Structure:
\`\`\`sql
DECLARE
    -- Variable declarations
BEGIN
    -- Executable statements
EXCEPTION
    -- Exception handling
END;
\`\`\``,
          technicalDepth: `### DATA DEFINITION LANGUAGE (DDL)

**CREATE TABLE:**

\`\`\`sql
CREATE TABLE table_name (
    column1 datatype constraints,
    column2 datatype constraints,
    ...
    table_constraints
);
\`\`\`

**Data Types:**
- **Numeric**: INT, DECIMAL(p,s), FLOAT, DOUBLE
- **String**: CHAR(n), VARCHAR(n), TEXT
- **Date/Time**: DATE, TIME, DATETIME, TIMESTAMP
- **Binary**: BLOB, BYTEA
- **Boolean**: BOOLEAN
- **JSON**: JSON, JSONB (PostgreSQL)

**Constraints:**

1. PRIMARY KEY:
   - Uniquely identifies each row
   - Cannot be NULL
   - One per table
   
   \`\`\`sql
   CREATE TABLE Employee (
       EmpID INT PRIMARY KEY,
       Name VARCHAR(100)
   );
   \`\`\`

2. FOREIGN KEY:
   - References primary key in another table
   - Enforces referential integrity
   
   \`\`\`sql
   CREATE TABLE Order (
       OrderID INT PRIMARY KEY,
       CustomerID INT,
       FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
           ON DELETE CASCADE
           ON UPDATE CASCADE
   );
   \`\`\`
   
   Actions:
   - CASCADE: Delete/update related rows
   - SET NULL: Set foreign key to NULL
   - SET DEFAULT: Set to default value
   - NO ACTION/RESTRICT: Reject operation

3. UNIQUE:
   - Ensures all values different
   - Can have multiple per table
   - Can be NULL (unless NOT NULL specified)
   
   \`\`\`sql
   Email VARCHAR(100) UNIQUE
   \`\`\`

4. NOT NULL:
   - Value required
   
   \`\`\`sql
   Name VARCHAR(100) NOT NULL
   \`\`\`

5. CHECK:
   - Custom constraint
   
   \`\`\`sql
   Age INT CHECK (Age >= 18 AND Age <= 100)
   Salary DECIMAL(10,2) CHECK (Salary > 0)
   \`\`\`

6. DEFAULT:
   - Default value if not specified
   
   \`\`\`sql
   Status VARCHAR(20) DEFAULT 'Active'
   CreatedDate DATE DEFAULT CURRENT_DATE
   \`\`\`

**ALTER TABLE:**

\`\`\`sql
-- Add column
ALTER TABLE Employee ADD Email VARCHAR(100);

-- Modify column
ALTER TABLE Employee MODIFY Salary DECIMAL(12,2);
-- or ALTER COLUMN in some databases

-- Drop column
ALTER TABLE Employee DROP COLUMN Email;

-- Add constraint
ALTER TABLE Employee ADD CONSTRAINT chk_salary CHECK (Salary > 0);

-- Drop constraint
ALTER TABLE Employee DROP CONSTRAINT chk_salary;

-- Rename table
ALTER TABLE Employee RENAME TO Staff;
\`\`\`

**DROP TABLE:**

\`\`\`sql
DROP TABLE Employee;  -- Delete table and data
DROP TABLE IF EXISTS Employee;  -- No error if doesn't exist
\`\`\`

**TRUNCATE TABLE:**

\`\`\`sql
TRUNCATE TABLE Employee;  -- Delete all rows, keep structure
-- Faster than DELETE, cannot rollback in some databases
\`\`\`

**CREATE INDEX:**

\`\`\`sql
CREATE INDEX idx_name ON Employee(Name);
CREATE UNIQUE INDEX idx_email ON Employee(Email);
CREATE INDEX idx_dept_sal ON Employee(DeptID, Salary);  -- Composite
\`\`\`

**CREATE VIEW:**

\`\`\`sql
CREATE VIEW HighEarners AS
SELECT Name, Salary, DeptID
FROM Employee
WHERE Salary > 50000;

-- Query view like a table
SELECT * FROM HighEarners WHERE DeptID = 10;
\`\`\`

### DATA MANIPULATION LANGUAGE (DML)

**INSERT:**

\`\`\`sql
-- Single row
INSERT INTO Employee (EmpID, Name, DeptID, Salary)
VALUES (101, 'Alice', 10, 60000);

-- Multiple rows
INSERT INTO Employee VALUES
    (102, 'Bob', 20, 55000),
    (103, 'Charlie', 10, 70000);

-- From SELECT
INSERT INTO HighSalaryEmp
SELECT * FROM Employee WHERE Salary > 50000;
\`\`\`

**UPDATE:**

\`\`\`sql
-- Update specific rows
UPDATE Employee
SET Salary = Salary * 1.10
WHERE DeptID = 10;

-- Update multiple columns
UPDATE Employee
SET Salary = 65000, DeptID = 20
WHERE EmpID = 101;

-- Update with subquery
UPDATE Employee
SET Salary = (SELECT AVG(Salary) FROM Employee)
WHERE EmpID = 101;
\`\`\`

**DELETE:**

\`\`\`sql
-- Delete specific rows
DELETE FROM Employee WHERE DeptID = 30;

-- Delete all rows (slower than TRUNCATE)
DELETE FROM Employee;

-- Delete with subquery
DELETE FROM Employee
WHERE Salary < (SELECT AVG(Salary) FROM Employee);
\`\`\`

**SELECT:**

\`\`\`sql
-- Basic SELECT
SELECT Name, Salary FROM Employee;

-- WHERE clause
SELECT * FROM Employee WHERE Salary > 50000;

-- ORDER BY
SELECT * FROM Employee ORDER BY Salary DESC;

-- LIMIT/OFFSET (pagination)
SELECT * FROM Employee LIMIT 10 OFFSET 20;

-- DISTINCT
SELECT DISTINCT DeptID FROM Employee;

-- Aggregate functions
SELECT 
    DeptID,
    COUNT(*) AS NumEmployees,
    AVG(Salary) AS AvgSalary,
    MIN(Salary) AS MinSalary,
    MAX(Salary) AS MaxSalary,
    SUM(Salary) AS TotalSalary
FROM Employee
GROUP BY DeptID
HAVING AVG(Salary) > 55000;

-- Joins
SELECT e.Name, d.DeptName
FROM Employee e
INNER JOIN Department d ON e.DeptID = d.DeptID;

-- Subqueries
SELECT Name
FROM Employee
WHERE Salary > (SELECT AVG(Salary) FROM Employee);

-- EXISTS
SELECT Name
FROM Employee e
WHERE EXISTS (
    SELECT 1 FROM WorksOn w
    WHERE w.EmpID = e.EmpID
);

-- CASE expression
SELECT Name, Salary,
    CASE
        WHEN Salary < 50000 THEN 'Low'
        WHEN Salary BETWEEN 50000 AND 70000 THEN 'Medium'
        ELSE 'High'
    END AS SalaryGrade
FROM Employee;
\`\`\`

### PL/SQL BASICS

**Block Structure:**

\`\`\`sql
DECLARE
    -- Variable declarations
    v_name VARCHAR2(100);
    v_salary NUMBER := 50000;  -- Default value
    c_bonus CONSTANT NUMBER := 0.10;  -- Constant
BEGIN
    -- Executable statements
    SELECT Name, Salary INTO v_name, v_salary
    FROM Employee WHERE EmpID = 101;
    
    DBMS_OUTPUT.PUT_LINE('Employee: ' || v_name);
    DBMS_OUTPUT.PUT_LINE('Salary: ' || v_salary);
EXCEPTION
    -- Exception handling
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Employee not found');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/
\`\`\`

**Variables and Data Types:**

\`\`\`sql
DECLARE
    v_count NUMBER;
    v_name VARCHAR2(100);
    v_hire_date DATE;
    v_is_active BOOLEAN := TRUE;
    
    -- %TYPE: Match column data type
    v_salary Employee.Salary%TYPE;
    
    -- %ROWTYPE: Match entire row
    v_emp Employee%ROWTYPE;
BEGIN
    v_count := 10;
    v_emp.Name := 'Alice';
END;
/
\`\`\`

**Control Structures:**

**IF Statement:**
\`\`\`sql
IF v_salary > 70000 THEN
    DBMS_OUTPUT.PUT_LINE('High earner');
ELSIF v_salary > 50000 THEN
    DBMS_OUTPUT.PUT_LINE('Medium earner');
ELSE
    DBMS_OUTPUT.PUT_LINE('Low earner');
END IF;
\`\`\`

**CASE Statement:**
\`\`\`sql
CASE v_grade
    WHEN 'A' THEN DBMS_OUTPUT.PUT_LINE('Excellent');
    WHEN 'B' THEN DBMS_OUTPUT.PUT_LINE('Good');
    ELSE DBMS_OUTPUT.PUT_LINE('Average');
END CASE;
\`\`\`

**Loops:**

Simple LOOP:
\`\`\`sql
LOOP
    v_count := v_count + 1;
    EXIT WHEN v_count > 10;
END LOOP;
\`\`\`

WHILE LOOP:
\`\`\`sql
WHILE v_count <= 10 LOOP
    v_count := v_count + 1;
END LOOP;
\`\`\`

FOR LOOP:
\`\`\`sql
FOR i IN 1..10 LOOP
    DBMS_OUTPUT.PUT_LINE(i);
END LOOP;

-- Reverse
FOR i IN REVERSE 1..10 LOOP
    DBMS_OUTPUT.PUT_LINE(i);
END LOOP;
\`\`\`

### CURSORS

**Implicit Cursors:** Automatically created by Oracle for SQL statements

\`\`\`sql
BEGIN
    UPDATE Employee SET Salary = Salary * 1.10;
    
    DBMS_OUTPUT.PUT_LINE('Rows updated: ' || SQL%ROWCOUNT);
    
    IF SQL%FOUND THEN
        DBMS_OUTPUT.PUT_LINE('At least one row updated');
    END IF;
END;
/
\`\`\`

**Explicit Cursors:** Programmer-declared for SELECT statements

\`\`\`sql
DECLARE
    CURSOR emp_cursor IS
        SELECT EmpID, Name, Salary
        FROM Employee
        WHERE DeptID = 10;
    
    v_emp_id Employee.EmpID%TYPE;
    v_name Employee.Name%TYPE;
    v_salary Employee.Salary%TYPE;
BEGIN
    OPEN emp_cursor;
    
    LOOP
        FETCH emp_cursor INTO v_emp_id, v_name, v_salary;
        EXIT WHEN emp_cursor%NOTFOUND;
        
        DBMS_OUTPUT.PUT_LINE(v_name || ': ' || v_salary);
    END LOOP;
    
    CLOSE emp_cursor;
END;
/
\`\`\`

**Cursor FOR Loop:** Simpler syntax

\`\`\`sql
DECLARE
    CURSOR emp_cursor IS SELECT * FROM Employee;
BEGIN
    FOR emp_rec IN emp_cursor LOOP
        DBMS_OUTPUT.PUT_LINE(emp_rec.Name || ': ' || emp_rec.Salary);
    END LOOP;
END;
/
\`\`\`

**Cursor with Parameters:**

\`\`\`sql
DECLARE
    CURSOR emp_cursor(p_dept_id NUMBER) IS
        SELECT * FROM Employee WHERE DeptID = p_dept_id;
BEGIN
    FOR emp_rec IN emp_cursor(10) LOOP
        DBMS_OUTPUT.PUT_LINE(emp_rec.Name);
    END LOOP;
END;
/
\`\`\`

### PROCEDURES

\`\`\`sql
CREATE OR REPLACE PROCEDURE GiveSalaryRaise(
    p_emp_id IN NUMBER,
    p_percentage IN NUMBER,
    p_new_salary OUT NUMBER
) IS
    v_current_salary NUMBER;
BEGIN
    -- Get current salary
    SELECT Salary INTO v_current_salary
    FROM Employee
    WHERE EmpID = p_emp_id;
    
    -- Calculate new salary
    p_new_salary := v_current_salary * (1 + p_percentage/100);
    
    -- Update
    UPDATE Employee
    SET Salary = p_new_salary
    WHERE EmpID = p_emp_id;
    
    COMMIT;
    
    DBMS_OUTPUT.PUT_LINE('Salary updated from ' || v_current_salary || 
                         ' to ' || p_new_salary);
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Employee not found');
        RAISE;
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE;
END;
/

-- Call procedure
DECLARE
    v_new_sal NUMBER;
BEGIN
    GiveSalaryRaise(101, 10, v_new_sal);
    DBMS_OUTPUT.PUT_LINE('New salary: ' || v_new_sal);
END;
/
\`\`\`

### FUNCTIONS

\`\`\`sql
CREATE OR REPLACE FUNCTION CalculateAnnualSalary(
    p_emp_id IN NUMBER
) RETURN NUMBER IS
    v_monthly_salary NUMBER;
    v_annual_salary NUMBER;
BEGIN
    SELECT Salary INTO v_monthly_salary
    FROM Employee
    WHERE EmpID = p_emp_id;
    
    v_annual_salary := v_monthly_salary * 12;
    
    RETURN v_annual_salary;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RETURN NULL;
END;
/

-- Use in SQL
SELECT Name, CalculateAnnualSalary(EmpID) AS AnnualSalary
FROM Employee;

-- Use in PL/SQL
DECLARE
    v_annual NUMBER;
BEGIN
    v_annual := CalculateAnnualSalary(101);
    DBMS_OUTPUT.PUT_LINE('Annual: ' || v_annual);
END;
/
\`\`\`

### TRIGGERS

Automatically execute in response to events (INSERT, UPDATE, DELETE)

**Types:**
- **BEFORE Trigger**: Executes before operation
- **AFTER Trigger**: Executes after operation
- **Row-level Trigger**: Once per affected row (FOR EACH ROW)
- **Statement-level Trigger**: Once per statement

\`\`\`sql
-- Audit trigger
CREATE OR REPLACE TRIGGER Audit_Salary_Changes
AFTER UPDATE OF Salary ON Employee
FOR EACH ROW
BEGIN
    INSERT INTO SalaryAudit (EmpID, OldSalary, NewSalary, ChangeDate, ChangedBy)
    VALUES (:OLD.EmpID, :OLD.Salary, :NEW.Salary, SYSDATE, USER);
END;
/

-- Validation trigger
CREATE OR REPLACE TRIGGER Check_Salary_Range
BEFORE INSERT OR UPDATE OF Salary ON Employee
FOR EACH ROW
BEGIN
    IF :NEW.Salary < 30000 OR :NEW.Salary > 200000 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Salary must be between 30000 and 200000');
    END IF;
END;
/

-- Auto-increment trigger (before sequences were common)
CREATE OR REPLACE TRIGGER Employee_ID_Trigger
BEFORE INSERT ON Employee
FOR EACH ROW
BEGIN
    IF :NEW.EmpID IS NULL THEN
        SELECT Employee_Seq.NEXTVAL INTO :NEW.EmpID FROM DUAL;
    END IF;
END;
/

-- Prevent operations trigger
CREATE OR REPLACE TRIGGER Prevent_Weekend_Changes
BEFORE INSERT OR UPDATE OR DELETE ON Employee
BEGIN
    IF TO_CHAR(SYSDATE, 'DY') IN ('SAT', 'SUN') THEN
        RAISE_APPLICATION_ERROR(-20002, 'No changes allowed on weekends');
    END IF;
END;
/
\`\`\`

**Trigger Pseudo-records:**
- **:OLD**: Old column values (UPDATE, DELETE)
- **:NEW**: New column values (INSERT, UPDATE)

### EXCEPTION HANDLING

**Pre-defined Exceptions:**

\`\`\`sql
BEGIN
    -- Some operations
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        -- SELECT returns no rows
        DBMS_OUTPUT.PUT_LINE('No data found');
        
    WHEN TOO_MANY_ROWS THEN
        -- SELECT INTO returns multiple rows
        DBMS_OUTPUT.PUT_LINE('Too many rows');
        
    WHEN DUP_VAL_ON_INDEX THEN
        -- Duplicate key violation
        DBMS_OUTPUT.PUT_LINE('Duplicate value');
        
    WHEN VALUE_ERROR THEN
        -- Arithmetic, conversion, truncation error
        DBMS_OUTPUT.PUT_LINE('Value error');
        
    WHEN ZERO_DIVIDE THEN
        DBMS_OUTPUT.PUT_LINE('Division by zero');
        
    WHEN OTHERS THEN
        -- Catch all
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLCODE || ' - ' || SQLERRM);
END;
/
\`\`\`

**User-defined Exceptions:**

\`\`\`sql
DECLARE
    e_salary_too_high EXCEPTION;
    v_salary NUMBER;
BEGIN
    SELECT Salary INTO v_salary FROM Employee WHERE EmpID = 101;
    
    IF v_salary > 150000 THEN
        RAISE e_salary_too_high;
    END IF;
    
    DBMS_OUTPUT.PUT_LINE('Salary is acceptable');
EXCEPTION
    WHEN e_salary_too_high THEN
        DBMS_OUTPUT.PUT_LINE('Salary exceeds maximum allowed');
END;
/
\`\`\`

**RAISE_APPLICATION_ERROR:**

\`\`\`sql
BEGIN
    IF some_condition THEN
        RAISE_APPLICATION_ERROR(-20001, 'Custom error message');
    END IF;
END;
/
\`\`\`

### PACKAGES

Group related procedures, functions, types together

\`\`\`sql
-- Package specification (interface)
CREATE OR REPLACE PACKAGE EmployeePkg IS
    PROCEDURE HireEmployee(p_name VARCHAR2, p_dept_id NUMBER, p_salary NUMBER);
    FUNCTION GetEmployeeCount RETURN NUMBER;
    PROCEDURE FireEmployee(p_emp_id NUMBER);
END EmployeePkg;
/

-- Package body (implementation)
CREATE OR REPLACE PACKAGE BODY EmployeePkg IS
    
    PROCEDURE HireEmployee(p_name VARCHAR2, p_dept_id NUMBER, p_salary NUMBER) IS
    BEGIN
        INSERT INTO Employee (Name, DeptID, Salary)
        VALUES (p_name, p_dept_id, p_salary);
        COMMIT;
    END;
    
    FUNCTION GetEmployeeCount RETURN NUMBER IS
        v_count NUMBER;
    BEGIN
        SELECT COUNT(*) INTO v_count FROM Employee;
        RETURN v_count;
    END;
    
    PROCEDURE FireEmployee(p_emp_id NUMBER) IS
    BEGIN
        DELETE FROM Employee WHERE EmpID = p_emp_id;
        COMMIT;
    END;
    
END EmployeePkg;
/

-- Usage
BEGIN
    EmployeePkg.HireEmployee('John Doe', 10, 60000);
    DBMS_OUTPUT.PUT_LINE('Total employees: ' || EmployeePkg.GetEmployeeCount);
END;
/
\`\`\``,
          examples: `All examples integrated in the technicalDepth section above with detailed syntax, use cases, and real-world scenarios.`,
          practical: `### PRACTICAL TIPS:

**Best Practices:**
1. Keep transactions short in procedures
2. Always handle exceptions
3. Use bind variables (:variable) not string concatenation
4. Close cursors explicitly
5. Use packages to organize code
6. Comment complex logic
7. Test with edge cases
8. Use meaningful variable names (v_ for variables, p_ for parameters, c_ for cursors)

**Performance:**
- Use bulk operations for large data sets (BULK COLLECT, FORALL)
- Minimize context switches between SQL and PL/SQL
- Use native compilation for frequently executed code
- Cache frequently accessed data

**Security:**
- Validate all input parameters
- Use bind variables to prevent SQL injection
- Grant minimal privileges
- Encrypt sensitive data

**Real-World Usage:**
- Banking: Procedures for transactions, triggers for audit trails
- E-commerce: Functions for pricing, procedures for order processing
- HR Systems: Procedures for payroll, triggers for employee changes
- Inventory: Triggers for stock updates, functions for reorder calculations`,
          exam: `### IMPORTANT EXAM QUESTIONS:

**DDL:**
1. Write CREATE TABLE with all constraint types
2. Explain difference between DROP and TRUNCATE
3. Add/modify/drop columns using ALTER TABLE
4. Create indexes and views
5. Define foreign key with CASCADE options

**DML:**
1. Write INSERT with multiple rows
2. UPDATE with subquery
3. DELETE with JOIN
4. Complex SELECT with aggregates, GROUP BY, HAVING
5. Nested subqueries with EXISTS/NOT EXISTS

**PL/SQL:**
1. Explain PL/SQL block structure
2. Difference between procedure and function
3. Write cursor with FOR loop
4. Implement exception handling
5. Create trigger for audit logging
6. Explain :OLD and :NEW in triggers
7. What are implicit vs explicit cursors?
8. Write procedure with IN, OUT parameters
9. Create package specification and body
10. Handle user-defined exceptions

**Common Questions:**
- Why use stored procedures?
  Answer: Performance, security, reusability, centralized logic
- When to use triggers?
  Answer: Audit trails, validation, automatic calculations, referential integrity
- Cursor vs bulk operations?
  Answer: Cursors for row-by-row, bulk for large datasets
- Package benefits?
  Answer: Organization, encapsulation, performance (loaded once)

**Quick Revision:**
- DDL: CREATE, ALTER, DROP, TRUNCATE
- DML: INSERT, UPDATE, DELETE, SELECT
- Constraints: PK, FK, UNIQUE, NOT NULL, CHECK, DEFAULT
- PL/SQL: DECLARE-BEGIN-EXCEPTION-END
- Cursor: OPEN, FETCH, CLOSE
- Trigger: BEFORE/AFTER, FOR EACH ROW
- Exception: NO_DATA_FOUND, TOO_MANY_ROWS, OTHERS`,
          takeaways: `### KEY TAKEAWAYS:

✓ **SQL is declarative** (what), **PL/SQL is procedural** (how)

✓ **DDL defines structure**: CREATE, ALTER, DROP, TRUNCATE

✓ **DML manipulates data**: INSERT, UPDATE, DELETE, SELECT

✓ **Constraints enforce integrity**: PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK

✓ **PL/SQL adds programming**: variables, loops, conditions, exceptions

✓ **Cursors enable row-by-row processing** for complex logic

✓ **Procedures for actions** (no return), **functions for calculations** (return value)

✓ **Triggers automate responses** to data changes (INSERT/UPDATE/DELETE)

✓ **Exception handling ensures robustness** and graceful error recovery

✓ **Packages organize related code** into reusable modules

✓ **:OLD and :NEW in triggers** access before/after values

✓ **Bind variables prevent SQL injection** and improve performance

✓ **Stored procedures centralize business logic** in database

REMEMBER: SQL handles set-based operations efficiently. Use PL/SQL when you need procedural logic, complex calculations, or row-by-row processing that can't be expressed in pure SQL!`
        }
      }
    ]
  },
  {
    id: "unit-3",
    title: "UNIT III: Database Design and Normalization",
    topics: [
      {
        id: "keys-constraints-normalization",
        title: "Keys, Constraints, Functional Dependencies, and Normalization",
        subtopics: ["Primary Key", "Candidate Key", "Super Key", "Foreign Key", "Composite Key", "Domain Constraints", "Entity Integrity", "Referential Integrity", "Functional Dependencies", "Armstrong's Axioms", "Normal Forms (1NF-BCNF)", "4NF and 5NF", "Decomposition"],
        clos: ["CLO03", "CLO04"],
        cos: ["CO04"],
        content: {
          introduction: "Poor database design leads to redundancy, inconsistency, and anomalies. A student's address stored in 10 different tables? Deleting a course accidentally deletes all student records? These nightmares are preventable through proper database design using keys, constraints, and normalization. Understanding these concepts is fundamental to creating efficient, maintainable databases.",
          concept: `### Keys

Keys uniquely identify tuples and establish relationships between tables.

**1. Super Key**
- Any set of attributes that uniquely identifies a tuple
- Can have redundant attributes
- Example: {StudentID}, {StudentID, Name}, {StudentID, Email} are all super keys

**2. Candidate Key**
- Minimal super key (no redundant attributes)
- Multiple candidate keys possible
- Example: {StudentID}, {Email} both uniquely identify students

**3. Primary Key**
- Selected candidate key
- One per table
- Cannot be NULL
- Example: StudentID chosen as primary key

**4. Foreign Key**
- References primary key in another table
- Establishes relationships
- Can be NULL (unless specified NOT NULL)
- Enforces referential integrity

**5. Composite Key**
- Primary key with multiple attributes
- Used when single attribute insufficient
- Example: {StudentID, CourseID} in Enrollment table

**6. Alternate Key**
- Candidate keys not chosen as primary key
- Example: If StudentID is primary, Email is alternate key

### Integrity Constraints

**1. Domain Constraints**
- Define valid values for attributes
- Data types, CHECK constraints
- Example: Age BETWEEN 18 AND 100

**2. Entity Integrity**
- Primary key cannot be NULL
- Ensures each entity uniquely identifiable
- Enforced automatically by PRIMARY KEY constraint

**3. Referential Integrity**
- Foreign key must reference existing primary key OR be NULL
- Maintains consistency across relationships
- CASCADE options handle dependent operations

### Functional Dependencies (FDs)

**Definition:** X → Y means if two tuples agree on X, they must agree on Y

**Example:** StudentID → Name (StudentID determines Name)

**Properties:**
- Reflexive: If Y ⊆ X, then X → Y
- Transitive: If X → Y and Y → Z, then X → Z
- Does NOT hold: If X → Y, then Y → X (not symmetric)

### Armstrong's Axioms

Three fundamental rules for deriving FDs:

**1. Reflexivity:** If Y ⊆ X, then X → Y
   Example: {StudentID, Name} → StudentID

**2. Augmentation:** If X → Y, then XZ → YZ
   Example: If StudentID → Name, then {StudentID, CourseID} → {Name, CourseID}

**3. Transitivity:** If X → Y and Y → Z, then X → Z
   Example: StudentID → DeptID and DeptID → DeptName, so StudentID → DeptName

**Derived Rules:**

**4. Union:** If X → Y and X → Z, then X → YZ
**5. Decomposition:** If X → YZ, then X → Y and X → Z
**6. Pseudotransitivity:** If X → Y and WY → Z, then WX → Z

### Normalization

Process of organizing data to minimize redundancy and avoid anomalies.

**Anomalies:**

**Update Anomaly:** Same data repeated, changing one instance leaves inconsistency
**Insertion Anomaly:** Cannot insert data without unrelated data
**Deletion Anomaly:** Deleting data unintentionally deletes other data

**Normal Forms:**

**1NF (First Normal Form):**
- All attributes contain atomic (indivisible) values
- No repeating groups or arrays
- Each cell contains single value

**2NF (Second Normal Form):**
- In 1NF
- No partial dependencies (non-prime attribute dependent on part of candidate key)
- Only applies to tables with composite keys

**3NF (Third Normal Form):**
- In 2NF
- No transitive dependencies (non-prime → non-prime)
- For every X → Y: Either X is superkey OR Y is prime attribute

**BCNF (Boyce-Codd Normal Form):**
- Stricter than 3NF
- For every X → Y: X must be superkey
- Eliminates all anomalies due to FDs

**4NF (Fourth Normal Form):**
- In BCNF
- No multivalued dependencies
- MVD: X →→ Y means X determines set of Y values independently

**5NF (Fifth Normal Form / PJNF):**
- In 4NF
- No join dependencies
- Cannot be decomposed further without loss`,
          technicalDepth: `### DETAILED KEY CONCEPTS

**Attribute Closure (Finding Keys):**

Algorithm to find X+:
1. Result := X
2. For each FD Y → Z in F:
   If Y ⊆ Result, then Result := Result ∪ Z
3. Repeat until Result doesn't change

**Example:**
Given R(A, B, C, D) with FDs: {A → B, B → C, C → D}
Find A+:
- Start: A+ = {A}
- Apply A → B: A+ = {A, B}
- Apply B → C: A+ = {A, B, C}
- Apply C → D: A+ = {A, B, C, D}
- Conclusion: A is a superkey (contains all attributes)

**Minimal Cover (Canonical Cover):**

Minimal set of FDs equivalent to original set.

Algorithm:
1. Decompose: Convert right sides to single attributes
2. Remove redundant: Test each FD for redundancy
3. Remove extraneous: Test each attribute in left side

**Example:**
F = {A → BC, B → C, A → B, AB → C}

Step 1: Decompose
F' = {A → B, A → C, B → C, A → B, AB → C}

Step 2: Remove redundant A → B (duplicate)
F'' = {A → B, A → C, B → C, AB → C}

Step 3: Remove AB → C (derivable from A → B and B → C)
Minimal Cover: {A → B, B → C, A → C}

Actually, A → C derivable from A → B → C
Final Minimal Cover: {A → B, B → C}

### NORMAL FORMS IN DEPTH

**1NF (First Normal Form)**

**Violations:**
- Multivalued attributes: Phone = {123-4567, 234-5678}
- Composite attributes not broken down: Name = "John Doe"
- Repeating groups: Course1, Course2, Course3 columns

**Example Violation:**

| StudentID | Name | Phones |
|-----------|------|--------|
| 101 | Alice | 123-4567, 234-5678 |

**1NF Solution:**

| StudentID | Name | Phone |
|-----------|------|-------|
| 101 | Alice | 123-4567 |
| 101 | Alice | 234-5678 |

**2NF (Second Normal Form)**

Only applies to tables with composite primary keys.

**Violation:** Non-prime attribute partially dependent on primary key

**Example:**
R(StudentID, CourseID, StudentName, CourseName, Grade)
Primary Key: {StudentID, CourseID}
FDs:
- StudentID → StudentName (partial dependency!)
- CourseID → CourseName (partial dependency!)
- {StudentID, CourseID} → Grade

**Problems:**
- Update: Change student name in multiple rows
- Insert: Can't add student without enrolling in course
- Delete: Delete last enrollment, lose student info

**2NF Solution:**
Decompose:
- Student(StudentID, StudentName)
- Course(CourseID, CourseName)
- Enrollment(StudentID, CourseID, Grade)

**3NF (Third Normal Form)**

**Violation:** Transitive dependency (non-prime → non-prime)

**Example:**
R(StudentID, DeptID, DeptName, DeptHead)
Primary Key: StudentID
FDs:
- StudentID → DeptID
- DeptID → DeptName (transitive!)
- DeptID → DeptHead (transitive!)

**Problems:**
- Update: Change dept name in multiple student records
- Insert: Can't add department without students
- Delete: Delete last student in dept, lose dept info

**3NF Solution:**
- Student(StudentID, DeptID)
- Department(DeptID, DeptName, DeptHead)

**BCNF (Boyce-Codd Normal Form)**

**Stricter than 3NF:** Every determinant must be a superkey

**Example where 3NF ≠ BCNF:**

R(Professor, Course, Student)
FDs:
- {Professor, Course} → Student
- {Student, Course} → Professor

Candidate Keys: {Professor, Course}, {Student, Course}
All attributes are prime, so it's in 3NF.

But: Student, Course → Professor where {Student, Course} is not a superkey in context.
Actually, {Student, Course} IS a candidate key, so this IS in BCNF.

**Better Example:**

R(Court, StartTime, EndTime)
FD: Court → EndTime (one court can only end at one time, based on rules)
Candidate Key: {Court, StartTime}

Court → EndTime violates BCNF (Court is not a superkey)

**BCNF Solution:**
- R1(Court, EndTime)
- R2(Court, StartTime)

**4NF (Fourth Normal Form)**

**Multivalued Dependency (MVD):** X →→ Y

Meaning: For each X value, there's a set of Y values independent of other attributes.

**Example:**

R(Professor, Course, Phone)

| Professor | Course | Phone |
|-----------|--------|-------|
| Dr. Smith | DB | 111-1111 |
| Dr. Smith | DB | 222-2222 |
| Dr. Smith | AI | 111-1111 |
| Dr. Smith | AI | 222-2222 |

Professor →→ Course (Professor determines set of courses)
Professor →→ Phone (Professor determines set of phones)
These are independent!

**Problems:**
- Redundancy: Phone numbers repeated for each course
- Update: Change phone, must update multiple rows
- Insert: Can't add phone without adding for all courses

**4NF Solution:**
- ProfessorCourse(Professor, Course)
- ProfessorPhone(Professor, Phone)

**5NF (Fifth Normal Form / Project-Join Normal Form)**

**Join Dependency:** R can be losslessly decomposed into R1, R2, ..., Rn

**Example:**

R(Supplier, Part, Project)
Meaning: Supplier supplies Part to Project

Business Rules:
1. If supplier S supplies part P
2. And project J uses part P
3. And supplier S works on project J
4. Then supplier S supplies part P to project J

This creates a join dependency!

**5NF Solution:**
- SupplierPart(Supplier, Part)
- ProjectPart(Project, Part)
- SupplierProject(Supplier, Project)

**Verification:** JOIN these three recovers original without spurious tuples

### DECOMPOSITION PROPERTIES

**1. Lossless Join Decomposition**

Decomposition R → R1, R2 is lossless if:
R = R1 ⋈ R2

Test: R1 ∩ R2 → R1 or R1 ∩ R2 → R2

**Example:**
R(A, B, C) with A → B
Decompose: R1(A, B), R2(A, C)
R1 ∩ R2 = {A}
A → B (attributes of R1), so lossless!

**2. Dependency Preservation**

All FDs can be checked without joining.

**Example:**
R(A, B, C) with FDs: A → B, B → C
Decompose: R1(A, B), R2(B, C)

Check FDs:
- A → B: Check in R1 ✓
- B → C: Check in R2 ✓
- Dependency preserved!

**Trade-off:** BCNF guarantees lossless but may not preserve dependencies
3NF guarantees both lossless and dependency preservation

### NORMALIZATION ALGORITHM

**3NF Synthesis Algorithm:**

Input: Relation R, FDs F
Output: 3NF decomposition

1. Find minimal cover Fc
2. For each FD X → Y in Fc, create relation(X, Y)
3. If no relation contains a candidate key of R, add one
4. Eliminate redundant relations

**BCNF Decomposition Algorithm:**

Input: Relation R, FDs F
Output: BCNF decomposition

1. If R in BCNF, done
2. Find FD X → Y that violates BCNF
3. Decompose: R1 = XY, R2 = R - (Y - X)
4. Recursively decompose R1 and R2

**Example:**

R(A, B, C, D)
F = {A → B, B → C, C → D}

Minimal Cover: Same (already minimal)

3NF Synthesis:
- R1(A, B) from A → B
- R2(B, C) from B → C
- R3(C, D) from C → D
- Candidate key: A (check: A+ = ABCD)
- R1 contains A, so done

Result: R1(A, B), R2(B, C), R3(C, D)`,
          examples: `### COMPREHENSIVE EXAMPLES

**EXAMPLE 1: Finding Keys**

R(A, B, C, D, E)
FDs: {A → B, BC → E, ED → A}

Find all candidate keys:

**Method: Attribute Classification**
- Left side only: C, D (must be in every key)
- Right side only: B, E (never in key)
- Both sides: A
- Neither: None

Start with {C, D}:
CD+ = {C, D}
Not a key (doesn't include all attributes)

Try adding A: ACD+
- A → B: ACD+ = {A, C, D, B}
- BC → E: ACD+ = {A, C, D, B, E}
- All attributes! ACD is a candidate key.

Try adding others systematically...
Result: Candidate keys = {ACD}

**EXAMPLE 2: 1NF Conversion**

**Unnormalized:**

| OrderID | CustomerName | Items |
|---------|--------------|-------|
| 1 | John | Book, Pen, Notebook |
| 2 | Jane | Laptop |

**Problems:**
- Items column contains multiple values (not atomic)
- Can't easily search for specific item
- Can't efficiently count items per order

**1NF Solution:**

| OrderID | CustomerName | Item |
|---------|--------------|------|
| 1 | John | Book |
| 1 | John | Pen |
| 1 | John | Notebook |
| 2 | Jane | Laptop |

**EXAMPLE 3: 2NF Conversion**

**Table in 1NF:**

StudentCourse(StudentID, CourseID, StudentName, CourseName, Instructor, Grade)

Primary Key: {StudentID, CourseID}

**FDs:**
- StudentID → StudentName (partial dependency!)
- CourseID → CourseName (partial dependency!)
- CourseID → Instructor (partial dependency!)
- {StudentID, CourseID} → Grade

**Anomalies:**
- **Update:** Change student name requires updating all enrollment records
- **Insert:** Can't add student without enrolling in a course
- **Delete:** Drop last course, lose student information

**2NF Solution:**

Student(StudentID, StudentName)
Course(CourseID, CourseName, Instructor)
Enrollment(StudentID, CourseID, Grade)

**Verification:**
- No partial dependencies
- All non-prime attributes fully dependent on entire primary key

**EXAMPLE 4: 3NF Conversion**

**Table in 2NF:**

Employee(EmpID, DeptID, DeptName, DeptLocation, Salary)

Primary Key: EmpID

**FDs:**
- EmpID → DeptID
- EmpID → Salary
- DeptID → DeptName (transitive!)
- DeptID → DeptLocation (transitive!)

**Transitive Path:** EmpID → DeptID → DeptName

**Anomalies:**
- **Update:** Change department name in all employee records
- **Insert:** Can't add department without employees
- **Delete:** Remove last employee, lose department info

**3NF Solution:**

Employee(EmpID, DeptID, Salary)
Department(DeptID, DeptName, DeptLocation)

**EXAMPLE 5: BCNF Conversion**

**Table in 3NF:**

ClassSchedule(Classroom, Period, Course, Professor)

**FDs:**
- {Classroom, Period} → Course
- {Classroom, Period} → Professor
- {Professor, Course} → Classroom (assuming one prof teaches one course in one room)

**Candidate Keys:**
- {Classroom, Period}
- {Professor, Course, Period} (need Period to uniquely identify)

Actually, let's simplify:

**Better Example:**

R(StudentID, Major, Advisor)

**FDs:**
- StudentID → Major
- Major → Advisor (each major has one advisor)

**Candidate Key:** StudentID

**Check BCNF:**
- StudentID → Major: StudentID is superkey ✓
- Major → Advisor: Major is NOT superkey ✗

**Violates BCNF!**

**BCNF Solution:**

R1(Major, Advisor)
R2(StudentID, Major)

**Verification:**
- R1: Major → Advisor, Major is candidate key ✓
- R2: StudentID → Major, StudentID is candidate key ✓

**Note:** This might not preserve the FD StudentID → Advisor directly
To check: Join R1 and R2, derive StudentID → Advisor through Major

**EXAMPLE 6: 4NF Conversion**

**Table with MVD:**

ProfessorCourseTextbook(Professor, Course, Textbook)

| Professor | Course | Textbook |
|-----------|--------|----------|
| Smith | DB | Book A |
| Smith | DB | Book B |
| Smith | AI | Book A |
| Smith | AI | Book B |

**MVDs:**
- Professor →→ Course (Smith teaches {DB, AI})
- Professor →→ Textbook (Smith uses {Book A, Book B})

**Problem:** Every course-textbook combination created (cross product)

**4NF Solution:**

ProfessorCourse(Professor, Course)
ProfessorTextbook(Professor, Textbook)

| Professor | Course |
|-----------|--------|
| Smith | DB |
| Smith | AI |

| Professor | Textbook |
|-----------|----------|
| Smith | Book A |
| Smith | Book B |

**EXAMPLE 7: 5NF Conversion**

**Relation:**

SupplyPartProject(Supplier, Part, Project)

**Business Rules:**
1. Supplier supplies specific parts
2. Project uses specific parts
3. Supplier works on specific projects
4. If conditions 1, 2, 3 met → Supplier supplies Part to Project

**Data:**

| Supplier | Part | Project |
|----------|------|---------|
| S1 | P1 | J1 |
| S1 | P2 | J1 |
| S2 | P1 | J2 |

**Join Dependency:** Can losslessly decompose into three binary relations

**5NF Solution:**

SupplierPart(Supplier, Part)
PartProject(Part, Project)
SupplierProject(Supplier, Project)

**Verification:**

JOIN these three:
SupplierPart ⋈ PartProject ⋈ SupplierProject = Original relation

**EXAMPLE 8: Lossless vs Lossy Decomposition**

**Lossless Example:**

R(A, B, C) with FD: A → B

Decompose: R1(A, B), R2(A, C)

**Test:**
- R1 ∩ R2 = {A}
- A → AB (attributes of R1) ✓
- Lossless!

**Lossy Example:**

R(A, B, C) with FD: A → B

Decompose: R1(A, B), R2(B, C)

**Original Data:**
| A | B | C |
|---|---|---|
| a1 | b1 | c1 |
| a2 | b1 | c2 |

**R1:**
| A | B |
|---|---|
| a1 | b1 |
| a2 | b1 |

**R2:**
| B | C |
|---|---|
| b1 | c1 |
| b1 | c2 |

**Join R1 ⋈ R2:**
| A | B | C |
|---|---|---|
| a1 | b1 | c1 |
| a1 | b1 | c2 | (spurious!)
| a2 | b1 | c1 | (spurious!)
| a2 | b1 | c2 |

**Spurious tuples created! Lossy decomposition!**

**EXAMPLE 9: Dependency Preservation**

R(A, B, C) with FDs: {A → B, B → C, A → C}

**Decomposition 1:**
R1(A, B), R2(B, C)

Check:
- A → B: In R1 ✓
- B → C: In R2 ✓
- A → C: Derivable (A → B in R1, B → C in R2, transitivity)
- Dependency preserved!

**Decomposition 2:**
R1(A, B), R2(A, C)

Check:
- A → B: In R1 ✓
- B → C: Cannot check without JOIN ✗
- NOT dependency preserved

**EXAMPLE 10: Complete Normalization Workflow**

**Original Relation:**

R(OrderID, OrderDate, CustomerID, CustomerName, CustomerCity, ProductID, ProductName, Quantity, UnitPrice)

**Sample Data:**
| OrderID | OrderDate | CustomerID | CustomerName | CustomerCity | ProductID | ProductName | Qty | Price |
|---------|-----------|------------|--------------|--------------|-----------|-------------|-----|-------|
| 1 | 2024-01-01 | C1 | Alice | NYC | P1 | Laptop | 2 | 1000 |
| 1 | 2024-01-01 | C1 | Alice | NYC | P2 | Mouse | 1 | 25 |
| 2 | 2024-01-02 | C2 | Bob | LA | P1 | Laptop | 1 | 1000 |

**FDs:**
- OrderID → OrderDate, CustomerID
- CustomerID → CustomerName, CustomerCity
- ProductID → ProductName, UnitPrice
- {OrderID, ProductID} → Quantity

**Primary Key:** {OrderID, ProductID}

**Check 1NF:** All atomic ✓

**Check 2NF:**
- CustomerID → CustomerName (partial dependency on OrderID part)
- CustomerID → CustomerCity (partial dependency)
- ProductID → ProductName (partial dependency)
- ProductID → UnitPrice (partial dependency)

**Violates 2NF!**

**Convert to 2NF:**

Order(OrderID, OrderDate, CustomerID)
Customer(CustomerID, CustomerName, CustomerCity)
Product(ProductID, ProductName, UnitPrice)
OrderDetail(OrderID, ProductID, Quantity)

**Check 3NF:**

In Order: OrderID → CustomerID → CustomerName (transitive!)

**Violates 3NF!** Customer info transitively dependent

**Already fixed:** Customer separated in 2NF conversion

**Final Schema (3NF):**
- Order(OrderID, OrderDate, CustomerID)
- Customer(CustomerID, CustomerName, CustomerCity)
- Product(ProductID, ProductName, UnitPrice)
- OrderDetail(OrderID, ProductID, Quantity)

**Check BCNF:**
All determinants are candidate keys ✓
**In BCNF!**`,
          practical: `### PRACTICAL DATABASE DESIGN

**Design Workflow:**

1. **Requirements Analysis**
   - Identify entities
   - Identify attributes
   - Identify relationships
   - Document business rules

2. **Conceptual Design (ER Model)**
   - Create ER diagram
   - Define entities and relationships
   - Identify keys

3. **Logical Design (Relational Model)**
   - Convert ER to tables
   - Define FDs
   - Normalize to 3NF/BCNF

4. **Physical Design**
   - Choose data types
   - Create indexes
   - Consider denormalization for performance

5. **Implementation**
   - CREATE TABLE statements
   - Add constraints
   - Create relationships

**Real-World Considerations:**

**When to Denormalize:**
- Read-heavy applications (more SELECTs than UPDATEs)
- Performance critical queries
- Data warehouse / reporting
- Calculated columns (storing aggregates)

**Example:**
Instead of joining Order and OrderDetail for total:
Add TotalAmount column to Order (updated by trigger)

**When to Normalize:**
- Write-heavy applications
- Data integrity critical (banking, medical)
- Frequent updates
- OLTP systems

**Design Patterns:**

**1. Lookup Tables:**
\`\`\`sql
-- Instead of storing country names repeatedly
Country(CountryID, CountryName)
Customer(CustomerID, Name, CountryID)
\`\`\`

**2. Type Tables:**
\`\`\`sql
-- For categorization
ProductType(TypeID, TypeName)
Product(ProductID, ProductName, TypeID)
\`\`\`

**3. Audit Tables:**
\`\`\`sql
-- Track changes
EmployeeHistory(HistoryID, EmpID, OldSalary, NewSalary, ChangeDate)
\`\`\`

**4. Bridge Tables (Many-to-Many):**
\`\`\`sql
Student(StudentID, Name)
Course(CourseID, CourseName)
Enrollment(StudentID, CourseID, Grade)
\`\`\`

**Common Mistakes:**

**Mistake 1: Over-normalization**
Bad: Separate table for every attribute
Good: Balance normalization with performance

**Mistake 2: Under-normalization**
Bad: All data in one table
Good: At least 3NF for OLTP

**Mistake 3: Ignoring Business Rules**
Bad: Generic schema ignoring domain
Good: Model specific business logic

**Mistake 4: Poor Naming**
Bad: Table1, Col1, FK1
Good: Employee, FirstName, DepartmentID

**Mistake 5: Missing Constraints**
Bad: No foreign keys, no checks
Good: Enforce referential integrity

**Tools:**

1. **ER Diagram Tools:**
   - MySQL Workbench
   - draw.io
   - ERDPlus
   - Lucidchart

2. **Normalization Tools:**
   - Paper and pencil (best for learning!)
   - Spreadsheet for FD analysis

3. **SQL Tools:**
   - MySQL Workbench
   - pgAdmin (PostgreSQL)
   - SQL Server Management Studio
   - DBeaver (multi-platform)

**Performance Tips:**

1. **Index foreign keys** for join performance
2. **Index WHERE clause columns** frequently queried
3. **Composite indexes** for multi-column queries
4. **Avoid over-indexing** (slows INSERT/UPDATE)
5. **Analyze query plans** to find bottlenecks

**Documentation:**

Always document:
- ER diagrams
- Table descriptions
- FDs and business rules
- Normalization decisions
- Denormalization rationale
- Index strategy

**Industry Standards:**

- **OLTP (Banking, E-commerce):** 3NF minimum, BCNF preferred
- **OLAP (Data Warehouse):** Star schema (denormalized for queries)
- **Hybrid:** 3NF for transaction tables, materialized views for reporting`,
          exam: `### IMPORTANT EXAM QUESTIONS

**Keys:**

1. **Define and distinguish between super key, candidate key, and primary key with examples.**
   - Super key: Any set uniquely identifying tuple
   - Candidate key: Minimal super key
   - Primary key: Selected candidate key

2. **Find all candidate keys for R(A,B,C,D) with FDs: {A→B, B→C, D→A}**
   Solution: Find attribute closure for combinations starting with attributes only on left/neither side

3. **Explain composite key and foreign key with examples.**
   - Composite: Multiple attributes form key
   - Foreign: References primary key in another table

**Functional Dependencies:**

4. **Define functional dependency. Give examples.**
   X → Y: If two tuples agree on X, they agree on Y

5. **State Armstrong's Axioms and derive union rule.**
   Reflexivity, Augmentation, Transitivity
   Union: From X→Y and X→Z, derive X→YZ

6. **Find attribute closure of AB for R(A,B,C,D) with FDs: {A→C, B→D, C→B}**
   AB+ = {A,B,C,D}

7. **What is minimal cover? Find minimal cover for F = {A→B, B→C, A→C, AB→D}**
   Remove redundant FDs: {A→B, B→C, AB→D}
   (A→C derivable from A→B→C)

**Normalization:**

8. **Explain 1NF, 2NF, 3NF, and BCNF with examples.**
   1NF: Atomic values
   2NF: No partial dependency
   3NF: No transitive dependency
   BCNF: Every determinant is superkey

9. **Given relation and FDs, determine normal form.**
   Check each normal form definition systematically

10. **Convert given relation to 2NF/3NF/BCNF. Show steps.**
    Identify violations, decompose, verify

11. **Explain update, insertion, and deletion anomalies with examples.**
    - Update: Redundant data, inconsistent updates
    - Insertion: Can't insert without unrelated data
    - Deletion: Lose important data unintentionally

12. **What is the difference between 3NF and BCNF?**
    3NF: X→Y where X superkey OR Y prime
    BCNF: X→Y where X must be superkey
    BCNF stricter

13. **Explain 4NF and multivalued dependencies.**
    MVD: X→→Y independent set of values
    4NF: No non-trivial MVDs

14. **What is 5NF? Give an example.**
    No join dependencies
    Cannot decompose further without loss

**Decomposition:**

15. **What is lossless join decomposition? How to test?**
    R = R1 ⋈ R2
    Test: R1∩R2 → R1 or R1∩R2 → R2

16. **Explain dependency preservation. Why important?**
    Check FDs without joining
    Important for constraint enforcement

17. **Show lossy decomposition example with spurious tuples.**
    Provide data showing join creates extra tuples

18. **3NF vs BCNF trade-off: dependency preservation.**
    3NF preserves dependencies, BCNF may not
    3NF often preferred in practice

**Algorithms:**

19. **Describe 3NF synthesis algorithm.**
    Minimal cover → relation per FD → add key → remove redundant

20. **Describe BCNF decomposition algorithm.**
    Find violation → split → recurse

**Constraints:**

21. **Explain entity integrity and referential integrity.**
    Entity: PK not NULL
    Referential: FK references existing PK or NULL

22. **What are CASCADE options in foreign keys?**
    CASCADE: Delete/update related rows
    SET NULL: Set FK to NULL
    RESTRICT: Reject operation

### QUICK REVISION

**Keys Quick Reference:**
- Super Key ⊇ Candidate Key ⊇ Primary Key
- Composite Key: Multiple attributes
- Foreign Key: References PK in another table

**Armstrong's Axioms:**
- Reflexivity: Y⊆X ⇒ X→Y
- Augmentation: X→Y ⇒ XZ→YZ
- Transitivity: X→Y, Y→Z ⇒ X→Z

**Normal Forms:**
- 1NF: Atomic values
- 2NF: 1NF + No partial dependency
- 3NF: 2NF + No transitive dependency
- BCNF: Every determinant is superkey
- 4NF: BCNF + No MVDs
- 5NF: 4NF + No join dependencies

**Anomalies:**
- Update: Redundancy causes inconsistency
- Insert: Can't insert without unrelated data
- Delete: Lose unrelated data

**Decomposition:**
- Lossless: R = R1 ⋈ R2
- Dependency Preserving: Check FDs without join

**Test Shortcuts:**
- Attribute closure: Find keys
- Minimal cover: Simplify FDs
- Check BCNF: Every left side a superkey?
- Lossless: Common attributes determine one side?`,
          takeaways: `### KEY TAKEAWAYS

✓ **Keys uniquely identify tuples**: Super key ⊇ Candidate key ⊇ Primary key

✓ **Foreign keys establish relationships** and enforce referential integrity

✓ **Functional dependency X → Y**: X determines Y (X and Y uniquely paired)

✓ **Armstrong's Axioms** are foundation for deriving FDs: Reflexivity, Augmentation, Transitivity

✓ **Attribute closure (X+)** finds all attributes determined by X (used to find keys)

✓ **Normalization eliminates anomalies** through structured decomposition

✓ **1NF requires atomic values** (no arrays, no repeating groups)

✓ **2NF eliminates partial dependencies** (applies to composite keys)

✓ **3NF eliminates transitive dependencies** (non-prime → non-prime)

✓ **BCNF is stricter than 3NF**: Every determinant must be superkey

✓ **4NF eliminates multivalued dependencies** (independent sets of values)

✓ **5NF eliminates join dependencies** (cannot decompose further)

✓ **Lossless decomposition**: Join recovers original relation without spurious tuples

✓ **Dependency preservation**: Check constraints without joining tables

✓ **Trade-off**: BCNF may not preserve dependencies; 3NF guarantees both lossless and preservation

✓ **Practical design**: Normalize to 3NF/BCNF for OLTP, denormalize for OLAP/reporting

✓ **Anomalies prevented**: Update anomaly, insertion anomaly, deletion anomaly

REMEMBER: Normalization is not about perfection—it's about eliminating redundancy and anomalies while maintaining data integrity. Most real-world OLTP systems use 3NF as a good balance between theory and practice!`
        }
      }
    ]
  },
  {
    id: "unit-4",
    title: "UNIT IV: Transaction Processing and Concurrency Control",
    topics: [
      {
        id: "transactions-concurrency",
        title: "Transactions, ACID Properties, Concurrency Control, and Recovery",
        subtopics: ["Transaction Concept", "ACID Properties", "Transaction States", "Serializability", "Conflict and View Serializability", "Two-Phase Locking", "Timestamp Ordering", "Optimistic Concurrency Control", "Deadlock Handling", "Recovery Techniques"],
        clos: ["CLO05"],
        cos: ["CO05"],
        content: {
          introduction: "Imagine transferring ₹500 from savings to checking. The bank must: (1) deduct ₹500 from savings, (2) add ₹500 to checking. What if the system crashes between steps? You'd lose ₹500! Transactions ensure either both steps happen or neither does—no in-between states. Understanding transactions, concurrency control, and recovery is essential for building reliable database applications.",
          concept: `### Transaction Concept

A **transaction** is a single logical unit of work that accesses and possibly modifies database contents. It consists of a sequence of read and write operations followed by commit or abort.

**Properties:**
- **Atomicity**: All or nothing execution
- **Consistency**: Database constraints maintained
- **Isolation**: Concurrent transactions don't interfere
- **Durability**: Committed changes persist

### ACID Properties

**1. Atomicity (All-or-Nothing)**
- Transaction treated as single unit
- Either all operations execute or none
- Rollback undoes partial execution
- Enforced by transaction management subsystem

**2. Consistency (Correctness)**
- Database moves from one consistent state to another
- Integrity constraints satisfied before and after
- Application programmer's responsibility to write correct transactions
- DBMS enforces constraints

**3. Isolation (Concurrent Execution)**
- Concurrent transactions isolated from each other
- Intermediate state of one transaction invisible to others
- Result same as serial execution
- Enforced by concurrency control subsystem

**4. Durability (Persistence)**
- Once committed, changes permanent
- Survive system failures
- Updates written to non-volatile storage
- Enforced by recovery subsystem

### Transaction States

![Transaction State Diagram](/images/unit4/transaction-states.svg)

1. **Active**: Initial state, executing operations
2. **Partially Committed**: After final operation, before commit
3. **Committed**: Successfully completed, changes permanent
4. **Failed**: Cannot proceed normally (error, abort, deadlock)
5. **Aborted**: Rolled back, database restored to pre-transaction state
   - After abort: Either killed or restarted

### Schedules

A schedule defines execution order of operations from concurrent transactions.

**Types:**

**Serial Schedule**: Transactions execute one after another
- T1 completes before T2 starts
- Always consistent
- Poor concurrency (low throughput)

**Concurrent Schedule**: Operations interleaved
- Better CPU and disk utilization
- Improved throughput and response time
- May cause inconsistencies without proper control

**Goal**: Maximize concurrency while ensuring correctness

### Serializability

A concurrent schedule is serializable if equivalent to some serial schedule.

**Why Important?**
- Serializable schedules guarantee consistency
- Allow concurrent execution without anomalies
- Easier to reason about correctness

**Types:**
1. **Conflict Serializability**
2. **View Serializability**`,
          technicalDepth: `### CONFLICT SERIALIZABILITY

**Conflicting Operations:**

Two operations conflict if:
1. Belong to different transactions
2. Access same data item
3. At least one is a write

**Conflict Types:**
1. **Read-Write (RW)**: T1 reads X, T2 writes X
2. **Write-Read (WR)**: T1 writes X, T2 reads X (dirty read)
3. **Write-Write (WW)**: T1 writes X, T2 writes X (lost update)

**Conflict Equivalence:**

Two schedules are conflict equivalent if:
- Contain same operations
- Every pair of conflicting operations ordered the same way

**Testing Conflict Serializability: Precedence Graph**

Algorithm:
1. Create node for each transaction
2. For each conflict Ti → Tj (Ti's operation before Tj's):
   - Add directed edge Ti → Tj
3. Schedule is conflict serializable ⟺ Graph is acyclic

**Example 1: Serializable Schedule**

\`\`\`
Schedule S:
T1          T2
Read(A)
            Read(A)
Write(A)
            Write(A)
Read(B)
            Read(B)
Write(B)
            Write(B)
\`\`\`

**Precedence Graph:**
- T1 Write(A) before T2 Read(A) → T1 → T2
- T1 Write(A) before T2 Write(A) → T1 → T2
- T1 Write(B) before T2 Read(B) → T1 → T2
- T1 Write(B) before T2 Write(B) → T1 → T2

Graph: T1 → T2 (no cycle)

**Result**: Conflict serializable (equivalent to T1, T2)

**Example 2: Non-Serializable Schedule**

\`\`\`
Schedule S:
T1          T2
Read(A)
            Write(A)
Write(A)
Read(B)
            Read(B)
            Write(B)
Write(B)
\`\`\`

**Precedence Graph:**
- T1 Read(A) before T2 Write(A) → T1 → T2
- T2 Write(A) before T1 Write(A) → T2 → T1

Graph: T1 ⟷ T2 (cycle!)

**Result**: NOT conflict serializable

### VIEW SERIALIZABILITY

**View Equivalence:**

Two schedules S1 and S2 are view equivalent if:

1. **Initial Read**: If Ti reads initial value of X in S1, Ti reads initial value of X in S2
2. **Updated Read**: If Ti reads X written by Tj in S1, Ti reads X written by Tj in S2
3. **Final Write**: If Ti writes final value of X in S1, Ti writes final value of X in S2

**View Serializability:**

Schedule S is view serializable if view equivalent to some serial schedule.

**Relationship:**
- Conflict Serializability ⊆ View Serializability
- Every conflict serializable schedule is view serializable
- Some view serializable schedules are NOT conflict serializable

**Example: View Serializable but NOT Conflict Serializable**

\`\`\`
Schedule S:
T1          T2          T3
Read(A)
            Write(A)
Write(A)
                        Write(A)
\`\`\`

**Check View Equivalence with Serial T1→T2→T3:**
1. Initial Read: T1 reads A initially in both ✓
2. Updated Read: No updated reads in S ✓
3. Final Write: T3 writes final A in both ✓

**Result**: View serializable

**Check Conflict Serializability:**
- T1 Read(A) before T2 Write(A) → T1 → T2
- T2 Write(A) before T1 Write(A) → T2 → T1 (cycle!)

**Result**: NOT conflict serializable

### CONCURRENCY CONTROL PROTOCOLS

### 1. LOCK-BASED PROTOCOLS

**Lock Types:**

**Shared Lock (S-lock)**: Read lock
- Multiple transactions can hold S-lock simultaneously
- Allows reading, prevents writing

**Exclusive Lock (X-lock)**: Write lock
- Only one transaction can hold X-lock
- Allows reading and writing
- Prevents all other locks

**Lock Compatibility Matrix:**

|      | S  | X  |
|------|----|----|
| **S** | ✓  | ✗  |
| **X** | ✗  | ✗  |

**Locking Protocol:**

\`\`\`
Read(X):
  Lock-S(X)
  Read X
  Unlock(X)

Write(X):
  Lock-X(X)
  Write X
  Unlock(X)
\`\`\`

**Problems with Simple Locking:**
- Non-serializable schedules possible
- Need more restrictive protocol

### TWO-PHASE LOCKING (2PL)

**Rules:**

**Phase 1 (Growing Phase):**
- Acquire locks
- Cannot release any locks

**Phase 2 (Shrinking Phase):**
- Release locks
- Cannot acquire any locks

**Theorem**: If all transactions follow 2PL, resulting schedule is conflict serializable.

**Example:**

\`\`\`
T1:
Lock-X(A)     // Growing phase starts
Read(A)
A := A - 50
Write(A)
Lock-X(B)     // Still growing
Read(B)
B := B + 50
Write(B)
Unlock(A)     // Shrinking phase starts
Unlock(B)     // Still shrinking
\`\`\`

**Variants:**

**1. Strict 2PL (S2PL)**
- Hold all exclusive locks until commit/abort
- Prevents cascading rollbacks
- Most commonly used

**2. Rigorous 2PL**
- Hold ALL locks (shared and exclusive) until commit/abort
- Simplifies recovery
- Serialization order = commit order

**Problems with 2PL:**

**1. Cascading Rollback**

\`\`\`
T1          T2
Lock-X(A)
Read(A)
A := A - 50
Write(A)
Unlock(A)   // Released early!
            Lock-X(A)
            Read(A)  // Dirty read
            A := A * 2
            Write(A)
Abort       // Must rollback T2 too!
\`\`\`

Solution: Strict 2PL

**2. Deadlock**

\`\`\`
T1          T2
Lock-X(A)
            Lock-X(B)
Wait for B
            Wait for A  // Deadlock!
\`\`\`

### DEADLOCK HANDLING

**1. Deadlock Prevention**

**Wait-Die Scheme** (non-preemptive):
- Older transaction waits for younger
- Younger aborted if requests lock held by older
- Timestamp determines age

**Wound-Wait Scheme** (preemptive):
- Older transaction "wounds" (aborts) younger
- Younger waits for older
- Less rollbacks than Wait-Die

**2. Deadlock Detection**

**Wait-For Graph:**
- Node for each transaction
- Edge Ti → Tj if Ti waiting for lock held by Tj
- Deadlock ⟺ Cycle in graph

**Detection Algorithm:**
- Periodically check for cycles
- If cycle found, abort victim transaction
- Victim selection: Minimize cost (age, work done, locks held)

**3. Deadlock Recovery**

**Victim Selection Factors:**
- Transaction age (prefer younger)
- Progress made (prefer less work done)
- Number of locks held
- Number of transactions to cascade rollback

### 2. TIMESTAMP-BASED PROTOCOLS

**Idea**: Use timestamps to order transactions without locks

**Timestamp Assignment:**
- TS(Ti): Timestamp when Ti enters system
- TS(Ti) < TS(Tj) means Ti entered before Tj
- Serialization order = timestamp order

**Timestamp Ordering (TO) Protocol:**

For each data item X, maintain:
- **R-timestamp(X)**: Largest timestamp of transaction that read X
- **W-timestamp(X)**: Largest timestamp of transaction that wrote X

**Rules:**

**Read(X) by Ti:**
\`\`\`
if TS(Ti) < W-timestamp(X):
    Reject and rollback Ti  // Trying to read future write
else:
    Execute read
    R-timestamp(X) = max(R-timestamp(X), TS(Ti))
\`\`\`

**Write(X) by Ti:**
\`\`\`
if TS(Ti) < R-timestamp(X):
    Reject and rollback Ti  // Trying to overwrite future read
else if TS(Ti) < W-timestamp(X):
    Reject and rollback Ti  // Trying to overwrite future write
else:
    Execute write
    W-timestamp(X) = TS(Ti)
\`\`\`

**Properties:**
- Conflict serializable (follows timestamp order)
- Deadlock-free (no waiting)
- May cause more rollbacks than 2PL

**Thomas' Write Rule (Optimization):**

Modified Write(X):
\`\`\`
if TS(Ti) < R-timestamp(X):
    Reject and rollback Ti
else if TS(Ti) < W-timestamp(X):
    Ignore write (obsolete)  // Don't rollback!
else:
    Execute write
    W-timestamp(X) = TS(Ti)
\`\`\`

Allows view serializable (not just conflict serializable)

### 3. OPTIMISTIC CONCURRENCY CONTROL (VALIDATION-BASED)

**Assumption**: Conflicts are rare

**Three Phases:**

**1. Read Phase:**
- Read from database
- Write to local copies (not database)
- No locks acquired

**2. Validation Phase:**
- Check if commit would cause serializability violation
- Test if operations conflict with other transactions

**3. Write Phase:**
- If validation succeeds: Write local copies to database
- If validation fails: Abort and restart

**Validation Test:**

For transaction Ti validating:

Check against each Tj that committed during Ti's execution:
1. Tj completed before Ti started (OK)
2. Ti's read phase after Tj's write phase (OK)
3. Ti doesn't read items written by Tj (OK)

**Advantages:**
- No locks (high concurrency when conflicts rare)
- No deadlocks
- Read-only transactions never abort

**Disadvantages:**
- May abort due to conflicts
- Validation overhead
- Best when conflicts actually rare

### MULTI-VERSION CONCURRENCY CONTROL (MVCC)

**Idea**: Keep multiple versions of data items

**Benefits:**
- Readers don't block writers
- Writers don't block readers
- Improved concurrency

**Implementation:**

Each write creates new version:
- X1, X2, X3, ... (versions of X)
- Each version has timestamp

Transaction reads appropriate version:
- Read-timestamp determines which version

**Example (PostgreSQL, Oracle):**

\`\`\`
Time    T1                  T2
1       BEGIN
2       Read(X) → X1
3                           BEGIN
4                           Write(X) → X2
5       Read(X) → X1        // Still reads old version!
6                           COMMIT
7       Read(X) → X1        // Consistent read
8       COMMIT
\`\`\`

**Snapshot Isolation:**
- Transaction sees snapshot of committed data
- Reads always succeed (no blocking)
- Writes checked for conflicts at commit

**MVCC in Practice:**
- PostgreSQL: MVCC by default
- MySQL InnoDB: MVCC for SELECT
- Oracle: Read Consistency

### RECOVERY SYSTEM

**Failure Types:**

**1. Transaction Failure:**
- Logical errors (constraint violation, bad input)
- System errors (deadlock)
- Recovery: Abort transaction

**2. System Crash:**
- Power failure, software bug
- Main memory lost, disk intact
- Recovery: Use logs to restore consistency

**3. Disk Failure:**
- Head crash, disk corruption
- Recovery: Use backup + log

### LOG-BASED RECOVERY

**Write-Ahead Logging (WAL):**

**Rule**: Log record must be written to stable storage before database modified

**Log Records:**

\`\`\`
<Ti start>               // Transaction begins
<Ti, X, V_old, V_new>   // Update record
<Ti commit>              // Transaction commits
<Ti abort>               // Transaction aborts
\`\`\`

**Example:**

\`\`\`
<T1 start>
<T1, A, 1000, 950>  // A: 1000 → 950
<T1, B, 2000, 2050> // B: 2000 → 2050
<T1 commit>
\`\`\`

### RECOVERY ALGORITHMS

**1. DEFERRED DATABASE MODIFICATION**

- Don't write to database until commit
- Log records written during transaction
- At commit: Write changes to database

**Recovery:**
- **Redo**: For committed transactions, replay updates
- **No Undo**: Uncommitted transactions didn't modify database

**2. IMMEDIATE DATABASE MODIFICATION**

- Write to database during transaction execution
- Log records written before database updates (WAL)

**Recovery:**
- **Undo**: For uncommitted transactions, restore old values
- **Redo**: For committed transactions, replay updates

### ARIES RECOVERY ALGORITHM

**(Analysis, Redo, Undo)**

Used by DB2, SQL Server, PostgreSQL (variants)

**Three Phases:**

**1. Analysis Phase:**
- Scan log from last checkpoint
- Identify active transactions at crash
- Determine which pages dirty

**2. Redo Phase:**
- Scan log forward from checkpoint
- Redo all updates (even uncommitted)
- Restores database to state at crash

**3. Undo Phase:**
- Scan log backward
- Undo updates of transactions active at crash
- Restore database to consistent state

**Checkpointing:**

Periodic checkpoint reduces recovery time:
1. Write all dirty pages to disk
2. Write checkpoint record to log
3. Recovery starts from last checkpoint

### RECOVERABILITY

**Recoverable Schedule:**

If Ti reads item written by Tj, Tj must commit before Ti commits.

**Example:**

\`\`\`
T1          T2
Write(A)
            Read(A)  // Dirty read
Commit
            Commit   // OK (T1 committed first)
\`\`\`

**Cascadeless Schedule:**

If Ti reads item written by Tj, Tj must commit before Ti reads.

**Example:**

\`\`\`
T1          T2
Write(A)
Commit
            Read(A)  // Clean read
            Commit
\`\`\`

**Strict Schedule:**

No transaction reads or writes item until last transaction that wrote it commits/aborts.

**Relationship:**

Strict ⊂ Cascadeless ⊂ Recoverable

**Best**: Use Strict 2PL for strict schedules`,
          examples: `### COMPREHENSIVE EXAMPLES

**EXAMPLE 1: ACID Properties in Banking**

\`\`\`sql
-- Transfer $100 from Account A to Account B
BEGIN TRANSACTION;

-- Read balances
DECLARE @balanceA DECIMAL(10,2);
DECLARE @balanceB DECIMAL(10,2);

SELECT @balanceA = Balance FROM Accounts WHERE AccountID = 'A';
SELECT @balanceB = Balance FROM Accounts WHERE AccountID = 'B';

-- Check sufficient funds (Consistency)
IF @balanceA >= 100
BEGIN
    -- Deduct from A (Atomicity)
    UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 'A';
    
    -- Add to B (Atomicity)
    UPDATE Accounts SET Balance = Balance + 100 WHERE AccountID = 'B';
    
    -- Both succeed or both fail
    COMMIT; -- (Durability)
END
ELSE
BEGIN
    -- Insufficient funds
    ROLLBACK;
    PRINT 'Insufficient funds';
END

-- (Isolation): Other transactions don't see intermediate state
\`\`\`

**EXAMPLE 2: Conflict Serializability Analysis**

Schedule S1:
\`\`\`
Time    T1              T2
1       Read(X)
2                       Read(X)
3       X := X - 100
4       Write(X)
5                       X := X + 200
6                       Write(X)
7       Read(Y)
8                       Read(Y)
9       Y := Y + 100
10      Write(Y)
11                      Y := Y + 200
12                      Write(Y)
\`\`\`

**Conflicts:**
1. T1 Write(X) [4] before T2 Write(X) [6] → T1 → T2
2. T1 Write(Y) [10] before T2 Write(Y) [12] → T1 → T2

**Precedence Graph:** T1 → T2 (no cycle)

**Conclusion:** Conflict serializable, equivalent to serial schedule T1→T2

**Final Result:**
- If X=100, Y=100 initially
- After T1→T2: X=200, Y=400

Schedule S2 (Non-Serializable):
\`\`\`
Time    T1              T2
1       Read(X)
2                       Read(Y)
3       X := X - 100
4       Write(X)
5                       Y := Y - 100
6                       Write(Y)
7       Read(Y)
8                       Read(X)
9       Y := Y + 100
10      Write(Y)
11                      X := X + 100
12                      Write(X)
\`\`\`

**Conflicts:**
1. T1 Write(X) [4] before T2 Read(X) [8] → T1 → T2
2. T2 Write(Y) [6] before T1 Read(Y) [7] → T2 → T1

**Precedence Graph:** T1 ⟷ T2 (cycle!)

**Conclusion:** NOT conflict serializable

**EXAMPLE 3: Two-Phase Locking**

Transaction T1 (Withdraw $100):
\`\`\`
BEGIN TRANSACTION;

-- Growing Phase
Lock-S(Accounts)        -- Check existence
Lock-X(Account_A)       -- Will modify

IF Balance_A >= 100:
    Balance_A = Balance_A - 100
    UPDATE...
    
    -- Shrinking Phase (Strict 2PL: at commit)
    COMMIT
    Unlock-X(Account_A)
    Unlock-S(Accounts)
ELSE:
    ROLLBACK
    Unlock-X(Account_A)
    Unlock-S(Accounts)
\`\`\`

**EXAMPLE 4: Deadlock Detection**

\`\`\`
Time    T1                  T2                  T3
1       Lock-X(A)
2                           Lock-X(B)
3                                               Lock-X(C)
4       Request Lock-X(B)   
5       WAIT                Request Lock-X(C)
6                           WAIT                Request Lock-X(A)
7                                               WAIT

Wait-For Graph:
T1 → T2 → T3 → T1 (CYCLE - DEADLOCK!)

Victim Selection: Abort T3 (youngest)

8                                               ABORT
9                           Lock-X(C) granted
10                          COMMIT
11      Lock-X(B) granted
12      COMMIT
\`\`\`

**EXAMPLE 5: Timestamp Ordering**

Transactions:
- T1: TS = 10
- T2: TS = 20
- T3: TS = 30

Data Item X:
- Initial R-TS(X) = 0, W-TS(X) = 0

\`\`\`
Time    Operation           R-TS(X)     W-TS(X)     Result
1       T1: Read(X)         10          0           Success
2       T2: Write(X)        10          20          Success
3       T1: Write(X)        10          20          ABORT
        // TS(T1)=10 < W-TS(X)=20
        // T1 trying to overwrite T2's future write
        
4       T3: Read(X)         30          20          Success
5       T2: Write(X)        30          20          ABORT
        // TS(T2)=20 < R-TS(X)=30
        // T2 trying to overwrite T3's future read
\`\`\`

**EXAMPLE 6: Optimistic Concurrency Control**

\`\`\`
T1:                         T2:
Read Phase:                 Read Phase:
Read(X) [local]             
X = X + 100
                            Read(X) [local]
                            X = X * 2

Validation Phase:           
Check conflicts             
No conflicts found          
PASS                        

Write Phase:                
Write(X) to DB              

                            Validation Phase:
                            Check conflicts
                            T1 wrote X after T2 read
                            FAIL - ABORT T2
\`\`\`

**EXAMPLE 7: MVCC (Snapshot Isolation)**

\`\`\`
Timeline:
         T1                           T2
t1      BEGIN (Snapshot at t1)
t2      Read(X) → 100
t3                                   BEGIN (Snapshot at t3)
t4                                   Write(X=200)
t5      Read(X) → 100 (still!)       
t6                                   COMMIT
t7      Read(X) → 100 (consistent)
t8      COMMIT

Versions of X:
X@t0 = 100 (initial)
X@t6 = 200 (T2's write)

T1 reads X@t1 = 100 (snapshot isolation)
T2 reads X@t3 = 100, writes X@t6 = 200
\`\`\`

**EXAMPLE 8: Recovery Using Log**

\`\`\`
Log:
<T1 start>
<T1, A, 1000, 950>
<T1, B, 2000, 2050>
<T1 commit>
<T2 start>
<T2, C, 500, 450>
<T2, D, 300, 450>
*** CRASH ***

Recovery:
1. Identify committed: T1 (has <T1 commit>)
2. Identify active: T2 (no commit/abort)

3. REDO T1:
   - A = 950
   - B = 2050

4. UNDO T2:
   - D = 300 (restore old value)
   - C = 500 (restore old value)

Final State:
- A = 950 (T1 committed)
- B = 2050 (T1 committed)
- C = 500 (T2 undone)
- D = 300 (T2 undone)
\`\`\`

**EXAMPLE 9: Cascading Rollback**

\`\`\`
T1          T2          T3
Write(A)
            Read(A)     // Dirty read from T1
                        Read(A)  // Dirty read from T1
Abort       // T1 aborts

Result:
- T1 aborts (application logic)
- T2 must abort (read uncommitted data from T1)
- T3 must abort (read uncommitted data from T1)

Cascading rollback!

Prevention: Use Strict 2PL
- Hold locks until commit
- No dirty reads possible
\`\`\`

**EXAMPLE 10: Isolation Levels**

\`\`\`sql
-- READ UNCOMMITTED: Allows dirty reads
Session 1:
BEGIN TRANSACTION;
UPDATE Accounts SET Balance = 500 WHERE ID = 1;
-- Not committed yet

Session 2:
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
SELECT Balance FROM Accounts WHERE ID = 1;
-- Returns: 500 (DIRTY READ!)

Session 1:
ROLLBACK; -- Oops, T2 saw uncommitted data!

-- READ COMMITTED: Prevents dirty reads
Session 2:
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SELECT Balance FROM Accounts WHERE ID = 1;
-- Waits for Session 1 to commit/rollback
-- Or reads last committed value

-- REPEATABLE READ: Prevents dirty & non-repeatable reads
Session 1:
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
BEGIN TRANSACTION;
SELECT Balance FROM Accounts WHERE ID = 1; -- 1000
-- Another session updates to 500 and commits
SELECT Balance FROM Accounts WHERE ID = 1; -- Still 1000!
COMMIT;

-- SERIALIZABLE: Prevents all anomalies
Session 1:
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN TRANSACTION;
SELECT COUNT(*) FROM Accounts; -- 10
-- Another session inserts new account and commits
SELECT COUNT(*) FROM Accounts; -- Still 10! (No phantom)
COMMIT;
\`\`\``,
          practical: `### PRACTICAL GUIDELINES

**1. Choosing Concurrency Control:**

**Two-Phase Locking (2PL):**
- **Use when**: Traditional OLTP systems
- **Pros**: Well-understood, widely implemented
- **Cons**: Deadlocks possible, lower concurrency
- **Examples**: Banking, e-commerce orders

**Timestamp Ordering:**
- **Use when**: Read-heavy workloads
- **Pros**: Deadlock-free, good for distributed systems
- **Cons**: More rollbacks
- **Examples**: Analytics, reporting

**Optimistic:**
- **Use when**: Conflicts rare
- **Pros**: High concurrency, no locks
- **Cons**: Validation overhead, may abort
- **Examples**: Document editing, wikis

**MVCC:**
- **Use when**: High read/write concurrency needed
- **Pros**: Readers don't block writers
- **Cons**: Storage overhead (multiple versions)
- **Examples**: PostgreSQL (default), Oracle

**2. Transaction Design Best Practices:**

**Keep Transactions Short:**
\`\`\`sql
-- BAD: Long transaction
BEGIN TRANSACTION;
SELECT ... -- Heavy query
-- User interaction here! (NEVER!)
INSERT ...
COMMIT;

-- GOOD: Short transaction
SELECT ... -- Outside transaction
-- Process data
BEGIN TRANSACTION;
INSERT ...
COMMIT;
\`\`\`

**Acquire Locks in Consistent Order:**
\`\`\`sql
-- BAD: Deadlock possible
T1: Lock A, then Lock B
T2: Lock B, then Lock A

-- GOOD: Same order
T1: Lock A, then Lock B
T2: Lock A, then Lock B
\`\`\`

**Handle Deadlocks:**
\`\`\`python
max_retries = 3
for attempt in range(max_retries):
    try:
        # Begin transaction
        conn.execute("BEGIN")
        # ... operations ...
        conn.execute("COMMIT")
        break  # Success
    except DeadlockException:
        conn.execute("ROLLBACK")
        if attempt == max_retries - 1:
            raise  # Give up
        time.sleep(random.uniform(0.1, 0.5))  # Random backoff
\`\`\`

**3. Choosing Isolation Level:**

| Level | Dirty Read | Non-Repeatable | Phantom | Use Case |
|-------|-----------|----------------|---------|----------|
| READ UNCOMMITTED | Yes | Yes | Yes | Never use |
| READ COMMITTED | No | Yes | Yes | Default for most apps |
| REPEATABLE READ | No | No | Yes | Financial reports |
| SERIALIZABLE | No | No | No | Critical operations |

**MySQL/InnoDB:**
\`\`\`sql
-- Default: REPEATABLE READ
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
BEGIN;
-- ... operations ...
COMMIT;
\`\`\`

**PostgreSQL:**
\`\`\`sql
-- Default: READ COMMITTED
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN;
-- ... operations ...
COMMIT;
\`\`\`

**4. Monitoring Transactions:**

**PostgreSQL:**
\`\`\`sql
-- Active transactions
SELECT * FROM pg_stat_activity 
WHERE state = 'active';

-- Long-running transactions
SELECT pid, now() - query_start AS duration, query
FROM pg_stat_activity
WHERE state = 'active'
ORDER BY duration DESC;

-- Blocking queries
SELECT blocked_locks.pid, blocked_activity.query,
       blocking_locks.pid AS blocking_pid, blocking_activity.query AS blocking_query
FROM pg_locks blocked_locks
JOIN pg_stat_activity blocked_activity ON blocked_locks.pid = blocked_activity.pid
JOIN pg_locks blocking_locks ON blocked_locks.locktype = blocking_locks.locktype
JOIN pg_stat_activity blocking_activity ON blocking_locks.pid = blocking_activity.pid
WHERE NOT blocked_locks.granted;
\`\`\`

**MySQL:**
\`\`\`sql
-- Active transactions
SHOW PROCESSLIST;

-- InnoDB status (includes locks, deadlocks)
SHOW ENGINE INNODB STATUS;

-- Lock waits
SELECT * FROM information_schema.INNODB_LOCKS;
SELECT * FROM information_schema.INNODB_LOCK_WAITS;
\`\`\`

**5. Deadlock Prevention:**

**Timeout-Based:**
\`\`\`sql
-- MySQL
SET innodb_lock_wait_timeout = 50; -- seconds

-- PostgreSQL
SET lock_timeout = '30s';
SET statement_timeout = '60s';
\`\`\`

**Lock Ordering:**
- Always acquire locks on tables in same order
- Document locking policy
- Code reviews to enforce

**6. Recovery Configuration:**

**Write-Ahead Logging:**
\`\`\`sql
-- PostgreSQL
wal_level = replica
fsync = on
synchronous_commit = on
wal_sync_method = fsync

-- MySQL InnoDB
innodb_flush_log_at_trx_commit = 1
innodb_doublewrite = 1
\`\`\`

**Checkpoint Configuration:**
\`\`\`sql
-- PostgreSQL
checkpoint_timeout = 5min
max_wal_size = 1GB
checkpoint_completion_target = 0.9

-- MySQL
innodb_log_file_size = 256M
innodb_log_files_in_group = 2
\`\`\`

**7. Real-World Scenarios:**

**Banking (High Consistency):**
\`\`\`sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN;
-- Transfer logic
COMMIT;
\`\`\`

**E-commerce (Balance):**
\`\`\`sql
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
BEGIN;
-- Order processing
COMMIT;
\`\`\`

**Analytics (Read Performance):**
\`\`\`sql
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED; -- Report can tolerate
BEGIN;
-- Long-running analytics query
COMMIT;
\`\`\`

**Social Media (MVCC):**
- Use database with MVCC (PostgreSQL)
- Readers never block writers
- High concurrent read/write throughput`,
          exam: `### IMPORTANT EXAM QUESTIONS

**Concepts:**

1. **Define transaction and explain ACID properties with examples.**
   - Transaction: Logical unit of work
   - Atomicity: All or nothing
   - Consistency: Maintains invariants
   - Isolation: Concurrent execution doesn't interfere
   - Durability: Committed changes persist

2. **Draw and explain transaction state diagram.**
   States: Active → Partially Committed → Committed
           Active → Failed → Aborted

3. **What is serializability? Why is it important?**
   - Concurrent schedule equivalent to serial schedule
   - Ensures correctness of concurrent execution
   - Maximizes concurrency while maintaining consistency

4. **Explain conflict serializability. How do you test it?**
   - Conflicting operations ordered same as some serial schedule
   - Test: Build precedence graph, check for cycles
   - No cycle → conflict serializable

5. **What is view serializability? How does it differ from conflict serializability?**
   - View: Same initial reads, updated reads, final writes
   - View serializability ⊇ Conflict serializability
   - Some view serializable schedules not conflict serializable

**Two-Phase Locking:**

6. **Explain Two-Phase Locking protocol. Why does it ensure serializability?**
   - Growing phase: Acquire locks
   - Shrinking phase: Release locks
   - Prevents conflicts, ensures serializable execution

7. **What are the problems with basic 2PL? How are they solved?**
   - Cascading rollback → Strict 2PL
   - Deadlock → Detection/prevention schemes

8. **Compare Strict 2PL and Rigorous 2PL.**
   - Strict: Hold X-locks until commit
   - Rigorous: Hold ALL locks until commit

**Deadlocks:**

9. **Explain deadlock detection using wait-for graph.**
   - Node per transaction
   - Edge Ti→Tj if Ti waits for Tj
   - Cycle = deadlock

10. **Compare Wait-Die and Wound-Wait schemes.**
    - Wait-Die: Older waits, younger aborts
    - Wound-Wait: Older aborts younger, younger waits

**Timestamp Ordering:**

11. **Explain timestamp-based concurrency control.**
    - Each transaction gets timestamp
    - Read/Write rules based on R-TS and W-TS
    - Ensures timestamp order serialization

12. **What is Thomas' Write Rule? What does it allow?**
    - Ignore obsolete writes instead of aborting
    - Allows view serializability

**Other Protocols:**

13. **Explain optimistic concurrency control. When is it preferred?**
    - Read, Validate, Write phases
    - Best when conflicts rare
    - High concurrency, no locks

14. **What is MVCC? How does it improve concurrency?**
    - Multiple versions of data
    - Readers don't block writers
    - Used in PostgreSQL, Oracle

**Recovery:**

15. **Explain Write-Ahead Logging (WAL) and its importance.**
    - Log written before data
    - Ensures recovery possible
    - Foundation of ARIES

16. **What is the difference between undo and redo?**
    - Undo: Restore old values (uncommitted transactions)
    - Redo: Replay updates (committed transactions)

17. **Explain ARIES recovery algorithm.**
    - Analysis: Identify transactions to undo/redo
    - Redo: Replay all updates
    - Undo: Reverse uncommitted updates

18. **What is checkpointing? Why is it important?**
    - Periodic snapshot to stable storage
    - Reduces recovery time
    - Recovery starts from checkpoint

**Schedules:**

19. **Given a schedule, determine if it's conflict serializable using precedence graph.**
    - Build graph with conflicts
    - Check for cycles
    - No cycle → serializable

20. **What are recoverable, cascadeless, and strict schedules?**
    - Recoverable: Read order ensures recoverability
    - Cascadeless: No dirty reads
    - Strict: No read/write until commit

**Practical:**

21. **Compare SQL isolation levels. Which anomalies does each prevent?**
    | Level | Dirty | Non-repeatable | Phantom |
    |-------|-------|----------------|---------|
    | READ UNCOMMITTED | Allow | Allow | Allow |
    | READ COMMITTED | Prevent | Allow | Allow |
    | REPEATABLE READ | Prevent | Prevent | Allow |
    | SERIALIZABLE | Prevent | Prevent | Prevent |

22. **How do you handle deadlocks in application code?**
    - Retry with exponential backoff
    - Timeout configuration
    - Error handling and rollback

### QUICK REVISION

**ACID:**
- **A**tomicity: All or nothing
- **C**onsistency: Maintain invariants
- **I**solation: Concurrent → serial
- **D**urability: Committed → permanent

**Serializability:**
- Conflict: Build precedence graph, no cycle
- View: Initial read, updated read, final write same

**2PL:**
- Growing: Acquire locks
- Shrinking: Release locks
- Strict: Hold X-locks until commit

**Deadlock:**
- Detection: Wait-for graph, cycle
- Prevention: Wait-Die, Wound-Wait
- Recovery: Abort victim, retry

**Timestamp:**
- TS order = serialization order
- Check R-TS, W-TS before read/write
- Thomas Write Rule: Ignore obsolete writes

**Recovery:**
- WAL: Log before data
- Undo: Uncommitted transactions
- Redo: Committed transactions
- ARIES: Analysis, Redo, Undo

**Isolation Levels:**
- READ UNCOMMITTED < READ COMMITTED < REPEATABLE READ < SERIALIZABLE
- Higher level = More consistency, Less concurrency`,
          takeaways: `### KEY TAKEAWAYS

✓ **ACID properties guarantee reliable transactions**: Atomicity, Consistency, Isolation, Durability

✓ **Serializability ensures correctness**: Concurrent execution equivalent to some serial execution

✓ **Conflict serializability tested with precedence graph**: No cycle → serializable

✓ **View serializability is broader**: Includes some non-conflict serializable schedules

✓ **Two-Phase Locking (2PL) ensures serializability**: Growing phase, shrinking phase

✓ **Strict 2PL prevents cascading rollbacks**: Hold X-locks until commit

✓ **Deadlocks require handling**: Detection (wait-for graph) or prevention (Wait-Die, Wound-Wait)

✓ **Timestamp ordering is deadlock-free**: But may cause more rollbacks

✓ **Optimistic concurrency good for rare conflicts**: Read, validate, write phases

✓ **MVCC enables high concurrency**: Readers don't block writers, multiple versions

✓ **Write-Ahead Logging (WAL) enables recovery**: Log before data modification

✓ **Recovery involves undo and redo**: Undo uncommitted, redo committed

✓ **ARIES is industry-standard recovery**: Analysis, Redo, Undo phases

✓ **Isolation levels trade consistency for performance**: SERIALIZABLE strongest, READ UNCOMMITTED weakest

✓ **Transaction design matters**: Keep short, acquire locks in order, handle deadlocks

✓ **Choose protocol based on workload**: 2PL for OLTP, MVCC for high concurrency, Optimistic for rare conflicts

REMEMBER: Transactions are the foundation of reliable database systems. Understanding concurrency control and recovery is essential for building robust applications that maintain data integrity even under concurrent access and system failures!`
        }
      }
    ]
  },
  {
    id: "unit-5",
    title: "UNIT V: Query Processing and Advanced Databases",
    topics: [
      {
        id: "query-processing-indexing-advanced",
        title: "Query Processing, Indexing (B-tree, Hashing), and Advanced Database Systems",
        subtopics: ["Query Processing Steps", "Query Optimization", "Join Algorithms", "Indexing Structures", "B-trees and B+-trees", "Hashing Techniques", "Distributed Databases", "Data Warehousing", "Data Mining", "Mobile and Web Databases"],
        clos: ["CLO02", "CLO05"],
        cos: ["CO05"],
        content: {
          introduction: "When you execute a SQL query, the database doesn't just blindly run it. Behind the scenes, the query processor analyzes, transforms, and optimizes it to find the fastest execution path. Understanding query processing, indexing, and advanced database architectures is crucial for building high-performance applications that scale from single servers to globally distributed systems handling petabytes of data.",
          concept: `### Query Processing

**Definition**: Activities to transform high-level query into efficient execution plan

**Steps:**

1. **Parsing and Translation**
   - Check syntax
   - Verify relations and attributes exist
   - Translate SQL to internal representation (relational algebra)

2. **Optimization**
   - Generate alternative execution plans
   - Estimate cost of each plan
   - Choose plan with lowest cost

3. **Evaluation**
   - Execute chosen plan
   - Return results to user

**Why Optimization Matters:**

- Same query, different plans
- Execution time can vary by orders of magnitude
- Example: 
  - Bad plan: 10 minutes
  - Good plan: 1 second
  - 600x speedup!

### Indexing

**Purpose**: Fast data retrieval without scanning entire table

**Analogy**: Book index vs reading cover to cover

**Trade-offs:**
- **Benefit**: Fast SELECT queries
- **Cost**: Slower INSERT/UPDATE/DELETE, storage overhead

**Types:**

1. **B-tree Index**: Balanced tree, range queries
2. **Hash Index**: Hash table, equality queries
3. **Bitmap Index**: Bit vectors, low-cardinality columns
4. **Full-text Index**: Text search

### Advanced Database Systems

Beyond traditional single-server relational databases:

1. **Distributed Databases**: Data across multiple sites
2. **Data Warehouses**: Historical data for analytics
3. **NoSQL**: Non-relational, scalable
4. **Mobile Databases**: Lightweight, synchronization
5. **Web Databases**: Internet-scale, cloud-native`,
          technicalDepth: `### QUERY PROCESSING DETAILED

**1. SELECTION**

Algorithms:

**A1 (Linear Search):**
- Scan entire file
- Cost: br (number of blocks)
- Use when: No index, unsorted

**A2 (Binary Search):**
- Requires sorted file
- Cost: ⌈log₂(br)⌉ + ⌈sc/fr⌉
- Use when: Sorted on search key

**A3 (Primary Index, Equality):**
- Use B+-tree or hash index
- Cost: HTi + 1 (tree height + 1 data block)
- Use when: Primary key equality

**A4 (Primary Index, Range):**
- Use B+-tree index
- Cost: HTi + b (blocks in range)
- Use when: Range query on primary key

**A5 (Secondary Index):**
- May retrieve many blocks
- Cost: HTi + n (n matching records)
- Use when: Secondary key query

**2. SORTING**

**External Sort-Merge:**

Given: M memory buffers, br file blocks

**Pass 0 (Create Runs):**
- Read M blocks, sort in memory, write
- Creates ⌈br/M⌉ runs of M blocks each

**Pass 1, 2, ... (Merge):**
- Merge M-1 runs at a time
- Number of passes: ⌈log_{M-1}(br/M)⌉

**Total Cost:**
- Read + Write each block in each pass
- 2br × (number of passes)

**Example:**
- File: 1000 blocks
- Memory: 5 buffers
- Pass 0: ⌈1000/5⌉ = 200 runs
- Pass 1: ⌈200/4⌉ = 50 runs
- Pass 2: ⌈50/4⌉ = 13 runs
- Pass 3: ⌈13/4⌉ = 4 runs
- Pass 4: ⌈4/4⌉ = 1 run
- Total: 5 passes, cost = 2×1000×5 = 10,000 block accesses

**3. JOIN ALGORITHMS**

**Nested-Loop Join:**

\`\`\`
for each tuple tr in R:
    for each tuple ts in S:
        if tr and ts match:
            output <tr, ts>
\`\`\`

**Cost:** nr × br + bs
(For each R tuple, scan entire S)

**Block Nested-Loop Join:**

\`\`\`
for each block Br of R:
    for each block Bs of S:
        for each tuple tr in Br:
            for each tuple ts in Bs:
                if match: output
\`\`\`

**Cost:** br + br × bs
(For each R block, scan entire S)

**Better:** Use smaller relation as outer

**Indexed Nested-Loop Join:**

\`\`\`
for each tuple tr in R:
    use index to find matching tuples in S
    for each match: output
\`\`\`

**Cost:** br + nr × c
(c = cost of index lookup)

**Best when:** S has index on join attribute

**Sort-Merge Join:**

**Algorithm:**
1. Sort R on join attribute
2. Sort S on join attribute
3. Merge sorted relations

**Cost:**
- Sort R: 2br × ⌈log_{M-1}(br/M)⌉
- Sort S: 2bs × ⌈log_{M-1}(bs/M)⌉
- Merge: br + bs
- Total: Sort cost + br + bs

**Best when:** Relations already sorted or result needed sorted

**Hash Join:**

**Build Phase:**
1. Hash smaller relation R into M-1 buckets
2. Keep hash table in memory

**Probe Phase:**
1. Hash each tuple of S
2. Probe corresponding bucket
3. Output matches

**Cost:** 3(br + bs)
(Read both once for partition, read again for join, write once)

**Best when:** Equi-join, enough memory for hash table

**Most commonly used in practice!**

### QUERY OPTIMIZATION

**Cost-Based Optimization:**

**Factors:**

1. **Access Cost**: Disk I/O
2. **Storage Cost**: Intermediate results
3. **Computation Cost**: CPU operations
4. **Memory Cost**: Buffers needed
5. **Communication Cost**: Distributed systems

**Statistics Needed:**

- nr: Number of tuples in relation r
- br: Number of blocks containing tuples of r
- lr: Size of tuple in relation r
- fr: Blocking factor (tuples per block)
- V(A, r): Number of distinct values of attribute A in r

**Selectivity Estimation:**

**Equality:** σA=v(r)
- Selectivity: 1/V(A, r)
- Result size: nr / V(A, r)

**Range:** σA≥v(r)
- Selectivity: (max(A) - v) / (max(A) - min(A))
- Result size: nr × selectivity

**Conjunction:** σA=v ∧ B=w(r)
- Selectivity: s(A) × s(B) (independence assumption)

**Disjunction:** σA=v ∨ B=w(r)
- Selectivity: s(A) + s(B) - s(A) × s(B)

**Join Size Estimation:**

**Natural Join:** R ⋈ S

If R.A is key for R:
- Size ≤ |S| (each S tuple matches at most one R tuple)

If S.A is key for S:
- Size ≤ |R|

If neither is key:
- Size ≤ |R| × |S| / max(V(A,R), V(A,S))

**Transformation Rules:**

1. **σc1∧c2(r) = σc1(σc2(r))**
   (Cascade selections)

2. **σc1(σc2(r)) = σc2(σc1(r))**
   (Commutative selections)

3. **πL1(πL2(r)) = πL1(r)** if L1 ⊆ L2
   (Cascade projections)

4. **σc(r ⋈ s) = σc(r) ⋈ s** if c uses only r attributes
   (Push selection through join)

5. **r ⋈ s = s ⋈ r**
   (Join commutativity)

6. **(r ⋈ s) ⋈ t = r ⋈ (s ⋈ t)**
   (Join associativity)

**Optimization Strategy:**

1. **Push selections down** (reduce tuples early)
2. **Push projections down** (reduce attributes early)
3. **Combine selections and cross-products** into joins
4. **Choose join order** using dynamic programming
5. **Use indexes** when beneficial

**Example Optimization:**

Original:
\`\`\`
πName(σDeptName='IT'(Employee × Department))
\`\`\`

Problems:
- Cartesian product very expensive
- Selection after product

Optimized:
\`\`\`
πName(σSalary>50000(Employee) ⋈ σDeptName='IT'(Department))
\`\`\`

Benefits:
- Selections pushed down (smaller intermediate results)
- Product replaced with join
- May use indexes on selections

### B-TREE INDEX

**Properties:**

- Balanced tree: All leaves at same depth
- Order n: Each node has [⌈n/2⌉, n] keys (except root)
- Root has [1, n] keys
- Internal node with k keys has k+1 children

**Structure:**

\`\`\`
Internal Node: [P₁ K₁ P₂ K₂ ... Pₙ Kₙ Pₙ₊₁]
- Kᵢ: Search keys
- Pᵢ: Pointers to children
- Keys in Pᵢ < Kᵢ < keys in Pᵢ₊₁
\`\`\`

**Search Algorithm:**

\`\`\`
Search(key K, node N):
    if N is leaf:
        return record with key K in N
    else:
        find i such that Kᵢ ≤ K < Kᵢ₊₁
        return Search(K, child Pᵢ₊₁)
\`\`\`

**Cost:**
- Height h = ⌈log_⌈n/2⌉(N)⌉ where N = number of keys
- Search cost: h disk reads

**Insertion:**

1. Search for leaf where key should go
2. If leaf has space, insert key
3. If leaf full, split:
   - Create new leaf
   - Distribute keys evenly
   - Promote middle key to parent
   - Recursively split parent if full

**Deletion:**

1. Search for key and remove
2. If node underflows (< ⌈n/2⌉ keys):
   - Try to borrow from sibling
   - If can't borrow, merge with sibling
   - Recursively fix parent

### B+-TREE INDEX

**Differences from B-tree:**

1. **All data in leaves**
   - Internal nodes only have keys + pointers
   - Leaves contain actual data records or pointers

2. **Leaves linked**
   - Sequential access without tree traversal
   - Efficient range queries

3. **Redundant keys**
   - Keys in internal nodes repeated in leaves

**Structure:**

\`\`\`
Internal Node: [P₁ K₁ P₂ K₂ ... Pₙ]
- Guide searches, no data

Leaf Node: [K₁ Data₁ K₂ Data₂ ... Kₙ Datₙ Next]
- Contains actual records
- Linked to next leaf (→)
\`\`\`

**Advantages:**

- Higher fanout (more keys per internal node)
- Shorter tree (fewer disk I/Os)
- Efficient range scans (follow leaf links)
- Most databases use B+-tree (not B-tree)

**Example B+-tree (order 3):**

\`\`\`
                    [30]
                   /    \\
             [10,20]    [40,50]
            /  |  \\     /  |  \\
Leaves: [5,7][12,15][25,28][35,38][45,48][55,60]
         ↓     ↓      ↓       ↓       ↓       ↓
Leaves linked: → → → → → →
\`\`\`

**Range Query Example:**

Find all keys 12 ≤ key ≤ 45:
1. Search for 12 → finds leaf [12,15]
2. Follow leaf links: [12,15] → [25,28] → [35,38] → [45,48]
3. Stop when key > 45
4. Cost: O(log n) + number of result blocks

### HASHING INDEX

**Static Hashing:**

**Hash Function:** h(K) = K mod M

**Buckets:** M buckets, each can hold multiple records

**Search:**
\`\`\`
1. Compute h(K)
2. Access bucket h(K)
3. Search bucket for key K
\`\`\`

**Cost:** 1-2 disk reads (bucket + maybe overflow)

**Collision Handling:**
- Chaining: Link overflow buckets
- Open addressing: Probe next bucket

**Problem:** Fixed M, poor for growing data

**Dynamic Hashing:**

**Extendible Hashing:**
- Use d bits of hash value
- d grows/shrinks dynamically
- Directory of 2^d entries
- Buckets split when full

**Example:**

\`\`\`
d=2 (use 2 bits)
Directory:
00 → Bucket A
01 → Bucket B
10 → Bucket C
11 → Bucket D

Insert causes overflow in Bucket A:
- Split Bucket A into A1 (00) and A2 (10)
- If directory full, double directory (d=3)
\`\`\`

**Linear Hashing:**
- No directory
- Buckets split in linear order
- Uses two hash functions
- Gradual growth

**Hash vs B+-tree:**

| Feature | Hash | B+-tree |
|---------|------|---------|
| Equality | O(1) | O(log n) |
| Range | O(n) | O(log n + result) |
| Ordered | No | Yes |
| Dynamic | Complex | Easy |

**Use hash for:** Exact match lookups (primary keys)
**Use B+-tree for:** Everything else (default)

### DISTRIBUTED DATABASES

**Definition:** Database stored across multiple sites connected by network

**Types:**

**Homogeneous:** Same DBMS at all sites
**Heterogeneous:** Different DBMS at different sites

**Data Distribution:**

**1. Fragmentation:**

**Horizontal:**
- Split rows
- Example: Customers_East, Customers_West

**Vertical:**
- Split columns
- Example: Employee_Public(ID, Name), Employee_Private(ID, Salary)

**Hybrid:**
- Both horizontal and vertical

**2. Replication:**

**Full Replication:**
- Complete copy at each site
- Fast reads, slow writes
- High availability

**Partial Replication:**
- Some fragments replicated
- Balance availability and cost

**No Replication:**
- Each fragment at one site only
- Fragmentation only

**Advantages:**

- Local autonomy
- Improved performance (data locality)
- Improved reliability (no single point of failure)
- Easier expansion

**Challenges:**

- Distributed query processing
- Distributed transaction management
- Maintaining consistency (replication)
- Increased complexity

**Distributed Transactions:**

**Two-Phase Commit (2PC):**

**Phase 1 (Prepare):**
1. Coordinator sends "Prepare" to all participants
2. Participants execute transaction
3. Participants respond "Ready" or "Abort"

**Phase 2 (Commit/Abort):**
1. If all "Ready": Coordinator sends "Commit"
2. If any "Abort": Coordinator sends "Abort"
3. Participants commit/abort and ACK
4. Coordinator completes

**Problem:** Blocking if coordinator fails

**Three-Phase Commit (3PC):**
- Adds "Pre-commit" phase
- Non-blocking
- More complex

**CAP Theorem:**

Can achieve at most 2 of 3:

- **Consistency:** All nodes see same data
- **Availability:** Every request gets response
- **Partition Tolerance:** System works despite network failures

**Trade-offs:**
- Traditional RDBMS: CA (sacrifice P)
- NoSQL: Often AP or CP

### DATA WAREHOUSING

**Definition:** Subject-oriented, integrated, time-variant, non-volatile collection for decision support

**Characteristics:**

1. **Subject-Oriented:**
   - Organized by business subjects (Sales, Inventory)
   - Not by applications

2. **Integrated:**
   - Data from multiple sources
   - Consistent naming, encoding, attributes

3. **Time-Variant:**
   - Historical data
   - Timestamped

4. **Non-Volatile:**
   - Read-only (mostly)
   - Loaded and accessed, not updated

**Architecture:**

\`\`\`
Data Sources (OLTP)
   ↓
ETL (Extract, Transform, Load)
   ↓
Data Warehouse (Central)
   ↓
Data Marts (Departments)
   ↓
OLAP / BI Tools
   ↓
Reports / Dashboards
\`\`\`

**ETL Process:**

**Extract:**
- Read from source systems
- Incremental or full extraction

**Transform:**
- Cleanse data (handle nulls, errors)
- Convert data types
- Standardize formats
- Apply business rules
- Aggregate data

**Load:**
- Write to data warehouse
- Incremental or full load
- Schedule: nightly, hourly, real-time

**Dimensional Modeling:**

**Star Schema:**

\`\`\`
     DimTime
        |
        |
DimProduct - FactSales - DimCustomer
        |
        |
     DimStore
\`\`\`

**Fact Table:** Measures (sales, quantity, revenue)
**Dimension Tables:** Context (who, what, when, where, why)

**Snowflake Schema:**
- Normalized dimensions
- Dimension tables have foreign keys to other dimension tables
- More complex, less redundant

**OLAP Operations:**

1. **Roll-Up:** Aggregate to higher level
   - Daily → Monthly → Yearly

2. **Drill-Down:** Detail to lower level
   - Yearly → Quarterly → Monthly

3. **Slice:** Fix one dimension
   - Sales in 2024

4. **Dice:** Fix multiple dimensions
   - Sales in 2024, Q1, West region

5. **Pivot:** Rotate cube
   - Rows ↔ Columns

### DATA MINING

**Definition:** Discovering patterns, correlations, trends in large datasets

**KDD Process:**

1. **Data Selection:** Choose relevant data
2. **Pre-processing:** Clean, integrate
3. **Transformation:** Normalize, aggregate
4. **Data Mining:** Apply algorithms
5. **Interpretation:** Evaluate patterns
6. **Knowledge:** Act on insights

**Techniques:**

**1. Association Rules:**

Market Basket Analysis:
\`\`\`
{Bread, Butter} ⇒ {Milk}
Support = 30% (30% of transactions have all three)
Confidence = 80% (80% with bread and butter also have milk)
\`\`\`

**Apriori Algorithm:**
1. Find frequent itemsets (support ≥ threshold)
2. Generate association rules (confidence ≥ threshold)

**2. Classification:**

Assign items to predefined classes:
- Decision Trees (ID3, C4.5, CART)
- Naive Bayes
- Support Vector Machines (SVM)
- Neural Networks

**Example:** Email spam classification

**3. Clustering:**

Group similar items (no predefined classes):
- K-Means
- Hierarchical Clustering
- DBSCAN (density-based)

**Example:** Customer segmentation

**4. Regression:**

Predict numeric values:
- Linear Regression
- Logistic Regression
- Polynomial Regression

**Example:** House price prediction

**5. Anomaly Detection:**

Identify outliers:
- Statistical methods
- Distance-based
- Density-based

**Example:** Fraud detection, intrusion detection

### MOBILE AND WEB DATABASES

**Mobile Databases:**

**Characteristics:**
- Limited resources (CPU, memory, battery)
- Intermittent connectivity
- Location-aware
- Lightweight

**Examples:**
- SQLite (embedded)
- Realm
- Couchbase Lite

**Challenges:**
- Synchronization with server
- Offline operation
- Conflict resolution
- Battery efficiency

**Synchronization Strategies:**

**1. Full Sync:**
- Download entire database
- Simple but inefficient

**2. Incremental Sync:**
- Only changed data
- Requires tracking changes

**3. Bidirectional Sync:**
- Client ↔ Server
- Conflict resolution needed

**Conflict Resolution:**
- Last Write Wins (LWW)
- Version Vectors
- Application-specific logic

**Web Databases:**

**Backend (Server-Side):**
- Traditional RDBMS (MySQL, PostgreSQL)
- NoSQL (MongoDB, Cassandra)
- Cloud databases (Aurora, Cloud SQL)

**Frontend (Client-Side):**
- IndexedDB (browser storage)
- LocalStorage (key-value, 5-10MB limit)
- WebSQL (deprecated)

**Architecture Patterns:**

**1. Traditional (3-Tier):**
\`\`\`
Browser → Web Server → Database
\`\`\`

**2. RESTful API:**
\`\`\`
Frontend (React/Angular)
   ↓ HTTP/REST
Backend (Node.js/Django)
   ↓ SQL/NoSQL
Database
\`\`\`

**3. Microservices:**
\`\`\`
Frontend → API Gateway → Service1 (DB1)
                       → Service2 (DB2)
                       → Service3 (DB3)
\`\`\`

**4. Serverless:**
\`\`\`
Frontend → Cloud Functions → Managed Database
(AWS Lambda, Firebase)
\`\`\`

**Scalability Strategies:**

**Vertical Scaling:**
- Bigger server (more CPU, RAM)
- Limited by hardware

**Horizontal Scaling:**
- More servers
- Requires distribution strategy

**Caching:**
- Redis, Memcached
- Reduce database load

**Content Delivery Network (CDN):**
- Cache static content
- Serve from edge locations

**Cloud Databases:**

**SQL:**
- Amazon RDS
- Google Cloud SQL
- Azure SQL Database

**NoSQL:**
- Amazon DynamoDB
- MongoDB Atlas
- Google Firestore

**Data Warehouse:**
- Amazon Redshift
- Google BigQuery
- Snowflake

**Advantages:**
- Managed (less ops)
- Scalable
- High availability
- Pay-as-you-go

**Disadvantages:**
- Vendor lock-in
- Cost (can be high at scale)
- Less control`,
          examples: `### COMPREHENSIVE EXAMPLES

**EXAMPLE 1: Query Optimization**

Original Query:
\`\`\`sql
SELECT E.Name, D.DeptName
FROM Employee E, Department D, Salary S
WHERE E.DeptID = D.DeptID
  AND E.EmpID = S.EmpID
  AND D.DeptName = 'IT'
  AND S.Salary > 50000;
\`\`\`

**Inefficient Plan:**
\`\`\`
1. Employee × Department × Salary  -- Huge cartesian product!
2. σ(DeptName='IT' ∧ Salary>50000)
3. π(Name, DeptName)
\`\`\`

Cost: |Employee| × |Department| × |Salary| scans

**Optimized Plan:**
\`\`\`
1. σ(DeptName='IT')(Department)  -- Filter early: 1 dept
2. σ(Salary>50000)(Salary)       -- Filter early: ~10% of rows
3. Result1 ⋈(DeptID) Employee    -- Join filtered dept with employees
4. Result2 ⋈(EmpID) Result2      -- Join with filtered salaries
5. π(Name, DeptName)(Result3)
\`\`\`

**Improvements:**
- Push selections down (reduce intermediate results)
- Replace cartesian products with joins
- Use indexes on DeptName and Salary

**Cost Reduction:** 1000x or more!

**EXAMPLE 2: Join Algorithm Selection**

Query:
\`\`\`sql
SELECT *
FROM Orders O, Customer C
WHERE O.CustomerID = C.CustomerID;
\`\`\`

**Scenario A: No Index**
- Orders: 1M rows, 10,000 blocks
- Customer: 100K rows, 1,000 blocks

**Block Nested-Loop:**
\`\`\`
Cost = 10,000 + 10,000 × 1,000 = 10,010,000 block reads
\`\`\`

**Sort-Merge (M=100 buffers):**
\`\`\`
Sort Orders: 2 × 10,000 × ⌈log₉₉(100)⌉ = 40,000
Sort Customer: 2 × 1,000 × ⌈log₉₉(10)⌉ = 2,000
Merge: 10,000 + 1,000 = 11,000
Total = 53,000 block reads
\`\`\`

**Hash Join:**
\`\`\`
Partition: 2 × (10,000 + 1,000) = 22,000
Join: 10,000 + 1,000 = 11,000
Total = 33,000 block reads
\`\`\`

**Winner:** Hash Join (300x faster than Nested-Loop!)

**Scenario B: Index on Customer.CustomerID**

**Indexed Nested-Loop:**
\`\`\`
Cost = 10,000 + 1,000,000 × 2 = 2,010,000 block reads
(For each Order, 2 reads: index + data)
\`\`\`

**Winner (B):** Still Hash Join! (16x faster)

**EXAMPLE 3: B+-tree Operations**

B+-tree (order 3, max 3 keys per node):

**Initial Tree:**
\`\`\`
             [20]
            /    \\
       [10,15]  [25,30]
       /  |  \\    /  |  \\
    [5,7][12,13][18,19][22,23][27,28][32,35]
     ↓     ↓       ↓      ↓      ↓      ↓
  (leaves linked)
\`\`\`

**Insert 14:**

1. Search finds leaf [12,13]
2. Leaf full (3 keys max), must split
3. Split [12,13,14] → [12] and [13,14]
4. Promote 13 to parent [10,15] → [10,13,15]

**Result:**
\`\`\`
             [20]
            /    \\
      [10,13,15]  [25,30]
      /  |  |  \\    /  |  \\
   [5,7][12][13,14][18,19][22,23][27,28][32,35]
\`\`\`

**Insert 16, 17 (causes cascade):**

Leaf [18,19] becomes [16,17,18,19] (overflow!)
Split → [16,17] and [18,19], promote 18
Parent [10,13,15] becomes [10,13,15,18] (overflow!)
Split parent → [10,13] and [15,18], promote 15 to root
Root [20] becomes [15,20]

**Result:**
\`\`\`
           [15,20]
          /   |   \\
    [10,13] [15,18] [25,30]
      ...     ...     ...
\`\`\`

**Delete 12:**

1. Remove 12 from leaf [12]
2. Leaf empty (underflow!)
3. Try to borrow from sibling [13,14]
4. Success: Redistribute → [13] and [14]
5. Update parent key 13 → 14

**EXAMPLE 4: Hash Index**

Static Hash (M=5 buckets):
\`\`\`
h(K) = K mod 5

Insert: 5, 15, 25, 3, 8, 13, 18, 23, 28

Bucket 0: 5 → 15 → 25 (overflow chain!)
Bucket 1: empty
Bucket 2: empty
Bucket 3: 3 → 8 → 13 → 18 → 23 → 28 (long chain!)
Bucket 4: empty
\`\`\`

**Problem:** Clustering, poor distribution

**Extendible Hash (d=2):**

\`\`\`
h(K) = last 2 bits of K

Directory (2² = 4 entries):
00 → Bucket A: [4, 8, 12]
01 → Bucket B: [5, 9, 13]
10 → Bucket C: [6, 10, 14]
11 → Bucket D: [7, 11, 15]

Insert 16 (binary: ...10000, last 2 bits: 00):
- Goes to Bucket A
- Bucket A full (assume capacity=3)

Split:
- Create Bucket A' for keys with last 3 bits 000
- Keep Bucket A for keys with last 3 bits 100
- Increase directory depth d=3

New Directory (2³ = 8 entries):
000 → Bucket A': [8]
001 → Bucket B
010 → Bucket C
011 → Bucket D
100 → Bucket A: [4, 12, 16]
101 → Bucket B
110 → Bucket C
111 → Bucket D
\`\`\`

**EXAMPLE 5: Distributed Query**

Query:
\`\`\`sql
SELECT *
FROM Orders O, Customer C
WHERE O.CustomerID = C.CustomerID
  AND C.City = 'Mumbai';
\`\`\`

**Data Distribution:**
- Orders: Horizontally partitioned by region (Site 1: North, Site 2: South)
- Customer: Replicated at all sites

**Strategy 1: Centralized**
1. Ship Orders from Site 1 to coordinator
2. Ship Orders from Site 2 to coordinator
3. Join at coordinator

**Cost:** Transfer all Orders (expensive!)

**Strategy 2: Distributed Join**
1. Apply σ(City='Mumbai')(Customer) at each site
2. Join locally at each site
3. Union results

**Cost:** Transfer only Mumbai customers (small!)

**Example Numbers:**
- Orders: 1M rows × 1KB = 1GB
- Customers: 100K rows × 500B = 50MB
- Mumbai Customers: 5K rows = 2.5MB

**Cost Comparison:**
- Centralized: 1GB network transfer
- Distributed: 2.5MB network transfer (400x less!)

**EXAMPLE 6: Star Schema**

**Fact Table: FactSales**
\`\`\`sql
CREATE TABLE FactSales (
    SaleID INT PRIMARY KEY,
    DateKey INT,           -- FK to DimDate
    ProductKey INT,        -- FK to DimProduct
    CustomerKey INT,       -- FK to DimCustomer
    StoreKey INT,          -- FK to DimStore
    Quantity INT,
    TotalAmount DECIMAL(10,2)
);
\`\`\`

**Dimension Tables:**
\`\`\`sql
CREATE TABLE DimDate (
    DateKey INT PRIMARY KEY,
    Date DATE,
    Day INT,
    Month INT,
    Quarter INT,
    Year INT,
    DayOfWeek VARCHAR(10)
);

CREATE TABLE DimProduct (
    ProductKey INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Brand VARCHAR(50),
    UnitPrice DECIMAL(10,2)
);

CREATE TABLE DimCustomer (
    CustomerKey INT PRIMARY KEY,
    CustomerName VARCHAR(100),
    City VARCHAR(50),
    State VARCHAR(50),
    Country VARCHAR(50)
);

CREATE TABLE DimStore (
    StoreKey INT PRIMARY KEY,
    StoreName VARCHAR(100),
    City VARCHAR(50),
    Manager VARCHAR(100)
);
\`\`\`

**OLAP Query:**
\`\`\`sql
-- Total sales by quarter and product category
SELECT 
    D.Year,
    D.Quarter,
    P.Category,
    SUM(F.TotalAmount) AS TotalSales
FROM FactSales F
JOIN DimDate D ON F.DateKey = D.DateKey
JOIN DimProduct P ON F.ProductKey = P.ProductKey
WHERE D.Year = 2024
GROUP BY D.Year, D.Quarter, P.Category
ORDER BY D.Quarter, TotalSales DESC;
\`\`\`

**Roll-Up (Aggregate to Year):**
\`\`\`sql
SELECT 
    D.Year,
    P.Category,
    SUM(F.TotalAmount) AS TotalSales
FROM FactSales F
JOIN DimDate D ON F.DateKey = D.DateKey
JOIN DimProduct P ON F.ProductKey = P.ProductKey
WHERE D.Year = 2024
GROUP BY D.Year, P.Category;
\`\`\`

**Drill-Down (To Month):**
\`\`\`sql
SELECT 
    D.Year,
    D.Month,
    P.Category,
    SUM(F.TotalAmount) AS TotalSales
FROM FactSales F
JOIN DimDate D ON F.DateKey = D.DateKey
JOIN DimProduct P ON F.ProductKey = P.ProductKey
WHERE D.Year = 2024 AND D.Quarter = 1
GROUP BY D.Year, D.Month, P.Category;
\`\`\`

**EXAMPLE 7: Association Rule Mining**

Transaction Database:
\`\`\`
T1: {Bread, Milk, Eggs}
T2: {Bread, Butter}
T3: {Milk, Butter, Eggs}
T4: {Bread, Milk, Butter}
T5: {Bread, Milk, Eggs, Butter}
\`\`\`

**Apriori Algorithm (min_support=40%, min_confidence=60%):**

**Step 1: Find frequent 1-itemsets**
\`\`\`
{Bread}: 4/5 = 80% ✓
{Milk}: 4/5 = 80% ✓
{Butter}: 4/5 = 80% ✓
{Eggs}: 3/5 = 60% ✓
\`\`\`

**Step 2: Generate frequent 2-itemsets**
\`\`\`
{Bread, Milk}: 3/5 = 60% ✓
{Bread, Butter}: 3/5 = 60% ✓
{Milk, Butter}: 3/5 = 60% ✓
{Milk, Eggs}: 3/5 = 60% ✓
{Bread, Eggs}: 2/5 = 40% ✓
{Butter, Eggs}: 2/5 = 40% ✓
\`\`\`

**Step 3: Generate frequent 3-itemsets**
\`\`\`
{Bread, Milk, Butter}: 2/5 = 40% ✓
{Bread, Milk, Eggs}: 2/5 = 40% ✓
{Milk, Butter, Eggs}: 2/5 = 40% ✓
\`\`\`

**Step 4: Generate association rules**
\`\`\`
{Bread, Milk} ⇒ {Butter}: 
  Support = 40%, Confidence = 2/3 = 67% ✓

{Bread, Butter} ⇒ {Milk}:
  Support = 40%, Confidence = 2/3 = 67% ✓

{Milk, Butter} ⇒ {Bread}:
  Support = 40%, Confidence = 2/3 = 67% ✓

{Milk, Eggs} ⇒ {Bread}:
  Support = 40%, Confidence = 2/3 = 67% ✓
\`\`\`

**Actionable Insight:**
- Place Bread, Milk, Butter close together
- Bundle discount for combo purchase

**EXAMPLE 8: Mobile Database Synchronization**

**Scenario:** Sales app with offline capability

**Local SQLite (Mobile):**
\`\`\`sql
CREATE TABLE Orders (
    OrderID INTEGER PRIMARY KEY,
    CustomerID INTEGER,
    Amount DECIMAL(10,2),
    Status TEXT,
    CreatedAt DATETIME,
    ModifiedAt DATETIME,
    SyncStatus TEXT  -- 'pending', 'synced', 'conflict'
);
\`\`\`

**Server Database (PostgreSQL):**
\`\`\`sql
CREATE TABLE Orders (
    OrderID SERIAL PRIMARY KEY,
    CustomerID INTEGER,
    Amount DECIMAL(10,2),
    Status TEXT,
    CreatedAt TIMESTAMP,
    ModifiedAt TIMESTAMP,
    Version INTEGER  -- For conflict detection
);
\`\`\`

**Sync Process:**

1. **Upload (Mobile → Server):**
\`\`\`python
def sync_upload():
    pending = db.execute("SELECT * FROM Orders WHERE SyncStatus='pending'")
    for order in pending:
        try:
            # Send to server
            response = api.post('/orders/sync', order)
            if response.status == 'success':
                db.execute("UPDATE Orders SET SyncStatus='synced' WHERE OrderID=?", order.id)
            elif response.status == 'conflict':
                db.execute("UPDATE Orders SET SyncStatus='conflict' WHERE OrderID=?", order.id)
        except NetworkError:
            break  # Will retry later
\`\`\`

2. **Download (Server → Mobile):**
\`\`\`python
def sync_download():
    last_sync = get_last_sync_time()
    changes = api.get(f'/orders/changes?since={last_sync}')
    
    for change in changes:
        local = db.execute("SELECT * FROM Orders WHERE OrderID=?", change.id)
        
        if not local:
            # New record
            db.insert(change)
        elif local.ModifiedAt < change.ModifiedAt:
            # Server newer
            db.update(change)
        else:
            # Local newer (conflict)
            handle_conflict(local, change)
\`\`\`

**Conflict Resolution (Last Write Wins):**
\`\`\`python
def handle_conflict(local, server):
    if server.ModifiedAt > local.ModifiedAt:
        # Server wins
        db.update(server)
    else:
        # Local wins, push again
        db.execute("UPDATE Orders SET SyncStatus='pending' WHERE OrderID=?", local.id)
\`\`\`

**EXAMPLE 9: NoSQL Data Modeling**

**Relational (Normalized):**
\`\`\`sql
CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    Username VARCHAR(50),
    Email VARCHAR(100)
);

CREATE TABLE Posts (
    PostID INT PRIMARY KEY,
    UserID INT,
    Title VARCHAR(200),
    Content TEXT,
    CreatedAt DATETIME,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Comments (
    CommentID INT PRIMARY KEY,
    PostID INT,
    UserID INT,
    Text TEXT,
    CreatedAt DATETIME,
    FOREIGN KEY (PostID) REFERENCES Posts(PostID)
);
\`\`\`

**Query (3 joins!):**
\`\`\`sql
SELECT U.Username, P.Title, C.Text
FROM Users U
JOIN Posts P ON U.UserID = P.UserID
JOIN Comments C ON P.PostID = C.PostID
WHERE U.UserID = 123;
\`\`\`

**NoSQL (MongoDB - Denormalized):**
\`\`\`json
{
  "_id": ObjectId("..."),
  "username": "john_doe",
  "email": "john@example.com",
  "posts": [
    {
      "postId": 1,
      "title": "My First Post",
      "content": "Hello world!",
      "createdAt": ISODate("2024-01-15"),
      "comments": [
        {
          "commentId": 1,
          "userId": 456,
          "username": "jane_doe",
          "text": "Great post!",
          "createdAt": ISODate("2024-01-15")
        }
      ]
    }
  ]
}
\`\`\`

**Query (No joins!):**
\`\`\`javascript
db.users.findOne({ _id: 123 })
\`\`\`

**Trade-offs:**
- **Pros:** Faster reads (no joins), natural document structure
- **Cons:** Data duplication, update complexity (update username everywhere)

**EXAMPLE 10: Cloud Database Auto-Scaling**

**AWS Aurora Configuration:**
\`\`\`yaml
# Application Load
Time    Connections    CPU%    Action
08:00   100           20%     Normal (1 reader)
10:00   500           60%     Add reader (2 readers)
12:00   1500          80%     Add reader (3 readers)
14:00   2000          90%     Add reader (4 readers)
16:00   800           40%     Remove reader (3 readers)
20:00   200           25%     Remove reader (2 readers)
00:00   50            10%     Remove reader (1 reader)
\`\`\`

**Auto-Scaling Policy:**
\`\`\`json
{
  "minCapacity": 1,
  "maxCapacity": 5,
  "scaleUpThreshold": {
    "cpu": 70,
    "connections": 1000
  },
  "scaleDownThreshold": {
    "cpu": 30,
    "connections": 200,
    "cooldownMinutes": 15
  }
}
\`\`\`

**Cost Optimization:**
- Peak hours (10:00-16:00): 4 instances × $0.50/hr = $2.00/hr × 6hrs = $12
- Off-peak: 1-2 instances × $0.50/hr = ~$0.75/hr × 18hrs = $13.50
- **Daily Total:** ~$25.50
- **vs Fixed 4 instances:** $48/day
- **Savings:** ~47%`,
          practical: `### PRACTICAL GUIDELINES

**1. Query Optimization Tips:**

**Use EXPLAIN/EXPLAIN ANALYZE:**

\`\`\`sql
-- PostgreSQL
EXPLAIN ANALYZE
SELECT * FROM Orders WHERE CustomerID = 123;

-- MySQL
EXPLAIN
SELECT * FROM Orders WHERE CustomerID = 123;
\`\`\`

**Output Analysis:**
- **Seq Scan:** Full table scan (BAD for large tables)
- **Index Scan:** Using index (GOOD)
- **Index Only Scan:** Only index, no table access (BEST)
- **Nested Loop:** Good for small joins
- **Hash Join:** Good for large equi-joins
- **Merge Join:** Good for pre-sorted data

**Common Problems and Fixes:**

**Problem: Full Table Scan**
\`\`\`sql
-- BAD
SELECT * FROM Orders WHERE YEAR(OrderDate) = 2024;
-- Function on column prevents index use

-- GOOD
SELECT * FROM Orders 
WHERE OrderDate >= '2024-01-01' AND OrderDate < '2025-01-01';
-- Index on OrderDate can be used
\`\`\`

**Problem: Type Mismatch**
\`\`\`sql
-- BAD
SELECT * FROM Orders WHERE OrderID = '123';  -- String for INT column

-- GOOD
SELECT * FROM Orders WHERE OrderID = 123;
\`\`\`

**Problem: OR Conditions**
\`\`\`sql
-- BAD
SELECT * FROM Orders 
WHERE Status = 'Pending' OR Status = 'Shipped';

-- GOOD
SELECT * FROM Orders 
WHERE Status IN ('Pending', 'Shipped');
-- Or even better with separate queries and UNION if selective
\`\`\`

**2. Indexing Strategy:**

**When to Create Index:**
- Columns in WHERE clause
- Columns in JOIN conditions
- Columns in ORDER BY/GROUP BY
- Foreign keys

**When NOT to Create Index:**
- Small tables (< 1000 rows)
- Columns with low selectivity (e.g., Gender: M/F)
- Frequently updated columns
- Rarely queried columns

**Index Types by Use Case:**

\`\`\`sql
-- B-tree (default): Range queries, sorted access
CREATE INDEX idx_orders_date ON Orders(OrderDate);

-- Hash: Exact match only (PostgreSQL)
CREATE INDEX idx_customers_email ON Customers USING HASH (Email);

-- Covering index: Includes all queried columns
CREATE INDEX idx_orders_covering ON Orders(CustomerID, OrderDate, TotalAmount);

-- Partial index: Only subset of rows
CREATE INDEX idx_active_orders ON Orders(OrderDate) 
WHERE Status = 'Active';

-- Composite index: Multiple columns
CREATE INDEX idx_orders_customer_date ON Orders(CustomerID, OrderDate);
-- Good for: WHERE CustomerID=? AND OrderDate=?
-- NOT for: WHERE OrderDate=? (wrong order!)
\`\`\`

**Index Maintenance:**

\`\`\`sql
-- PostgreSQL: Rebuild bloated index
REINDEX INDEX idx_orders_date;

-- MySQL: Rebuild table and indexes
OPTIMIZE TABLE Orders;

-- Check index usage
SELECT 
    schemaname, tablename, indexname, 
    idx_scan, idx_tup_read
FROM pg_stat_user_indexes
WHERE idx_scan = 0;  -- Never used!
\`\`\`

**3. Distributed Database Best Practices:**

**Data Partitioning:**

\`\`\`sql
-- PostgreSQL: Declarative partitioning
CREATE TABLE Orders (
    OrderID BIGINT,
    OrderDate DATE,
    ...
) PARTITION BY RANGE (OrderDate);

CREATE TABLE Orders_2023 PARTITION OF Orders
    FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');

CREATE TABLE Orders_2024 PARTITION OF Orders
    FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');
\`\`\`

**Benefits:**
- Query only relevant partitions
- Drop old partitions easily
- Better manageability

**Replication Configuration:**

\`\`\`sql
-- PostgreSQL: Streaming replication
-- On primary
ALTER SYSTEM SET wal_level = 'replica';
ALTER SYSTEM SET max_wal_senders = 5;

-- On replica
primary_conninfo = 'host=primary_host port=5432 user=replicator'
hot_standby = on
\`\`\`

**Load Balancing:**

\`\`\`python
# Application-level read/write splitting
def get_db_connection(readonly=False):
    if readonly:
        return connect_to_replica()  # Read from replica
    else:
        return connect_to_primary()  # Write to primary

# Usage
with get_db_connection(readonly=True) as conn:
    results = conn.execute("SELECT ...")  # Read query

with get_db_connection(readonly=False) as conn:
    conn.execute("UPDATE ...")  # Write query
    conn.commit()
\`\`\`

**4. Data Warehouse Development:**

**ETL Best Practices:**

**Incremental Load (Better than Full Load):**
\`\`\`sql
-- Track last processed timestamp
CREATE TABLE ETL_Metadata (
    TableName VARCHAR(50) PRIMARY KEY,
    LastLoadTime TIMESTAMP
);

-- Extract only new/modified records
INSERT INTO DW_Orders
SELECT *
FROM OLTP_Orders
WHERE ModifiedAt > (
    SELECT LastLoadTime 
    FROM ETL_Metadata 
    WHERE TableName = 'Orders'
);

-- Update metadata
UPDATE ETL_Metadata
SET LastLoadTime = CURRENT_TIMESTAMP
WHERE TableName = 'Orders';
\`\`\`

**Slowly Changing Dimensions (SCD Type 2):**
\`\`\`sql
CREATE TABLE DimCustomer (
    CustomerKey INT PRIMARY KEY,  -- Surrogate key
    CustomerID INT,                -- Business key
    CustomerName VARCHAR(100),
    City VARCHAR(50),
    ValidFrom DATE,
    ValidTo DATE,
    IsCurrent BOOLEAN
);

-- When customer moves to new city
-- Old record
UPDATE DimCustomer
SET ValidTo = CURRENT_DATE, IsCurrent = FALSE
WHERE CustomerID = 123 AND IsCurrent = TRUE;

-- New record
INSERT INTO DimCustomer (CustomerID, CustomerName, City, ValidFrom, IsCurrent)
VALUES (123, 'John Doe', 'New York', CURRENT_DATE, TRUE);

-- Now fact table maintains history
-- FactSales joins to CustomerKey (not CustomerID)
-- Can report sales by customer's city at time of sale
\`\`\`

**Aggregation Tables (OLAP Cubes):**
\`\`\`sql
-- Pre-aggregate for common queries
CREATE TABLE AggSalesByMonth AS
SELECT 
    DATE_TRUNC('month', OrderDate) AS Month,
    ProductID,
    SUM(Quantity) AS TotalQuantity,
    SUM(TotalAmount) AS TotalRevenue
FROM FactSales
GROUP BY Month, ProductID;

CREATE INDEX idx_agg_month ON AggSalesByMonth(Month, ProductID);

-- Query aggregate (much faster!)
SELECT * FROM AggSalesByMonth
WHERE Month = '2024-01-01';
\`\`\`

**5. Mobile Database Patterns:**

**Offline-First Architecture:**

\`\`\`javascript
// React Native + SQLite
import SQLite from 'react-native-sqlite-storage';

class OfflineDB {
  constructor() {
    this.db = SQLite.openDatabase({ name: 'app.db' });
  }
  
  async createOrder(order) {
    // Always save locally first
    const localId = await this.db.executeSql(
      'INSERT INTO Orders (data, syncStatus) VALUES (?, ?)',
      [JSON.stringify(order), 'pending']
    );
    
    // Try to sync immediately if online
    if (await this.isOnline()) {
      this.syncPendingOrders();
    }
    
    return localId;
  }
  
  async syncPendingOrders() {
    const pending = await this.db.executeSql(
      'SELECT * FROM Orders WHERE syncStatus = ?',
      ['pending']
    );
    
    for (let order of pending.rows) {
      try {
        const response = await fetch('/api/orders', {
          method: 'POST',
          body: order.data
        });
        
        if (response.ok) {
          await this.db.executeSql(
            'UPDATE Orders SET syncStatus = ? WHERE id = ?',
            ['synced', order.id]
          );
        }
      } catch (error) {
        // Network error, will retry later
        console.log('Sync failed, will retry');
      }
    }
  }
  
  async isOnline() {
    return navigator.onLine;
  }
}

// Periodic background sync
setInterval(() => {
  if (db.isOnline()) {
    db.syncPendingOrders();
  }
}, 60000);  // Every minute
\`\`\`

**6. Performance Monitoring:**

**Key Metrics:**

\`\`\`sql
-- PostgreSQL: Slow queries
SELECT 
    query,
    calls,
    total_time / calls AS avg_time,
    min_time,
    max_time
FROM pg_stat_statements
WHERE total_time / calls > 1000  -- > 1 second avg
ORDER BY total_time DESC
LIMIT 10;

-- Cache hit ratio (should be > 90%)
SELECT 
    sum(blks_hit) * 100.0 / sum(blks_hit + blks_read) AS cache_hit_ratio
FROM pg_stat_database;

-- Index usage
SELECT 
    schemaname, tablename,
    idx_scan,  -- Index scans
    seq_scan,  -- Sequential scans
    idx_scan / (seq_scan + idx_scan + 0.001) AS index_usage_ratio
FROM pg_stat_user_tables
ORDER BY seq_scan DESC;

-- Table bloat
SELECT 
    schemaname, tablename,
    pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
\`\`\`

**7. Cloud Database Cost Optimization:**

**Strategies:**

**Use Read Replicas for Read-Heavy Workloads:**
\`\`\`
Primary (Expensive): Writes only
Replica 1, 2, 3 (Cheaper): Distribute reads
\`\`\`

**Schedule Non-Production Databases:**
\`\`\`bash
# Stop dev/test databases outside business hours
aws rds stop-db-instance --db-instance-identifier dev-db

# Schedule with Lambda + CloudWatch Events
# Save ~60% on dev/test costs
\`\`\`

**Right-Size Instances:**
\`\`\`bash
# Monitor actual usage
aws cloudwatch get-metric-statistics \\
    --namespace AWS/RDS \\
    --metric-name CPUUtilization \\
    --dimensions Name=DBInstanceIdentifier,Value=my-db

# If consistently < 40%, downgrade instance
# db.m5.xlarge ($280/mo) → db.m5.large ($140/mo)
\`\`\`

**Use Reserved Instances:**
\`\`\`
On-Demand: $0.50/hr = $360/mo
1-Year Reserved: $0.30/hr = $216/mo (40% savings)
3-Year Reserved: $0.20/hr = $144/mo (60% savings)
\`\`\`

**Archive Old Data:**
\`\`\`sql
-- Move old data to cheaper storage (S3)
-- Orders > 2 years old
COPY (
    SELECT * FROM Orders 
    WHERE OrderDate < CURRENT_DATE - INTERVAL '2 years'
) TO '/tmp/old_orders.csv';

-- Upload to S3, then delete from DB
DELETE FROM Orders 
WHERE OrderDate < CURRENT_DATE - INTERVAL '2 years';

-- Query old data from S3 (AWS Athena) when needed
\`\`\``,
          exam: `### IMPORTANT EXAM QUESTIONS

**Query Processing:**

1. **Explain the steps involved in query processing.**
   - Parsing: Check syntax, validate schema
   - Translation: Convert SQL to relational algebra
   - Optimization: Generate and evaluate execution plans
   - Evaluation: Execute chosen plan

2. **What is query optimization? Why is it important?**
   - Finding efficient execution plan among alternatives
   - Same query can have vastly different costs (orders of magnitude)
   - Critical for performance at scale

3. **Compare selection algorithms (A1-A5). When is each used?**
   - A1 (Linear): No index, unsorted
   - A2 (Binary): Sorted file
   - A3 (Primary Index): Primary key equality
   - A4 (Range): Range query with index
   - A5 (Secondary): Secondary key query

4. **Explain external sort-merge algorithm with an example.**
   - Pass 0: Create sorted runs of size M
   - Pass 1+: Merge M-1 runs at a time
   - Cost: 2br × (number of passes)
   - Example with specific numbers

5. **Compare join algorithms: Nested-Loop, Sort-Merge, Hash Join.**
   - Nested-Loop: Simple, expensive (nr × br + bs)
   - Sort-Merge: Good for sorted/large joins
   - Hash Join: Best for equi-joins, most common in practice

**Indexing:**

6. **What is indexing? Compare B-tree and Hash indexes.**
   - Index: Data structure for fast retrieval
   - B-tree: Range queries, sorted access, O(log n)
   - Hash: Exact match only, O(1), no ordering

7. **Explain B+-tree structure and operations.**
   - All data in leaves
   - Leaves linked for range scans
   - Insert: May cause splits
   - Delete: May cause merges/redistribution

8. **Why are B+-trees preferred over B-trees in databases?**
   - Higher fanout (more keys per node)
   - Efficient range scans (leaf links)
   - All data in leaves (simpler)

9. **Explain extendible hashing with an example.**
   - Dynamic hash structure
   - Directory grows/shrinks with d bits
   - Buckets split on overflow
   - No performance degradation with growth

10. **When would you use a hash index vs B-tree index?**
    - Hash: Primary key lookups, equality predicates
    - B-tree: Range queries, ORDER BY, default choice

**Distributed Databases:**

11. **What is a distributed database? What are its advantages?**
    - Database across multiple sites
    - Advantages: Autonomy, performance, reliability, scalability

12. **Explain data fragmentation with examples.**
    - Horizontal: Split rows (geographical partitioning)
    - Vertical: Split columns (separate sensitive data)
    - Hybrid: Both

13. **What is the difference between replication and fragmentation?**
    - Fragmentation: Split data (no duplicates)
    - Replication: Copy data (duplicates)
    - Can be combined

14. **Explain Two-Phase Commit protocol.**
    - Phase 1 (Prepare): Coordinator asks participants to prepare
    - Phase 2 (Commit/Abort): Coordinator decides based on votes
    - Ensures atomicity in distributed transactions

15. **What is CAP theorem? Explain with examples.**
    - Consistency, Availability, Partition tolerance
    - Can achieve at most 2 of 3
    - SQL: CA, NoSQL: AP or CP

**Data Warehousing:**

16. **What is a data warehouse? How does it differ from OLTP?**
    - Subject-oriented, integrated, time-variant, non-volatile
    - OLTP: Current data, transactional, normalized
    - DW: Historical data, analytical, denormalized

17. **Explain star schema with an example.**
    - Fact table (center): Measures
    - Dimension tables (points): Context
    - Simple structure, denormalized

18. **What is the difference between star and snowflake schema?**
    - Star: Denormalized dimensions (simple, redundant)
    - Snowflake: Normalized dimensions (complex, less redundant)

19. **Explain OLAP operations: Roll-up, Drill-down, Slice, Dice.**
    - Roll-up: Aggregate to higher level (month → year)
    - Drill-down: Detail to lower level (year → month)
    - Slice: Fix one dimension
    - Dice: Fix multiple dimensions

20. **What is Slowly Changing Dimension? Explain Type 2 SCD.**
    - Dimensions that change over time
    - Type 2: Keep history with validity dates
    - New row for each change, maintains full history

**Data Mining:**

21. **What is data mining? Name major techniques.**
    - Discovering patterns in large datasets
    - Classification, Clustering, Association Rules, Regression, Anomaly Detection

22. **Explain association rule mining with an example.**
    - Market basket analysis: {A, B} ⇒ {C}
    - Support: Frequency of itemset
    - Confidence: Conditional probability
    - Apriori algorithm

23. **What is the difference between classification and clustering?**
    - Classification: Supervised (predefined classes)
    - Clustering: Unsupervised (discover groupings)

**Advanced Topics:**

24. **What is MVCC? How does it differ from locking?**
    - Multi-Version Concurrency Control
    - Keeps multiple versions of data
    - Readers don't block writers
    - Used in PostgreSQL, Oracle

25. **Explain NoSQL databases. When are they preferred over SQL?**
    - Non-relational, schema-less
    - Types: Document, Key-Value, Column-family, Graph
    - Preferred for: Scale, flexibility, specific access patterns

### QUICK REVISION

**Query Processing:**
- Parse → Optimize → Execute
- Cost-based optimization
- Join algorithms: Nested-Loop < Sort-Merge < Hash

**Indexing:**
- B+-tree: Default, range queries
- Hash: Equality only
- Trade-off: Fast reads vs slow writes

**B+-tree:**
- Balanced, O(log n)
- All data in leaves
- Leaves linked
- Insert/Delete may split/merge

**Distributed DB:**
- Fragmentation: Split data
- Replication: Copy data
- 2PC: Atomic distributed transactions
- CAP: Pick 2 of 3

**Data Warehouse:**
- Subject-oriented, integrated, time-variant
- Star schema: Fact + Dimensions
- OLAP: Roll-up, Drill-down, Slice, Dice
- ETL: Extract, Transform, Load

**Data Mining:**
- Association: Market basket
- Classification: Supervised
- Clustering: Unsupervised

**Advanced:**
- MVCC: Multiple versions
- NoSQL: Scale, flexibility
- Mobile: Offline-first, sync`,
          takeaways: `### KEY TAKEAWAYS

✓ **Query optimization can improve performance by orders of magnitude**: Same query, different plans, vastly different costs

✓ **Hash join is most common in practice**: Efficient for equi-joins, used by most query optimizers

✓ **B+-tree is the default index**: Versatile, supports range queries, efficient for most workloads

✓ **Push selections and projections down**: Reduce intermediate result sizes early in execution

✓ **Indexing trades read speed for write speed**: Create indexes on frequently queried columns, avoid over-indexing

✓ **Distributed databases offer scalability and reliability**: But add complexity in query processing and transaction management

✓ **CAP theorem guides distributed system design**: Can't have all three: Consistency, Availability, Partition tolerance

✓ **Data warehouses are optimized for analytics**: Denormalized, historical, read-heavy workload

✓ **Star schema simplifies OLAP**: Fact table + dimension tables, intuitive for business users

✓ **ETL is critical for data quality**: Extract, Transform, Load - transformation is where data cleaning happens

✓ **Data mining discovers hidden patterns**: Classification, clustering, association rules enable data-driven decisions

✓ **Mobile databases require offline-first design**: Local storage + synchronization for reliable mobile apps

✓ **NoSQL trades ACID for scale**: Different models (document, key-value, graph) for different access patterns

✓ **MVCC enables high concurrency**: Readers don't block writers, used by PostgreSQL and Oracle

✓ **Cloud databases offer elasticity**: Auto-scaling, managed services, but watch costs and vendor lock-in

✓ **EXPLAIN is your best friend**: Always analyze query plans before optimizing

REMEMBER: Modern database systems are complex ecosystems. Understanding query processing, indexing strategies, and advanced architectures (distributed, warehouse, NoSQL) is essential for building scalable, high-performance applications. Always profile before optimizing, and choose the right tool for the job!`
        }
      }
    ]
  }
];
