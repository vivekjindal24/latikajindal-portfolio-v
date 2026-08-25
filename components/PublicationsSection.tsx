"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    authors: "S. Vaidya and L. Jindal",
    title: "Optimized EfficientNet-B3 for Multiclass Diabetic Retinopathy Detection: A Deep Learning Framework with Hybrid Fine-Tuning and Confidence-Aware Inference",
    journal: "Ingénierie des Systèmes d'Information, vol. 31, no. 4, pp. 1351–1367, Apr. 2026",
    year: "2026",
    doi: "https://doi.org/10.18280/isi.310429",
    type: "Journal"
  },
  {
    authors: "S. Vaidya and L. Jindal",
    title: "A Multi-Branch CNN–LSTM Framework for Modeling Disease Progression in Retinal Imaging for Diabetic Retinopathy Detection",
    journal: "2026 3rd International Conference on Emerging Trends in Engineering and Medical Sciences (ICETEMS), Nagpur, India, 2026, pp. 1–6",
    year: "2026",
    doi: "https://doi.org/10.1109/ICETEMS66917.2026.11469704",
    type: "Conference"
  },
  {
    authors: "L. Jindal, M. Baniya, S. Khan, M. Patidar, and A. Verma",
    title: "Enhanced Hybrid of SVM and GBM with Feature Selection Using Genetic Algorithms (SVM-GBM-GA) for Lung Cancer Prediction",
    journal: "Data Science and Big Data Analytics, IDBA 2025, Springer, Cham",
    year: "2026",
    doi: "https://doi.org/10.1007/978-3-032-05377-0_28",
    type: "Book Chapter"
  },
  {
    authors: "A. Rai, O. A. Shah, I. A. Khan, M. A. Khan, L. Jindal, and P. Chouhan",
    title: "Design and Development of ALU using Multi Chiplet Methodology for High-Performance Computing",
    journal: "Buletin Ilmiah Sarjana Teknik Elektro, vol. 8, no. 1, pp. 116–128, 2026",
    year: "2026",
    doi: "https://doi.org/10.12928/biste.v8i1.14107",
    type: "Journal"
  },
  {
    authors: "S. Moghe and L. Jindal",
    title: "DeciViT-Knee 2025: Precision Fuzzy Techniques of Decision Trees and ViT in Analysis of Knee Osteoarthritis",
    journal: "Journal of Visualized Experiments (JoVE), Jan. 2026",
    year: "2026",
    doi: "https://doi.org/10.3791/69411",
    type: "Journal"
  },
  {
    authors: "S. Moghe and L. Jindal",
    title: "Convo-Neur-Net: Allopathic Treatment v/s Ayurvedic Healing Practices: Their Role in Assessing Tibia and Femur Integrity",
    journal: "Springer Book Chapter, ISBN: 978-3-032-02949-2, 2025",
    year: "2025",
    doi: "https://doi.org/10.1007/978-3-032-02949-2_7",
    type: "Book Chapter"
  },
  {
    authors: "S. Modh and L. Jindal",
    title: "Near-Perfect IoT DDoS Detection on the IoT-DH Honeypot Dataset via Two-Stage Deep-Tree Modeling",
    journal: "Proc. IEEE International Conference on Technologies for Big Data (ICTBIG 2025), pp. 1–7",
    year: "2025",
    doi: "https://doi.org/10.1109/ICTBIG68706.2025.11323639",
    type: "Conference"
  },
  {
    authors: "S. Goyal and L. Jindal",
    title: "Robust Load Forecasting with Seasonal Decomposition and Gradient-Boosted Residuals",
    journal: "Proc. IEEE International Conference on Technologies for Big Data (ICTBIG 2025), pp. 1–7",
    year: "2025",
    doi: "https://doi.org/10.1109/ICTBIG68706.2025.11323774",
    type: "Conference"
  },
  {
    authors: "B. Tiwari and L. Jindal",
    title: "Neural Network-Based Early Detection of Wheat Stripe Rust Disease for Enhanced Crop Management",
    journal: "Ingénierie Des Systèmes D’Information, vol. 30, no. 4, pp. 1067–1076, 2025",
    year: "2025",
    doi: "https://doi.org/10.18280/isi.300422",
    type: "Journal"
  },
  {
    authors: "V. Jindal, L. Jindal, K. C. Bandhu, and R. Litoriya",
    title: "Automating Cricket Scorecards with Deep Neural Network: A Next-Generation Approach",
    journal: "Proc. Parul University International Conference on Engineering and Technology (PiCET 2025), Vadodara, India, pp. 1587–1594",
    year: "2025",
    doi: "https://doi.org/10.1049/icp.2025.1671",
    type: "Conference"
  },
  {
    authors: "L. Jindal, A. Sharma, K. D. V. Prasad, R. Rivera, and A. D. Karimovna",
    title: "A Machine Learning Method for Predicting Disease-Associated MicroRNA Connections Using Network Internal Topology Data",
    journal: "Healthcare Analytics, vol. 4, p. 100215, 2023",
    year: "2023",
    doi: "https://doi.org/10.1016/j.health.2023.100215",
    type: "Journal"
  },
  {
    authors: "L. Jindal, N. V. Doohan, S. Vaidya, H. Patel, and A. Deo",
    title: "Deep Learning-Based Heat Optimization Techniques for Forecasting Indoor Temperature Changes",
    journal: "Spatial Information Research, 2023",
    year: "2023",
    doi: "https://doi.org/10.1007/s41324-023-00546-w",
    type: "Journal"
  },
  {
    authors: "K. Shukla, A. Kollu, P. Panwar, L. Jindal, I. Keshta, and R. R. Maaliw",
    title: "Energy-Efficient Resource Allocation over Wireless Communication Systems through Deep Reinforcement Learning",
    journal: "International Journal of Communication Systems, 2023",
    year: "2023",
    doi: "https://doi.org/10.1002/dac.5589",
    type: "Journal"
  },
  {
    authors: "L. Jindal, H. Kumar, Y. Aoudni, G. G. R. Ortiz, S. Miah, and R. Tripathi",
    title: "Light Weighted CNN Model to Detect DDoS Attack over Distributed Scenario",
    journal: "Security and Communication Networks, 2022",
    year: "2022",
    doi: "https://doi.org/10.1155/2022/7585457",
    type: "Journal"
  },
  {
    authors: "H. Byeon, M. R. Tammina, M. Soni, N. Kuzieva, L. Jindal, I. Keshta, and M. H. Kulkarni",
    title: "Enhancing Online Health Consultations through Fuzzy Logic-Integrated Attribute-Based Encryption System",
    journal: "Journal of Intelligent & Fuzzy Systems, 2024",
    year: "2024",
    doi: "https://doi.org/10.3233/JIFS-235893",
    type: "Journal"
  },
  {
    authors: "N. K. Singh, S. Agal, T. R. Gadekallu, M. Shabaz, I. Keshta, L. Jindal, M. Soni, H. Byeon, and P. P. Singh",
    title: "Deep Learning Model for Interpretability and Explainability of Aspect-Level Sentiment Analysis Based on Social Media",
    journal: "IEEE Transactions on Computational Social Systems, 2024",
    year: "2024",
    doi: "https://doi.org/10.1109/TCSS.2023.3347664",
    type: "Journal"
  },
  {
    authors: "L. Jindal, S. Kumar, C. Kaushal, M. Bhende, A. Thakare, and M. Shabaz",
    title: "Aspect-Based Sentiment Analysis Employing Linguistics Content over Social Media for Web of Things",
    journal: "IET Communications, Nov. 2022",
    year: "2022",
    doi: "https://doi.org/10.1049/cmu2.12538",
    type: "Journal"
  },
  {
    authors: "L. Mehrotra, P. S. Saxena, and N. V. Doohan",
    title: "A Data Classification Model: For Effective Classification of Intrusion in an Intrusion Detection System Based on Decision Tree Learning Algorithm",
    journal: "Lecture Notes in Networks and Systems, vol. 9, Springer, Singapore, Nov. 2017",
    year: "2017",
    doi: "https://doi.org/10.1007/978-981-10-3932-4_7",
    type: "Book Chapter"
  },
  {
    authors: "L. Mehrotra, P. S. Saxena, and N. V. Doohan",
    title: "Implementation of Modified ID3 Algorithm",
    journal: "Lecture Notes in Networks and Systems, vol. 9, Springer, Singapore, Nov. 2017",
    year: "2017",
    doi: "https://doi.org/10.1007/978-981-10-3932-4_6",
    type: "Book Chapter"
  },
  {
    authors: "L. Mehrotra and P. S. Saxena",
    title: "An Assessment Report on Statistics-Based and Signature-Based Intrusion Detection Techniques",
    journal: "Advances in Intelligent Systems and Computing, vol. 625, Springer, Singapore, Oct. 2017",
    year: "2017",
    doi: "https://doi.org/10.1007/978-981-10-5508-9_31",
    type: "Book Chapter"
  },
  {
    authors: "N. S. Holkar and L. Mehrotra",
    title: "Analysis of Power Utilization and Different Routing Protocols in Mobile Ad Hoc Network (MANET)",
    journal: "International Journal of Advanced Research in Computer Engineering & Technology (IJARCET)",
    year: "",
    doi: "",
    type: "Journal"
  },
  {
    authors: "L. Mehrotra",
    title: "High Tech Trash: Facts, Figures and Recycling",
    journal: "Proc. National Conference on Green Computing and E-Pragati",
    year: "",
    doi: "",
    type: "Conference"
  },
  {
    authors: "L. Mehrotra",
    title: "Green Computing: A Social Responsibility of Government, Product Manufacturers and Customers",
    journal: "Proc. National Workshop on Recent Trends in Computational Intelligence, CIIT",
    year: "",
    doi: "",
    type: "Conference"
  },
  {
    authors: "L. Mehrotra",
    title: "Analysis of Power Utilization and Different Routing Protocols in Mobile Ad Hoc Network (MANET)",
    journal: "Proc. National Conference on Current Trends in Cloud Computing and Big Data, JNU, Jaipur",
    year: "",
    doi: "",
    type: "Conference"
  }
];

export default function PublicationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  
  const displayedPublications = showAll ? publications : publications.slice(0, 6);

  return (
    <section id="publications" className="section-padding bg-gradient-to-br from-navy/5 via-white to-gold/5">
      <motion.div
        ref={ref}
        className="container-custom"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-center">
          Research Publications
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-4" />
        <p className="text-center text-lg text-text/70 mb-12">Selected publications from international journals, conferences, and book chapters</p>

        <div className="max-w-6xl mx-auto space-y-6">
          {displayedPublications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gradient-to-r from-white to-gold/5 p-6 rounded-lg border-l-4 border-gold hover:shadow-xl hover:border-navy transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <FileText className="text-gold" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-bold text-navy leading-tight flex-1">
                      {pub.title}
                    </h3>
                    {pub.year && (
                      <span className="flex-shrink-0 px-3 py-1 bg-navy text-gold text-sm font-semibold rounded-full">
                        {pub.year}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text/70 mb-2">
                    <strong>Authors:</strong> {pub.authors}
                  </p>
                  <p className="text-sm text-text/80 mb-2">
                    <strong>Published in:</strong> {pub.journal}
                  </p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-xs px-3 py-1 bg-gold/20 text-navy font-semibold rounded">
                      {pub.type}
                    </span>
                    {pub.doi && (
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-gold hover:underline"
                      >
                        <ExternalLink size={14} />
                        DOI Link
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {publications.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy/90 transition-all hover:scale-105"
            >
              {showAll ? "Show Less" : `Show All ${publications.length} Publications`}
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
