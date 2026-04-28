"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { experience } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as [number,number,number,number] } },
};

export default function Timeline() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <section
      id="experience"
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 1.5rem" }}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* Heading */}
        <motion.div variants={fadeUp} style={{ marginBottom: "3.5rem" }}>
          <p className="section-label">02. Experience</p>
          <h2 className="section-heading">Career Timeline</h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              left: "20px",
              top: 0,
              bottom: 0,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                variants={fadeUp}
                style={{ paddingLeft: "56px", position: "relative" }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "12px",
                    top: "20px",
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: job.current ? "#3b82f6" : "rgba(59, 130, 246, 0.3)",
                    border: `2px solid ${job.current ? "#60a5fa" : "rgba(59, 130, 246, 0.4)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                    transition: "background 0.3s",
                  }}
                >
                  {job.current && (
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#fff",
                      }}
                    />
                  )}
                </div>

                {/* Card */}
                <div
                  className="card"
                  style={{
                    padding: "1.5rem",
                    marginBottom: "1rem",
                    cursor: "pointer",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onClick={() => setExpanded(expanded === job.id ? null : job.id)}
                >
                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "1rem",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.25rem" }}>
                        <Briefcase size={14} color="#3b82f6" />
                        <span
                          style={{
                            fontFamily: "var(--font-jetbrains-mono)",
                            fontSize: "0.65rem",
                            color: "#3b82f6",
                            textTransform: "uppercase",
                            letterSpacing: "0.15em",
                          }}
                        >
                          {job.period}
                        </span>
                        {job.current && (
                          <span
                            style={{
                              background: "rgba(34, 197, 94, 0.1)",
                              border: "1px solid rgba(34, 197, 94, 0.3)",
                              color: "#4ade80",
                              fontSize: "0.6rem",
                              fontFamily: "var(--font-jetbrains-mono)",
                              padding: "0.1rem 0.5rem",
                              borderRadius: "9999px",
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                            }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <h3
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                          color: "#f0f9ff",
                          margin: 0,
                        }}
                      >
                        {job.role}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "0.875rem",
                          color: "#60a5fa",
                          margin: "0.2rem 0 0",
                        }}
                      >
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#475569",
                        flexShrink: 0,
                        padding: "0.25rem",
                      }}
                      aria-label={expanded === job.id ? "Collapse" : "Expand"}
                    >
                      {expanded === job.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>

                  {/* Expanded details */}
                  {expanded === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ marginTop: "1.25rem" }}
                    >
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: "0 0 1rem",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.5rem",
                        }}
                      >
                        {job.highlights.map((hl, idx) => (
                          <li
                            key={idx}
                            style={{
                              display: "flex",
                              gap: "0.75rem",
                              fontFamily: "var(--font-dm-sans)",
                              fontSize: "0.875rem",
                              color: "#94a3b8",
                              lineHeight: 1.6,
                            }}
                          >
                            <span style={{ color: "#3b82f6", flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                            {hl}
                          </li>
                        ))}
                      </ul>
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                        {job.tags.map((tag) => (
                          <span key={tag} className="tech-tag">{tag}</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
