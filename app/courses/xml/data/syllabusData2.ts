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
        subtopics: ['Facets', 'Enumerations', 'Patterns', 'Type derivation', 'key/unique/keyref'],
        clos: ['CLO02', 'CLO05'],
        cos: ['CO03'],
        content: {
          introduction:
            'Beyond structure, XSD lets you express business rules: allowed ranges, controlled vocabularies, and relational links. It also supports reuse through type derivation.',
          concept: `## Facets = constraints

- Range: minInclusive, maxInclusive, minExclusive, maxExclusive.
- Vocabulary: enumeration.
- Shape: length, minLength, maxLength.
- Pattern: regular expressions for formats (phone, code, ids).

## Derivation strategies
- Restriction: narrow an existing type.
- Extension: add elements/attributes to an existing type.

## Identity constraints
- xs:unique → values must be unique in scope.
- xs:key → primary-key-like constraint.
- xs:keyref → foreign-key-like reference.`,
          technicalDepth: `## Concrete snippets

Range restriction
~~~xml
<xs:simpleType name="CgpaType">
  <xs:restriction base="xs:decimal">
    <xs:minInclusive value="0.0"/>
    <xs:maxInclusive value="10.0"/>
  </xs:restriction>
</xs:simpleType>
~~~

Enumeration
~~~xml
<xs:simpleType name="DeptType">
  <xs:restriction base="xs:string">
    <xs:enumeration value="CSE"/>
    <xs:enumeration value="ECE"/>
    <xs:enumeration value="ME"/>
  </xs:restriction>
</xs:simpleType>
~~~

Identity constraints
~~~xml
<xs:element name="library">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="book" maxOccurs="unbounded">
        <xs:complexType>
          <xs:attribute name="id" type="xs:ID" use="required"/>
        </xs:complexType>
      </xs:element>
    </xs:sequence>
    <xs:key name="bookId">
      <xs:selector xpath="book"/>
      <xs:field xpath="@id"/>
    </xs:key>
  </xs:complexType>
</xs:element>
~~~`,
          examples: `## Pattern example

~~~xml
<xs:simpleType name="PhoneType">
  <xs:restriction base="xs:string">
    <xs:pattern value="[0-9]{10}"/>
  </xs:restriction>
</xs:simpleType>
~~~

## Extension example
~~~xml
<xs:complexType name="StaffType">
  <xs:complexContent>
    <xs:extension base="PersonType">
      <xs:attribute name="role" type="xs:string" use="required"/>
    </xs:extension>
  </xs:complexContent>
</xs:complexType>
~~~`,
          practical: `## Do it

- Add an enumeration for department codes and a pattern for phone numbers.
- Introduce xs:key for unique IDs and xs:keyref for referencing them.
- Derive one new type using extension (e.g., StaffType extends PersonType).`,
          exam: `## Exam direction

- Explain how facets differ from derivation.
- Write one example each for key and keyref.
- State two real benefits of identity constraints in XML integration.`,
          takeaways: `## Takeaways

- Facets encode business rules; derivation encodes reuse.
- Identity constraints give XML relational-style integrity.
- Always document the scope of selectors when using keys.`,
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
