"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, BookOpen } from "lucide-react";
import { education } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as [number, number, number, number] } },
};

export default function Education() {
  return (
    <section
      id="education"
      style={{
        background: "rgba(13, 21, 38, 0.5)",
        borderTop: "1px solid rgba(59, 130, 246, 0.1)",
        borderBottom: "1px solid rgba(59, 130, 246, 0.1)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: "2.5rem" }}>
            <p className="section-label">06. Education</p>
            <h2 className="section-heading">Academic Background</h2>
          </motion.div>

          <motion.div variants={fadeUp} style={{ maxWidth: "680px" }}>
            <div className="card" style={{ padding: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.25rem",
                  marginBottom: "1.75rem",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    background: "rgba(59, 130, 246, 0.12)",
                    border: "1px solid rgba(59, 130, 246, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={24} color="#60a5fa" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "#f0f9ff",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {education.university}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: "#475569",
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "0.85rem",
                    }}
                  >
                    <MapPin size={13} />
                    {education.location}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {education.degrees.map((degree) => (
                  <div
                    key={degree}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.875rem 1rem",
                      background: "rgba(59, 130, 246, 0.06)",
                      border: "1px solid rgba(59, 130, 246, 0.12)",
                      borderRadius: "8px",
                    }}
                  >
                    <BookOpen size={16} color="#60a5fa" style={{ flexShrink: 0 }} />
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "0.9rem",
                        color: "#94a3b8",
                        lineHeight: 1.4,
                      }}
                    >
                      {degree}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
