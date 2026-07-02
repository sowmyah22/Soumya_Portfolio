// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight, Clock } from "lucide-react";
// import SectionHeader from "../ui/SectionHeader";

// const articles = [
//   {
//     title: "Understanding Retrieval-Augmented Generation (RAG)",
//     excerpt:
//       "A deep dive into RAG architecture: how vector databases, embeddings, and LLMs work together to build accurate, knowledge-grounded AI systems.",
//     category: "RAG",
//     categoryColor: "blue",
//     readTime: "8 min read",
//     comingSoon: false,
//   },
//   {
//     title: "Prompt Engineering Patterns for Production LLMs",
//     excerpt:
//       "Systematic approaches to crafting prompts that are reliable, consistent, and optimized for real-world AI applications at scale.",
//     category: "Prompt Engineering",
//     categoryColor: "purple",
//     readTime: "6 min read",
//     comingSoon: false,
//   },
//   {
//     title: "Building Multi-Agent AI Systems with CrewAI",
//     excerpt:
//       "How to architect autonomous multi-agent pipelines — orchestrating specialized agents with memory, tools, and inter-agent communication.",
//     category: "Agentic AI",
//     categoryColor: "cyan",
//     readTime: "10 min read",
//     comingSoon: true,
//   },
//   {
//     title: "AWS Bedrock: Enterprise AI in the Cloud",
//     excerpt:
//       "A practical guide to deploying foundation models on AWS Bedrock — comparing Claude, Titan, and Llama for enterprise use cases.",
//     category: "AWS Bedrock",
//     categoryColor: "orange",
//     readTime: "7 min read",
//     comingSoon: true,
//   },
//   {
//     title: "MCP: The Protocol Connecting AI to the World",
//     excerpt:
//       "Model Context Protocol explained — how it enables AI agents to interact with external tools, databases, and services in a standardized way.",
//     category: "MCP",
//     categoryColor: "green",
//     readTime: "5 min read",
//     comingSoon: true,
//   },
//   {
//     title: "Vector Databases: Choosing the Right One",
//     excerpt:
//       "Comparing Pinecone, ChromaDB, FAISS, and Weaviate — performance, cost, and ideal use cases for different AI application scales.",
//     category: "Vector DBs",
//     categoryColor: "pink",
//     readTime: "9 min read",
//     comingSoon: true,
//   },
// ];

// const catColors: Record<string, string> = {
//   blue: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
//   purple: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
//   cyan: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300",
//   orange: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
//   green: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
//   pink: "bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300",
// };

// export default function Blog() {
//   return (
//     <section
//       id="blog"
//       className="section-padding bg-gray-50 dark:bg-[#0a0f1e]"
//       aria-label="Blog articles"
//     >
//       <div className="max-w-6xl mx-auto">
//         <SectionHeader
//           eyebrow="Insights"
//           title="AI Knowledge"
//           highlight="Hub"
//           subtitle="Deep dives into the AI concepts, tools, and architectures I work with every day."
//         />

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {articles.map((article, idx) => (
//             <motion.article
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: idx * 0.07 }}
//               className={`group rounded-2xl bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/10 p-5 flex flex-col hover:border-blue-400/40 dark:hover:border-blue-500/30 transition-all duration-300 cursor-pointer ${
//                 article.comingSoon ? "opacity-70" : ""
//               }`}
//             >
//               <div className="flex items-center justify-between mb-4">
//                 <span
//                   className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
//                     catColors[article.categoryColor]
//                   }`}
//                 >
//                   {article.category}
//                 </span>
//                 {article.comingSoon && (
//                   <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400">
//                     Coming soon
//                   </span>
//                 )}
//               </div>

//               <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                 {article.title}
//               </h3>

//               <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-grow">
//                 {article.excerpt}
//               </p>

//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-1.5 text-xs text-gray-400">
//                   <Clock size={11} aria-hidden />
//                   {article.readTime}
//                 </div>
//                 {!article.comingSoon && (
//                   <span className="text-xs font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:gap-2 transition-all">
//                     Read more <ArrowRight size={12} aria-hidden />
//                   </span>
//                 )}
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
