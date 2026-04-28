"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as [number,number,number,number] } },
};

export default function Certifications() {
  return (
    <section
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
          {/* Heading */}
          <motion.div variants={fadeUp} style={{ marginBottom: "2.5rem" }}>
            <p className="section-label">05. Certifications</p>
            <h2 className="section-heading">Credentials</h2>
          </motion.div>

          {/* Cert cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.abbr}
                variants={fadeUp}
                className="card"
                style={{ padding: "1.75rem" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  {/* Abbr badge */}
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "10px",
                      background: `${cert.color}18`,
                      border: `1px solid ${cert.color}35`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Award size={22} color={cert.color} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains-mono)",
                        fontSize: "0.7rem",
                        color: cert.color,
                        letterSpacing: "0.1em",
                        marginBottom: "0.3rem",
                        fontWeight: 500,
                      }}
                    >
                      {cert.abbr}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: "#f0f9ff",
                        lineHeight: 1.4,
                        marginBottom: "0.4rem",
                      }}
                    >
                      {cert.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "0.75rem",
                        color: "#475569",
                      }}
                    >
                      {cert.issuer}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
