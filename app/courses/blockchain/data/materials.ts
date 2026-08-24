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
    title: "Introduction to Blockchain & Electronic Cash",
    fileName: "unit1Blockchain.pptx",
    path: "/courses/blockchain/unit1Blockchain.pptx",
  },
  {
    id: "unit-2",
    unit: "Unit II",
    title: "History of Blockchain",
    fileName: "unit2Blockcahin.pptx",
    path: "/courses/blockchain/unit2Blockcahin.pptx",
  },
  {
    id: "unit-3",
    unit: "Unit III",
    title: "Nakamoto Consensus",
    fileName: "unit3Blockchain.pptx",
    path: "/courses/blockchain/unit3Blockchain.pptx",
  },
  {
    id: "unit-4",
    unit: "Unit IV",
    title: "Blockchain Network",
    fileName: "unit4Blockchain.pptx",
    path: "/courses/blockchain/unit4Blockchain.pptx",
  },
  {
    id: "unit-5",
    unit: "Unit V",
    title: "Blockchain Applications: Financial Sector",
    fileName: "unit5Blockchain.pptx",
    path: "/courses/blockchain/unit5Blockchain.pptx",
  },
];