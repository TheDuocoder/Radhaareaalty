import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./Navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Properties", path: "/properties" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${hasScrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with Brand Text */}
          <Link to="/" className="flex items-center gap-3 -ml-14">
            <img src="/images/landing_page/logoo1.png" alt="Radha Realty Logo" className="h-24 w-auto" />
            <div className="hidden sm:flex flex-col leading-tight -ml-6">
              <span className="text-lg font-bold font-display uppercase tracking-wide" style={{ color: "#859a2e" }}>Radhaa Reaalty</span>
              <span className="text-xs font-medium text-primary uppercase tracking-wide">Your home crafted with love</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 -ml-24">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm font-semibold transition-colors ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button style={{ backgroundColor: "#859a2e", color: "#000000" }} className="hover:opacity-90 transition-opacity font-semibold">
              Add Property
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="urbanet-gradient text-primary-foreground mt-2">
                Add Property
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
