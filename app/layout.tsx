import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Soumya.H | Generative AI Engineer & Data Scientist",
  description:
    "Generative AI Engineer specializing in LLMs, RAG, Agentic AI, AWS Bedrock, LangChain, and FastAPI. Building intelligent AI systems that solve real-world problems.",
  keywords: [
    "Generative AI",
    "AI Engineer",
    "Data Science",
    "LLMs",
    "RAG",
    "LangChain",
    "LangGraph",
    "AWS Bedrock",
    "Agentic AI",
    "FastAPI",
    "Python",
    "Data Analysis",
  ],
  authors: [{ name: "Soumya.H" }],
  creator: "Soumya.H",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://soumyah.dev",
    title: "Soumya.H | Generative AI Engineer",
    description:
      "Building intelligent AI systems using LLMs, AWS Bedrock, LangChain, FastAPI, and Cloud Technologies.",
    siteName: "Soumya.H Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soumya.H | Generative AI Engineer",
    description:
      "Building intelligent AI systems using LLMs, AWS Bedrock, LangChain, and FastAPI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Soumya.H",
              jobTitle: "Generative AI Engineer",
              description:
                "Generative AI Engineer specializing in LLMs, RAG, Agentic AI, and Cloud AI systems.",
              url: "https://soumyah.dev",
              sameAs: [
                "https://linkedin.com/in/soumya-h",
                "https://github.com/sowmyah22",
              ],
              knowsAbout: [
                "Generative AI",
                "Large Language Models",
                "RAG",
                "LangChain",
                "AWS Bedrock",
                "Python",
                "FastAPI",
                "Agentic AI",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
