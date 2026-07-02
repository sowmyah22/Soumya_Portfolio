"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Cloud, Zap, Target, BookOpen } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const passions = [
  { icon: <Brain size={20} />, label: "LLMs & Generative AI" },
  { icon: <Zap size={20} />, label: "Agentic AI Systems" },
  { icon: <Target size={20} />, label: "RAG Pipelines" },
  { icon: <Cpu size={20} />, label: "AI Automation" },
  { icon: <Cloud size={20} />, label: "AWS & Cloud AI" },
  { icon: <BookOpen size={20} />, label: "Continuous Learning" },
];

const stats = [
  { value: "4+", label: "AI Projects Built" },
  { value: "10+", label: "Technologies Mastered" },
  { value: "2", label: "Internships" },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-white dark:bg-[#0F172A]"
      aria-label="About me"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="About Me"
          title="Turning data into"
          highlight="intelligent systems"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
              I&apos;m a{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                Computer Science graduate
              </span>{" "}
              with a Post Graduate Program in Data Science from INSOFE, and
              hands-on experience building production-grade Generative AI
              applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
              My internships at{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Noodle.ai
              </span>{" "}
              and{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Vaali Infotech
              </span>{" "}
              gave me real exposure to NLP, RAG, time-series forecasting, and
              AI deployment — not just theory, but systems that solve actual
              business problems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
              I thrive at the intersection of{" "}
              <span className="gradient-text font-semibold">
                LLM research and engineering
              </span>
              , building systems that go beyond demos into real-world agentic
              workflows, multi-model orchestration, and cloud-native AI
              deployment.
            </p>

            {/* Passions */}
            <div className="pt-4">
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                Areas I&apos;m passionate about
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {passions.map(({ icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 text-blue-700 dark:text-blue-300"
                  >
                    <span className="text-blue-500 dark:text-blue-400 shrink-0">
                      {icon}
                    </span>
                    <span className="text-xs font-medium leading-tight">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: stats + card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/40 border border-blue-100/80 dark:border-blue-900/30 text-center"
                >
                  <div className="text-4xl font-black gradient-text mb-2">
                    {value}
                  </div>
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Location card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/10 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                  SH
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Soumya H.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Generative AI Engineer
                  </p>
                  <div className="mt-2 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <span>📍 Bangalore, India</span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full" />
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
