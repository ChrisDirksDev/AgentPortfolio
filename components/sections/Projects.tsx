"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
}

const filterOptions = ["All", "React", "Node.js", "TypeScript", "Next.js"];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load projects from JSON file
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
        setFilteredProjects(data.projects.filter((p: Project) => p.featured));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading projects:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filter projects based on active filter
    let filtered = showAll ? projects : projects.filter((p) => p.featured);

    if (activeFilter !== "All") {
      filtered = filtered.filter((project) =>
        project.technologies.includes(activeFilter)
      );
    }

    setFilteredProjects(filtered);
  }, [activeFilter, projects, showAll]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  if (loading) {
    return (
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[var(--color-bg-dark)] transition-colors"
      >
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg animate-pulse"
              >
                <div className="h-56 bg-gray-300 dark:bg-gray-700"></div>
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[var(--color-bg-dark)] transition-colors"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Explore my latest work and side projects. Each built with modern
            technologies and best practices.
          </p>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filterOptions.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  activeFilter === filter
                    ? "text-white shadow-lg"
                    : "bg-gray-100 dark:bg-[var(--color-card)] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:opacity-80"
                }`}
                style={
                  activeFilter === filter
                    ? { backgroundColor: "var(--color-secondary)" }
                    : {}
                }
              >
                {filter}
                {filter !== "All" && (
                  <span className="ml-2 text-xs opacity-75">
                    (
                    {
                      projects.filter((p) => p.technologies.includes(filter))
                        .length
                    }
                    )
                  </span>
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid with AnimatePresence for smooth transitions */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={`${project.id}-${activeFilter}`}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  demo={project.demo}
                  github={project.github}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <svg
                  className="w-16 h-16 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try selecting a different technology filter
              </p>
            </motion.div>
          )}

          {/* Show All / Show Less Toggle */}
          {projects.length > 3 && filteredProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 text-white font-semibold rounded-full shadow-lg transition-all"
                style={{ backgroundColor: "var(--color-secondary)" }}
              >
                {showAll ? "Show Featured Only" : "Show All Projects"}
                <span className="ml-2">{showAll ? "−" : "+"}</span>
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
