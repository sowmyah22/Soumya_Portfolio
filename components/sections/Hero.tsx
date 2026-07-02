"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import profilePic from "@/public/profile.jpg";

const roles = [
    "Generative AI Engineer",
    "AI Application Developer",
];

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    // ===============================
    // Typewriter Animation
    // ===============================
    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting) {
            if (displayed.length < currentRole.length) {
                timeout = setTimeout(() => {
                    setDisplayed(currentRole.slice(0, displayed.length + 1));
                }, 60);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 1800);
            }
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayed(displayed.slice(0, -1));
                }, 30);
            } else {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayed, isDeleting, roleIndex]);

    // ===============================
    // Animated Particle Background
    // ===============================
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrame: number;

        const particles: {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            opacity: number;
        }[] = [];

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        for (let i = 0; i < 70; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.1,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
                if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

                ctx.beginPath();
                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.radius,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle = `rgba(59,130,246,${particle.opacity})`;
                ctx.fill();
            });

            particles.forEach((p1, index) => {
                particles.slice(index + 1).forEach((p2) => {
                    const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);

                    if (distance < 130) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);

                        ctx.strokeStyle = `rgba(59,130,246,${(1 - distance / 130) * 0.18
                            })`;

                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("resize", resize);
        };
    }, []);

    // ===============================
    // Framer Motion Variants
    // ===============================

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    };

    // ===============================
    // JSX starts here...
    // ===============================

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0F172A]"
        >

            {/* Particle Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />

            {/* Background Glow */}
            <div className="absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />

            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-20"
            >

                {/* LEFT SIDE */}

                <div className="flex-1 text-center lg:text-left">

                    <motion.div variants={itemVariants}>
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 uppercase tracking-[0.25em] text-xs">

                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                            Open To Opportunities

                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="mt-8 text-5xl md:text-7xl font-black leading-tight text-white"
                    >
                        Hi, I'm
                        <br />

                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Soumya.H
                        </span>
                    </motion.h1>

                    <motion.div
                        variants={itemVariants}
                        className="mt-6 h-10 text-2xl md:text-3xl font-semibold text-cyan-400"
                    >
                        {displayed}

                        <span className="animate-pulse">|</span>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="mt-8 max-w-2xl text-lg leading-8 text-gray-400"
                    >
                        Building intelligent AI applications using
                        <span className="text-blue-400 font-semibold">
                            {" "}LLMs
                        </span>,
                        <span className="text-cyan-400 font-semibold">
                            {" "}LangChain
                        </span>,
                        <span className="text-blue-400 font-semibold">
                            {" "}AWS Bedrock
                        </span>,
                        <span className="text-cyan-400 font-semibold">
                            {" "}FastAPI
                        </span>
                        and modern cloud technologies.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
                    >

                        <a
                            href="#projects"
                            className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
                        >
                            View Projects
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="flex items-center gap-2 px-7 py-3 rounded-xl border border-white/20 hover:border-cyan-400 text-white transition"
                        >
                            <Download size={18} />

                            Download Resume
                        </a>

                        <a
                            href="#contact"
                            className="px-7 py-3 rounded-xl border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition"
                        >
                            Contact Me
                        </a>

                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-10 flex gap-5 justify-center lg:justify-start"
                    >

                        <a
                            href="https://linkedin.com/in/soumya-h"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 rounded-lg border border-white/10 hover:border-cyan-500 transition"
                        >
                            <Linkedin />
                        </a>

                        <a
                            href="https://github.com/sowmyah22"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 rounded-lg border border-white/10 hover:border-cyan-500 transition"
                        >
                            <Github />
                        </a>

                        <a
                            href="mailto:soumyah0822@gmail.com"
                            className="p-3 rounded-lg border border-white/10 hover:border-cyan-500 transition"
                        >
                            <Mail />
                        </a>

                    </motion.div>

                    <motion.a
                        variants={itemVariants}
                        href="#about"
                        className="inline-flex items-center gap-2 mt-12 text-white/90 hover:text-white"
                    >
                        Scroll

                        <ArrowDown size={16} />
                    </motion.a>

                </div>

                {/* RIGHT SIDE IMAGE */}

                <motion.div
                    variants={itemVariants}
                    className="flex-1 flex justify-center"
                >

                    <div className="relative">

                        <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-3xl scale-110" />

                        <Image
                            src={profilePic}
                            alt="Soumya H"
                            width={180}
                            height={100}
                            priority
                            className="relative rounded-3xl border border-cyan-500/30 shadow-[0_0_70px_rgba(6,182,212,.35)] object-cover"
                        />

                    </div>

                </motion.div>

            </motion.div>
        </section>
    );
}