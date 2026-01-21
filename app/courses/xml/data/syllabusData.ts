export * from "./syllabusData2";

/*
export interface CLO {
  id: string;
  description: string;
}

export interface CO {
  id: string;
          introduction: `XML by itself only guarantees **well‑formedness**. In a real system, however, we usually need much stronger guarantees: *What elements are allowed? In what order? What data types can appear? Are IDs unique? Is a date valid? Is a number within range?* A schema language answers these questions.

**XML Schema (XSD)** is the W3C‑recommended language for defining the structure and data constraints of XML documents. Compared with DTDs, XSD is more expressive, uses XML syntax (so it can be parsed like any other XML), supports **namespaces**, and provides a rich type system (string, integer, date, decimal, boolean, enumerations, patterns, etc.).

This topic builds the core mental model you need for Unit III:
- what a schema is and why it matters
- how namespaces prevent naming conflicts
- how XSD types work (simple vs complex)
- how XSD expresses structure (sequence/choice/all)

If you master these foundations, you can design schemas that make data exchange safer and reduce errors early (during validation) rather than late (during application logic).`,

          concept: `## 1) What is an XML Schema?

An **XML Schema** is a set of rules (a “contract”) that describes:
- the **allowed elements** and **attributes**
- their **hierarchy** (which elements can appear within which)
- **ordering** constraints (sequence)
- **cardinality** constraints (minOccurs/maxOccurs)
- **data types** and **value restrictions**

When a document satisfies the schema, it is **valid** with respect to that schema.

### DTD vs XSD (High-value exam comparison)

| Feature | DTD | XSD |
|---|---|---|
| Syntax | Non‑XML | XML-based |
| Namespaces | Weak | Strong support |
| Data typing | Very limited | Rich built‑in + custom types |
| Constraints | Limited | Facets, keys, uniqueness, patterns |
| Extensibility | Basic | Derivation/extension/restriction |

## 2) Namespaces (Why we need them)

Namespaces avoid collisions when different vocabularies use the same element names.

Example conflict:
- A bookstore vocabulary uses \`<title>\`
- A movie database vocabulary also uses \`<title>\`

With namespaces, we can safely combine them as \`bk:title\` and \`mv:title\`.

## 3) Simple vs Complex Types

- **Simple type**: contains text only (no child elements). Example: an integer roll number.
- **Complex type**: can contain child elements and/or attributes. Example: a \`<student>\` element containing \`<name>\`, \`<rollNo>\`, and attributes like \`id\`.

## 4) The schema is also a tree

An XSD describes the structure of an XML tree. The schema author’s job is to design:
- the vocabulary (names)
- the structure (parent/child relationships)
- the constraints (types and business rules)`,

          technicalDepth: `## Core XSD Building Blocks

### 1) Schema document header

An XSD begins with \`<xs:schema>\`. The prefix (often \`xs\` or \`xsd\`) is mapped to the XML Schema namespace.

Key attributes:
- \`targetNamespace\`: the namespace you are defining
- \`xmlns:xs\`: the XML Schema namespace
- \`elementFormDefault\`: whether local elements must be namespace-qualified (commonly \`qualified\`)

### 2) Declaring elements

Two common styles:

1) **Global element + inline type** (quick, less reusable)

2) **Global type + element referencing it** (clean, reusable)

### 3) Structure models: sequence / choice / all

- \`xs:sequence\`: children must appear **in that order**.
- \`xs:choice\`: **one** of the children may appear (can be repeated).
- \`xs:all\`: children may appear in **any order**, but with constraints (typically 0 or 1 occurrence of each child).

### 4) Cardinality: minOccurs / maxOccurs

- \`minOccurs="0"\` means optional.
- \`maxOccurs="unbounded"\` means any number.

This is the XSD equivalent of DTD \`?\`, \`*\`, \`+\`.

### 5) Built-in data types

Common built-ins:
- \`xs:string\`, \`xs:integer\`, \`xs:decimal\`, \`xs:boolean\`
- \`xs:date\`, \`xs:dateTime\`

### 6) Simple type restrictions (facets)

XSD allows constraints called **facets**:
- \`minInclusive\`, \`maxInclusive\`
- \`pattern\` (regex)
- \`enumeration\`
- \`length\`, \`minLength\`, \`maxLength\`

### 7) Complex types and attributes

Complex types define element structure and can add attributes:
- \`<xs:attribute name="id" type="xs:ID" use="required"/>\`

### 8) Validation pipeline idea

In a typical pipeline:
1. Parse XML (must be well‑formed)
2. Validate against XSD (must be valid)
3. Only then process in application code

This improves reliability and makes integration easier because errors are caught at the boundary.`,

          examples: `## Example 1: A Simple “Student” Schema (XSD)

\`\`\`xml
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

## Example 2: Valid XML for the Schema

\`\`\`xml
  {
    id: "CLO01",
    description:
      "Explain XML fundamentals, syntax rules, and document structure, and author well-formed XML.",
  },
  {
    id: "CLO02",

## Example 3: Adding a Custom Type (CGPA 0.0–10.0)

\`\`\`xml
    description:
      "Design and apply DTDs to define XML vocabularies and validate XML documents.",
  },
  {
    id: "CLO03",
    description:
      "Create XML Schemas (XSD) using namespaces and data types to enforce strong validation constraints.",

Then use it:

\`\`\`xml
  },
  {

          practical: `## Practical Skills Checklist (What you should be able to do)

1) Create an XSD with:
- a namespace and \`targetNamespace\`
- a global element
- a named complexType with \`xs:sequence\`

2) Add constraints:
- \`minOccurs\` / \`maxOccurs\`
- required attributes (\`use="required"\`)
- simple type restrictions (min/max, pattern, enumeration)

3) Link XML to XSD

In many tools you can link via schema location hints (note: validation still depends on the validator/tool):

\`\`\`xml
    id: "CLO04",
    description:
      "Transform XML documents using XSLT templates, conditions, and sorting to generate target formats.",
  },
  {
    id: "CLO05",
    description:

4) Validate with a validator (IDE/XML tools, build pipelines, or libraries in Java/Python/.NET).`,

          exam: `## Exam Preparation

### A) Definitions (2–5 marks)
- Define XML Schema (XSD).
- Define namespace and \`targetNamespace\`.
- Differentiate simple type and complex type.
- Explain \`minOccurs\` and \`maxOccurs\`.

### B) Short Answers (5 marks)
1) Compare DTD and XSD.
2) Why are namespaces required?
3) What is \`elementFormDefault\`? What does \`qualified\` mean?

### C) Long Answer (10 marks)
Design an XSD for a \`<library>\` containing multiple \`<book>\` entries. Each book has title, author, price and an id attribute. Add at least one restriction (e.g., price must be positive). Provide a valid XML sample.

### D) “Spot the Error” style
Given an XML instance and an XSD, identify which rule is violated (wrong order, missing required attribute, wrong type, out-of-range value).`,

          takeaways: `## Takeaways

- XSD is the W3C standard for strong XML validation.
- XSD supports namespaces, rich data typing, and detailed constraints.
- Simple types restrict values; complex types model structure.
- \`sequence\`, \`choice\`, and cardinality are exam essentials.

CLO/CO: CLO03 and CO03 are the primary outcomes for this topic.`,
      "Navigate and query XML data using XPath, and integrate XML + XSD + XSLT in a mini project.",
  },
];
export const cos: CO[] = [
  {
    id: "CO01",
    description:
      "Analyze and create well-formed XML documents following proper syntax and structural rules.",
  },
  {
    id: "CO02",
    description:
      "Design and implement Document Type Definitions (DTD) to validate XML document structures.",
  },
  {
    id: "CO03",
    description:
      "Develop XML Schema (XSD) definitions with namespaces, data types, and validation constraints.",
  },
  {
    id: "CO04",
    description:
      "Transform XML data using XSLT templates, conditions, and sorting techniques.",
  },
  {
    id: "CO05",
    description:
      "Use XPath expressions to navigate XML trees and extract or filter required information.",
  },
  {
    id: "CO06",
    description:
      "Build an end-to-end XML solution combining XML, XSD, XPath, and XSLT for a realistic dataset.",
  },
];

export const units: Unit[] = [
  {
    id: "unit-1",
    title: "UNIT I: Introduction to XML",
    topics: [
      {
        id: "xml-overview",
        title: "XML Overview & Markup Languages",
        subtopics: [
          "XML overview",
          "Markup languages",
          "Comparison with HTML",
          "Where XML is used",
          "XML ecosystem (DTD/XSD/XPath/XSLT)",
        ],
        clos: ["CLO01"],
        cos: ["CO01"],
        content: {
          introduction: `XML (eXtensible Markup Language) is a standard for representing structured information as plain text. It was created to make data exchange reliable across different platforms, programs, and organizations. XML is not “about looking good in a browser” (that is HTML’s job). XML is about describing what data *is* and how it is structured.

In practice, XML appears in many places you already use: configuration files (for example, older Java and .NET configs), Android UI layouts, Office documents (.docx/.pptx are zipped XML), SOAP web services, RSS feeds, and enterprise integration pipelines. Its long-term value comes from three properties: (1) it is human-readable, (2) it is machine-parseable, and (3) it can be validated and transformed using a supporting ecosystem.

This topic introduces XML as a markup language and explains how XML differs from HTML, why strict structure matters, and how the XML family of technologies (DTD/XSD/XPath/XSLT) turns raw tags into an end‑to‑end data pipeline.`,

          concept: `## What is a Markup Language?

A **markup language** uses tags to add meaning to text. The idea comes from publishing: editors “mark up” a manuscript with structural hints (title, heading, emphasis). In digital form, we embed those hints using tags.

- **HTML** is a markup language designed for *presentation* in browsers.
- **XML** is a markup language designed for *data representation* and interchange.

## What XML Is (and Is Not)

### XML is:
- A **meta-language** (you define your own tags).
- A **tree-structured** representation (root → branches → leaves).
- A **syntax standard** (strict rules → consistent parsing).
- A foundation for related specs: **DTD**, **XSD**, **XPath**, **XSLT**, **XQuery**.

### XML is not:
- A programming language.
- A database.
- A replacement for HTML.

## XML vs HTML (Core Differences)

| Aspect | HTML | XML |
|---|---|---|
| Purpose | Display content | Describe data |
          introduction: `Once you know the basics of XSD, the next step is designing schemas that enforce *real* business rules: optional/required fields, uniqueness of identifiers, controlled vocabularies, value ranges, and consistent structure across large datasets.

This topic focuses on “advanced but practical” XSD features that frequently appear in university exams and industry schemas:
- attribute design (required/optional, types like ID/IDREF)
- restriction facets (enumeration, pattern, min/max)
- structural constraints (sequence vs choice, nested complex types)
- identity constraints (\`xs:key\`, \`xs:unique\`, \`xs:keyref\`)

We end with a realistic mini-case: modeling a \`notebook\` dataset (notes/sections/tags) using XSD and linking an XML instance to it for validation.`,

          concept: `## Key Ideas

### 1) Constraints live in the schema

Instead of validating in code after parsing, you push constraints into XSD so every producer/consumer uses the same contract.

### 2) Value restrictions (facets)

Facets allow you to create domain-specific types, such as:
- \`BranchCode\`: enumeration of allowed branch names
- \`PhoneType\`: pattern validation
- \`PositiveMoney\`: \`minExclusive\` on decimal

### 3) Identity constraints

XSD can enforce:
- **unique** values in a scope (\`xs:unique\`)
- **primary keys** (\`xs:key\`)
- **foreign keys** (\`xs:keyref\`)

These are the “schema-level database constraints” for XML.

### 4) Design principle (important for answers)

Use XSD to ensure:
- structural correctness
- type correctness
- key/uniqueness correctness

Then use application logic for complex cross-document business rules.`,

          technicalDepth: `## A) Attributes in XSD

Attributes are declared inside a complexType:

\`\`\`xml
XML answers: “What is this information?”`,


Common attribute types:
- \`xs:ID\`: must be unique within the document (XML Name rules)
- \`xs:IDREF\`: references an existing ID
- \`xs:string\`, \`xs:date\`, etc.

## B) Creating restricted simple types

### 1) Enumeration (controlled vocabulary)

\`\`\`xml
          technicalDepth: `## The XML Document Model

An XML document is a hierarchy of **elements**. Each element forms a node in a tree.

- **Root element**: the single top-level element that contains everything.
- **Parent/child**: nesting indicates relationships.
- **Siblings**: elements with the same parent.


### 2) Pattern (regex)

\`\`\`xml
### Elements and Attributes

- **Elements** are containers: they can hold text and other elements.
- **Attributes** are name/value pairs on elements.

Guideline (good exam phrasing):

### 3) Length constraints

\`\`\`xml
- Use **elements** for structured or repeatable information.
- Use **attributes** for metadata, identifiers, and compact properties.

### Well-formed vs Valid


### 4) Numeric bounds

\`\`\`xml
- **Well‑formed**: follows XML syntax rules.
- **Valid**: well‑formed + conforms to a DTD or XSD.

### The XML Ecosystem

## C) Complex types: nesting and reuse

Create named complex types for reuse across multiple elements. Prefer “type-first” schemas for maintainability.

## D) Identity constraints (xs:key, xs:unique, xs:keyref)

Identity constraints are declared inside an element definition.

Example idea:
- Every \`note\` has an attribute \`id\`
- Every \`ref\` points to an existing note id

\`\`\`xml

- **DTD / XSD**: describe allowed structure; enable validation.
- **XPath**: navigates/selects nodes inside the XML tree.
- **XSLT**: transforms XML into other formats (HTML, XML, text).

Together:
- XML holds data
- XSD/DTD defines rules
- XPath selects data
- XSLT produces output`,

This enforces database-like referential integrity inside the XML document (note: XPath here is restricted XPath used by XSD validators).`,

          examples: `## Example 1: Notebook Schema (XSD)

\`\`\`xml

          examples: `## Example 1: XML Describes Data

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<student>
  <name>Vivek</name>
  <rollNo>24</rollNo>
  <cgpa>8.7</cgpa>
</student>
\`\`\`

## Example 2: HTML Describes Presentation

\`\`\`html
<h1>Student</h1>
<p><b>Name:</b> Vivek</p>
<p><b>Roll No:</b> 24</p>
<p><b>CGPA:</b> 8.7</p>
\`\`\`

## Example 3: Same Data, Different Meaning

XML focuses on semantics (what the data is). HTML focuses on how it should appear. A system can transform XML into HTML using XSLT, but the reverse is not reliable because HTML is presentation-oriented.`,

          practical: `## Where You’ll See XML in Real Systems

1. **Configuration**
   - Maven: \`pom.xml\`
   - Android UI: \`layout.xml\`
   - Legacy enterprise: many systems still rely on XML config

2. **Data Exchange**
   - SOAP messages
   - B2B integration formats

3. **Document Formats**
   - Office Open XML (.docx/.pptx)

## Example 2: XML Linked to the Schema

\`\`\`xml
   - SVG graphics
   - RSS/Atom feeds

## Practical Skill

At minimum, you must be able to:
- write well‑formed XML
- choose good element/attribute structure
- validate with DTD/XSD
- transform with XSLT
- query with XPath`,

          exam: `## Definitions (5 marks)

- **Markup language**: a language that uses tags to add structure/meaning to content.

## Example 3: Typical Validation Failures

- \`created\` not a valid date
- duplicate \`id\` values
- tag fails pattern (starts with digit)
- wrong order of child elements when \`xs:sequence\` is used`,

          practical: `## Practical

1) Turn requirements into schema rules:
- “ID must be unique” → \`xs:ID\` or \`xs:key\`
- “Status must be one of …” → enumeration
- “Phone must be 10 digits” → pattern
- “At least one item” → \`minOccurs="1"\`

2) Choose element vs attribute deliberately:
- attributes for identifiers/metadata (id, created, type)
- elements for structured/repeatable content (notes, tags)

3) Validation workflow
- Validate during development and as part of build/CI checks
- Reject invalid inputs at boundaries (API/file upload)

4) Maintainability tips
- prefer named types for reuse
- keep namespaces consistent and documented
- version schemas if the data contract evolves`,

          exam: `## Exam

### 5 marks
1) Explain any four facets used in XSD restrictions.
2) What is the difference between \`xs:unique\` and \`xs:key\`?
3) Explain \`xs:ID\` and \`xs:IDREF\`.

### 10 marks
Design an XSD for a \`course\` document:
- course has multiple students
- each student has unique id, name, cgpa (0–10)
- student has zero or more skills from a fixed set (enumeration)
Write XSD + one valid XML instance. Mention how the schema enforces constraints.

### Common “gotcha” questions
- Why does \`xs:sequence\` cause order-related validation errors?
- How would you make an element optional and repeatable?
- How do namespaces affect instance documents and schema matching?`,

          takeaways: `## Takeaways

- XSD constraints can encode many “business rules” directly.
- Facets (pattern, enumeration, bounds) are key exam content.
- Identity constraints bring database-style integrity to XML.
- Good schema design improves interoperability and reduces bugs.

CLO/CO: CLO03 + CO03.`,
- **XML**: extensible markup language for structured data representation.
- **Well‑formed XML**: XML that follows syntax rules.
- **Valid XML**: well‑formed XML that conforms to DTD/XSD.
- **Element**: start tag + content + end tag (or empty-element form).

## Short Questions (5 marks)

1) Differentiate XML and HTML.
2) What is a root element?
3) Define well‑formed vs valid XML.

## Long Question (10 marks)

Explain the XML ecosystem (DTD/XSD/XPath/XSLT) with an example workflow: store data in XML → validate → query → transform to HTML.`,

          takeaways: `## Takeaways

- XML represents data in a platform-independent, structured way.
- XML is strict; errors must be fixed (unlike forgiving HTML).
- XML is best understood as a tree of nested elements.
- Validation (DTD/XSD) and transformation (XSLT) are key strengths.
- XPath is the navigation/query language for XML trees.

CLO/CO: CLO01 + CO01 are directly addressed in this topic.`,
        },
      },
      {
        id: "xml-syntax",
        title: "XML Syntax & Structure",
        subtopics: [
          "Rules for writing XML",
          "XML syntax",
          "Tree structure",
          "Elements & attributes",
          "Comments",
          "Entities",
          "Validation",
        ],
        clos: ["CLO01"],
        cos: ["CO01"],
        content: {
          introduction: `Understanding XML syntax is fundamental to working with XML documents effectively. While XML is flexible and extensible, it follows strict syntactic rules that must be adhered to for documents to be processed correctly. A document that follows all XML syntax rules is called **well-formed XML**, and this well-formedness is non-negotiable—XML parsers will reject documents that violate syntax rules.

Unlike HTML, which browsers often render even with syntax errors, XML parsers are unforgiving. This strictness ensures data integrity and consistency across different platforms and applications. Mastering XML syntax rules is the first step toward creating robust, interoperable XML documents that can be reliably processed by any XML-compliant application.

The hierarchical tree structure of XML documents provides a logical, intuitive way to represent complex data relationships. Understanding how elements nest within each other, how attributes attach to elements, and how special characters and entities work is essential for anyone working with XML in configuration files, data exchange, web services, or document management systems.`,

          concept: `## Fundamental XML Syntax Rules

XML documents must follow specific syntactic conventions to be considered well-formed.

### 1. XML Declaration

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
\`\`\`

### 2. Single Root Element

Every XML document must have exactly one root element.

### 3. Proper Tag Nesting

Tags must not overlap. Closing order must reverse opening order.

### 4. Case Sensitivity

\`<Title>\` and \`</title>\` do not match.

### 5. Closing Tags Required

Every start tag must have an end tag (or be self-closing).

### 6. Empty Elements

\`<tag/>\` is equivalent to \`<tag></tag>\`.

### 7. Quoted Attributes

\`<person gender="female">\` is correct; unquoted attributes are invalid.

### 8. Special Characters (Entities)

Use entities for reserved characters:
- \`&lt;\`, \`&gt;\`, \`&amp;\`, \`&quot;\`, \`&apos;\`

### 9. Comments

\`<!-- comment -->\` (cannot contain \`--\`).

### 10. Well‑Formed vs Valid

Well‑formed is syntax; valid is well‑formed + DTD/XSD conformity.`,

          technicalDepth: `## XML Tree Structure

XML forms a tree: root → internal nodes (elements) → leaves (text nodes).

### Relationships
- Parent: contains another element
- Child: contained by another element
- Sibling: shares same parent

## Elements vs Attributes

Use elements when data is structured or repeatable. Use attributes for metadata and IDs.

## CDATA

Use CDATA when embedding text with markup-like characters:

\`\`\`xml
<script><![CDATA[
  if (x < 10 && y > 5) alert("Hi");
]]></script>
\`\`\`

## Common Errors

- multiple root elements
- overlapping tags
- case mismatches
- missing end tags
- special characters not escaped`,

          examples: `## Example: Well‑Formed XML

\`\`\`xml
<?xml version="1.0"?>
<library>
  <book id="B001">
    <title>XML Guide</title>
    <author>John Doe</author>
  </book>
</library>
\`\`\`

## Example: Entity Usage

\`\`\`xml
<expr>5 &lt; 10 &amp;&amp; 10 &gt; 3</expr>
\`\`\`

## Example: Invalid Nesting

\`\`\`xml
<a><b>text</a></b>
\`\`\`

Fix: \`<a><b>text</b></a>\`.`,

          practical: `## Practical

- Use an XML validator to check well‑formedness.
- Prefer consistent naming (camelCase or snake_case).
- Use indentation for readability.
- Validate with DTD/XSD before exchanging documents.

Real examples: Android layouts, Maven POM files, SOAP envelopes.`,

          exam: `## Exam Prep

**5 marks:** Define well‑formed XML; list the rules.

**5 marks:** Compare elements vs attributes.

**10 marks:** Given a faulty XML snippet, identify and correct all errors (nesting, casing, quotes, entities).`,

          takeaways: `## Takeaways

- Well‑formedness is mandatory for parsing.
- Validity requires an external definition (DTD/XSD).
- Remember the five entities.
- Think of XML as a tree: nesting communicates meaning.

CLO/CO: CLO01 + CO01.`,
        },
      },
    ],
  },

  {
    id: "unit-2",
    title: "UNIT II: XML DTDs",
    topics: [
      {
        id: "dtd-fundamentals",
        title: "Document Type Definition",
        subtopics: [
          "DTD syntax",
          "Creating DTD",
          "Element definitions",
          "Attribute definitions",
          "Internal vs External DTD",
        ],
        clos: ["CLO02"],
        cos: ["CO02"],
        content: {
          introduction: `A **Document Type Definition (DTD)** defines the legal structure and vocabulary of an XML document. In Unit I you learned to create **well‑formed** XML (correct syntax). With a DTD, you can go further and guarantee that the document uses the *right* tags in the *right* places, with the *right* attributes.

DTD validation is especially useful when many documents must follow a common contract (publishing workflows, legacy enterprise integrations, and classroom validation). A document that is well‑formed and conforms to its DTD is called **valid XML**.`,

          concept: `## What DTD Defines

A DTD answers:
- What is the root element?
- Which child elements can appear inside a parent?
- In what order?
- Which are optional/required and repeatable?
- What attributes are allowed?

## Core Declarations

- Element declaration: \`<!ELEMENT name contentModel>\`
- Attribute declaration: \`<!ATTLIST element attr type defaultDecl>\`

## DOCTYPE Rule

The DOCTYPE must appear at the top of the XML document (only preceded by XML declaration).`,

          technicalDepth: `## Content Models

- Text-only content: \`(#PCDATA)\`
- Sequence (order matters): \`(a, b, c)\`
- Optional/repeating: \`?\`, \`*\`, \`+\`

Example:

\`\`\`dtd
<!ELEMENT family (father, mother, offspring?)>
<!ELEMENT father (#PCDATA)>
<!ELEMENT mother (#PCDATA)>
<!ELEMENT offspring (child+)>
<!ELEMENT child (#PCDATA)>
\`\`\`

## Internal vs External DTD

Internal DTD (inside the XML):

\`\`\`xml
<!DOCTYPE family [
  <!ELEMENT family (father, mother, offspring?)>
  <!ELEMENT father (#PCDATA)>
  <!ELEMENT mother (#PCDATA)>
  <!ELEMENT offspring (child+)>
  <!ELEMENT child (#PCDATA)>
]>
\`\`\`

External DTD (separate file):

\`\`\`xml
<!DOCTYPE family SYSTEM "family.dtd">
\`\`\`

## Attributes

\`\`\`dtd
<!ATTLIST employee id ID #REQUIRED>
<!ATTLIST message urgency (low|high) "low">
\`\`\`

DTD is compact but limited in data typing (XSD is stronger).`,

          examples: `## Example: External DTD + XML

**employee.dtd**

\`\`\`dtd
<!ELEMENT employee (firstname, lastname, email)>
<!ELEMENT firstname (#PCDATA)>
<!ELEMENT lastname (#PCDATA)>
<!ELEMENT email (#PCDATA)>
\`\`\`

**employee.xml**

\`\`\`xml
<?xml version="1.0"?>
<!DOCTYPE employee SYSTEM "employee.dtd">
<employee>
  <firstname>Tanmay</firstname>
  <lastname>Patil</lastname>
  <email>tanmaypatil@xyz.com</email>
</employee>
\`\`\``,

          practical: `## Practical

- Use external DTDs for reuse across many documents.
- Validate documents before ingestion into pipelines.
- Use DTD for compact structural rules; use XSD when you need strong data typing and namespaces.`,

          exam: `## Exam

**5 marks:** Define DTD and valid XML.

**5 marks:** Internal vs external DTD.

**10 marks:** Write a DTD for a simple structure (family/employee) and provide a valid XML instance referencing it via DOCTYPE.`,

          takeaways: `## Takeaways

- DTD defines vocabulary + structure.
- Valid XML = well‑formed + DTD/XSD conformity.
- \`<!ELEMENT>\` defines structure; \`<!ATTLIST>\` defines attributes.
- DTD is compact but limited; XSD is richer.

CLO/CO: CLO02 + CO02.`,
        },
      },
      {
        id: "dtd-advanced",
        title: "Advanced DTD Concepts",
        subtopics: [
          "Occurrences (*, +, ?)",
          "Choices",
          "Empty elements",
          "Entity declarations",
          "Validation",
          "Pros & Cons",
        ],
        clos: ["CLO02"],
        cos: ["CO02"],
        content: {
          introduction: `Advanced DTD work is about expressing real-world variability: optional sections, lists of repeated elements, and alternative structures. This is done using a small set of symbols that are heavily tested in exams: \`?\`, \`*\`, \`+\`, commas for sequences, pipes for choices, and parentheses for grouping.

This topic also introduces **entities**, which are one of the unique strengths of DTDs in publishing and legacy XML systems.`,

          concept: `## Occurrence Indicators

| Symbol | Meaning |
|---|---|
| \`?\` | optional (0 or 1) |
| \`*\` | 0 or more |
| \`+\` | 1 or more |

## Sequence vs Choice

- \`,\` = sequence (order matters)
- \`|\` = choice (one of the options)

## EMPTY Elements

Declare marker elements with \`EMPTY\`:

\`\`\`dtd
<!ELEMENT br EMPTY>
\`\`\``,

          technicalDepth: `## Grouping Matters

Parentheses decide whether a symbol applies to one element or a whole group.

\`\`\`dtd
<!ELEMENT book (title, author, (isbn, publisher)?)>
\`\`\`

## Mixed Content

For text + inline tags:

\`\`\`dtd
<!ELEMENT p (#PCDATA | b | i)*>
<!ELEMENT b (#PCDATA)>
<!ELEMENT i (#PCDATA)>
\`\`\`

## Entity Declarations

\`\`\`dtd
<!ENTITY sj "Sonoo Jaiswal">
\`\`\`

Use: \`&sj;\`

## Pros/Cons

Pros: simple, compact, entity support.

Cons: weak data typing, limited namespace support, separate non-XML syntax.`,

          examples: `## Example: Choice + Optional

\`\`\`dtd
<!ELEMENT contact (name, (email | phone), address?)>
<!ELEMENT name (#PCDATA)>
<!ELEMENT email (#PCDATA)>
<!ELEMENT phone (#PCDATA)>
<!ELEMENT address (#PCDATA)>
\`\`\`

Valid:

\`\`\`xml
<contact>
  <name>Riya</name>
  <email>riya@example.com</email>
</contact>
\`\`\`

## Example: Entity in Internal Subset

\`\`\`xml
<?xml version="1.0" standalone="yes"?>
<!DOCTYPE author [
  <!ELEMENT author (#PCDATA)>
  <!ENTITY sj "Sonoo Jaiswal">
]>
<author>&sj;</author>
\`\`\``,

          practical: `## Practical

- Model repeatable lists using \`+\` or \`*\`.
- Use choices (\`|\`) to represent variants.
- Use entities to reduce duplication in document-centric XML.
- For complex constraints and strong typing, migrate to XSD (Unit III).`,

          exam: `## Exam

**5 marks:** Explain \`?\`, \`*\`, \`+\`.

**5 marks:** Differentiate \`,\` vs \`|\`.

**10 marks:** Write a DTD that models a real structure with optional and repeating elements, and show two valid XML instances.`,

          takeaways: `## Takeaways

- \`?\`, \`*\`, \`+\` define cardinality.
- \`,\` enforces order; \`|\` provides alternatives.
- Grouping controls meaning; always use parentheses carefully.
- Entities are a key DTD feature.

CLO/CO: CLO02 + CO02.`,
        },
      },
    ],
  },

  {
    id: "unit-3",
    title: "UNIT III: XML Schema",
    topics: [
      {
        id: "schema-basics",
        title: "XML Schema Introduction",
        subtopics: ["Schema definition", "Namespaces", "Data types", "Simple types", "Complex types"],
        clos: ["CLO03"],
        cos: ["CO03"],
        content: {
          introduction: "",
          concept: "",
          technicalDepth: "",
          examples: "",
          practical: "",
          exam: "",
          takeaways: "",
        },
      },
      {
        id: "schema-advanced",
        title: "Schema Validation & Constraints",
        subtopics: [
          "Attribute definitions",
          "Value restrictions",
          "Schema for notebook XML",
          "Linking XML with XSD",
          "Validation",
        ],
        clos: ["CLO03"],
        cos: ["CO03"],
        content: {
          introduction: "",
          concept: "",
          technicalDepth: "",
          examples: "",
          practical: "",
          exam: "",
          takeaways: "",
        },
      },
    ],
  },

  {
    id: "unit-4",
    title: "UNIT IV: XSLT",
    topics: [
      {
        id: "xslt-basics",
        title: "XSL Introduction & Templates",
        subtopics: [
          "XSL introduction",
          "Document structure",
          "Templates",
          "Linking XSL to XML",
          "Transformation",
        ],
        clos: ["CLO04"],
        cos: ["CO04"],
        content: {
          introduction: "",
          concept: "",
          technicalDepth: "",
          examples: "",
          practical: "",
          exam: "",
          takeaways: "",
        },
      },
      {
        id: "xslt-advanced",
        title: "Advanced XSLT Techniques",
        subtopics: [
          "xsl:output",
          "xsl:for-each",
          "xsl:if",
          "xsl:value-of",
          "Sorting",
          "Complete transformation examples",
        ],
        clos: ["CLO04"],
        cos: ["CO04"],
        content: {
          introduction: "",
          concept: "",
          technicalDepth: "",
          examples: "",
          practical: "",
          exam: "",
          takeaways: "",
        },
      },
    ],
  },

  {
    id: "unit-5",
    title: "UNIT V: XPath and Project",
    topics: [
      {
        id: "xpath",
        title: "XPath Navigation",
        subtopics: ["XPath introduction", "XML navigation using XPath", "Predicates", "Axes", "Functions"],
        clos: ["CLO05"],
        cos: ["CO05"],
        content: {
          introduction: "",
          concept: "",
          technicalDepth: "",
          examples: "",
          practical: "",
          exam: "",
          takeaways: "",
        },
      },
      {
        id: "xml-project",
        title: "XML Mini Project",
        subtopics: [
          "Student data in XML",
          "XSD validation",
          "XSLT transformation",
          "HTML display",
          "Filtering & sorting",
        ],
        clos: ["CLO05"],
        cos: ["CO05", "CO06"],
        content: {
          introduction: "",
          concept: "",
          technicalDepth: "",
          examples: "",
          practical: "",
          exam: "",
          takeaways: "",
        },
      },
    ],
  },
];

*/
