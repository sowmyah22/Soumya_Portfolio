"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, TrendingUp, Database, Bot, Cloud, Car, GraduationCap, HeartPulse } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

type Project = {
  id: number;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  techColors: string[];
  github?: string;
  demo?: string;
  status: string;
};

const projects: Project[] = [
  {
    id: 1,
    icon: <TrendingUp size={24} />,
    iconBg: "from-blue-500 to-cyan-500",
    title: "AI Investment Analyst",
    description:
      "An intelligent AI-powered investment advisor that analyzes stock portfolios, evaluates risk, calculates diversification, and delivers LLM-generated insights for smarter investment decisions.",
    features: [
      "Portfolio Analysis",
      "AI Recommendations",
      "Risk Scoring",
      "Sector Diversification",
      "LLM Insights",
    ],
    tech: ["Python", "FastAPI", "LangChain", "AWS Bedrock", "LLMs"],
    techColors: ["blue", "cyan", "purple", "orange", "green"],
    github: "https://github.com/sowmyah22/AI-Wealth-Intelligence-Platform",
    status: "In Progress",
  },
  {
    id: 2,
    icon: <Cloud size={24} />,
    iconBg: "from-orange-500 to-yellow-500",
    title: "Serverless AI Blog Generator",
    description:
      "A fully serverless AI content pipeline that generates, stores, and serves blog articles — built on AWS Bedrock, Lambda, and S3 with API Gateway.",
    features: [
      "AWS Bedrock",
      "Lambda Functions",
      "S3 Storage",
      "API Gateway",
      "Auto-generation",
    ],
    tech: ["AWS Bedrock", "Lambda", "S3", "API Gateway", "Python"],
    techColors: ["orange", "yellow", "blue", "cyan", "green"],
    github: "https://github.com/sowmyah22/AI-Powered-Blog-Generator",
    status: "completed",
  },
  {
    id: 3,
    icon: <Database size={24} />,
    iconBg: "from-purple-500 to-blue-500",
    title: "AI Data Analyst",
    description:
      " To Reduce manual effort in exploratory data analysis and reporting. Designed a Crew AI-based multi-agent system for data loading, cleaning,analysis, and summarization.Automated insight generation workflow from raw CSV datasets.A document intelligence platform with semantic search, PDF chat, and vector-database-backed LLM responses — designed for enterprise knowledge management.",
    features: [
      "Document Upload",
      "Semantic Search",
      "PDF Chat",
      "Vector Database",
      "Chunking & Embeddings",
    ],
    tech: ["Python", "LangChain", "CrewAI", "Agentic AI"],
    techColors: ["blue", "purple", "cyan", "orange", "green"],
    status: "completed",
  },
  {
    id: 4,
    icon: <Car size={24} />,
    iconBg: "from-cyan-500 to-green-500",
    title: "Used Car Price Prediction (KaggleX)",
    description:
      "Developed a deep learning pipeline in TensorFlow for used car price prediction using Artificial Neural Networks (ANN) and ensemble architectures.Enhanced model performance through feature selection, Principal Component Analysis (PCA), and ensemble learning techniques.",
    features: [],
    tech: ["Python", "TensorFlow", "Ensemble algorithms", "Deep Learning", "Feature Selection", "PCA", "Neural Networks"],
    techColors: ["blue", "cyan", "purple", "green", "orange"],
    github: "https://github.com/sowmyah22/Used-car-price-prediction",
    status: "completed",
  },
  {
    id: 5,
    icon: <GraduationCap size={24} />,
    iconBg: "from-orange-500 to-yellow-500",
    title: "Prediction of Students Performance In Exams",
    description:
      "An application which predicts the performance of students in the exams . The app displays a web page to enter the necessary details based on data the predictions are displayed.This is a regression based project where the total scores secured by a student in the exam is predicted.",
    features: ["Used github actions to automate CI/CD in AWS"],
    tech: ["Python", "Linear Regression", "Decision Tree", "Random Forest", "GradientBoost", "Ensemble learning", "Model Evlauation", "flask", "AWS", "Docker",],
    techColors: ["blue", "cyan", "purple", "green", "orange"],
    github: "https://github.com/sowmyah22/End-To-End-Data-science-project",
    status: "completed",
  },
  {
    id: 6,
    icon: <HeartPulse size={24} />,
    iconBg: "from-red-900 to-white",
    title: "Clinical Data Analysis",
    description: "Designed and implemented a production-ready healthcare analytics dashboard for a medical clinic using Power BI. The solution transformed operational healthcare data into interactive dashboards that enabled medical staff to monitor clinic performance and patient-related metrics in real time.The dashboard was adopted by clinic staff for daily operations, providing centralized visibility into healthcare metrics and improving reporting efficiency through interactive, real-time analytics.",
    features: ["Real-time dashboard with scheduled data refresh", "Interactive multi-page reports",
      "Advanced DAX calculations and KPIs",
      "Dynamic filtering with slicers",
      "Drill-through analysis",
      "Trend analysis and operational insights",
      "Data transformation and modeling",
      "User-friendly reporting interface"],
    tech: ["Power BI", "DAX"],
    techColors: ["blue", "purple", "cyan", "orange", "green"],
    github: "https://github.com/sowmyah22/Data_Analysis_clinical-data",
    status: "completed",
  },
];

const techColorMap: Record<string, string> = {
  blue: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
  cyan: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300",
  purple: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
  orange: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
  green: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
  yellow: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-white dark:bg-[#0F172A]"
      aria-label="Projects"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured"
          highlight="AI Projects"
          subtitle="Production-grade AI systems spanning agentic workflows, RAG pipelines, and cloud-native deployments."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-2xl bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/10 p-6 hover:border-blue-400/50 dark:hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col"
            >
              {/* Status badge */}
              <div className="absolute top-5 right-5">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${project.status === "Live"
                    ? "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400"
                    : "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400"
                    }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.iconBg} flex items-center justify-center text-white mb-5 shrink-0`}
              >
                {project.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 pr-16">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tech.map((t, i) => (
                  <span
                    key={t}
                    className={`text-xs font-medium px-2.5 py-1 rounded-lg ${techColorMap[project.techColors[i]] || techColorMap.blue
                      }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-white/15 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-colors"
                >
                  <Github size={15} aria-hidden />
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
                  >
                    <ExternalLink size={15} aria-hidden />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/sowmyah22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-xl transition-colors"
          >
            <Github size={16} aria-hidden />
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
