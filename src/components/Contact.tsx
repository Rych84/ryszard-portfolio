"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Download } from "lucide-react";
import QRCode from "react-qr-code";
import { personalInfo } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] } },
};

const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Ryszard Tomaszewski
TITLE:Senior SDET | QA Automation Lead
ORG:Independent Consultant
TEL:+17036348105
EMAIL:tomaszewski.ryszard@gmail.com
URL:https://www.linkedin.com/in/ryszardtomaszewski/
ADR:;;Hanover;MD;;;US
END:VCARD`;

const links = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    primary: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ryszardtomaszewski",
    href: personalInfo.linkedin,
    icon: ExternalLink,
    primary: false,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/Rych84",
    href: personalInfo.github,
    icon: ExternalLink,
    primary: false,
    external: true,
  },
  {
    label: "Resume PDF",
    value: "Download Resume",
    href: "/Ryszard_Tomaszewski_Sr_SDET_Lead_.pdf",
    icon: Download,
    primary: false,
    download: "Ryszard_Tomaszewski_Resume.pdf",
    external: false,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      style={{
        background: "rgba(13, 21, 38, 0.5)",
        borderTop: "1px solid rgba(59, 130, 246, 0.1)",
      }}
    >
      <div className="contact-inner">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Heading */}
          <motion.p variants={fadeUp} className="section-label" style={{ textAlign: "center" }}>
            07. Contact
          </motion.p>

          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(1.9rem, 5vw, 2.75rem)",
              color: "#f0f9ff",
              lineHeight: 1.15,
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
              textAlign: "center",
            }}
          >
            Let&apos;s Build Something{" "}
            <span style={{ color: "#3b82f6" }}>Reliable.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "1.05rem",
              color: "#64748b",
              lineHeight: 1.7,
              marginBottom: "3rem",
              textAlign: "center",
              maxWidth: "560px",
              margin: "0 auto 3rem",
            }}
          >
            Open to consulting engagements, QA strategy work, and interesting automation challenges.
            If you&apos;re looking for a senior SDET who takes quality seriously — let&apos;s talk.
          </motion.p>

          {/* Links + QR */}
          <motion.div variants={fadeUp} className="contact-bottom">
            {/* Links */}
            <div className="contact-links">
              {links.map(({ label, value, href, icon: Icon, primary, external, download }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  download={download}
                  aria-label={external ? `${label} (opens in new tab)` : label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                    padding: "0.875rem 1.5rem",
                    borderRadius: "0.5rem",
                    textDecoration: "none",
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.925rem",
                    fontWeight: 500,
                    background: primary
                      ? "linear-gradient(135deg, #3b82f6, #2563eb)"
                      : "rgba(15, 31, 60, 0.6)",
                    border: primary
                      ? "1px solid transparent"
                      : "1px solid rgba(59, 130, 246, 0.2)",
                    color: primary ? "#fff" : "#94a3b8",
                    transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    if (primary) {
                      e.currentTarget.style.boxShadow = "0 0 24px rgba(59, 130, 246, 0.4)";
                    } else {
                      e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.45)";
                      e.currentTarget.style.color = "#f0f9ff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    if (!primary) {
                      e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.2)";
                      e.currentTarget.style.color = "#94a3b8";
                    }
                  }}
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>{value}</span>
                </a>
              ))}
            </div>

            {/* QR Code card */}
            <div
              className="card"
              style={{
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                minWidth: "200px",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  padding: "12px",
                  borderRadius: "8px",
                  display: "flex",
                }}
                aria-label="QR code containing contact information"
              >
                <QRCode
                  value={vCard}
                  size={148}
                  level="M"
                  style={{ display: "block" }}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    color: "#f0f9ff",
                    marginBottom: "0.25rem",
                  }}
                >
                  Scan to Connect
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.72rem",
                    color: "#475569",
                    lineHeight: 1.5,
                  }}
                >
                  Saves contact info &amp;
                  <br />
                  opens LinkedIn
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
