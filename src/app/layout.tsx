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

export const metadata: Metadata = {
  title: "Ryszard Tomaszewski | Senior SDET & QA Automation Lead",
  description:
    "Senior SDET and QA Automation Lead with 14+ years of experience in test automation, API testing, and quality engineering for enterprise financial systems.",
  keywords: [
    "SDET",
    "QA Automation",
    "Test Automation",
    "Selenium",
    "Quality Engineer",
    "QA Lead",
    "Software Testing",
  ],
  authors: [{ name: "Ryszard Tomaszewski" }],
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
