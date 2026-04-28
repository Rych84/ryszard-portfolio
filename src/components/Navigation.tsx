"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
        background: scrolled ? "rgba(10, 15, 30, 0.85)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(59, 130, 246, 0.15)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <motion.a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "1.25rem",
            color: "#3b82f6",
            letterSpacing: "-0.02em",
            textDecoration: "none",
          }}
        >
          RT
          <span style={{ color: "#f0f9ff", marginLeft: "2px" }}>.</span>
        </motion.a>

        {/* Desktop links */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNavClick(href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.875rem",
                  fontWeight: active === href ? 600 : 400,
                  color: active === href ? "#60a5fa" : "#94a3b8",
                  transition: "color 0.2s ease",
                  padding: "0.25rem 0",
                  position: "relative",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f9ff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = active === href ? "#60a5fa" : "#94a3b8")
                }
              >
                {label}
                {active === href && (
                  <motion.div
                    layoutId="nav-underline"
                    style={{
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "#3b82f6",
                      borderRadius: "1px",
                    }}
                  />
                )}
              </button>
            </li>
          ))}
        </motion.ul>

        {/* CTA */}
        <motion.a
          href="mailto:tomaszewski.ryszard@gmail.com"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="btn-primary hidden md:inline-flex"
          style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}
        >
          Contact Me
        </motion.a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#94a3b8",
            padding: "0.5rem",
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "rgba(10, 15, 30, 0.97)",
              borderTop: "1px solid rgba(59, 130, 246, 0.15)",
              overflow: "hidden",
            }}
          >
            <ul style={{ listStyle: "none", margin: 0, padding: "1rem 1.5rem" }}>
              {navLinks.map(({ label, href }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNavClick(href)}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "1rem",
                      color: active === href ? "#60a5fa" : "#94a3b8",
                      padding: "0.75rem 0",
                      borderBottom: "1px solid rgba(59, 130, 246, 0.08)",
                    }}
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
              <li style={{ paddingTop: "1rem" }}>
                <a href="mailto:tomaszewski.ryszard@gmail.com" className="btn-primary">
                  Contact Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
