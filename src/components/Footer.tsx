import { Link } from "react-router-dom";
import { Home, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img src="/images/landing_page/Transparent_logo.png" alt="Radha Realty Logo" className="h-20 w-auto" />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Your trusted partner in finding the perfect property. We connect dreams with addresses, making home ownership a reality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-background/70 hover:text-background transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-background/70 hover:text-background transition-colors text-sm">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/70 hover:text-background transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-background transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Property Types</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/properties?type=Apartment" className="text-background/70 hover:text-background transition-colors text-sm">
                  Apartments
                </Link>
              </li>
              <li>
                <Link to="/properties?type=House" className="text-background/70 hover:text-background transition-colors text-sm">
                  Houses
                </Link>
              </li>
              <li>
                <Link to="/properties?type=Villa" className="text-background/70 hover:text-background transition-colors text-sm">
                  Villas
                </Link>
              </li>
              <li>
                <Link to="/properties?type=Penthouse" className="text-background/70 hover:text-background transition-colors text-sm">
                  Penthouses
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  123 Real Estate Avenue, Suite 100, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-background/70 hover:text-background transition-colors text-sm">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@radhaareaalty.com" className="text-background/70 hover:text-background transition-colors text-sm">
                  info@radhaareaalty.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Radhaareaalty. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
