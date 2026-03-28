import { Link } from "react-router-dom"

const footerLinks = [
  { to: "/games", label: "Games" },
  { to: "/top-charts", label: "Top charts" },
  { to: "/categories", label: "Categories" },
  { to: "/library", label: "Library" },
]

function Footer() {
  return (
    <footer className="site-footer glass-card">
      <div className="footer-brand">
        <img src="/sadikk-avatar-logo.png" alt="Sadikk Store logo" />
        <div>
          <strong>Sadikk Store</strong>
          <p>Keng ko‘lamli o‘yin marketplace. Mashhur o‘yinlar, detail sahifalar va yuklash havolalari bitta joyda.</p>
        </div>
      </div>

      <div className="footer-links">
        {footerLinks.map((link) => (
          <Link key={link.to} to={link.to}>{link.label}</Link>
        ))}
      </div>

      <div className="footer-meta">
        <span>30+ o‘yinlar</span>
        <span>Real icon va gallery</span>
        <span>© Sadikk Store</span>
      </div>
    </footer>
  )
}

export default Footer
