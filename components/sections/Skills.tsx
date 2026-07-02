"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const skillGroups = [
  {
    category: "Programming Languages",
    color: "blue",
    skills: ["Python", "SQL", "JavaScript"],
  },
  {
    category: "GenAI and Agentic AI",
    color: "cyan",
    skills: [
      "LangChain",
      "LangGraph",
      "CrewAI",
      "MCP",
      "RAG",
      "Prompt Engineering",
      "AI Agents",
      "Vector Embeddings",
      "Semantic Search",
    ],
  },
  {
    category: "Foundation Models",
    color: "purple",
    skills: ["Claude", "GPT-4", "Llama", "Mistral", "Gemini", "DeepSeek"],
  },
  {
    category: "Machine Learning and Deep Learning",
    color: "blue",
    skills: ["Supervised Learning", "Unsupervised Learning", "Time Series Forecasting", "Model Evaluation", "Ensemble Learning", "Neural Networks", "Transfer Learning", "Tensorflow", "keras", "Pytorch"],
  },
  {
    category: "Natural Language Processing",
    color: "pink",
    skills: ["Transformers", "Tokenization", "Text classification", "Sentiment Analysis", "Text Summarization"],
  },
  {
    category: "Frameworks",
    color: "blue",
    skills: ["React", "Streamlit"],
  },
  {
    category: "Backend and APIs",
    color: "blue",
    skills: ["FastAPI", "REST APIs", "OpenAPI", "Postman"],
  },
  {
    category: "Cloud ",
    color: "orange",
    skills: [
      "AWS Bedrock",
      "AWS Lambda",
      "Amazon S3",
      "API Gateway",
      "IAM",
      "Azure",
    ],
  },
  {
    category: "Vector Databases",
    color: "cyan",
    skills: ["Pinecone", "ChromaDB", "FAISS"],
  },
  {
    category: "Databases",
    color: "green",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Data Analytics",
    color: "blue",
    skills: ["Data Curation", "Data Visualization", "Data Analysis", "Data Mining", "Advanced Excel", "Power BI", "BigQuery"],
  },
  {
    category: "Developer Tools",
    color: "gray",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Antigravity", "Cursor", "Claudecode", "Codex"],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; tag: string }> = {
  blue: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-200/60 dark:border-blue-800/40",
    tag: "bg-blue-100/70 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
  },
  cyan: {
    bg: "bg-cyan-50 dark:bg-cyan-950/30",
    text: "text-cyan-700 dark:text-cyan-300",
    border: "border-cyan-200/60 dark:border-cyan-800/40",
    tag: "bg-cyan-100/70 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300",
  },
  purple: {
    bg: "bg-purple-50 dark:bg-purple-950/30",
    text: "text-purple-700 dark:text-purple-300",
    border: "border-purple-200/60 dark:border-purple-800/40",
    tag: "bg-purple-100/70 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
  },
  orange: {
    bg: "bg-orange-50 dark:bg-orange-950/30",
    text: "text-orange-700 dark:text-orange-300",
    border: "border-orange-200/60 dark:border-orange-800/40",
    tag: "bg-orange-100/70 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300",
  },
  green: {
    bg: "bg-green-50 dark:bg-green-950/30",
    text: "text-green-700 dark:text-green-300",
    border: "border-green-200/60 dark:border-green-800/40",
    tag: "bg-green-100/70 dark:bg-green-900/50 text-green-700 dark:text-green-300",
  },
  gray: {
    bg: "bg-gray-50 dark:bg-gray-900/40",
    text: "text-gray-700 dark:text-gray-300",
    border: "border-gray-200/60 dark:border-gray-700/40",
    tag: "bg-gray-100/70 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300",
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding bg-gray-50 dark:bg-[#0a0f1e]"
      aria-label="Skills"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Technical Skills"
          title="My"
          highlight="Tech Stack"
          subtitle="A curated toolkit for building production-grade AI systems and intelligent applications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillGroups.map((group, groupIdx) => {
            const colors = colorMap[group.color] || colorMap.gray;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.07 }}
                className={`rounded-2xl p-5 border ${colors.bg} ${colors.border}`}
              >
                <h3
                  className={`text-xs font-bold tracking-[0.12em] uppercase mb-4 ${colors.text}`}
                >
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 text-xs font-medium rounded-lg ${colors.tag}`}
                    >
                      {skill}
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
