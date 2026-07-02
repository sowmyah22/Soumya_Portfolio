"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-4 px-3 py-1 bg-blue-50 dark:bg-blue-950/40 rounded-full border border-blue-200/50 dark:border-blue-800/50">
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
