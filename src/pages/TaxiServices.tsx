import { motion } from "framer-motion";
import { Phone, Users, Fuel, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import taxiImg from "@/assets/taxi.jpg";

const vehicles = [
  { name: "Maruti Swift", seats: 4, type: "Hatchback", fuel: "Petrol" },
  { name: "Maruti Ertiga", seats: 6, type: "MUV", fuel: "Petrol/CNG" },
  { name: "Toyota Innova", seats: 7, type: "SUV", fuel: "Diesel" },
  { name: "Force Marshal", seats: 10, type: "Tempo Traveller", fuel: "Diesel" },
];

const TaxiServices = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <img src={taxiImg} alt="Taxi Service" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground">Taxi Services</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title="Our Fleet" subtitle="Choose from our well-maintained vehicles for a comfortable mountain journey" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {vehicles.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow border border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-xl font-bold text-foreground">{v.name}</h3>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-sky-light text-secondary">{v.type}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{v.seats} Seats</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Fuel className="h-4 w-4 text-primary" />
                    <span>{v.fuel}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-5 p-3 bg-muted rounded-lg">
                  For fare details, contact us on WhatsApp or call
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/919634878825?text=Hi%2C%20I%20want%20to%20book%20a%20taxi"
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
              </motion.div>
            ))}
          </div>

          {/* Driver Contact */}
          <div className="mt-16 bg-gradient-forest rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">Contact Our Driver</h3>
            <p className="text-primary-foreground/80 mb-6">Available 24/7 for bookings and inquiries</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919634878825"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-golden text-accent-foreground font-semibold hover:scale-105 transition-transform"
              >
                <Phone className="h-5 w-5" /> +91 96348 78825
              </a>
              <a
                href="https://wa.me/919634878825"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxiServices;
