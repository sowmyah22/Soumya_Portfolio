// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react";
// import Image from "next/image";
// import profilePic from "@/public/profile.jpg";
// import { section } from "framer-motion/client";

// const roles = [
//   "Generative AI Engineer",
//   "AI Application Developer",
//   "RAG & Agentic AI Specialist",
//   "AI Engineer"
// ];

// export default function Hero() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [roleIndex, setRoleIndex] = useState(0);
//   const [displayed, setDisplayed] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   // Typewriter effect
//   useEffect(() => {
//     const currentRole = roles[roleIndex];
//     let timeout: ReturnType<typeof setTimeout>;

//     if (!isDeleting) {
//       if (displayed.length < currentRole.length) {
//         timeout = setTimeout(
//           () => setDisplayed(currentRole.slice(0, displayed.length + 1)),
//           60
//         );
//       } else {
//         timeout = setTimeout(() => setIsDeleting(true), 2000);
//       }
//     } else {
//       if (displayed.length > 0) {
//         timeout = setTimeout(
//           () => setDisplayed(displayed.slice(0, -1)),
//           30
//         );
//       } else {
//         setIsDeleting(false);
//         setRoleIndex((prev) => (prev + 1) % roles.length);
//       }
//     }

//     return () => clearTimeout(timeout);
//   }, [displayed, isDeleting, roleIndex]);

//   // Particle canvas
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let animFrame: number;
//     const particles: {
//       x: number;
//       y: number;
//       vx: number;
//       vy: number;
//       size: number;
//       opacity: number;
//     }[] = [];

//     const resize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     // Create particles
//     for (let i = 0; i < 60; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 0.3,
//         vy: (Math.random() - 0.5) * 0.3,
//         size: Math.random() * 1.5 + 0.5,
//         opacity: Math.random() * 0.4 + 0.1,
//       });
//     }

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       particles.forEach((p) => {
//         p.x += p.vx;
//         p.y += p.vy;
//         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
//         ctx.fill();
//       });

//       // Draw connections
//       particles.forEach((p1, i) => {
//         particles.slice(i + 1).forEach((p2) => {
//           const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
//           if (dist < 120) {
//             ctx.beginPath();
//             ctx.moveTo(p1.x, p1.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - dist / 120) * 0.15
//               })`;
//             ctx.lineWidth = 0.5;
//             ctx.stroke();
//           }
//         });
//       });

//       animFrame = requestAnimationFrame(draw);
//     };

//     draw();

//     return () => {
//       cancelAnimationFrame(animFrame);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   const containerVariants = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.15 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A]"
//       aria-label="Hero section"
//     >
//       {/* Canvas particles */}
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

//       {/* Gradient orbs */}
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

//       {/* Grid overlay */}
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
//           backgroundSize: "60px 60px",
//         }}
//       />

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-12"
//       >
//         <div className="flex-1 text-center lg:text-left">
//           {/* Status badge */}
//           <motion.div variants={itemVariants} className="mb-8">
//             <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full">
//               <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
//               Open to opportunities · Bangalore, India
//             </span>
//           </motion.div>

//           {/* Name */}
//           <motion.h1
//             variants={itemVariants}
//             className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4 tracking-tight"
//           >
//             Hi, I&apos;m{" "}
//             <span className="gradient-text">Soumya H.</span>
//           </motion.h1>

//           {/* Typewriter role */}
//           <motion.div
//             variants={itemVariants}
//             className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400 mb-6 h-10 flex items-center justify-center"
//             aria-live="polite"
//           >
//             {displayed}
//             <span className="ml-1 w-0.5 h-7 bg-blue-400 inline-block animate-pulse" />
//           </motion.div>

//           {/* Subtitle */}
//           <motion.p
//             variants={itemVariants}
//             className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
//           >
//             Building intelligent AI systems using{" "}
//             <span className="text-blue-400 font-medium">LLMs</span>,{" "}
//             <span className="text-cyan-400 font-medium">AWS Bedrock</span>,{" "}
//             <span className="text-blue-400 font-medium">LangChain</span>,{" "}
//             <span className="text-cyan-400 font-medium">FastAPI</span>, and{" "}
//             <span className="text-blue-400 font-medium">Cloud Technologies</span>.
//           </motion.p>

//           {/* CTA buttons */}
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col sm:flex-row gap-3 justify-center mb-12"
//           >
//             <a
//               href="#projects"
//               className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
//             >
//               View Projects
//             </a>
//             <a
//               href="/resume.pdf"
//               download
//               className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white border border-white/20 hover:border-blue-400/50 hover:bg-white/5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
//             >
//               <Download size={16} aria-hidden />
//               Download Resume
//             </a>
//             <a
//               href="#contact"
//               className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
//             >
//               Contact Me
//             </a>
//           </motion.div>

//           {/* Social links */}
//           <motion.div
//             variants={itemVariants}
//             className="flex items-center justify-center gap-4 mb-16"
//           >
//             {[
//               {
//                 href: "https://linkedin.com/in/soumya-h",
//                 icon: <Linkedin size={18} />,
//                 label: "LinkedIn",
//               },
//               {
//                 href: "https://github.com/sowmyah22",
//                 icon: <Github size={18} />,
//                 label: "GitHub",
//               },
//               {
//                 href: "mailto:soumyah0822@gmail.com",
//                 icon: <Mail size={18} />,
//                 label: "Email",
//               },
//             ].map(({ href, icon, label }) => (
//               <a
//                 key={label}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={label}
//                 className="p-2.5 rounded-lg text-gray-400 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
//               >
//                 {icon}
//               </a>
//             ))}
//           </motion.div>

//           {/* Scroll indicator */}
//           <motion.a
//             href="#about"
//             variants={itemVariants}
//             className="inline-flex flex-col items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors"
//             aria-label="Scroll to About section"
//           >
//             <span className="text-xs tracking-widest uppercase">Scroll</span>
//             <motion.div
//               animate={{ y: [0, 6, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             >
//               <ArrowDown size={16} />
//             </motion.div>
//           </motion.a>

//         </div>
//         {/* Right Side Image */}
//         <motion.div
//           variants={itemVariants}
//           className="flex-1 flex justify-start items-start mt-10 lg:mt-0"
//         >
//           <Image
//             src={profilePic}
//             alt="Soumya H"
//             width={180}
//             height={100}
//             priority
//             className="rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_60px_rgba(6,182,212,.45)]"
//           />
//         </motion.div>
//       </motion.div>
//     </section >
//   );
// }
