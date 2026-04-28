"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { blogPosts } from "@/data/portfolio";

const tagColors: Record<string, string> = {
  AI: "#3b82f6",
  "Test Automation": "#06b6d4",
  LLMs: "#8b5cf6",
  Selenium: "#f59e0b",
  Playwright: "#10b981",
  Frameworks: "#ec4899",
  BDD: "#3b82f6",
  SpecFlow: "#06b6d4",
  Fintech: "#f59e0b",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as [number,number,number,number] } },
};

export default function BlogPreview() {
  return (
    <section id="blog" style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 1.5rem" }}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        {/* Heading row */}
        <motion.div
          variants={fadeUp}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <p className="section-label">06. Insights</p>
            <h2 className="section-heading">QA & Testing Blog</h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "1rem",
                color: "#64748b",
                marginTop: "0.5rem",
                maxWidth: "420px",
              }}
            >
              Thoughts on AI in testing, automation trends, and hard-won lessons from production.
            </p>
          </div>
          <a
            href="#blog"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.875rem",
              color: "#60a5fa",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              textDecoration: "none",
              transition: "gap 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.gap = "0.75rem")}
            onMouseLeave={(e) => (e.currentTarget.style.gap = "0.4rem")}
          >
            View all posts <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Article cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
          className="blog-grid"
        >
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              variants={fadeUp}
              className="card"
              style={{
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                cursor: "pointer",
              }}
            >
              {/* Number + date */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    color: "rgba(59, 130, 246, 0.2)",
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: "0.65rem",
                    color: "#475569",
                  }}
                >
                  <Clock size={11} />
                  {post.readTime}
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.6rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: tagColors[tag] ?? "#60a5fa",
                      background: `${tagColors[tag] ?? "#3b82f6"}15`,
                      border: `1px solid ${tagColors[tag] ?? "#3b82f6"}25`,
                      padding: "0.15rem 0.55rem",
                      borderRadius: "9999px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    <Tag size={9} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#f0f9ff",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                  color: "#64748b",
                  margin: 0,
                  flex: 1,
                }}
              >
                {post.excerpt}
              </p>

              {/* Footer */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "1rem",
                  borderTop: "1px solid rgba(59, 130, 246, 0.1)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.75rem",
                    color: "#475569",
                  }}
                >
                  {post.date}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.8rem",
                    color: "#3b82f6",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  Read more <ArrowRight size={13} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming soon note */}
        <motion.div
          variants={fadeUp}
          style={{
            marginTop: "2rem",
            textAlign: "center",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.85rem",
            color: "#475569",
          }}
        >
          More articles coming soon — covering AI tools in QA, testing trends, and automation at scale.
        </motion.div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
