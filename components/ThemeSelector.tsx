"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type ColorPalette = {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background?: string; // Dark mode background
  card?: string; // Card background
  text?: string; // Text color
  preview: string[];
};

// Color palettes - add more here as needed
export const colorPalettes: ColorPalette[] = [
  {
    name: "Cyber Nightfall",
    primary: "#05F2F2", // Neon aqua (accents, links)
    secondary: "#F20587", // Electric magenta (buttons, highlights)
    accent: "#1B2A4A", // Deep desaturated blue (cards & sections)
    background: "#0A0F1F", // Near-black navy
    card: "#1B2A4A", // Card background
    text: "#F2F2F2", // Crisp white
    preview: ["#0A0F1F", "#05F2F2", "#F20587"],
  },
  {
    name: "Lava Glow",
    primary: "#F02D3A", // Hot lava red
    secondary: "#FF6A3D", // Burning orange
    accent: "#FFE26A", // Warm bright yellow (accents)
    background: "#0D0D0D", // Deep charcoal
    card: "#1A1A1A", // Slightly lighter charcoal for cards
    text: "#E4E4E4", // Soft gray
    preview: ["#0D0D0D", "#F02D3A", "#FF6A3D"],
  },
  {
    name: "Soft Vaporware Modern",
    primary: "#E94560", // Rosy neon pink
    secondary: "#D0EFFF", // Airy cyan (accents)
    accent: "#0F3460", // Slate navy (cards)
    background: "#1A1A2E", // Deep twilight blue
    card: "#0F3460", // Slate navy
    text: "#F5F5F5", // Light neutral
    preview: ["#1A1A2E", "#E94560", "#D0EFFF"],
  },
  {
    name: "Forest Electric",
    primary: "#2FF581", // Neon mint (accents)
    secondary: "#94EBCB", // Soft aqua (highlights)
    accent: "#1E463A", // Muted jungle green (containers)
    background: "#0C1F18", // Deep forest green (background)
    card: "#1E463A", // Muted jungle green
    text: "#F2FFF9", // Off-white
    preview: ["#0C1F18", "#2FF581", "#94EBCB"],
  },
  {
    name: "Royal Tech",
    primary: "#F4C430", // Soft metallic gold (accents/buttons)
    secondary: "#88A7FF", // Cool periwinkle (links/hover)
    accent: "#102C57", // Deep jewel blue (sections)
    background: "#0A122A", // Royal midnight blue (background)
    card: "#102C57", // Deep jewel blue
    text: "#F7F9FC", // Soft off-white
    preview: ["#0A122A", "#F4C430", "#88A7FF"],
  },
];

export default function ThemeSelector() {
  // Default to Lava Glow palette
  const defaultPalette = colorPalettes.find((p) => p.name === "Lava Glow") || colorPalettes[1];
  const [isOpen, setIsOpen] = useState(false);
  const [currentPalette, setCurrentPalette] = useState<ColorPalette>(
    defaultPalette
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load saved palette from localStorage, or apply default
  useEffect(() => {
    const saved = localStorage.getItem("colorPalette");
    if (saved) {
      const palette = colorPalettes.find((p) => p.name === saved);
      if (palette) {
        setCurrentPalette(palette);
        applyPalette(palette);
      } else {
        // If saved palette not found, apply default
        applyPalette(defaultPalette);
      }
    } else {
      // No saved palette, apply default
      applyPalette(defaultPalette);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const applyPalette = (palette: ColorPalette) => {
    document.documentElement.style.setProperty(
      "--color-primary",
      palette.primary
    );
    document.documentElement.style.setProperty(
      "--color-secondary",
      palette.secondary
    );
    document.documentElement.style.setProperty(
      "--color-accent",
      palette.accent
    );

    // Set background and card colors if provided
    if (palette.background) {
      document.documentElement.style.setProperty(
        "--color-bg-dark",
        palette.background
      );
    }
    if (palette.card) {
      document.documentElement.style.setProperty("--color-card", palette.card);
    }
    if (palette.text) {
      document.documentElement.style.setProperty("--color-text", palette.text);
    }
  };

  const handleSelect = (palette: ColorPalette) => {
    setCurrentPalette(palette);
    applyPalette(palette);
    localStorage.setItem("colorPalette", palette.name);
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent("themechange"));
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Select color theme"
      >
        {/* Color preview circles */}
        <div className="flex -space-x-1">
          {currentPalette.preview.map((color, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border-2 border-white dark:border-gray-800"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <svg
          className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50"
          >
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Color Palette
            </div>
            {colorPalettes.map((palette) => (
              <button
                key={palette.name}
                onClick={() => handleSelect(palette)}
                className={`w-full px-3 py-2 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  currentPalette.name === palette.name
                    ? "bg-gray-100 dark:bg-gray-700"
                    : ""
                }`}
              >
                {/* Color preview */}
                <div className="flex -space-x-1">
                  {palette.preview.map((color, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full border-2 border-white dark:border-gray-800 shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {palette.name}
                </span>
                {currentPalette.name === palette.name && (
                  <svg
                    className="w-4 h-4 ml-auto text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
