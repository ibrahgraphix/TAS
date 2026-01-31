import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../src/assets/Logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo + Name */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={Logo} // 👈 Your logo here
              alt="Tanzania Apps Solutions Logo"
              className="w-10 h-10 object-contain rounded-lg"
            />
            <span
              className={`font-heading font-bold text-xl hidden sm:block ${scrolled ? "text-primary" : "text-primary"}`}
            >
              Tanzania Apps Solutions
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-semibold hover:text-secondary transition-colors ${
                  location.pathname === link.path
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* <a
              href="#contact"
              className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a> */}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="flex flex-col items-center space-y-4 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={handleLinkClick}
              className="text-lg font-semibold text-gray-800 hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="w-full text-center bg-primary text-white py-3 rounded-lg font-bold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
