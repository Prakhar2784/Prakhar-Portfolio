import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: "Prakhar Kedia — Software Engineer | AI/ML | Full-Stack",
    template: "%s | Prakhar Kedia",
  },
  description:
    "Prakhar Kedia is a software engineer focused on full-stack development, AI/ML, backend systems, APIs, NLP, OCR and computer vision.",
  keywords: [
    "Prakhar Kedia",
    "Software Engineer",
    "AI/ML",
    "Full-Stack Development",
    "FastAPI",
    "Python",
    "React.js",
    "MongoDB",
    "Computer Vision",
    "OCR",
    "LLM",
    "NLP",
    "Jaipur",
    "Bennett University",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: profile.siteUrl,
    title: "Prakhar Kedia — Software Engineer | AI/ML | Full-Stack",
    description:
      "Software engineer building intelligent, production-oriented applications across AI/ML, backend systems, and modern web development.",
    siteName: "Prakhar Kedia Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakhar Kedia — Software Engineer | AI/ML | Full-Stack",
    description:
      "Software engineer building intelligent, production-oriented applications across AI/ML, backend systems, and modern web development.",
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
  alternates: {
    canonical: profile.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Software Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.education.institution,
    },
    url: profile.siteUrl,
    sameAs: [profile.linkedin, profile.github].filter((url) => !url.includes("TODO")),
    knowsAbout: [
      "Software Engineering",
      "Full-Stack Web Development",
      "FastAPI",
      "Python",
      "React.js",
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "OCR",
      "Natural Language Processing",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans selection:bg-blue-500/20`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div id="top" />
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
