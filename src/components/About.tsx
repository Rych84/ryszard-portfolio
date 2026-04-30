"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Globe } from "lucide-react";
import { personalInfo, education } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as [number,number,number,number] },
  },
};

const highlights = [
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
  },
  {
    icon: Globe,
    label: "Experience",
    value: "14+ years · Fintech, Healthcare, Pharma",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "M.Sc. Computer Science · Warsaw, Poland",
  },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 1.5rem" }}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        {/* Heading */}
        <motion.div variants={fadeUp} style={{ marginBottom: "3rem" }}>
          <p className="section-label">01. About</p>
          <h2 className="section-heading">
            Who I Am
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left: narrative */}
          <motion.div variants={fadeUp}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "#94a3b8",
                marginBottom: "1.5rem",
              }}
            >
              {personalInfo.bio}
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#94a3b8",
                marginBottom: "2rem",
              }}
            >
              {personalInfo.bio2}
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#94a3b8",
              }}
            >
              My background spans two continents — I started in Poland, worked with global teams
              at Roche across Europe and the US, and have been based in the Washington DC / Maryland
              area since 2016. I speak English, Polish, and basic Russian.
            </p>
          </motion.div>

          {/* Right: highlights + education */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="card"
                style={{
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    background: "rgba(59, 130, 246, 0.12)",
                    border: "1px solid rgba(59, 130, 246, 0.25)",
                    borderRadius: "8px",
                    padding: "0.5rem",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color="#60a5fa" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.65rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "#475569",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "0.9rem",
                      color: "#f0f9ff",
                      fontWeight: 500,
                    }}
                  >
                    {value}
                  </div>
                </div>
              </div>
            ))}

            {/* Education degrees */}
            <div
              className="card"
              style={{ padding: "1.25rem 1.5rem" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#475569",
                  marginBottom: "0.75rem",
                }}
              >
                {education.university}
              </div>
              {education.degrees.map((deg) => (
                <div
                  key={deg}
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.85rem",
                    color: "#94a3b8",
                    paddingLeft: "0.75rem",
                    borderLeft: "2px solid rgba(59, 130, 246, 0.3)",
                    marginBottom: "0.5rem",
                    lineHeight: 1.5,
                  }}
                >
                  {deg}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
