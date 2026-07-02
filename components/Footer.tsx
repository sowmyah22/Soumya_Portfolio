import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] dark:bg-[#080d18] border-t border-white/5 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <span className="text-xl font-black gradient-text">SH.</span>
          <p className="text-xs text-gray-500 mt-1">
            © {year} Soumya.H · All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Built with Next.js, React, TypeScript, Tailwind CSS and{" "}
            <span className="text-red-400">♥</span>
          </p>
        </div>

        {/* Nav links */}
        <div className="hidden sm:flex gap-6 text-xs text-gray-500">
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-gray-300 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {[
            { href: "https://linkedin.com/in/soumya-h", icon: <Linkedin size={16} />, label: "LinkedIn" },
            { href: "https://github.com/sowmyah22", icon: <Github size={16} />, label: "GitHub" },
            { href: "mailto:soumyah0822@gmail.com", icon: <Mail size={16} />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-500 hover:text-gray-300 transition-colors p-1.5"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
