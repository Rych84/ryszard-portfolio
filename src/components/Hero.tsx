"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { personalInfo, stats } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number], delay },
  }),
};

function PhotoCircle({ size }: { size: number }) {
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <div
        style={{
          position: "absolute",
          inset: "-3px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #3b82f6, #1e40af, #0a0f1e, #3b82f6)",
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "relative",
          width: size,
          height: size,
          borderRadius: "50%",
          overflow: "hidden",
          zIndex: 1,
          border: "3px solid #0a0f1e",
        }}
      >
        <Image
          src={personalInfo.photo}
          alt="Ryszard Tomaszewski — Senior SDET & QA Automation Lead"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const scrollToWork = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "5rem 1.5rem 4rem",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div className="hero-grid">
        {/* Left: Text */}
        <div>
          {/* Mobile photo — centered above name */}
          <div className="hero-photo-mobile">
            <PhotoCircle size={140} />
          </div>

          {/* Label */}
          <motion.p
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            animate="show"
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#3b82f6",
              marginBottom: "1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "28px",
                height: "1px",
                background: "#3b82f6",
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            Senior SDET · QA Automation Lead · Hanover, MD
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            animate="show"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(2.4rem, 6vw, 4.25rem)",
              lineHeight: 1.08,
              color: "#f0f9ff",
              marginBottom: "0.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            {personalInfo.name.split(" ")[0]}
            <br />
            <span style={{ color: "#60a5fa" }}>{personalInfo.name.split(" ")[1]}</span>
          </motion.h1>

          {/* Accent rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            aria-hidden="true"
            style={{
              transformOrigin: "left",
              height: "3px",
              width: "72px",
              background: "linear-gradient(to right, #3b82f6, #60a5fa)",
              borderRadius: "2px",
              marginBottom: "1.75rem",
            }}
          />

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            custom={0.4}
            initial="hidden"
            animate="show"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "#94a3b8",
              maxWidth: "520px",
              marginBottom: "2.5rem",
            }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            custom={0.5}
            initial="hidden"
            animate="show"
            className="hero-stats"
            style={{ marginBottom: "2.5rem" }}
            role="list"
            aria-label="Key statistics"
          >
            {stats.map((stat) => (
              <div key={stat.label} role="listitem">
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.75rem",
                    color: "#60a5fa",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.72rem",
                    color: "#475569",
                    marginTop: "0.3rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={0.6}
            initial="hidden"
            animate="show"
            className="hero-ctas"
          >
            <button onClick={scrollToWork} className="btn-primary">
              View My Work <ArrowDown size={16} aria-hidden="true" />
            </button>
            <a
              href="/Ryszard_Tomaszewski_Sr_SDET_Lead_.pdf"
              download="Ryszard_Tomaszewski_Resume.pdf"
              className="btn-outline"
            >
              Download Resume <Download size={16} aria-hidden="true" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in new tab)"
              style={{
                color: "#475569",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.85rem",
                transition: "color 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            >
              LinkedIn <ExternalLink size={14} aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        {/* Right: Desktop photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ position: "relative" }}
          className="hero-photo-desktop"
        >
          <PhotoCircle size={280} />

        </motion.div>
      </div>
    </section>
  );
}
