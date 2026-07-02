"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const education = [
  {
    degree: "Bachelor of Engineering — Computer Science",
    institution: "Visvesvaraya Technological University",
    period: "2013 — 2017",
    description:
      "Strong foundation in algorithms, data structures, software engineering, operating systems, and database management.",
    highlights: [
      "Algorithms",
      "Data Structures",
      "Software Engineering",
      "Databases",
      "OS",
    ],
    color: "cyan",
  },
  {
    PGP: "Post Graduate Program in Data Science",
    institution: "INSOFE",
    period: "2017 — 2018",
    description:
      "A post graduate program in data science with Advanced program covering machine learning, deep learning, NLP and applied AI. Hands-on with real-world datasets, capstone projects, and industry mentorship.",
    highlights: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Statistics",
    ],
    color: "blue",
  },
];

const colorMap: Record<string, { accent: string; tag: string }> = {
  blue: {
    accent: "from-blue-500 to-cyan-500",
    tag: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
  },
  cyan: {
    accent: "from-cyan-500 to-green-500",
    tag: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300",
  },
};

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding bg-white dark:bg-[#0F172A]"
      aria-label="Education"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="Education"
          title="Academic"
          highlight="Background"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, idx) => {
            const colors = colorMap[edu.color];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="rounded-2xl bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/10 p-6 hover:border-blue-400/40 dark:hover:border-blue-500/30 transition-all"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.accent} flex items-center justify-center text-white mb-5`}
                >
                  <GraduationCap size={22} aria-hidden />
                </div>

                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                  {edu.degree}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.institution}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Calendar size={12} aria-hidden />
                    {edu.period}
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      className={`text-xs font-medium px-2.5 py-1 rounded-lg ${colors.tag}`}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
