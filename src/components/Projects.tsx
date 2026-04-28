"use client";

import { motion } from "framer-motion";
import { TrendingUp, CheckCircle } from "lucide-react";
import { projects } from "@/data/portfolio";

const typeColors: Record<string, string> = {
  Fintech: "#3b82f6",
  International: "#06b6d4",
  Healthcare: "#8b5cf6",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as [number,number,number,number] } },
};

export default function Projects() {
  return (
    <section id="projects" style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 1.5rem" }}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        {/* Heading */}
        <motion.div variants={fadeUp} style={{ marginBottom: "3rem" }}>
          <p className="section-label">04. Projects</p>
          <h2 className="section-heading">Featured Case Studies</h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "1rem",
              color: "#64748b",
              marginTop: "0.75rem",
              maxWidth: "520px",
            }}
          >
            A selection of high-impact initiatives across fintech, international expansion, and regulated healthcare systems.
          </p>
        </motion.div>

        {/* Project grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(520px, 1fr))",
            gap: "1.5rem",
          }}
          className="project-grid"
        >
          {projects.map((project) => {
            const typeColor = typeColors[project.type] ?? "#3b82f6";
            return (
              <motion.article
                key={project.id}
                variants={fadeUp}
                className="card"
                style={{
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                {/* Top row: type badge + impact */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.65rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: typeColor,
                      background: `${typeColor}18`,
                      border: `1px solid ${typeColor}30`,
                      padding: "0.2rem 0.65rem",
                      borderRadius: "9999px",
                    }}
                  >
                    {project.type}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      color: "#60a5fa",
                    }}
                  >
                    <TrendingUp size={14} />
                    {project.impactLabel}
                  </div>
                </div>

                {/* Title + company */}
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      color: "#f0f9ff",
                      margin: "0 0 0.3rem",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "0.8rem",
                      color: "#475569",
                      margin: 0,
                    }}
                  >
                    {project.company} · {project.period}
                  </p>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    color: "#94a3b8",
                    margin: 0,
                  }}
                >
                  {project.description}
                </p>

                {/* Outcomes */}
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.6rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "#475569",
                      marginBottom: "0.6rem",
                    }}
                  >
                    Key Outcomes
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {project.outcomes.map((outcome, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          gap: "0.6rem",
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "0.8rem",
                          color: "#94a3b8",
                          alignItems: "flex-start",
                        }}
                      >
                        <CheckCircle size={13} color="#3b82f6" style={{ flexShrink: 0, marginTop: "2px" }} />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "auto" }}>
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          .project-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
