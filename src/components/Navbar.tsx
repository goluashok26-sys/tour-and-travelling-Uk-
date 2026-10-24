import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mountain, Phone } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/destinations", label: "Destinations" },
  { path: "/taxi-services", label: "Taxi Services" },
  { path: "/hotels", label: "Hotels" },
  { path: "/tour-packages", label: "Tour Packages" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <Mountain className="h-7 w-7 text-primary" />
            <span className="font-display text-lg lg:text-xl font-bold text-foreground">
              Explore Uttarakhand
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919634878825"
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-gradient-golden text-accent-foreground text-sm font-semibold hover:scale-105 transition-transform"
            >
              <Phone className="h-3.5 w-3.5" /> +91 96348 78825
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-b border-border">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919634878825"
              className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-semibold text-primary"
            >
              <Phone className="h-4 w-4" /> +91 96348 78825
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
