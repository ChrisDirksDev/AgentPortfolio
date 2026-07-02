import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], variable: "--font-serif", weight: "400", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chrisdirks.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chris Dirks — Full-Stack Developer & Digital Product Builder",
  description: "A curated portfolio of thoughtful web applications designed and built by Halifax full-stack developer Chris Dirks.",
  keywords: ["Chris Dirks", "full-stack developer", "web applications", "Next.js developer", "Halifax developer", "digital product design"],
  authors: [{ name: "Chris Dirks", url: "https://github.com/ChrisDirksDev" }],
  creator: "Chris Dirks",
  alternates: { canonical: "/" },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: "Chris Dirks — Digital Product Portfolio",
    title: "Chris Dirks — Digital products with a point of view.",
    description: "Selected full-stack applications, product experiments, and design engineering work.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Chris Dirks — Digital products with a point of view" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Dirks — Digital products with a point of view.",
    description: "Selected full-stack applications, product experiments, and design engineering work.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#10100f", colorScheme: "dark" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chris Dirks",
  url: siteUrl,
  jobTitle: "Full-Stack Developer",
  address: { "@type": "PostalAddress", addressLocality: "Halifax", addressRegion: "Nova Scotia", addressCountry: "CA" },
  sameAs: ["https://github.com/ChrisDirksDev", "https://www.linkedin.com/in/chris-dirks/"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
