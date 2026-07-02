"use client";

import { motion } from "framer-motion";
import { Github, Code2, Brain, Award, Layers, Zap } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const achievements = [
  {
    icon: <Github size={28} />,
    value: "15+",
    label: "GitHub Repositories",
    description: "Active open-source and portfolio projects showcasing AI and ML work.",
    color: "blue",
  },
  {
    icon: <Brain size={28} />,
    value: "3",
    label: "Production AI Systems",
    description: "End-to-end AI applications deployed and functional",
    color: "purple",
  },
  {
    icon: <Layers size={28} />,
    value: "10+",
    label: "AI Models Worked With",
    description: "Claude, GPT, Llama, Mistral, Gemini, DeepSeek, and more.",
    color: "cyan",
  },
  {
    icon: <Code2 size={28} />,
    value: "2",
    label: "Industry Internships",
    description: "Real-world experience at Noodle.ai and Vaali Infotech.",
    color: "green",
  },
];

const colorMap: Record<string, { icon: string; bg: string; border: string }> = {
  blue: {
    icon: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200/60 dark:border-blue-900/30",
  },
  purple: {
    icon: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950/30",
    border: "border-purple-200/60 dark:border-purple-900/30",
  },
  cyan: {
    icon: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-950/30",
    border: "border-cyan-200/60 dark:border-cyan-900/30",
  },
  orange: {
    icon: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950/30",
    border: "border-orange-200/60 dark:border-orange-900/30",
  },
  green: {
    icon: "text-green-500",
    bg: "bg-green-50 dark:bg-green-950/30",
    border: "border-green-200/60 dark:border-green-900/30",
  },
  pink: {
    icon: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-950/30",
    border: "border-pink-200/60 dark:border-pink-900/30",
  },
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-padding bg-white dark:bg-[#0F172A]"
      aria-label="Achievements"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Achievements"
          title="By the"
          highlight="Numbers"
          subtitle="Quantified impact across projects, models, and learning milestones."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, idx) => {
            const colors = colorMap[item.color];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`rounded-2xl p-6 border ${colors.bg} ${colors.border} hover:shadow-lg transition-all duration-300`}
              >
                <div className={`${colors.icon} mb-4`}>{item.icon}</div>
                <div className="text-4xl font-black gradient-text mb-1">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {item.label}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
