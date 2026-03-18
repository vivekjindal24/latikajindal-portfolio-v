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
  {
    id: 'CLO01',
    description:
      'Explain XML fundamentals, syntax rules, and how XML represents structured information.',
  },
  {
    id: 'CLO02',
    description:
      'Design and validate XML documents using DTD and XML Schema (XSD) constraints.',
  },
  {
    id: 'CLO03',
    description: 'Query and navigate XML documents using XPath expressions and axes.',
  },
  {
    id: 'CLO04',
    description: 'Transform XML into other formats using XSLT templates and processing rules.',
  },
  {
    id: 'CLO05',
    description:
      'Integrate XML, XSD, XPath, and XSLT into an end-to-end data processing workflow.',
  },
];

export const cos: CO[] = [
  {
    id: 'CO01',
    description:
      'Create well-formed XML documents and model data using elements and attributes.',
  },
  {
    id: 'CO02',
    description:
      'Use DTD to define structure, entities, and attribute constraints for XML validation.',
  },
  {
    id: 'CO03',
    description:
      'Develop XML Schema (XSD) using namespaces, types, and occurrence constraints.',
  },
  {
    id: 'CO04',
    description:
      'Write XPath and XSLT to query and transform XML data into usable outputs.',
  },
  {
    id: 'CO05',
    description:
      'Build and document an XML mini-project demonstrating validation and transformation.',
  },
];

export const units: Unit[] = [
  {
    id: 'unit-1',
    title: 'UNIT I: Introduction to XML',
    topics: [
      {
        id: 'xml-overview',
        title: 'XML Overview & Markup Languages',
        subtopics: [
          'Why XML exists',
          'Markup languages',
          'XML vs HTML',
          'Real-world use cases',
          'XML family (DTD/XSD/XPath/XSLT)',
        ],
        clos: ['CLO01'],
        cos: ['CO01'],
        content: {
          introduction:
            'XML is a standards-based way to package meaning and structure in plain text. It grew out of SGML to make data exchange predictable across tools, platforms, and decades. Think of it as a contract for how information is organized—not how it looks.',
          concept: `## Markup in practice

A markup language labels parts of a document so humans and programs agree on what each part means.

- HTML labels how to display; XML labels what the data *is*.
- XML is a meta-language: you mint tags that match your domain (student, invoice, sensor, book).

### Why extensible matters

You are not locked to a fixed tag set. New elements can be added without breaking existing parsers as long as they stay well-formed.

### Well-formed vs valid

- Well-formed: syntax rules are respected (single root, proper nesting, quoted attributes).
- Valid: well-formed *and* obeys a schema (DTD or XSD).`,
          technicalDepth: `## Tree mental model

XML documents are ordered trees:
- Root element contains everything.
- Elements may hold text, other elements, and attributes.
- Attributes are name/value metadata on elements.

### When to use elements vs attributes
- Use elements for repeatable or structured data (titles, items, nested records).
- Use attributes for identifiers, flags, short metadata (id, type, status).

### XML ecosystem map
- Structure guardrails: DTD / XSD
- Navigation: XPath
- Transformation: XSLT

### Parsing flow
1) Parse for well-formedness.
2) (Optional) Validate against DTD/XSD.
3) Query or transform with XPath/XSLT.
4) Serialize output for transport or storage.`,
          examples: `## Tiny XML sample

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<student id="S1">
  <name>Meera</name>
  <dept>CSE</dept>
  <cgpa>9.1</cgpa>
</student>
~~~

### HTML vs XML side by side
- HTML: <h1>Title</h1> (presentation)
- XML: <title>Distributed Systems</title> (meaning)`,
          practical: `## Quick hands-on

- Draft one XML document for a dataset you like (books, courses, products).
- Check well-formedness with any strict parser.
- Add comments and attributes sparingly to see how tools display them.

Common pitfalls to avoid: missing end tags, multiple roots, unescaped & or <, and unquoted attributes.`,
          exam: `## Exam checkpoints

- Short: define XML; list 3 differences vs HTML; explain "extensible".
- Medium: describe well-formed vs valid with one example each.
- Long: explain how XML + DTD/XSD + XPath + XSLT form a pipeline.`,
          takeaways: `## Takeaways

- XML captures meaning; presentation is handled elsewhere.
- Treat every XML document as a tree.
- Validation is optional but crucial when systems exchange data.`,
        },
      },
      {
        id: 'xml-syntax',
        title: 'XML Syntax, Namespaces, and Well-Formedness',
        subtopics: [
          'XML prolog',
          'Elements vs attributes',
          'Entities and escaping',
          'Namespaces and prefixes',
          'Parser error patterns',
        ],
        clos: ['CLO01'],
        cos: ['CO01'],
        content: {
          introduction:
            'Syntax discipline is what lets any conforming parser build the same tree. This topic sharpens the core rules—proper nesting, entity handling, and namespace hygiene—so downstream validation and transforms stay predictable.',
          concept: `## Well-formedness rules

1) Exactly one root element.
2) Properly nested tags; every start tag closes.
3) Attribute values are quoted.
4) Reserved characters (\`<\`, \`>\`, \`&\`) are escaped inside text.

### Predefined entities table

| Character | Entity | When to use |
|-----------|--------|-------------|
| \`<\` | \`&lt;\` | Less-than symbol in text |
| \`>\` | \`&gt;\` | Greater-than symbol in text |
| \`&\` | \`&amp;\` | Ampersand in text |
| \`"\` | \`&quot;\` | Double quote in attributes |
| \`'\` | \`&apos;\` | Single quote (apostrophe) in attributes |

### Validity reminder
Valid = well-formed + conforms to a schema (DTD/XSD).`,
          technicalDepth: `## Namespaces in action

Namespaces prevent name collisions when mixing vocabularies.

With prefix:
~~~xml
<bk:book xmlns:bk="http://example.com/book">
  <bk:title>XML Handbook</bk:title>
</bk:book>
~~~

Default namespace:
~~~xml
<book xmlns="http://example.com/book">
  <title>XML Handbook</title>
</book>
~~~

Notes:
- Attributes are not in the default namespace unless prefixed.
- Choose stable, resolvable URIs for namespaces even if they are not fetched at runtime.`,
          examples: `## Visual: Good vs bad nesting

**✅ Correct nesting** (tags open and close in the right order)
~~~xml
<order>
  <item>
    <sku>123</sku>
  </item>
</order>
~~~

**❌ Broken nesting** (item closes after order—parser error)
~~~xml
<order><item></order></item>
~~~

## Entity usage examples

**Problem:** You want to show "if value < 10 & flag = true" in XML

**❌ Wrong** (parser treats \`<\` and \`&\` as markup)
~~~xml
<condition>if value < 10 & flag = true</condition>
~~~

**✅ Correct** (entities escape special characters)
~~~xml
<condition>if value &lt; 10 &amp; flag = true</condition>
~~~

## Visual: Namespace collision

**Problem:** Two vocabularies both use \`<title>\`
~~~xml
<!-- Without namespaces—ambiguous -->
<document>
  <title>Book Title</title>
  <title>Page Title</title>
</document>
~~~

**Solution:** Use prefixes to distinguish
~~~xml
<doc xmlns:bk="http://books.com" xmlns:pg="http://pages.com">
  <bk:title>Book Title</bk:title>
  <pg:title>Page Title</pg:title>
</doc>
~~~`,
          practical: `## Practice

- Add a namespace prefix to an existing XML file and run it through a validator.
- Intentionally break three rules (double root, bad nesting, unescaped <) and read the parser errors.
- Add meaningful attributes (id, status) and confirm they remain quoted.`,
          exam: `## Exam focus

- Define namespace and default namespace.
- List the five predefined entities.
- Explain difference between well-formed and valid with one-liner examples.`,
          takeaways: `## Takeaways

- Namespaces are non-negotiable when combining vocabularies.
- Most parser errors come from nesting or unescaped characters.
- Stick to UTF-8 in the prolog to avoid encoding surprises.`,
        },
      },
    ],
  },
  {
    id: 'unit-2',
    title: 'UNIT II: Document Type Definition (DTD)',
    topics: [
      {
        id: 'dtd-basics',
        title: 'DTD Fundamentals: Elements, Attributes, and Validation',
        subtopics: [
          'Role of DTD',
          'ELEMENT declarations',
          'ATTLIST declarations',
          'Internal vs external DTD',
          'Validity vs well-formedness',
        ],
        clos: ['CLO02'],
        cos: ['CO02'],
        content: {
          introduction:
            'A DTD is the original grammar for XML. It lists which elements exist, how they nest, and which attributes are allowed. Even if XSD is richer, DTD fluency is essential for legacy systems and exam answers.',
          concept: `## What a DTD captures

- Allowed elements and their order.
- Cardinality using ?, *, +.
- Allowed attributes with types (CDATA, ID, IDREF, enumerations).
- Entities for reusable text.

### Internal vs external
- Internal: rules declared inside the DOCTYPE.
- External: referenced with system/public identifiers for reuse.`,
          technicalDepth: `## Element and attribute declarations

~~~dtd
<!ELEMENT library (book+)>
<!ELEMENT book (title, author, price)>
<!ELEMENT title (#PCDATA)>
<!ATTLIST book id ID #REQUIRED>
<!ATTLIST book category (cs|ee|me) "cs">
~~~

Operators recap: ? optional, * zero-or-more, + one-or-more, | choice, comma = sequence.`,
          examples: `## Library with internal DTD

~~~xml
<?xml version="1.0"?>
<!DOCTYPE library [
  <!ELEMENT library (book+)>
  <!ELEMENT book (title, author, price)>
  <!ATTLIST book id ID #REQUIRED>
  <!ELEMENT title (#PCDATA)>
  <!ELEMENT author (#PCDATA)>
  <!ELEMENT price (#PCDATA)>
]>
<library>
  <book id="b1">
    <title>XML</title>
    <author>John</author>
    <price>499</price>
  </book>
</library>
~~~`,
          practical: `## Hands-on

- Draft a DTD for a course catalog with course, credits, faculty.
- Validate one XML sample, then break rules (wrong order, missing attribute) to see error messages.
- Move rules to an external DTD and reference it from your XML.`,
          exam: `## Exam prep

- Define #PCDATA and EMPTY.
- Write one element declaration using + and |.
- Sketch a DOCTYPE for an employee file with required id attribute.`,
          takeaways: `## Takeaways

- DTD gives structural validation but almost no data typing.
- Keep content models simple; deeply nested choices become unreadable.
- External DTDs promote reuse across documents.`,
        },
      },
      {
        id: 'dtd-advanced',
        title: 'Advanced DTD: Entities, Mixed Content, and Limitations',
        subtopics: [
          'General and parameter entities',
          'Mixed content models',
          'ID/IDREF relationships',
          'Why XSD replaces many DTD roles',
        ],
        clos: ['CLO02'],
        cos: ['CO02'],
        content: {
          introduction:
            'This topic is about reuse and realism. Entities keep repeated text consistent, mixed content supports text with inline tags, and ID/IDREF mimic primary/foreign keys. You also learn where DTDs fall short so you can justify XSD.',
          concept: `## Entity toolkit

- General entity: reusable text inside XML instances.
- Parameter entity: reusable fragments inside the DTD itself.

## Mixed content

Allows text with inline elements, e.g., paragraphs that contain <b> and <i>.`,
          technicalDepth: `## Patterns to remember

General entity
~~~dtd
<!ENTITY company "ACME Pvt Ltd">
...
<name>&company;</name>
~~~

Parameter entity
~~~dtd
<!ENTITY % commonAttrs "id ID #REQUIRED created CDATA #IMPLIED">
<!ATTLIST book %commonAttrs;>
~~~

Mixed content
~~~dtd
<!ELEMENT p (#PCDATA|b|i)*>
~~~

Limitations
- No native data ranges or regex patterns.
- Poor namespace story.
- Not written in XML, so tooling reuse is limited.`,
          examples: `## Sample with mixed content

~~~xml
<!DOCTYPE doc [
  <!ELEMENT doc (p+)>
  <!ELEMENT p (#PCDATA|b|i)*>
  <!ELEMENT b (#PCDATA)>
  <!ELEMENT i (#PCDATA)>
]>
<doc>
  <p>XML is <b>structured</b> and <i>portable</i>.</p>
</doc>
~~~`,
          practical: `## Try it

- Add a general entity for your institute name and reuse it in two elements.
- Create a paragraph element that allows bold/italic mixed with text.
- Add ID/IDREF to link a book to a publisher element.`,
          exam: `## Exam cues

- Difference between general and parameter entities.
- Mixed content syntax and why the * is required.
- Three crisp limitations of DTD vs XSD.`,
          takeaways: `## Takeaways

- Entities reduce duplication; parameter entities keep DTDs DRY.
- Mixed content is essential for narrative text with inline markup.
- Use XSD when you need types, namespaces, and stricter constraints.`,
        },
      },
    ],
  },
  {
    id: 'unit-3',
    title: 'UNIT III: XML Schema (XSD)',
    topics: [
      {
        id: 'xsd-fundamentals',
        title: 'XSD Fundamentals: Namespaces, Types, and Structure',
        subtopics: [
          'Schema document shape',
          'targetNamespace and qualification',
          'Simple vs complex types',
          'sequence/choice/all',
          'minOccurs/maxOccurs',
        ],
        clos: ['CLO02'],
        cos: ['CO03'],
        content: {
          introduction:
            'XSD is the W3C recommendation for expressing XML structure and datatypes using XML syntax itself. It brings namespaces, strong typing, and precise control over order and cardinality.',
          concept: `## Why XSD beats DTD

- Written in XML, so it can be parsed and validated like any other XML.
- Rich built-in types: string, boolean, decimal, date, dateTime, integer, etc.
- Namespaces are first-class, preventing collisions in large vocabularies.
- Facets add business rules (length, pattern, ranges).`,
          technicalDepth: `## Skeleton to memorize

~~~xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="http://example.com/student"
           xmlns="http://example.com/student"
           elementFormDefault="qualified">

  <xs:element name="student" type="StudentType"/>

  <xs:complexType name="StudentType">
    <xs:sequence>
      <xs:element name="name" type="xs:string"/>
      <xs:element name="dept" type="xs:string"/>
      <xs:element name="cgpa" type="xs:decimal"/>
    </xs:sequence>
    <xs:attribute name="id" type="xs:ID" use="required"/>
  </xs:complexType>

</xs:schema>
~~~

### Model groups
- xs:sequence → ordered children.
- xs:choice → one of the listed children.
- xs:all → any order, each 0 or 1 by design.

### Occurrence constraints
minOccurs / maxOccurs mirrors ?, *, + from DTD.`,
          examples: `## Repeating element example

~~~xml
<xs:element name="book" type="BookType" minOccurs="0" maxOccurs="unbounded"/>
~~~

## Attribute example
~~~xml
<xs:attribute name="status" type="xs:string" use="optional"/>
~~~`,
          practical: `## Build it

- Write an XSD for a student or inventory dataset.
- Add one required attribute and one repeating child.
- Validate at least two XML instances against it.`,
          exam: `## Exam must-knows

- Role of targetNamespace and elementFormDefault.
- Difference between simpleType and complexType.
- When to use sequence vs choice vs all.`,
          takeaways: `## Takeaways

- Start with a clear namespace; keep it consistent across XML and XSD.
- Choose the right model group to match business order requirements.
- Occurrence constraints are your first line of validation.`,
        },
      },
      {
        id: 'xsd-advanced',
        title: 'Advanced XSD: Restrictions, Extensions, and Identity Constraints',
        subtopics: ['XSD Restrictions (Facets)', 'Enumerations & Patterns', 'XSD Extensions (Type Inheritance)', 'Identity Constraints (key/unique/keyref)', 'Database Constraint Comparison', 'Common Validation Errors'],
        clos: ['CLO02', 'CLO05'],
        cos: ['CO03'],
        content: {
          introduction:
            'XML Schema Definition (XSD) is a powerful language used to describe and validate the structure and content of XML documents. It goes far beyond DTDs by supporting data types, namespaces, and complex constraints. Advanced XSD features — including restrictions, extensions, and identity constraints — help create robust and reliable XML systems used in real-world enterprise applications. This topic covers how to control input values at the schema level, how type inheritance works for reusable schema design, and how identity constraints enforce data uniqueness and referential integrity — similar to how primary keys and foreign keys work in relational databases.',
          concept: `## What XSD Helps You Do

- **Define Structure** — Specify the exact hierarchy, elements, and attributes your XML documents must follow.
- **Enforce Data Types** — Require elements to contain specific data types like integers, dates, strings, and more.
- **Apply Constraints** — Set validation rules including value ranges, patterns, uniqueness, and referential integrity.
- **Enable Data Integrity** — Ensure that data exchanged between systems is valid, consistent, and reliable.

## XSD Restrictions (Facets)

A **restriction** limits the values that an element or attribute can take. Restrictions are applied using **facets** — built-in constraining rules provided by XML Schema.

### Basic Syntax

\`\`\`xml
<xs:simpleType name="AgeType">
  <xs:restriction base="xs:integer">
    <xs:minInclusive value="18"/>
    <xs:maxInclusive value="60"/>
  </xs:restriction>
</xs:simpleType>
\`\`\`

This defines a custom type \`AgeType\` that only accepts integer values between **18** and **60** (inclusive).

### Important Restriction Facets

| Facet | Purpose | Example |
|-------|---------|---------|
| **minInclusive** | Minimum value allowed (inclusive) | \`value="18"\` → 18 is allowed |
| **maxInclusive** | Maximum value allowed (inclusive) | \`value="60"\` → 60 is allowed |
| **minExclusive** | Value must be strictly greater | \`value="0"\` → must be > 0 |
| **maxExclusive** | Value must be strictly smaller | \`value="100"\` → must be < 100 |
| **length** | Fixed character length | \`value="10"\` → exactly 10 chars |
| **minLength** | Minimum characters required | \`value="2"\` → at least 2 chars |
| **maxLength** | Maximum characters allowed | \`value="50"\` → at most 50 chars |
| **pattern** | Regular expression validation | \`value="[A-Z]{3}"\` → 3 uppercase |
| **enumeration** | List of allowed values | \`value="A"\`, \`value="B"\` |
| **totalDigits** | Total number of numeric digits | \`value="5"\` → max 5 digits |
| **fractionDigits** | Decimal digits after point | \`value="2"\` → max 2 decimals |

### Inclusive vs Exclusive Bounds

\`\`\`xml
<!-- Inclusive: value CAN be exactly 0 or 100 -->
<xs:minInclusive value="0"/>    <!-- 0 ≤ value -->
<xs:maxInclusive value="100"/>  <!-- value ≤ 100 -->

<!-- Exclusive: value CANNOT be exactly 0 or 100 -->
<xs:minExclusive value="0"/>    <!-- 0 < value -->
<xs:maxExclusive value="100"/>  <!-- value < 100 -->
\`\`\`

- **Inclusive (minInclusive / maxInclusive)** — The boundary value IS allowed. \`minInclusive="18"\` → 18 is valid.
- **Exclusive (minExclusive / maxExclusive)** — The boundary value is NOT allowed. \`minExclusive="18"\` → 18 is invalid, 19 is valid.

## XSD Extensions

**Extension** allows creation of new types by adding elements or attributes to an existing type. This supports **type inheritance** in XML schema — similar to how classes inherit from other classes in object-oriented programming.

### Restriction vs Extension

- **Restriction** — Reduces allowed values or narrows an existing type. Limits data range, constrains existing elements, makes types more specific.
- **Extension** — Adds new elements or attributes to a base type. Adds new fields, inherits base type structure, makes types more detailed.

## Identity Constraints

Identity constraints ensure **data uniqueness and referential integrity** in XML documents. They work similarly to database constraints.

### Three Main Mechanisms

- **xs:unique** — Values must be unique within their scope, but the element is optional (like UNIQUE constraint in SQL).
- **xs:key** — Values must be unique AND mandatory. The element must exist and have a non-null value (like PRIMARY KEY in SQL).
- **xs:keyref** — References another key constraint. The value must exist in the referenced key set (like FOREIGN KEY in SQL).

### Comparison with Database Constraints

| XSD Constraint | Database Equivalent | Mandatory? | Unique? | References? |
|---------------|-------------------|-----------|---------|------------|
| **xs:unique** | UNIQUE constraint | No | Yes | No |
| **xs:key** | PRIMARY KEY | Yes | Yes | No |
| **xs:keyref** | FOREIGN KEY | Yes | No | Yes |`,
          technicalDepth: `## Detailed Restriction Examples

### Enumeration — Fixed List of Allowed Values

\`\`\`xml
<xs:simpleType name="GradeType">
  <xs:restriction base="xs:string">
    <xs:enumeration value="A"/>
    <xs:enumeration value="B"/>
    <xs:enumeration value="C"/>
  </xs:restriction>
</xs:simpleType>
\`\`\`

Only "A", "B", or "C" are valid values. Any other value will trigger a validation error.

### Pattern — Regular Expression Validation

\`\`\`xml
<xs:simpleType name="PhoneType">
  <xs:restriction base="xs:string">
    <xs:pattern value="[0-9]{10}"/>
  </xs:restriction>
</xs:simpleType>
\`\`\`

This allows only exactly **10 digits**. Values like \`"9876543210"\` are valid but \`"123"\` or \`"abc"\` are not.

### Length Constraints

\`\`\`xml
<xs:simpleType name="UsernameType">
  <xs:restriction base="xs:string">
    <xs:minLength value="3"/>
    <xs:maxLength value="20"/>
  </xs:restriction>
</xs:simpleType>
\`\`\`

Username must be between **3 and 20 characters** long.

### Digit Constraints

\`\`\`xml
<xs:simpleType name="PriceType">
  <xs:restriction base="xs:decimal">
    <xs:totalDigits value="7"/>
    <xs:fractionDigits value="2"/>
  </xs:restriction>
</xs:simpleType>
\`\`\`

Allows up to **7 total digits** with a max of **2 decimal places**. Example: \`12345.67\` is valid, \`12345.678\` is not.

## Extension — Type Inheritance

\`\`\`xml
<!-- Base Type: Person -->
<xs:complexType name="Person">
  <xs:sequence>
    <xs:element name="name" type="xs:string"/>
  </xs:sequence>
</xs:complexType>

<!-- Derived Type: Student extends Person -->
<xs:complexType name="Student">
  <xs:complexContent>
    <xs:extension base="Person">
      <xs:sequence>
        <xs:element name="rollno" type="xs:int"/>
      </xs:sequence>
    </xs:extension>
  </xs:complexContent>
</xs:complexType>
\`\`\`

The \`Student\` type **inherits** the \`name\` element from \`Person\` and **adds** a new \`rollno\` element. This is type inheritance in XSD.

## Identity Constraint Details

### xs:unique — Unique Values (Optional Presence)

\`\`\`xml
<xs:element name="students">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="student" maxOccurs="unbounded">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="name" type="xs:string"/>
            <xs:element name="email" type="xs:string" minOccurs="0"/>
          </xs:sequence>
        </xs:complexType>
      </xs:element>
    </xs:sequence>
  </xs:complexType>
  <!-- Unique constraint on email -->
  <xs:unique name="uniqueEmail">
    <xs:selector xpath="student"/>
    <xs:field xpath="email"/>
  </xs:unique>
</xs:element>
\`\`\`

Two students **cannot** have the same email address. But a student without an email is still valid.

### xs:key — Unique + Mandatory (Primary Key)

\`\`\`xml
<xs:element name="students">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="student" maxOccurs="unbounded">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="id" type="xs:string"/>
            <xs:element name="name" type="xs:string"/>
          </xs:sequence>
        </xs:complexType>
      </xs:element>
    </xs:sequence>
  </xs:complexType>
  <!-- Key: every student MUST have a unique id -->
  <xs:key name="studentID">
    <xs:selector xpath="student"/>
    <xs:field xpath="id"/>
  </xs:key>
</xs:element>
\`\`\`

Every student **must have** an \`id\`, each \`id\` must be **unique**, and it acts like a **primary key** in DBMS.

### xs:keyref — Foreign Key Reference

\`\`\`xml
<xs:element name="university">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="course" maxOccurs="unbounded">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="courseId" type="xs:string"/>
            <xs:element name="title" type="xs:string"/>
          </xs:sequence>
        </xs:complexType>
      </xs:element>
      <xs:element name="enrollment" maxOccurs="unbounded">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="student" type="xs:string"/>
            <xs:element name="course" type="xs:string"/>
          </xs:sequence>
        </xs:complexType>
      </xs:element>
    </xs:sequence>
  </xs:complexType>
  <!-- Primary key for courses -->
  <xs:key name="courseID">
    <xs:selector xpath="course"/>
    <xs:field xpath="courseId"/>
  </xs:key>
  <!-- Foreign key: enrollment course must exist -->
  <xs:keyref name="courseRef" refer="courseID">
    <xs:selector xpath="enrollment"/>
    <xs:field xpath="course"/>
  </xs:keyref>
</xs:element>
\`\`\`

Every \`enrollment/course\` value **must exist** in the \`course/courseId\` list. If a student enrolls in course \`"CS101"\`, that course **must be defined** in the courses.`,
          examples: `## Practical Use Cases

Advanced XSD features are used extensively in real-world enterprise systems:

- **Student Information Systems** — Validate student records, enforce unique IDs
- **E-Commerce XML Data** — Validate product catalogs, enforce price constraints
- **Banking XML Documents** — Ensure transaction integrity with key references
- **Web Service Data Validation** — Validate SOAP messages against schemas
- **Healthcare Data Exchange** — HL7 message validation with strict type constraints
- **Financial Reporting (XBRL)** — Enforce reporting standards with enumerations and patterns

## Real-World Example: University Enrollment System

In a university enrollment system, XSD ensures:
- **Restrictions** → Student age must be 16-65, grades must be A/B/C/D/F
- **Extensions** → GraduateStudent inherits from Student and adds thesis fields
- **Key** → Every student has a unique student ID
- **Keyref** → Course enrollment references a valid course ID

## Lab Exercise 1: Age Restriction (18–60)

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:simpleType name="AgeType">
    <xs:restriction base="xs:integer">
      <xs:minInclusive value="18"/>
      <xs:maxInclusive value="60"/>
    </xs:restriction>
  </xs:simpleType>
  <xs:element name="age" type="AgeType"/>
</xs:schema>

<!-- Valid XML:   <age>25</age>  -->
<!-- Invalid XML: <age>15</age>  (below 18) -->
<!-- Invalid XML: <age>65</age>  (above 60) -->
\`\`\`

## Lab Exercise 2: Enumeration for Course Types

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:simpleType name="CourseType">
    <xs:restriction base="xs:string">
      <xs:enumeration value="Science"/>
      <xs:enumeration value="Commerce"/>
      <xs:enumeration value="Arts"/>
      <xs:enumeration value="Engineering"/>
    </xs:restriction>
  </xs:simpleType>
  <xs:element name="course" type="CourseType"/>
</xs:schema>

<!-- Valid:   <course>Science</course>     -->
<!-- Invalid: <course>Music</course>       -->
\`\`\`

## Lab Exercise 3: Extension — Employee → Manager

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <!-- Base Type: Employee -->
  <xs:complexType name="Employee">
    <xs:sequence>
      <xs:element name="name" type="xs:string"/>
      <xs:element name="empId" type="xs:int"/>
    </xs:sequence>
  </xs:complexType>

  <!-- Derived Type: Manager extends Employee -->
  <xs:complexType name="Manager">
    <xs:complexContent>
      <xs:extension base="Employee">
        <xs:sequence>
          <xs:element name="department" type="xs:string"/>
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>

  <xs:element name="manager" type="Manager"/>
</xs:schema>

<!-- Valid XML:
<manager>
  <name>Alice</name>
  <empId>101</empId>
  <department>Sales</department>
</manager> -->
\`\`\`

## Lab Exercise 4: Student ID Key Constraint

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="students">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="student" maxOccurs="unbounded">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="id" type="xs:string"/>
              <xs:element name="name" type="xs:string"/>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
    <xs:key name="studentID">
      <xs:selector xpath="student"/>
      <xs:field xpath="id"/>
    </xs:key>
  </xs:element>
</xs:schema>
\`\`\`

## Lab Exercise 5: Course Enrollment using keyref

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="university">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="courses">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="course" maxOccurs="unbounded">
                <xs:complexType>
                  <xs:sequence>
                    <xs:element name="courseId" type="xs:string"/>
                    <xs:element name="title" type="xs:string"/>
                  </xs:sequence>
                </xs:complexType>
              </xs:element>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="enrollments">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="enrollment" maxOccurs="unbounded">
                <xs:complexType>
                  <xs:sequence>
                    <xs:element name="studentName" type="xs:string"/>
                    <xs:element name="courseRef" type="xs:string"/>
                  </xs:sequence>
                </xs:complexType>
              </xs:element>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
    <xs:key name="courseKey">
      <xs:selector xpath="courses/course"/>
      <xs:field xpath="courseId"/>
    </xs:key>
    <xs:keyref name="enrollmentCourseRef" refer="courseKey">
      <xs:selector xpath="enrollments/enrollment"/>
      <xs:field xpath="courseRef"/>
    </xs:keyref>
  </xs:element>
</xs:schema>
\`\`\``,
          practical: `## Practice Exercises

1. **Age Restriction** — Create an XSD schema with a simple type \`AgeType\` that restricts an integer to values between 18 and 60 (inclusive). Then create an element \`age\` that uses this type.

2. **Enumeration for Course Types** — Create an XSD type \`CourseType\` that only allows the values: "Science", "Commerce", "Arts", and "Engineering".

3. **Extension: Employee → Manager** — Design a schema where \`Employee\` has \`name\` and \`empId\`. Then create a \`Manager\` type that extends \`Employee\` with a \`department\` element.

4. **Student ID Key Constraint** — Design a schema for a list of students where each student has an \`id\` and \`name\`. Implement a \`xs:key\` constraint to ensure every student has a unique, mandatory \`id\`.

5. **Course Enrollment using keyref** — Create a schema with a list of courses (each with a unique \`courseId\`) and enrollments (each referencing a \`courseId\`). Use \`xs:key\` and \`xs:keyref\` to enforce referential integrity.

## Advanced Topics to Explore

- **Complex Type Inheritance** — Multiple levels of derivation creating deep type hierarchies for complex data models.
- **XML Schema Reuse** — Using \`xs:include\` and \`xs:import\` to reference other schema files.
- **Schema Modularization** — Breaking large schemas into smaller, manageable modules for better maintainability.
- **Namespace Integration** — Using \`targetNamespace\` and qualified names to avoid element name conflicts.
- **XML Validation Tools** — Using tools like XMLSpy, Oxygen XML, or command-line validators to validate XML against XSD.
- **XSD 1.1 Features** — Assertions, conditional type assignment, and other modern schema capabilities.`,
          exam: `## Quiz & Exam Preparation

**Q1.** Which XSD facet restricts values to a specific list of allowed entries?
→ **enumeration** — it restricts values to a predefined list of allowed entries.

**Q2.** What does xs:extension do in XSD?
→ It **adds new elements/attributes to a base type**, enabling type inheritance.

**Q3.** Which identity constraint is equivalent to a PRIMARY KEY in databases?
→ **xs:key** — ensures values are both unique and mandatory.

**Q4.** What is the difference between xs:unique and xs:key?
→ \`xs:key\` requires the element to exist (mandatory + unique), while \`xs:unique\` only enforces uniqueness if the element is present.

**Q5.** If minExclusive value="0", which value is VALID?
→ **1** — with minExclusive="0", the value must be strictly greater than 0.

**Q6.** xs:keyref is similar to which database concept?
→ **Foreign Key** — it references values defined in another key constraint.

**Q7.** Which facet would you use to allow only a 10-digit number pattern?
→ **pattern** — using \`[0-9]{10}\` to match exactly 10 digits.

**Q8.** In XSD extension, the derived type:
→ **Inherits all elements from the base type and adds new ones**.

## Common Validation Errors

- **Value violates restriction** — e.g., Age value is 15 but minInclusive is set to 18.
- **Duplicate key values** — e.g., Two students have the same id="S001", violating xs:key.
- **Missing key references** — e.g., Enrollment references course "CS999" which does not exist, violating xs:keyref.
- **Incorrect pattern format** — e.g., Phone number is "12345" but pattern requires [0-9]{10}.
- **Enumeration mismatch** — e.g., Grade value is "E" but only "A", "B", "C" are allowed.
- **Length constraint violation** — e.g., Username is "ab" but minLength is 3.`,
          takeaways: `## Key Takeaways

1. Apply **XSD restriction facets** to control data values — including ranges, patterns, enumerations, and length constraints.
2. Create **schema inheritance using extension** to build reusable, hierarchical type definitions.
3. Implement **identity constraints** (unique, key, keyref) to enforce data uniqueness and referential integrity.
4. Understand **XML validation logic** and debug common schema validation errors.
5. Design **real-world schema models** for practical applications like student systems, e-commerce, and web services.

## Summary

- Facets encode business rules; derivation encodes reuse.
- Identity constraints give XML relational-style integrity.
- xs:key = PRIMARY KEY (unique + mandatory), xs:unique = UNIQUE (unique only), xs:keyref = FOREIGN KEY (referential).
- Always document the scope of selectors when using keys.
- Use restrictions to narrow types and extensions to expand them — never confuse the two.`,
        },
      },
      {
        id: 'web-services-xml',
        title: 'Web Services & XML: The Restaurant Analogy',
        subtopics: [
          'What is a Web Service',
          'WSDL – the service menu',
          'Client and Server roles',
          'SOAP Request & Response',
          'Role of XML in Web Services',
        ],
        clos: ['CLO02', 'CLO05'],
        cos: ['CO03', 'CO05'],
        content: {
          introduction:
            'Web Services allow applications to communicate over the internet using standardised XML-based protocols. Understanding them is critical because XML is the language that powers SOAP messages, WSDL contracts, and data exchange between heterogeneous systems. This topic uses a familiar restaurant analogy — ordering food — to map every real-world step to its Web Service counterpart, making the concepts intuitive and exam-ready.',

          concept: `## The Restaurant → Web Service Mapping

Think of a Web Service as a restaurant. Every actor and artefact in a restaurant has a direct counterpart in the Web Service world:

| 🏠 Restaurant Concept | 🌐 Web Service Equivalent | Explanation |
|---|---|---|
| **Restaurant** | **Web Service** | A restaurant offers food; a web service offers data / functions. |
| **Menu** | **WSDL (Web Services Description Language)** | The menu lists available dishes; WSDL lists available methods. |
| **Waiter** | **Client Application** | The waiter carries your order to the kitchen; the client sends a request to the server. |
| **Kitchen** | **Server** | The kitchen prepares food; the server processes the request and builds a response. |
| **Order Slip** | **SOAP Request (XML)** | Your order is written clearly on paper; a SOAP request is written in XML. |
| **Food Served** | **SOAP Response (XML)** | The prepared dish comes back to you; the SOAP response (XML) comes back to the client. |

### Key insight
Every step — from browsing the menu to receiving food — mirrors the lifecycle of a Web Service call: discover → describe → request → respond.`,

          technicalDepth: `## The Role of XML — Why It Matters Most

XML is the universal language that makes Web Services work across platforms, programming languages, and operating systems.

### Why XML?
- **Platform independent** — works on Windows, Linux, macOS, mobile, and embedded systems.
- **Language independent** — Java, Python, .NET, PHP all parse XML natively.
- **Human-readable** — developers can inspect messages without special tools.
- **Self-describing** — tags explain what the data means.

### SOAP Message Structure (XML)

Every SOAP message is an XML document wrapped in an **Envelope** containing a **Body**:

#### SOAP Request
~~~xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <sayHelloWorld />
  </soap:Body>
</soap:Envelope>
~~~

#### SOAP Response
~~~xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <sayHelloWorldResponse>
      <return>Hello World!!</return>
    </sayHelloWorldResponse>
  </soap:Body>
</soap:Envelope>
~~~

### WSDL Skeleton (XML)
~~~xml
<definitions name="RestaurantService"
             xmlns="http://schemas.xmlsoap.org/wsdl/"
             targetNamespace="http://example.com/restaurant">
  <message name="OrderRequest">
    <part name="dish" type="xsd:string"/>
  </message>
  <message name="OrderResponse">
    <part name="status" type="xsd:string"/>
  </message>
  <portType name="MenuPortType">
    <operation name="placeOrder">
      <input message="tns:OrderRequest"/>
      <output message="tns:OrderResponse"/>
    </operation>
  </portType>
</definitions>
~~~`,

          examples: `## Restaurant Analogy — Step by Step

### Step 1 — Customer reads the Menu (WSDL Discovery)
The customer picks up the menu to see what's available. Similarly, the client reads the WSDL to discover available operations.

### Step 2 — Customer tells the Waiter (Client sends SOAP Request)
~~~xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <placeOrder>
      <dish>Paneer Butter Masala</dish>
      <quantity>2</quantity>
    </placeOrder>
  </soap:Body>
</soap:Envelope>
~~~

### Step 3 — Kitchen prepares the food (Server processes)
The server-side logic reads the XML, processes the order, and prepares the response.

### Step 4 — Food is served back (SOAP Response)
~~~xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <placeOrderResponse>
      <status>Order Confirmed</status>
      <estimatedTime>20 minutes</estimatedTime>
    </placeOrderResponse>
  </soap:Body>
</soap:Envelope>
~~~

### Complete mapping diagram
~~~
Customer  ──(reads)──▶  Menu (WSDL)
    │
    ├──(tells waiter)──▶  SOAP Request (XML)
    │                         │
    │                    Kitchen (Server)
    │                         │
    └──(receives food)◀──  SOAP Response (XML)
~~~`,

          practical: `## Try It Yourself

1. **Write a WSDL stub** — Define a \`MenuPortType\` with two operations: \`placeOrder\` and \`cancelOrder\`. Each should have an input message and an output message.

2. **Craft a SOAP Request** — Create a valid XML SOAP envelope that calls \`placeOrder\` with parameters \`dish\`, \`quantity\`, and \`tableNumber\`.

3. **Craft a SOAP Response** — Write the XML the server would return, including \`status\`, \`orderId\`, and \`estimatedTime\`.

4. **Validate** — Paste your SOAP messages into an XML validator and ensure they are well-formed.

5. **Extend** — Add a SOAP Fault element that the kitchen would return if the dish is unavailable.`,

          exam: `## Exam Pointers

- **Define Web Service** — "A Web Service is a software system designed to support interoperable machine-to-machine interaction over a network using XML-based messaging (SOAP) and described via WSDL."
- **List the four building blocks** — SOAP, WSDL, UDDI, XML.
- **Explain the restaurant analogy** — Map restaurant → web service, menu → WSDL, order → SOAP request, food → SOAP response.
- **State why XML is used** — Platform-independent, language-independent, human-readable, self-describing.
- **Write a sample SOAP request/response pair** — Always include the Envelope and Body tags with proper namespace.`,

          takeaways: `## Takeaways

- Web Services let heterogeneous systems communicate using XML as a universal language.
- WSDL describes *what* a service offers; SOAP defines *how* to ask for it.
- Every SOAP message is a well-formed XML document wrapped in an Envelope/Body structure.
- The restaurant analogy (menu → WSDL, order → request, food → response) is the fastest way to remember the architecture.
- **Memory trick:** *"XML is the language programs use to talk politely and clearly."*`,
        },
      },
    ],
  },
  {
    id: 'unit-4',
    title: 'UNIT IV: XSLT (Transformations)',
    topics: [
      {
        id: 'xslt-basics',
        title: 'XSLT Basics: Templates, Match/Select, and HTML Output',
        subtopics: ['Templates', 'match/select', 'apply-templates', 'for-each', 'HTML output'],
        clos: ['CLO04'],
        cos: ['CO04'],
        content: {
          introduction:
            'XSLT is a rule-driven language that walks an XML tree with XPath and emits another document (HTML, text, XML, PDF via FO). Mastering templates and context selection is the gateway to clean transformations.',
          concept: `## Core ideas

- Templates match nodes; matching sets the current context.
- apply-templates delegates processing; value-of pulls text.
- for-each iterates when you need full control over ordering.
- output method controls whether you emit XML, HTML, or text.`,
          technicalDepth: `## Minimal, exam-ready stylesheet

~~~xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <html><body>
      <h1>Library</h1>
      <xsl:apply-templates select="library/book"/>
    </body></html>
  </xsl:template>

  <xsl:template match="book">
    <p><xsl:value-of select="title"/></p>
  </xsl:template>
</xsl:stylesheet>
~~~

Sorting inside for-each:
~~~xml
<xsl:for-each select="library/book">
  <xsl:sort select="number(price)" data-type="number" order="descending"/>
  <xsl:value-of select="title"/>
</xsl:for-each>
~~~`,
          examples: `## Input vs output

Input XML
~~~xml
<library>
  <book id="b1"><title>XML</title><price>499</price></book>
</library>
~~~

HTML output (simplified)
~~~html
<h1>Library</h1>
<p>XML</p>
~~~`,
          practical: `## Build a starter transform

- Generate an HTML table from book.xml.
- Add a header row with <th>.
- Sort by price descending using xsl:sort.
- Validate that the XSLT runs in a browser or xsltproc.`,
          exam: `## Exam prompts

- Difference between match and select.
- Role of apply-templates vs for-each.
- What does xsl:output method="html" do?`,
          takeaways: `## Takeaways

- Think in templates; keep the root template small.
- Use apply-templates for extensibility; reach for for-each when you must control order explicitly.
- Sorting and formatting are driven by XPath expressions.`,
        },
      },
      {
        id: 'xslt-advanced',
        title: 'Advanced XSLT: Conditions, Sorting, and Modular Design',
        subtopics: ['xsl:if', 'xsl:choose', 'xsl:sort', 'variables', 'modularity'],
        clos: ['CLO04', 'CLO05'],
        cos: ['CO04', 'CO05'],
        content: {
          introduction:
            'Real-world transforms branch, classify, and reuse logic. Conditions, variables, and separate templates keep stylesheets maintainable. You also learn to compute values (totals, averages) and to modularize code.',
          concept: `## Control and reuse

- xsl:if for single checks; xsl:choose for multi-branch logic.
- Variables hold computed values or XPath results (immutable once set).
- Named templates enable reuse across documents.
- Import/include split large stylesheets for teams.`,
          technicalDepth: `## Snippets worth memorizing

Branching
~~~xml
<xsl:choose>
  <xsl:when test="price &gt; 500">Expensive</xsl:when>
  <xsl:otherwise>Affordable</xsl:otherwise>
</xsl:choose>
~~~

Variables and totals
~~~xml
<xsl:variable name="total" select="sum(/library/book/price)"/>
<p>Total: <xsl:value-of select="$total"/></p>
~~~

Modularity
~~~xml
<xsl:call-template name="renderRow"/>
~~~`,
          examples: `## Classification example

~~~xml
<xsl:template match="book">
  <tr>
    <td><xsl:value-of select="title"/></td>
    <td>
      <xsl:choose>
        <xsl:when test="number(price) &gt; 500">High</xsl:when>
        <xsl:otherwise>Low</xsl:otherwise>
      </xsl:choose>
    </td>
  </tr>
</xsl:template>
~~~

## Sorting with numbers
~~~xml
<xsl:for-each select="library/book">
  <xsl:sort select="number(price)" data-type="number" order="ascending"/>
  <xsl:value-of select="title"/>
</xsl:for-each>
~~~`,
          practical: `## Apply it

- Add a price band label using xsl:choose.
- Compute a grand total and average with sum() and count().
- Move row rendering into a named template and call it, keeping the root template slim.`,
          exam: `## Likely questions

- Contrast xsl:if with xsl:choose.
- How does xsl:sort treat numbers vs strings?
- Two advantages of named templates or imports.`,
          takeaways: `## Takeaways

- Conditions make transforms context-aware.
- Variables simplify repeated calculations.
- Modular stylesheets stay maintainable as projects grow.`,
        },
      },
    ],
  },
  {
    id: 'unit-5',
    title: 'UNIT V: XPath + Mini Project',
    topics: [
      {
        id: 'xpath',
        title: 'XPath: Node Selection, Axes, Predicates, and Functions',
        subtopics: ['Absolute vs relative paths', 'Predicates', 'Axes', 'Functions', 'Attributes'],
        clos: ['CLO03'],
        cos: ['CO04'],
        content: {
          introduction:
            'XPath is the query backbone for XML. XSLT, XQuery, DOM APIs, and validators all lean on it. You will learn to move across the tree with axes, filter with predicates, and compute with built-in functions.',
          concept: `## Essentials

- Absolute path starts with /; relative starts at the current node.
- Predicates [ ] filter nodes by position or condition.
- Axes describe direction: child, parent, ancestor, descendant, following-sibling, preceding-sibling, attribute.
- Functions help aggregate, test, and convert values.`,
          technicalDepth: `## Syntax patterns

Common selections
~~~
/library/book/title
//book[@id='b2']/price
//book[price &gt; 500]
//@id
~~~

Handy functions
- count(/library/book)
- sum(/library/book/price)
- string-length(title)
- contains(title, 'XML')`,
          examples: `## Working sample

XML
~~~xml
<library>
  <book id="b1"><title>XML</title><price>499</price></book>
  <book id="b2"><title>XSLT</title><price>599</price></book>
</library>
~~~

Queries
- Titles → /library/book/title
- Expensive books → /library/book[price &gt; 550]
- Price of b2 → //book[@id='b2']/price/text()
- Count → count(/library/book)
- Sort-like selection → /library/book[1] (first), /library/book[last()] (last)`,
          practical: `## Do-now exercises

- Write 10 XPath queries against your project XML and verify them in an online tester.
- Use predicates for both value filters and positional filters.
- Try an axis you rarely use (following-sibling or ancestor) and note the result.`,
          exam: `## What examiners like

- Define predicate with an example.
- Explain two axes and where they are useful.
- Show one function that returns a number and one that returns a string.`,
          takeaways: `## Takeaways

- XPath is context-sensitive; always know your current node.
- Predicates and axes together unlock precise navigation.
- Practice writing and reading XPath faster than memorizing it.`,
        },
      },
      {
        id: 'xml-project',
        title: 'Mini Project: XML + XSD + XPath + XSLT Pipeline',
        subtopics: ['Dataset modeling', 'XML instances', 'XSD validation', 'XPath queries', 'XSLT report'],
        clos: ['CLO05'],
        cos: ['CO05'],
        content: {
          introduction:
            'This capstone brings everything together. You will model a small but realistic dataset, validate it with XSD, query it with XPath, and publish a report via XSLT.',
          concept: `## Project blueprint

1) Define the vocabulary (elements, attributes, namespace).
2) Draft XML instances that reflect realistic data.
3) Create XSD with constraints that matter (enums, ranges, required attributes).
4) Prepare XPath queries that answer meaningful questions.
5) Author XSLT to render a clean HTML or text report.`,
          technicalDepth: `## Suggested folder layout

- data/ → XML instances
- schema/ → XSD
- transform/ → XSLT
- report/ → generated output

Quality checklist
- No well-formedness errors.
- Schema enforces keys and value ranges.
- XPath queries documented with expected outputs.
- XSLT uses templates, sorting, and at least one conditional.`,
          examples: `## Deliverables snapshot

- 1–2 XML files for the dataset (e.g., courses, orders, patients).
- 1 XSD capturing constraints (id uniqueness, enums, min/max).
- 5–10 XPath queries with short notes.
- 1 XSLT that generates an HTML dashboard/table.`,
          practical: `## Step-by-step

1. Pick a dataset you can describe in 8–12 elements.
2. Write a draft XML and validate well-formedness.
3. Write XSD and iterate until validation passes.
4. Run XPath queries in a tester and capture expected results.
5. Build XSLT that sorts and labels data; verify in browser or cli.
6. Ship a short README explaining assumptions and how to run.`,
          exam: `## Viva prompts

- Why did you choose certain attributes vs elements?
- Which XSD constraints caught errors during testing?
- Show a query that fails after you intentionally break the XML.
- How does your XSLT pick which nodes to render first?`,
          takeaways: `## Takeaways

- Real value comes from combining validation, querying, and transformation.
- A clear namespace and consistent IDs reduce downstream bugs.
- Documenting your pipeline makes handover painless.`,
        },
      },
    ],
  },
];
