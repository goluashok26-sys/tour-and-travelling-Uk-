import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Car, Hotel, Package, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-mountains.jpg";
import nainitalImg from "@/assets/nainital.jpg";
import kausaniImg from "@/assets/kausani.jpg";
import munsyariImg from "@/assets/munsyari.jpg";
import adiKailashImg from "@/assets/adi-kailash.jpg";
import omParvatImg from "@/assets/om-parvat.jpg";
import panchachuliImg from "@/assets/panchachuli.jpg";
import SectionHeading from "@/components/SectionHeading";

const featuredDestinations = [
  { name: "Nainital", image: nainitalImg, desc: "The Lake District of India" },
  { name: "Kausani", image: kausaniImg, desc: "Switzerland of India" },
  { name: "Munsyari", image: munsyariImg, desc: "Little Kashmir" },
  { name: "Adi Kailash", image: adiKailashImg, desc: "Sacred Himalayan Peak" },
  { name: "Om Parvat", image: omParvatImg, desc: "Divine Snow Mountain" },
  { name: "Panchachuli", image: panchachuliImg, desc: "Five Peaks of Legend" },
];

const services = [
  { icon: MapPin, title: "Destinations", desc: "13+ breathtaking locations", link: "/destinations" },
  { icon: Car, title: "Taxi Services", desc: "Reliable & comfortable rides", link: "/taxi-services" },
  { icon: Hotel, title: "Hotels", desc: "Handpicked mountain stays", link: "/hotels" },
  { icon: Package, title: "Tour Packages", desc: "Curated travel itineraries", link: "/tour-packages" },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Uttarakhand Mountains" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            Discover the Beauty of Devbhoomi Uttarakhand
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary-foreground/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto"
          >
            Explore majestic mountains, sacred temples, and pristine valleys with our trusted travel services
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/tour-packages"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-golden text-accent-foreground font-semibold text-lg shadow-elevated hover:scale-105 transition-transform"
            >
              Book Now <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/destinations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
            >
              Explore Destinations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-snow">
        <div className="container-custom">
          <SectionHeading title="Our Services" subtitle="Everything you need for an unforgettable Uttarakhand journey" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={s.link}
                  className="block p-6 bg-card rounded-xl shadow-card hover:shadow-elevated transition-shadow group"
                >
                  <s.icon className="h-10 w-10 text-primary mb-4 group-hover:text-golden transition-colors" />
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title="Featured Destinations" subtitle="Handpicked jewels of the Himalayas" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDestinations.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl shadow-card cursor-pointer"
              >
                <Link to="/destinations">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={d.image}
                      alt={d.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-xl font-bold text-primary-foreground">{d.name}</h3>
                    <p className="text-primary-foreground/80 text-sm">{d.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-forest-light transition-colors"
            >
              View All Destinations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-forest" />
        <div className="relative z-10 container-custom text-center px-4">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready for Your Himalayan Adventure?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Contact us to plan your perfect Uttarakhand trip with customized packages and reliable taxi services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-golden text-accent-foreground font-semibold text-lg shadow-elevated hover:scale-105 transition-transform"
          >
            Contact Us <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
