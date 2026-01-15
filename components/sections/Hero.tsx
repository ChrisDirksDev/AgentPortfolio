"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import GeometricBackground from "@/components/GeometricBackground";

const titles = [
  "Full Stack Developer",
  "React & Next.js Expert",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Code Craftsman",
];

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Base gradient background */}
      <div
        className="absolute inset-0 -z-20 transition-colors"
        style={{
          background: `linear-gradient(to bottom right, var(--color-bg-dark), var(--color-bg-dark), var(--color-card))`,
          backgroundColor: `var(--color-bg-dark)`,
        }}
      />

      {/* Geometric animated background */}
      <GeometricBackground
        primaryColor="var(--color-primary)"
        secondaryColor="var(--color-secondary)"
        accentColor="var(--color-accent)"
        intensity="high"
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Name with entrance animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 tracking-tight font-display">
              <span className="text-gray-900 dark:text-white">Chris Dirks</span>
            </h1>
          </motion.div>

          {/* Rotating Titles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-20 sm:h-24 flex items-center justify-center mb-8"
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentTitle}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-light"
                style={{ color: "var(--color-primary)" }}
              >
                {titles[currentTitle]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Building interactive digital experiences that combine elegant design
            with powerful functionality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={handleScrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 text-white font-semibold rounded-full shadow-lg transition-all duration-300 overflow-hidden w-full sm:w-auto"
              style={{ backgroundColor: "var(--color-secondary)" }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-semibold rounded-full shadow-lg border-2 transition-colors w-full sm:w-auto text-center"
              style={{
                borderColor: "var(--color-primary)",
                color: "var(--color-primary)",
              }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex flex-wrap gap-3 justify-center items-center"
          >
            {["React", "Next.js", "TypeScript", "Node.js", "Tailwind"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-white/50 dark:bg-[var(--color-card)]/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </motion.span>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={handleScrollToProjects}
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            Scroll to explore
          </span>
          <div
            className="w-6 h-10 rounded-full p-1 border-2"
            style={{ borderColor: "var(--color-primary)" }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-3 rounded-full mx-auto"
              style={{ backgroundColor: "var(--color-primary)" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
