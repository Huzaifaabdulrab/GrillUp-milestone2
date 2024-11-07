import Link from "next/link";
import { FaBurger } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <a className="logo-link">
            <FaBurger  className="text-black" />
            <span className="logo-text">𝕲𝖗𝖎𝖑𝖑𝖀𝖕!</span>
          </a>
          <br />
          <p className="footer-description">
            Satisfy your cravings with the best burgers, sandwiches, and biryani in town!
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h2 className="footer-heading">MENU</h2>
            <nav className="footer-nav">
              <li><a className="footer-link">Burgers</a></li>
              <li><a className="footer-link">Sandwiches</a></li>
              <li><a className="footer-link">Biryani</a></li>
            </nav>
          </div>
          <div className="footer-column">
            <h2 className="footer-heading">SPECIALS</h2>
            <nav className="footer-nav">
              <li><a className="footer-link">GrillUp Special Burger</a></li>
              <li><a className="footer-link">Spicy Chicken Sandwich</a></li>
              <li><a className="footer-link">Biryani Fiesta</a></li>
            </nav>
          </div>
          <div className="footer-column">
            <h2 className="footer-heading">ABOUT US</h2>
            <nav className="footer-nav">
              <li><a className="footer-link">Our Story</a></li>
              <li><a className="footer-link">Chef’s Special</a></li>
            </nav>
          </div>
          <div className="footer-column">
            <h2 className="footer-heading">CONTACT US</h2>
            <nav className="footer-nav">
              <li><a className="footer-link">Location & Hours</a></li>
              <li><a className="footer-link">Order Online</a></li>
            </nav>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">
          © 2024 GrillUp —{" "}
          <a href="https://twitter.com/grillup" className="footer-twitter-link" target="_blank" rel="noopener noreferrer">
            @GrillUp
          </a>
        </p>
        <div className="footer-social">
          <span className="social-icons">
            <Link href="https://www.linkedin.com/in/huzaifa-abdulrab/">
              <FaLinkedin className="social-icon" />
            </Link>
            <Link href="https://github.com/Huzaifaabdulrab?tab=repositories">
              <FaGithub className="social-icon" />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
