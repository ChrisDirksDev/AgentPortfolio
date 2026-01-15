import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chris Dirks - Full Stack Developer",
  description:
    "Full Stack Developer from Halifax, NS. Building interactive web experiences with React, Next.js, TypeScript, and more.",
  keywords: [
    "Chris Dirks",
    "web developer",
    "full stack developer",
    "react",
    "next.js",
    "typescript",
    "halifax",
    "nova scotia",
    "frontend developer",
    "backend developer",
  ],
  authors: [{ name: "Chris Dirks" }],
  creator: "Chris Dirks",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Chris Dirks - Full Stack Developer",
    description:
      "Full Stack Developer from Halifax, NS. Building interactive web experiences with React, Next.js, TypeScript, and more.",
    siteName: "Chris Dirks Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chris Dirks Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Dirks - Full Stack Developer",
    description:
      "Full Stack Developer from Halifax, NS. Building interactive web experiences.",
    images: ["/og-image.jpg"],
    creator: "@chrisdirks",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable} ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
