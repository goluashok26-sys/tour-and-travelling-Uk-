import { Link } from "react-router-dom";
import { Mountain, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding !py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-6 w-6 text-golden" />
              <span className="font-display text-xl font-bold">Explore Uttarakhand</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Your trusted travel partner for exploring the divine beauty of Devbhoomi Uttarakhand. We offer taxi services, tour packages, and hotel bookings.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {["Destinations", "Taxi Services", "Hotels", "Tour Packages", "Gallery", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase().replace(/ /g, "-")}`}
                  className="block text-sm text-background/70 hover:text-golden transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-golden" />
                <a href="tel:+919634878825" className="hover:text-golden transition-colors">+91 96348 78825</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-golden" />
                <span>info@exploreuttarakhand.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-golden" />
                <span>Haldwani, Uttarakhand, India</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm text-background/50">
          © 2026 Explore Uttarakhand Travels. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
