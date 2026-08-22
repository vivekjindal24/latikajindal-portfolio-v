"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Building2, GraduationCap } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white via-background to-gold/10">
      <motion.div
        ref={ref}
        className="container-custom"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-center">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-text leading-relaxed">
              I am <strong>Dr. Latika Jindal</strong>, an Associate Professor in the Department of Computer Science & Engineering at <strong>MediCaps University</strong>, Indore. With 11+ years of academic experience, I have taught core CSE courses such as <strong>Data Structures, Algorithms, Database Systems, and Cyber Security</strong> to B.Tech and M.Tech students.
            </p>

            <p className="text-lg text-text leading-relaxed">
              My work spans <strong>teaching, curriculum development, research supervision, and institutional leadership</strong>. I have guided postgraduate research projects, supervised thesis work, and mentored students in publishing in Scopus and Web of Science indexed journals.
            </p>

            <p className="text-lg text-text leading-relaxed">
              My research interests include <strong>Machine Learning, Deep Learning, Blockchain, Cybersecurity, IoT, and applied AI</strong>. I actively contribute to workshops, FDPs, conferences, and collaborative research initiatives that advance technology and academia.
            </p>
          </div>

          <div className="space-y-4">
            <motion.div
              className="bg-gradient-to-br from-navy to-navy/90 text-white p-6 rounded-xl shadow-lg border border-gold/20"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gold/20 p-2 rounded-lg">
                  <GraduationCap className="text-gold" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gold">Professional Details</h3>
              </div>
              <div className="space-y-3 ml-1">
                <div>
                  <p className="text-sm text-white/60 mb-1">Position</p>
                  <p className="font-semibold text-white">Associate Professor</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Department</p>
                  <p className="font-semibold text-white">Computer Science & Engineering</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Institution</p>
                  <p className="font-semibold text-white">MediCaps University, Indore</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white border-2 border-gold/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-navy/10 p-2 rounded-lg">
                  <Mail className="text-navy" size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy">Contact</h3>
              </div>
              <div className="space-y-2 ml-1">
                <a href="tel:+919479889242" className="block text-text hover:text-gold transition-colors font-medium">
                  +91-94798-89242
                </a>
                <a href="mailto:latika.mehrotra@medicaps.ac.in" className="block text-text hover:text-gold transition-colors font-medium">
                  latika.mehrotra@medicaps.ac.in
                </a>
                <a href="mailto:Latika19mehrotra@gmail.com" className="block text-text hover:text-gold transition-colors font-medium">
                  Latika19mehrotra@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              className="bg-white border-2 border-navy/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-navy/10 p-2 rounded-lg">
                  <Building2 className="text-navy" size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy">Institution</h3>
              </div>
              <div className="ml-1">
                <p className="text-text font-medium leading-relaxed">
                  Department of Computer Science & Engineering<br />
                  MediCaps University<br />
                  Indore, India
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
