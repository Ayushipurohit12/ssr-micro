import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-[#1a3c6e] text-white text-xs py-1 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span>📞 +91 8441017530</span>
          <span>✉ bhavanishankar10081997@gmail.com</span>
        </div>
        <div className="flex gap-3">
          <a
            href="https://facebook.com"
            className="hover:text-yellow-400 transition"
          >
            FB
          </a>
          <a
            href="https://instagram.com"
            className="hover:text-yellow-400 transition"
          >
            IG
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-yellow-400 transition"
          >
            TW
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-[#1a3c6e] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-sm">
            SF
          </div>
          <div>
            <h1
              className={`font-extrabold text-lg tracking-wide ${scrolled ? "text-[#1a3c6e]" : "text-[#1a3c6e]"}`}
            >
              SSB MICRO FOUNDATION
            </h1>
            <p className="text-xs text-yellow-600 font-semibold -mt-1">
              Secured & Unsecured Loan Services
            </p>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 font-semibold text-sm text-[#1a3c6e]">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="hover:text-yellow-500 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="bg-[#1a3c6e] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-yellow-500 transition-all duration-300"
            >
              LOGIN
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#1a3c6e] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`w-6 h-0.5 bg-current mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-current mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-[#1a3c6e] font-semibold py-2 border-b border-gray-100 hover:text-yellow-500"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-[#1a3c6e] text-white text-center py-2 rounded-full font-bold mt-2"
            onClick={() => setMenuOpen(false)}
          >
            LOGIN
          </Link>
        </div>
      )}
    </nav>
  );
}
