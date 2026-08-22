export type CourseMaterial = {
  id: string;
  unit: string;
  title: string;
  fileName: string;
  path: string;
};

export const materials: CourseMaterial[] = [
  {
    id: "unit-1",
    unit: "Unit I",
    title: "Introduction to NoSQL Databases",
    fileName: "unit1 NOSQL.pptx",
    path: "/courses/nosql/unit1%20NOSQL.pptx",
  },
  {
    id: "unit-2",
    unit: "Unit II",
    title: "Document Databases and MongoDB",
    fileName: "unit2NOSQL.pptx",
    path: "/courses/nosql/unit2NOSQL.pptx",
  },
  {
    id: "unit-3",
    unit: "Unit III",
    title: "Key-Value and Column-Family Databases",
    fileName: "unit3 NOSQQL.pptx",
    path: "/courses/nosql/unit3%20NOSQQL.pptx",
  },
  {
    id: "unit-4",
    unit: "Unit IV",
    title: "Graph Databases and NoSQL Applications",
    fileName: "Unit4NOSQL.pptx",
    path: "/courses/nosql/Unit4NOSQL.pptx",
  },
  {
    id: "unit-5",
    unit: "Unit V",
    title: "NoSQL Design, Scalability, and Practice",
    fileName: "Unit5 NoSQL.pptx",
    path: "/courses/nosql/Unit5%20NoSQL.pptx",
  },
];
