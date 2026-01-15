"use client";

import { motion } from "framer-motion";
import { useState, forwardRef } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo: string;
  github: string;
  index: number;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ title, description, image, technologies, demo, github, index }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{
          y: -12,
          transition: { duration: 0.3 },
        }}
        className="group relative bg-white dark:bg-[var(--color-card)] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
      >
        {/* Project Image */}
        <div
          className="relative h-56 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
          }}
        >
          {/* Fallback gradient with initial - always visible */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-9xl font-bold text-white/20">
              {title.charAt(0)}
            </div>
          </div>

          {/* Project title overlay - always visible on image */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-10">
            <h3 className="text-white font-bold text-xl">{title}</h3>
          </div>

          {/* Tech Stack Overlay - appears on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 z-20 flex items-center justify-center p-6"
          >
            <div className="text-center">
              <h3 className="text-white font-bold text-2xl mb-4 drop-shadow-lg">
                {title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-medium border border-white/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3
            className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:transition-colors"
            style={{
              color: isHovered ? "var(--color-primary)" : undefined,
            }}
          >
            {title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 min-h-[48px]">
            {description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-bg-dark)",
                  opacity: 0.9,
                }}
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                +{technologies.length - 3}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <motion.a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 text-center px-4 py-2.5 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              style={{ backgroundColor: "var(--color-secondary)" }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View Live
            </motion.a>

            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2.5 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex items-center justify-center shadow-md hover:shadow-lg"
              aria-label="View on GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
