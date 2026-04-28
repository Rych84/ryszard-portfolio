export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(59, 130, 246, 0.1)",
        padding: "2rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.7rem",
            color: "#334155",
            letterSpacing: "0.08em",
          }}
        >
          © {new Date().getFullYear()} Ryszard Tomaszewski · Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
