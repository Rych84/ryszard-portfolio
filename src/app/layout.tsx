import type { Metadata } from "next";
import { Barlow, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://ryszardtomaszewski.com";
const title = "Ryszard Tomaszewski | Senior SDET, QA Lead & AI Testing Expert";
const description =
  "Senior SDET and QA Automation Lead with 14+ years of experience in AI-powered test automation, API testing, and quality engineering. Available for QA consulting, test strategy, and automation framework design.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    // Role & seniority
    "SDET",
    "Senior SDET",
    "SDET Consultant",
    "QA Lead",
    "QA Manager",
    "Quality Assurance Lead",
    "Quality Assurance Manager",
    "QA Automation Lead",
    "Test Automation Engineer",
    "Quality Engineer",
    // AI testing — high-growth search terms
    "AI Testing",
    "AI Test Automation",
    "AI-Powered Testing",
    "AI QA Engineer",
    "LLM Test Automation",
    // Tools
    "Selenium",
    "Playwright",
    "Cypress",
    "Claude Code",
    "GitHub Copilot",
    // Skills
    "Test Automation",
    "API Testing",
    "REST API Testing",
    "Software Quality Assurance",
    "Software Testing",
    "Automation Framework",
    "CI/CD",
    "DevOps QA",
    "C# Automation",
    "Java Automation",
    // Domain
    "Fintech QA",
    "Enterprise QA",
    "QA Consulting",
    // Hire intent
    "Hire SDET",
    "Hire QA Engineer",
    "Freelance QA Engineer",
    // Location
    "Maryland QA Engineer",
    "Washington DC SDET",
    // Name
    "Ryszard Tomaszewski",
  ],
  authors: [{ name: "Ryszard Tomaszewski" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ryszard Tomaszewski",
    title,
    description,
    images: [{ url: "/images/ryszard.jpg", width: 400, height: 400, alt: "Ryszard Tomaszewski" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/images/ryszard.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a href="#hero" className="skip-link">
          Skip to main content
        </a>
        <div className="orb orb-1" aria-hidden="true" />
        <div className="orb orb-2" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
