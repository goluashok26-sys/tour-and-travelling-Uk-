import { motion } from "framer-motion";
import { Clock, MapPin, Star, Phone, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import adiKailashImg from "@/assets/adi-kailash.jpg";
import nainitalImg from "@/assets/nainital.jpg";
import munsyariImg from "@/assets/munsyari.jpg";
import khaliyaImg from "@/assets/khaliya-top.jpg";

const packages = [
  {
    name: "Adi Kailash & Om Parvat Yatra",
    image: adiKailashImg,
    duration: "10 Days / 9 Nights",
    route: "Haldwani → Nainital → Kausani → Munsyari → Dharchula → Adi Kailash → Om Parvat → Pithoragarh → Lohaghat → Haldwani",
    highlights: ["Sacred Adi Kailash Darshan", "Om Parvat View Point", "Panchachuli Peaks", "Kali River Valley"],
    rating: 4.8,
    featured: true,
  },
  {
    name: "Kumaon Hill Stations Tour",
    image: nainitalImg,
    duration: "5 Days / 4 Nights",
    route: "Haldwani → Nainital → Kausani → Pithoragarh → Lohaghat → Haldwani",
    highlights: ["Naini Lake Boating", "Kausani Sunset Views", "Tea Garden Visits", "Local Cuisine"],
    rating: 4.6,
  },
  {
    name: "Munsyari Adventure Trek",
    image: munsyariImg,
    duration: "7 Days / 6 Nights",
    route: "Haldwani → Nainital → Munsyari → Khaliya Top → Birthi Falls → Pithoragarh → Haldwani",
    highlights: ["Khaliya Top Trek", "Birthi Waterfall", "Panchachuli Base Camp", "Tribal Culture"],
    rating: 4.7,
  },
  {
    name: "Spiritual Uttarakhand Tour",
    image: khaliyaImg,
    duration: "4 Days / 3 Nights",
    route: "Haldwani → Neem Karoli Baba Ashram → Nainital → Kausani → Haldwani",
    highlights: ["Neem Karoli Baba Ashram", "Temple Visits", "Meditation & Yoga", "Mountain Sunrise"],
    rating: 4.5,
  },
];

const TourPackages = () => {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title="Tour Packages" subtitle="Curated travel experiences through the heart of Uttarakhand" />
          <div className="space-y-8 max-w-4xl mx-auto">
            {packages.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow ${p.featured ? "ring-2 ring-golden" : ""}`}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-display text-xl font-bold text-foreground">{p.name}</h3>
                      {p.featured && (
                        <span className="px-2 py-1 bg-gradient-golden text-accent-foreground text-xs font-bold rounded-full shrink-0 ml-2">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" /> {p.duration}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-golden">
                        <Star className="h-4 w-4 fill-current" /> {p.rating}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 mb-4 p-3 bg-muted rounded-lg">
                      <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-xs text-muted-foreground leading-relaxed">{p.route}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.highlights.map((h) => (
                        <span key={h} className="px-2 py-1 text-xs rounded-md bg-sky-light text-secondary font-medium">{h}</span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 italic">
                      For package cost and booking details, contact us directly
                    </p>
                    <div className="flex gap-3 pt-4 border-t border-border">
                      <a
                        href="https://wa.me/919634878825?text=Hi%2C%20I%20want%20to%20book%20a%20tour%20package"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[hsl(142,70%,45%)] text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                      >
                        <MessageCircle className="h-4 w-4" /> WhatsApp
                      </a>
                      <a
                        href="tel:+919634878825"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-forest-light transition-colors"
                      >
                        <Phone className="h-4 w-4" /> Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-display font-semibold text-foreground mb-2">Custom packages available on request</p>
            <p className="text-muted-foreground text-sm mb-4">Tell us your dream itinerary and we'll make it happen</p>
            <a
              href="https://wa.me/919634878825?text=Hi%2C%20I%20want%20a%20custom%20tour%20package"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-golden text-accent-foreground font-semibold hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-5 w-5" /> Request Custom Package
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourPackages;
