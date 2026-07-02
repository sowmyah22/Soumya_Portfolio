"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  // { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/80 dark:bg-navy-900/80 backdrop-blur-xl shadow-sm border-b border-gray-200/20 dark:border-white/5"
        : "bg-transparent"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-gray-900 dark:text-white"
          aria-label="Soumya.H - Home"
        >
          <span className="gradient-text">SH.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            {theme === "dark" ? (
              <Sun size={18} aria-hidden />
            ) : (
              <Moon size={18} aria-hidden />
            )}
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Hire me
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-navy-900 border-b border-gray-200 dark:border-white/10 px-4 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-bold text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      )
      }
    </header >
  );
}
