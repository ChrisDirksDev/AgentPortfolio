"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Angular", icon: "🅰️" },
      { name: "Svelte", icon: "🔥" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Material UI", icon: "🎭" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚂" },
      { name: "Nest.js", icon: "🦅" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "JOI", icon: "✅" },
    ],
  },
  {
    category: "Testing & Tools",
    items: [
      { name: "Jest", icon: "🃏" },
      { name: "Jasmine", icon: "🌸" },
      { name: "Cypress", icon: "🌲" },
      { name: "Git", icon: "🔧" },
      { name: "GitHub", icon: "🐙" },
      { name: "Figma", icon: "🎨" },
      { name: "Postman", icon: "📮" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[var(--color-bg-dark)] transition-colors"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => {
              return (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
                  className="bg-white dark:bg-[var(--color-card)] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3
                    className="text-2xl font-bold mb-6 pb-2 border-b-4"
                    style={{
                      borderColor: "var(--color-primary)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{
                          duration: 0.4,
                          delay: groupIndex * 0.2 + skillIndex * 0.1,
                        }}
                        whileHover={{ scale: 1.05, x: 10 }}
                        className="px-4 py-3 rounded-lg font-medium cursor-default transition-all flex items-center gap-3 border-2"
                        style={{
                          backgroundColor: "var(--color-primary)",
                          borderColor: "var(--color-primary)",
                          opacity: 0.15,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = "0.25";
                          e.currentTarget.style.transform = "translateX(10px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = "0.15";
                          e.currentTarget.style.transform = "translateX(0)";
                        }}
                      >
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-semibold dark:text-white text-gray-900">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
