import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <p className="footer-copy">© 2025 Your Company Name. All rights reserved.</p>
    </footer>
  )
}
