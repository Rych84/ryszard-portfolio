"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";

const categoryIcons: Record<string, string> = {
  "Test Automation": "⚡",
  "Programming": "💻",
  "API Testing": "🔌",
  "CI/CD & DevOps": "🔄",
  "Cloud & Platforms": "☁️",
  "Tools": "🛠️",
  "Methodologies": "📐",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as [number,number,number,number] } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        background: "rgba(13, 21, 38, 0.5)",
        borderTop: "1px solid rgba(59, 130, 246, 0.1)",
        borderBottom: "1px solid rgba(59, 130, 246, 0.1)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 1.5rem" }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          {/* Heading */}
          <motion.div variants={fadeUp} style={{ marginBottom: "3rem" }}>
            <p className="section-label">03. Skills & Tools</p>
            <h2 className="section-heading">Technical Expertise</h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "1rem",
                color: "#64748b",
                marginTop: "0.75rem",
                maxWidth: "480px",
              }}
            >
              Spanning test automation, programming, API testing, cloud platforms, and DevOps.
            </p>
          </motion.div>

          {/* Skill grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {skillCategories.map((cat) => (
              <motion.div
                key={cat.category}
                variants={fadeUp}
                className="card"
                style={{ padding: "1.5rem" }}
              >
                {/* Category header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    marginBottom: "1rem",
                    paddingBottom: "0.75rem",
                    borderBottom: "1px solid rgba(59, 130, 246, 0.12)",
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>{categoryIcons[cat.category] ?? "◆"}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: "#f0f9ff",
                    }}
                  >
                    {cat.category}
                  </span>
                </div>

                {/* Badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {cat.items.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI note */}
          <motion.div
            variants={fadeUp}
            style={{
              marginTop: "2rem",
              padding: "1.25rem 1.5rem",
              background: "rgba(59, 130, 246, 0.05)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              borderRadius: "0.75rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span style={{ fontSize: "1.25rem" }}>🤖</span>
            <div>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  color: "#60a5fa",
                }}
              >
                AI-Enhanced Testing
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.875rem",
                  color: "#64748b",
                  marginLeft: "0.5rem",
                }}
              >
                Actively integrating AI into daily QA workflows — using Claude Code for test script
                generation and code reviews, Cursor AI for intelligent refactoring, and Playwright AI
                for self-healing locator strategies. Automation frameworks are versioned and delivered
                via GitHub, with AI accelerating every stage from design to deployment.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
