"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate submission — replace with your form endpoint
    await new Promise((res) => setTimeout(res, 1200));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-white dark:bg-[#0F172A]"
      aria-label="Contact"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Build"
          highlight="Something Together"
          subtitle="Open to full-time roles, freelance AI projects, and research collaborations."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Get in touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                Currently open to full-time opportunities as an AI Engineer, Generative AI Engineer, Machine Learning Engineer, NLP Engineer, AI Application Developer, or Data Scientist. Whether you're hiring, building AI-powered products, or looking to collaborate on innovative AI solutions, I'd love to connect.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: <Mail size={18} />,
                  label: "Email",
                  value: "soumyah0822@gmail.com",
                  href: "mailto:soumyah0822@gmail.com",
                },
                {
                  icon: <MapPin size={18} />,
                  label: "Location",
                  value: "Bangalore, India",
                  href: null,
                },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Connect
              </p>
              <div className="flex gap-3">
                {[
                  {
                    href: "https://linkedin.com/in/soumya-h",
                    icon: <Linkedin size={18} />,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://github.com/sowmyah22",
                    icon: <Github size={18} />,
                    label: "Github",
                  },
                  {
                    href: "mailto:soumyah0822@gmail.com",
                    icon: <Mail size={18} />,
                    label: "Email",
                  },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {status === "success" ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-8 rounded-2xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50">
                  <CheckCircle
                    size={48}
                    className="text-green-500 mx-auto mb-4"
                    aria-hidden
                  />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Message sent!
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-white dark:bg-[#1e293b] rounded-2xl border border-gray-200 dark:border-white/10 p-6"
                noValidate
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="Your name"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} aria-hidden />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
