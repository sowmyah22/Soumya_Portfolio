"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

type Certification = {
  title: string;
  issuer: string;
  color: string;
  description: string;
  status?: string;
  link?: string;
};

const certifications: Certification[] = [
  {
    title: "AWS Generative AI",
    issuer: "Udemy",
    color: "orange",
    description: "Building generative AI applications on AWS Bedrock with foundation models using AWS lambda,step functions and s3 storage.",
  },
  {
    title: "Google Data Analytics",
    issuer: "Google(udemy course)",
    color: "green",
    description: "Data analysis with precise analysis in exacting insights from the data using programming language such as python and sql.Analysis using Bi tools such as Excel,Power Bi,Tableau and Bigquery"
  },
];

const colorMap: Record<string, { icon: string; badge: string; border: string }> = {
  orange: {
    icon: "from-orange-500 to-yellow-500",
    badge: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
    border: "border-orange-200/60 dark:border-orange-800/30",
  },
  green: {
    icon: "from-green-500 to-emerald-500",
    badge: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
    border: "border-green-200/60 dark:border-green-800/30",
  },
  purple: {
    icon: "from-purple-500 to-blue-500",
    badge: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
    border: "border-purple-200/60 dark:border-purple-800/30",
  },
  gray: {
    icon: "from-gray-400 to-gray-500",
    badge: "bg-gray-100 dark:bg-gray-800/40 text-gray-600 dark:text-gray-400",
    border: "border-gray-200/60 dark:border-gray-700/30",
  },
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-padding bg-gray-50 dark:bg-[#0a0f1e]"
      aria-label="Certifications"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Certifications"
          title="Professional"
          highlight="Credentials"
          subtitle="Validated expertise from leading AI and cloud technology providers."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, idx) => {
            const colors = colorMap[cert.color];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-2xl bg-white dark:bg-[#1e293b] border ${colors.border} dark:border-white/10 p-5 flex flex-col hover:shadow-lg transition-all duration-300`}
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.icon} flex items-center justify-center text-white mb-4`}
                >
                  <Award size={18} aria-hidden />
                </div>

                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  {cert.issuer}
                </p>

                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-grow">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors.badge}`}
                  >
                    {cert.status}
                  </span>
                  {cert.link && cert.link !== "#" && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${cert.title} credential`}
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <ExternalLink size={14} aria-hidden />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
