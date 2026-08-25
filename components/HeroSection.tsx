"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "11+", label: "Years in Academia" },
  { value: "24", label: "Publications" },
  { value: "6", label: "Patents" },
  { value: "5", label: "Awards" },
];

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-background -z-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 -z-10" />

      <motion.div
        className="container-custom section-padding text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Portrait */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-gold via-gold/60 to-transparent blur-sm" />
            <Image
              src="/latikajindal.webp"
              alt="Dr. Latika Jindal"
              width={168}
              height={168}
              priority
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-gold shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Dr. Latika Jindal
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gold mb-4"
        >
          Associate Professor
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto"
        >
          Department of Computer Science & Engineering
          <br />
          MediCaps University, Indore
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          &ldquo;Academic leader with 11+ years of teaching, research supervision, and institutional engagement in Computer Science & Engineering.&rdquo;
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/Dr_Latika_Jindal_CV.docx"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-all hover:scale-105"
          >
            <Download size={20} />
            Download CV
          </a>

          <a
            href="mailto:latika.mehrotra@medicaps.ac.in"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-navy transition-all hover:scale-105"
          >
            <Mail size={20} />
            Email Me
          </a>
        </motion.div>

        {/* Stats Band */}
        <motion.dl
          variants={itemVariants}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-lg px-4 py-5"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl font-bold text-gold font-display">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs md:text-sm uppercase tracking-wide text-white/70">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </motion.dl>

        <motion.div
          variants={itemVariants}
          className="mt-12"
        >
          <a
            href="#about"
            className="inline-block animate-bounce"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
