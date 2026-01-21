"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ExternalLink, Database, FileCode } from "lucide-react";

const courses = [
  {
    id: "dbms",
    title: "Database Management Systems",
    subtitle: "DBMS",
    description:
      "Comprehensive academic platform with interactive content, study materials, and exam-oriented preparation for DBMS course.",
    icon: Database,
    href: "/courses/dbms",
    isDeployed: true,
    features: [
      "Interactive Diagrams",
      "Unit-wise Materials",
      "SQL Examples",
      "Practice Questions"
    ]
  },
  {
    id: "xml",
    title: "XML and Related Technologies",
    subtitle: "XML",
    description:
      "Advanced learning platform with syllabus-aligned content, CLO-CO mapping, and deep technical coverage for XML course.",
    icon: FileCode,
    href: "/courses/xml",
    isDeployed: true,
    features: [
      "DTD & XSD Examples",
      "XSLT Transformations",
      "Exam Preparation",
      "Industry Applications"
    ]
  },
];

export default function CoursesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="section-padding bg-background">
      <motion.div
        ref={ref}
        className="container-custom"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-center">
          Teaching Platforms
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-4" />
        <p className="text-center text-lg text-text/70 mb-12">
          Interactive Learning Platforms for Current Semester
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gold/20 flex flex-col h-full"
              >
                {/* Header with Icon */}
                <div className="bg-gradient-to-r from-navy to-navy/90 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16" />
                  <div className="relative flex items-center gap-4">
                    <div className="p-3 bg-gold/20 rounded-lg">
                      <Icon size={32} className="text-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {course.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-semibold rounded-full">
                        Active Course
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-text leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6 flex-1">
                    {course.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="text-gold mt-0.5">✓</span>
                        <span className="text-text/70">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={course.href}
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                  >
                    <BookOpen size={18} />
                    <span>Access Course Platform</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white rounded-lg p-8 shadow-lg border border-gold/20 max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={24} className="text-gold" />
            <h3 className="text-xl font-bold text-navy">
              Platform Highlights
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-3">
              <span className="text-gold font-bold text-lg">•</span>
              <div>
                <h4 className="font-semibold text-navy mb-1">Syllabus-Aligned</h4>
                <p className="text-sm text-text/70">
                  Content follows university curriculum with unit-wise structure
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-gold font-bold text-lg">•</span>
              <div>
                <h4 className="font-semibold text-navy mb-1">Interactive Content</h4>
                <p className="text-sm text-text/70">
                  Diagrams, examples, and practical applications
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-gold font-bold text-lg">•</span>
              <div>
                <h4 className="font-semibold text-navy mb-1">Exam Focused</h4>
                <p className="text-sm text-text/70">
                  Key concepts and definitions for exam preparation
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
