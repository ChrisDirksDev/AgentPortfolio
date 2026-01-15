"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[var(--color-bg-dark)] transition-colors"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Behind the Screen
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 rounded-lg shadow-2xl overflow-hidden">
                {/* Profile Image - Replace with your actual image */}
                <div
                  className="relative w-full h-full rounded-lg"
                  style={{
                    background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full bg-white dark:bg-[var(--color-card)] flex items-center justify-center text-6xl font-bold text-gray-700 dark:text-white">
                      CD
                    </div>
                  </div>
                  {/* Uncomment and use when you have an actual image */}
                  {/* <Image
                    src="/profile.jpg"
                    alt="Profile Photo"
                    fill
                    className="object-cover"
                    priority
                  /> */}
                </div>
                <div
                  className="absolute -bottom-4 -right-4 w-32 h-32 rounded-lg opacity-50 -z-10"
                  style={{ backgroundColor: "var(--color-primary)" }}
                ></div>
                <div
                  className="absolute -top-4 -left-4 w-24 h-24 rounded-lg opacity-30 -z-10"
                  style={{ backgroundColor: "var(--color-secondary)" }}
                ></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Hi, I&apos;m Chris — a full stack developer expanding into
                machine learning. I love bringing ideas to life through clean
                interfaces, thoughtful architecture, and interactive user
                experiences. My background spans frontend frameworks, backend
                development, and building real projects across the MERN stack,
                and now I&apos;m applying that same curiosity and discipline to
                ML and AI technologies.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Outside of coding, I travel as a petsitter, exploring new places
                while caring for animals. This lifestyle has shaped how I work:
                adaptable, calm under pressure, and always learning. Whether
                I&apos;m building a new app, leveling up my ML skills, or
                dreaming up my future non-profit animal sanctuary, I&apos;m
                driven by growth, creativity, and making meaningful
                contributions through tech.
              </p>

              <div className="space-y-4 pt-4">
                <div
                  className="bg-gray-50 dark:bg-[var(--color-card)] p-4 rounded-lg border-2"
                  style={{ borderColor: "var(--color-primary)", opacity: 0.3 }}
                >
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: "var(--color-primary)" }}
                  >
                    LOCATION
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    Halifax, NS
                  </p>
                </div>
                <div
                  className="bg-gray-50 dark:bg-[var(--color-card)] p-4 rounded-lg border-2"
                  style={{ borderColor: "var(--color-primary)", opacity: 0.3 }}
                >
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: "var(--color-primary)" }}
                  >
                    CLASS
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    Developer
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
