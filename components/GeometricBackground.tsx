"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./GeometricBackground.module.css";

interface GeometricBackgroundProps {
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  intensity?: "low" | "medium" | "high";
}

export default function GeometricBackground({
  primaryColor = "var(--color-primary)",
  secondaryColor = "var(--color-secondary)",
  accentColor = "var(--color-accent)",
  intensity = "medium",
}: GeometricBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [colors, setColors] = useState({
    primary: "#05F2F2",
    secondary: "#F20587",
    accent: "#1B2A4A",
  });

  // Function to resolve CSS variables to actual color values
  const getComputedColor = useCallback((colorVar: string): string => {
    if (colorVar.startsWith("var(")) {
      const varName = colorVar.match(/var\(([^)]+)\)/)?.[1]?.trim();
      if (varName) {
        const computed = getComputedStyle(
          document.documentElement
        ).getPropertyValue(varName);
        return computed.trim() || colorVar;
      }
    }
    return colorVar;
  }, []);

  // Function to update colors
  const updateColors = useCallback(() => {
    const resolvedPrimary = getComputedColor(primaryColor);
    const resolvedSecondary = getComputedColor(secondaryColor);
    const resolvedAccent = getComputedColor(accentColor);

    setColors({
      primary: resolvedPrimary,
      secondary: resolvedSecondary,
      accent: resolvedAccent,
    });

    // Update CSS variables for gradients
    if (containerRef.current) {
      const root = containerRef.current;
      root.style.setProperty("--bg-primary", resolvedPrimary);
      root.style.setProperty("--bg-secondary", resolvedSecondary);
      root.style.setProperty("--bg-accent", resolvedAccent);
    }
  }, [
    primaryColor,
    secondaryColor,
    accentColor,
    getComputedColor,
  ]);

  useEffect(() => {
    // Initial color resolution
    updateColors();

    // Listen for custom theme change event
    const handleThemeChange = () => {
      // Small delay to ensure CSS variables are updated
      setTimeout(updateColors, 50);
    };

    window.addEventListener("themechange", handleThemeChange);

    // Also check periodically in case the event doesn't fire
    const interval = setInterval(() => {
      updateColors();
    }, 1000);

    return () => {
      window.removeEventListener("themechange", handleThemeChange);
      clearInterval(interval);
    };
  }, [updateColors]);

  const opacityLevel = {
    low: "0.2",
    medium: "0.3",
    high: "0.4",
  }[intensity];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              stopColor={colors.primary}
              stopOpacity={opacityLevel}
            />
            <stop
              offset="100%"
              stopColor={colors.secondary}
              stopOpacity={opacityLevel}
            />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              stopColor={colors.secondary}
              stopOpacity={opacityLevel}
            />
            <stop
              offset="100%"
              stopColor={colors.accent}
              stopOpacity={opacityLevel}
            />
          </linearGradient>
        </defs>

        {/* Floating Triangles */}
        <g className={styles.geometricShapes}>
          {/* Large Triangle 1 */}
          <polygon
            points="100,150 250,50 200,200"
            fill={colors.primary}
            opacity={opacityLevel}
            className={styles.float1}
          />

          {/* Large Triangle 2 */}
          <polygon
            points="900,100 1100,50 1050,250"
            fill={colors.secondary}
            opacity={opacityLevel}
            className={styles.float2}
          />

          {/* Medium Triangle 3 */}
          <polygon
            points="500,600 650,500 600,700"
            fill={`url(#gradient1)`}
            className={styles.float3}
          />

          {/* Small Triangle 4 */}
          <polygon
            points="50,500 150,450 120,550"
            fill={colors.accent}
            opacity={opacityLevel}
            className={styles.float4}
          />

          {/* Small Triangle 5 */}
          <polygon
            points="1000,600 1150,550 1100,700"
            fill={colors.primary}
            opacity={opacityLevel}
            className={styles.float5}
          />

          {/* Rotating Circles */}
          <circle
            cx="300"
            cy="400"
            r="80"
            fill={colors.primary}
            opacity={opacityLevel}
            className={styles.rotate1}
          />
          <circle
            cx="900"
            cy="500"
            r="60"
            fill={colors.secondary}
            opacity={opacityLevel}
            className={styles.rotate2}
          />
          <circle
            cx="600"
            cy="200"
            r="40"
            fill={`url(#gradient2)`}
            className={styles.rotate3}
          />
          <circle
            cx="150"
            cy="650"
            r="50"
            fill={colors.accent}
            opacity={opacityLevel}
            className={styles.rotate4}
          />

          {/* Floating Hexagons */}
          <polygon
            points="400,300 450,320 450,360 400,380 350,360 350,320"
            fill={colors.primary}
            opacity={opacityLevel}
            className={styles.float6}
          />
          <polygon
            points="750,450 800,470 800,510 750,530 700,510 700,470"
            fill={colors.secondary}
            opacity={opacityLevel}
            className={styles.float7}
          />

          {/* Shifting Lines */}
          <line
            x1="0"
            y1="300"
            x2="200"
            y2="280"
            stroke={colors.primary}
            strokeWidth="2"
            opacity={opacityLevel}
            className={styles.shift1}
          />
          <line
            x1="1000"
            y1="400"
            x2="1200"
            y2="380"
            stroke={colors.secondary}
            strokeWidth="2"
            opacity={opacityLevel}
            className={styles.shift2}
          />
          <line
            x1="200"
            y1="650"
            x2="400"
            y2="630"
            stroke={colors.accent}
            strokeWidth="2"
            opacity={opacityLevel}
            className={styles.shift3}
          />
        </g>
      </svg>
    </div>
  );
}
