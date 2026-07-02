"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const experiences = [
  {
    role: "Data Science Intern",
    company: "Noodle.ai",
    period: "2018",
    type: "Internship",
    typeColor: "blue",
    description:
      "Worked on demand forecasting models and time-series prediction pipelines for supply chain optimization. Built ML models achieving meaningful accuracy improvements for enterprise clients.",
    skills: ["Python", "Time Series", "Forecasting", "Machine Learning", "SQL"],
  },
  {
    role: "Data science Intern",
    company: "Vaali Infotech",
    period: "2025",
    type: "Internship",
    typeColor: "purple",
    description:
      "Built a news-domain conversational AI application using LangChain and LLMs, enabling grounded Q&A over curated news content.Used Retrieval-Augmented Generation (RAG) pipeline including document ingestion from databases such as Chromadb, chunking, embeddings, and vector database retrieval for context-aware responses.Engineered a scalable data pipeline using BeautifulSoup and API integration for large-scale data collection, cleaning, and curation.Fine-tuned a Hugging Face BERT-base model for political bias detection with optimizsed results, supporting automated classification and content analysis.Also developed web scrapping for ecormerce datasets.",
    skills: ["RAG", "BERT", "NLP", "LangChain", "Vector Databases", "Python", "web scrapping", "Transformer", "Hugging Face", "LLMs"],
  },
  {
    role: "AI Portfolio Projects",
    company: "Independent",
    period: "2024 — Present",
    type: "Self-directed",
    typeColor: "cyan",
    description:
      "Building production-grade AI systems including AutoAgent (multi-agent Chief of Staff), Enterprise RAG Assistant, AI Investment Analyst, and Serverless Blog Generator on AWS Bedrock.",
    skills: ["LLMs", "Agentic AI", "AWS Bedrock", "CrewAI", "LangSmith", "FastAPI"],
  },
  {
    role: "Continuous AI Upskilling",
    company: "INSOFE & Online",
    period: "Present",
    type: "Education",
    typeColor: "green",
    description:
      "Completing advanced certifications in AWS Generative AI, NVIDIA Deep Learning, and Claude AI. Actively contributing to AI communities and staying current with research.",
    skills: ["AWS", "Claude", "Deep Learning", "MLOps", "Azure", "LLMs", "RAG", "Agentic AI", "NLP", "OpenAI", "Hugging Face", "Transformer", "LangChain", "Vector Databases", "Python", "web scrapping", "PyTorch", "TensorFlow", "Scikit-learn", "Numpy", "Pandas", "SQL", "BI tools"],
  },
];

const typeColors: Record<string, string> = {
  blue: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
  purple: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
  cyan: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300",
  green: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
};

const dotColors: Record<string, string> = {
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  cyan: "bg-cyan-500",
  green: "bg-green-500",
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding bg-gray-50 dark:bg-[#0a0f1e]"
      aria-label="Work experience"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="Experience"
          title="Professional"
          highlight="Journey"
          subtitle="Real-world AI experience through internships, projects, and continuous learning."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-cyan-500/40 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Dot */}
                <div
                  className={`absolute left-4 md:left-6 top-5 w-4 h-4 rounded-full ${dotColors[exp.typeColor]
                    } border-2 border-white dark:border-[#0a0f1e] shadow-sm`}
                />

                <div className="bg-white dark:bg-[#1e293b] rounded-2xl border border-gray-200 dark:border-white/10 p-6 hover:border-blue-400/40 dark:hover:border-blue-500/30 transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={13} className="text-gray-400" aria-hidden />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${typeColors[exp.typeColor]
                          }`}
                      >
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Calendar size={12} aria-hidden />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
