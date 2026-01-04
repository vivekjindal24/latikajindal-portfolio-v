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
    description:
      'Query and navigate XML documents using XPath expressions and axes.',
  },
  {
    id: 'CLO04',
    description:
      'Transform XML into other formats using XSLT templates and processing rules.',
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
          'What is XML?',
          'Markup languages',
          'XML vs HTML',
          'Where XML is used',
          'XML ecosystem (DTD/XSD/XPath/XSLT)',
        ],
        clos: ['CLO01'],
        cos: ['CO01'],
        content: {
          introduction:
            'XML (eXtensible Markup Language) is a text-based standard for representing structured information. Unlike HTML (which focuses on presentation), XML focuses on meaning and structure. This topic builds the foundation: what markup is, why XML was created, where XML is used, and how DTD, XSD, XPath, and XSLT form a pipeline for validation, querying, and transformation.',
          concept: `## Markup: structure + meaning

A markup language embeds tags in text to describe structure.

- In HTML, tags mostly describe presentation and document structure.
- In XML, tags primarily describe data meaning and relationships.

### Why "extensible" matters

XML does not provide a fixed vocabulary. You create tags that match your domain, for example:

- \`<student>\`, \`<course>\`, \`<invoice>\`, \`<patient>\`

This is why XML is used in data exchange: it lets different systems agree on a vocabulary and validate it.

### Well-formed vs valid

- Well-formed: follows XML syntax rules.
- Valid: well-formed and conforms to a schema (DTD/XSD).

### The XML family in one line

- DTD/XSD: define and validate structure
- XPath: select nodes
- XSLT: transform XML into another format
`,
          technicalDepth: `## XML as a tree model

XML documents form a rooted, ordered tree:

- Document root
- Elements (nodes)
- Attributes (name/value metadata)
- Text nodes
- Comments and processing instructions

Thinking in trees is essential for XPath and XSLT.

### Elements vs attributes (exam-friendly guidance)

Use elements for repeatable or structured content and nested data.

Use attributes for identifiers, flags, and small metadata.

### XML ecosystem mapping

| Need | Technology |
|---|---|
| enforce structure | DTD / XSD |
| enforce datatypes | XSD |
| select data | XPath |
| generate output formats | XSLT |

### Parsing overview

Typical steps:

1. Parse XML (must be well-formed)
2. Validate (optional): DTD/XSD
3. Query/Transform: XPath/XSLT
4. Serialize output
`,
          examples: `## Example: a simple XML document

~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<student id="S1">
  <name>Vivek</name>
  <dept>CSE</dept>
  <cgpa>9.1</cgpa>
</student>
~~~

### Example: XML vs HTML

- HTML: \`<h1>Title</h1>\` (display heading)
- XML: \`<title>DBMS</title>\` (data meaning)
`,
          practical: `## Practical

- Create an XML file for any dataset (students, books, movies).
- Make sure it is well-formed:
  - single root
  - properly nested tags
  - quoted attribute values
  - matching start/end tags

### Common pitfalls

- Mismatched tags
- Unescaped special characters (\`&\`, \`<\`, \`>\`)
- Multiple root elements
`,
          exam: `## Exam points

### 2-mark

- Define XML.
- List differences between XML and HTML.
- What is well-formed vs valid?

### 5-mark

- Explain the XML ecosystem and where DTD/XSD/XPath/XSLT fit.

### 10-mark

- Discuss XML as a meta-language and compare it to HTML with examples.
`,
          takeaways: `## Takeaways

- XML describes structure and meaning, not presentation.
- Well-formedness is syntax; validity requires DTD/XSD.
- Model XML as a tree for XPath/XSLT.
`,
        },
      },
      {
        id: 'xml-syntax',
        title: 'XML Syntax, Namespaces, and Well-Formedness',
        subtopics: [
          'XML declaration',
          'Elements and attributes',
          'Entities and escaping',
          'Namespaces and prefixes',
          'Common parser errors',
        ],
        clos: ['CLO01'],
        cos: ['CO01'],
        content: {
          introduction:
            'Real XML systems depend on strict syntax rules so that any conforming parser produces the same tree. This topic focuses on well-formedness rules, escaping, and namespaces. Namespaces allow multiple vocabularies to coexist without collisions—essential for XSD and many industry XML formats.',
          concept: `## Well-formedness rules

A document is well-formed if:

1. Exactly one root element exists.
2. Tags are properly nested.
3. Every start tag has a matching end tag (or uses empty-element syntax).
4. Attribute values are quoted.

### Escaping special characters

In text content:

- \`&\` becomes \`&amp;\`
- \`<\` becomes \`&lt;\`

### Entities (basic)

Predefined entities: \`&amp; &lt; &gt; &quot; &apos;\`
`,
          technicalDepth: `## Namespaces

Namespaces prevent collisions by qualifying names with a URI.

~~~xml
<bk:book xmlns:bk="http://example.com/book">
  <bk:title>XML</bk:title>
</bk:book>
~~~

### Default namespace

~~~xml
<book xmlns="http://example.com/book">
  <title>XML</title>
</book>
~~~

Note: unprefixed attributes do not automatically belong to the default namespace in XML 1.0.
`,
          examples: `## Examples

### Valid nesting

~~~xml
<a>
  <b>
    <c />
  </b>
</a>
~~~

### Invalid nesting

~~~xml
<a><b></a></b>
~~~

### Escaping

~~~xml
<msg>Use &amp; to represent an ampersand.</msg>
~~~
`,
          practical: `## Practical

- Create an XML file that uses a namespace prefix (e.g., \`lib\`, \`inv\`).
- Validate well-formedness with any strict parser.
- Intentionally introduce 3 errors and note the error messages.
`,
          exam: `## Exam

- Define namespace and default namespace.
- Explain well-formedness rules.
- Explain namespaces (prefix/URI mapping) and why they are needed.
`,
          takeaways: `## Takeaways

- Well-formedness is required for parsing.
- Escape special characters correctly.
- Namespaces prevent collisions and enable schema-driven validation.
`,
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
            'DTD (Document Type Definition) defines the allowed structure of an XML document. A DTD acts as a contract: which elements can appear, in what order, how many times, and with what attributes. While many modern systems prefer XSD, DTD remains important for legacy systems and for understanding validation.',
          concept: `## What a DTD specifies

A DTD can define:

- allowed elements and their content models
- allowed attributes and their types
- entities (reusable text)

### Internal vs external DTD

- Internal: inside \`<!DOCTYPE ... [ ... ]>\`
- External: referenced via system/public identifiers
`,
          technicalDepth: `## Core declarations

### Element declarations

~~~dtd
<!ELEMENT library (book+)>
<!ELEMENT book (title, author, price)>
<!ELEMENT title (#PCDATA)>
<!ELEMENT author (#PCDATA)>
<!ELEMENT price (#PCDATA)>
~~~

Operators:

- \`?\` optional
- \`*\` zero or more
- \`+\` one or more
- \`|\` choice
- \, sequence

### Attribute list

~~~dtd
<!ATTLIST book id ID #REQUIRED>
<!ATTLIST book category (cs|ee|me) "cs">
~~~
`,
          examples: `## Example: XML + internal DTD

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
~~~
`,
          practical: `## Practical

- Write XML and DTD for \`library\`.
- Test errors:
  - remove a required element
  - change order
  - remove a required attribute
`,
          exam: `## Exam

- Define DTD and #PCDATA.
- Explain internal vs external DTD.
- Design a DTD for a simple application.
`,
          takeaways: `## Takeaways

- DTD provides a grammar for XML structure.
- It validates ordering and occurrence but has limited datatypes.
`,
        },
      },
      {
        id: 'dtd-advanced',
        title: 'Advanced DTD: Entities, Mixed Content, and Limitations',
        subtopics: [
          'General and parameter entities',
          'Mixed content models',
          'ID/IDREF relationships',
          'DTD limitations vs XSD',
        ],
        clos: ['CLO02'],
        cos: ['CO02'],
        content: {
          introduction:
            'Advanced DTD topics include entities for reuse and mixed content models. At the same time, DTD has major limitations: weak typing and limited constraint support. Understanding these strengths and limits helps you justify XSD in modern applications.',
          concept: `## Entities

Entities define reusable fragments.

- General entities: used in XML content
- Parameter entities: used inside the DTD

## Mixed content

Mixed content allows text interleaved with inline elements.
`,
          technicalDepth: `## General entity example

~~~dtd
<!ENTITY company "ACME Pvt Ltd">
~~~

Usage:

~~~xml
<name>&company;</name>
~~~

## Parameter entity example

~~~dtd
<!ENTITY % commonAttrs "id ID #REQUIRED created CDATA #IMPLIED">
<!ATTLIST book %commonAttrs;>
~~~

## Mixed content pattern

~~~dtd
<!ELEMENT p (#PCDATA|b|i)*>
~~~

## DTD limitations

- limited datatypes
- weak constraints (no ranges/patterns)
- not XML syntax
- weak namespace integration
`,
          examples: `## Example: mixed content

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
~~~
`,
          practical: `## Practical

- Add general entities for repeated organization name.
- Add one parameter entity to share attributes.
- Create one mixed-content element (e.g., \`p\`).
`,
          exam: `## Exam

- Define entity.
- Explain mixed content with DTD syntax.
- Compare DTD and XSD with at least 6 points.
`,
          takeaways: `## Takeaways

- Entities support reuse and modularity.
- Mixed content uses \`(#PCDATA|...)*\`.
- XSD addresses many DTD limitations.
`,
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
          'Schema basics',
          'targetNamespace and qualification',
          'Simple vs complex types',
          'sequence/choice/all',
          'minOccurs/maxOccurs',
        ],
        clos: ['CLO02'],
        cos: ['CO03'],
        content: {
          introduction:
            'XML Schema (XSD) is the W3C-recommended language for describing XML structure and constraints. XSD is more expressive than DTD: it is XML-based, supports namespaces properly, and provides rich datatypes and restriction mechanisms.',
          concept: `## Why XSD?

XSD improves on DTD by adding:

- XML syntax (schemas are XML documents)
- namespaces support
- rich data types (integer, date, decimal, boolean)
- constraint facets (pattern, enumeration, ranges)
`,
          technicalDepth: `## Core schema skeleton

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

### sequence vs choice vs all

- \`xs:sequence\`: ordered children
- \`xs:choice\`: one of many
- \`xs:all\`: any order (with restrictions)
`,
          examples: `## Example: repeating element

~~~xml
<xs:element name="book" type="BookType" minOccurs="0" maxOccurs="unbounded"/>
~~~
`,
          practical: `## Practical

- Write an XSD for \`library\` or \`student\`.
- Include one repeating element and one required attribute.
`,
          exam: `## Exam

- Define XSD and explain \`targetNamespace\`.
- Explain simple vs complex types.
`,
          takeaways: `## Takeaways

- XSD is namespace-aware and typed.
- Learn core constructs: types, sequence/choice, occurrences.
`,
        },
      },
      {
        id: 'xsd-advanced',
        title: 'Advanced XSD: Restrictions, Extensions, and Identity Constraints',
        subtopics: ['Facets', 'Enumeration', 'Pattern', 'Derivation', 'key/keyref'],
        clos: ['CLO02', 'CLO05'],
        cos: ['CO03'],
        content: {
          introduction:
            'Advanced schemas capture business rules. XSD can restrict values (ranges, patterns, enumerations), derive new types via extension/restriction, and enforce identity constraints like unique keys.',
          concept: `## Facets (restrictions)

Common facets:

- \`minInclusive\`, \`maxInclusive\`
- \`pattern\`
- \`enumeration\`

## Derivation

- extension: add new fields
- restriction: narrow allowed values
`,
          technicalDepth: `## Restriction example

~~~xml
<xs:simpleType name="CgpaType">
  <xs:restriction base="xs:decimal">
    <xs:minInclusive value="0.0"/>
    <xs:maxInclusive value="10.0"/>
  </xs:restriction>
</xs:simpleType>
~~~

## Enumeration example

~~~xml
<xs:simpleType name="DeptType">
  <xs:restriction base="xs:string">
    <xs:enumeration value="CSE"/>
    <xs:enumeration value="ECE"/>
  </xs:restriction>
</xs:simpleType>
~~~
`,
          examples: `## Pattern example

~~~xml
<xs:simpleType name="PhoneType">
  <xs:restriction base="xs:string">
    <xs:pattern value="[0-9]{10}"/>
  </xs:restriction>
</xs:simpleType>
~~~
`,
          practical: `## Practical

- Add restrictions to your schema (enum, range, pattern).
- Create one derived type using extension.
`,
          exam: `## Exam

- Explain facets and type derivation.
- Discuss identity constraints (key/keyref) conceptually.
`,
          takeaways: `## Takeaways

- Restrictions encode business rules early.
- Type derivation improves reuse.
`,
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
            'XSLT transforms XML into other formats such as HTML. XSLT is declarative: you describe output rules for parts of the source tree using templates. This topic covers templates, XPath selection, and producing a simple HTML report.',
          concept: `## XSLT idea

XSLT is a rule-based transformation language: when a node matches a rule, a template generates output.
`,
          technicalDepth: `## Minimal XSLT structure

~~~xml
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <html><body>
      <h1>Report</h1>
      <xsl:apply-templates select="library/book"/>
    </body></html>
  </xsl:template>

  <xsl:template match="book">
    <p><xsl:value-of select="title"/></p>
  </xsl:template>

</xsl:stylesheet>
~~~
`,
          examples: `## Input XML

~~~xml
<library>
  <book id="b1"><title>XML</title></book>
</library>
~~~
`,
          practical: `## Practical

- Create XML input.
- Write XSLT that generates an HTML table.
- Add one sort.
`,
          exam: `## Exam

- Define XSLT.
- Explain match vs select.
`,
          takeaways: `## Takeaways

- XSLT uses templates and XPath selection.
- Start from the root template and delegate with apply-templates.
`,
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
            'Advanced transformations require branching logic, computed values, and structured templates. This topic introduces conditional constructs, sorting, and maintainable stylesheet organization.',
          concept: `## Conditional logic

- \`xsl:if\`: single condition
- \`xsl:choose\`: if/else-if/else
`,
          technicalDepth: `## choose example

~~~xml
<xsl:choose>
  <xsl:when test="price &gt; 500">Expensive</xsl:when>
  <xsl:otherwise>Affordable</xsl:otherwise>
</xsl:choose>
~~~

## Sorting

~~~xml
<xsl:for-each select="library/book">
  <xsl:sort select="number(price)" data-type="number" order="descending"/>
  <xsl:value-of select="title"/>
</xsl:for-each>
~~~
`,
          examples: `## Example: classify a node

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
`,
          practical: `## Practical

- Add conditional output (labels or styling).
- Add computed values (totals/averages).
`,
          exam: `## Exam

- Differentiate xsl:if and xsl:choose.
- Explain xsl:sort usage.
`,
          takeaways: `## Takeaways

- Use choose for robust branching.
- Sort with xsl:sort; convert to numbers when needed.
`,
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
        subtopics: ['paths', 'predicates', 'axes', 'attributes', 'functions'],
        clos: ['CLO03'],
        cos: ['CO04'],
        content: {
          introduction:
            'XPath (XML Path Language) is the standard way to navigate an XML tree and select nodes. It is the query core for XSLT and many XML processing APIs. This topic covers path expressions, predicates, axes, and common functions used in exams.',
          concept: `## XPath essentials

- Absolute paths start with \`/\`
- Relative paths start from the current context
- Predicates filter with brackets
`,
          technicalDepth: `## Axes

Common axes:

- child:: (default)
- parent::
- ancestor::
- descendant::
- following-sibling::

Examples:

- \`/library/book/title\`
- \`//book[@id='b2']/price/text()\`
- \`count(/library/book)\`
`,
          examples: `## Example XML

~~~xml
<library>
  <book id="b1"><title>XML</title><price>499</price></book>
  <book id="b2"><title>XSLT</title><price>599</price></book>
</library>
~~~

## XPath queries

- Titles: \`/library/book/title\`
- Expensive: \`/library/book[price &gt; 500]\`
- Price of b2: \`//book[@id='b2']/price/text()\`
`,
          practical: `## Practical

- Write 10 XPath expressions for your dataset.
- Verify results using an XPath tester.
`,
          exam: `## Exam

- Define XPath and predicate.
- Explain axes with examples.
`,
          takeaways: `## Takeaways

- Predicates are the main filtering tool.
- Axes provide powerful relative navigation.
`,
        },
      },
      {
        id: 'xml-project',
        title: 'Mini Project: XML + XSD + XPath + XSLT Pipeline',
        subtopics: ['dataset', 'XML', 'XSD', 'XPath', 'XSLT', 'report'],
        clos: ['CLO05'],
        cos: ['CO05'],
        content: {
          introduction:
            'This mini project integrates the full XML toolchain. Model a realistic dataset in XML, validate it with XSD, extract insights using XPath, and transform it into an HTML report using XSLT.',
          concept: `## Objective

Build a complete pipeline:

1. Define a dataset and vocabulary
2. Author XML instances
3. Validate using XSD
4. Query with XPath
5. Transform with XSLT to generate an HTML report
`,
          technicalDepth: `## Suggested folder structure

- data/ (XML instances)
- schema/ (XSD)
- transform/ (XSLT)
- report/ (generated HTML)

### Quality checklist

- well-formed XML
- meaningful XSD constraints
- documented XPath queries
- clean HTML output from XSLT
`,
          examples: `## Deliverables

- 1 XML instance
- 1 XSD schema
- 5–10 XPath expressions (documented)
- 1 XSLT file producing an HTML report
`,
          practical: `## Practical steps

1. Pick dataset and define element structure.
2. Create XML instance(s).
3. Create XSD for validation.
4. Write XPath expressions.
5. Write XSLT to generate report.
6. Document assumptions and tests.
`,
          exam: `## Viva questions

- Why elements vs attributes?
- Which XSD constraints did you add and why?
- Explain 2 XPath expressions.
- Explain your XSLT template structure.
`,
          takeaways: `## Takeaways

- Combining validation + querying + transformation is the key value of the XML ecosystem.
- A good schema catches errors early.
`,
        },
      },
    ],
  },
];
