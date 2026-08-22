"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp, Award } from "lucide-react";

const certifications = [
  "HCL Full Stack",
  "HCL AI JumpStart",
  "Blue Prism",
  "Coursera Blockchain",
  "Winter School on Deep Learning for Vision and Language Modeling, IIT Guwahati, Jan. 6–13, 2025",
  "Local Coordinator – FDP, Blockchain Technology and the Future of Decentralization System, ICT Academy, IIT Roorkee (HUB), March 17 to 30, 2026, MediCaps University (Spoke), Hybrid Mode",
  "Convener – FDP, Electronics & ICT Academy, IIT Roorkee (HUB): Recent Innovations in Communication Systems, AI/ML and Biomedical Systems, Jan. 20–24, 2025, MediCaps University (Spoke), Hybrid Mode",
  "Convener – FDP, Electronics & ICT Academy, IIIT Nagpur (HUB): Empowering Educators with Generative AI, Jun. 28 – Jul. 10, 2025, MediCaps University (Spoke)",
  "SPOC, MediCaps University for TATA Strive Google Career Certification Program",
  "Faculty Development Program for Student Induction (FDP-SI), AICTE, Jul. 9–15, 2018, IPS Academy, Indore",
  "Certificate of Excellence – Workshop Coordinator, Computer Programming (IIT-B), May 20 – Jun. 21, 2014, Medi-Caps",
  "Certificate of Excellence – Workshop Teaching Assistant, Computer Programming (IIT-B), May 28 – Jul. 5, 2014, Medi-Caps",
  "Introduction to Design of Algorithms, IIT Kanpur, two-week workshop, May 27–30, 2015",
  "Coordinator’s Workshop on Computer Programming, IIT Bombay, two-week program, Apr. 21–26, 2014",
  "ISTE Workshop on Introduction to Research Methodology, IIT Bombay, Jun. 25 – Jul. 4, 2012",
  "ISTE Workshop on Akash for Education, IIT Bombay, May 10–11, 2012",
  "Conference Secretary – IC4 2024 (2nd Int’l Conf. on Computer Communication and Control)",
  "Expert lecture at BITS Pilani Dubai, Aug. 2024",
  "Head – Techno Clubs, MediCaps University",
  "Organizer – 1st IEEE Symposium on CDAN, 2016",
  "Organizer – National Workshop on Network Simulation and Design, 2014",
  "Publicity Head – Springer Conference, MediCaps University",
  "TEDx MediCaps University – Organizing Committee Member",
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="certifications" className="section-padding bg-gradient-to-br from-white via-navy/5 to-gold/10">
      <motion.div
        ref={ref}
        className="container-custom"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-center">
          Trainings, Certifications & Events
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12" />

        <div className="max-w-4xl mx-auto space-y-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gradient-to-r from-white to-background rounded-lg border border-gray-200 overflow-hidden hover:border-gold hover:shadow-lg transition-all"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full flex items-start gap-4 p-4 text-left hover:bg-gold/5 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  <Award className="text-gold" size={20} />
                </div>
                <div className="flex-1">
                  <p className={`text-text ${expandedIndex === index ? 'font-semibold' : ''}`}>
                    {cert.length > 100 && expandedIndex !== index ? `${cert.substring(0, 100)}...` : cert}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  {expandedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
