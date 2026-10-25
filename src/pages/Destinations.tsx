import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, MessageCircle, Thermometer, Calendar, Mountain, Lightbulb, Navigation } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import nainitalImg from "@/assets/nainital.jpg";
import kausaniImg from "@/assets/kausani.jpg";
import munsyariImg from "@/assets/munsyari.jpg";
import adiKailashImg from "@/assets/adi-kailash.jpg";
import omParvatImg from "@/assets/om-parvat.jpg";
import panchachuliImg from "@/assets/panchachuli.jpg";
import khaliyaImg from "@/assets/khaliya-top.jpg";
import pithoragarhImg from "@/assets/pithoragarh.jpg";
import galleryRiverImg from "@/assets/gallery-river.jpg";
import templeImg from "@/assets/temple.jpg";
import haldwaniImg from "@/assets/haldwani.jpg";
import neemkaroliImg from "@/assets/neemkarolibaba.jpg";
import almoraImg from "@/assets/almora.jpg";
import kasarDeviImg from "@/assets/kasardevi.jpg";
import jageshwarImg from "@/assets/jageshwar.jpg";
import dolAshramImg from "@/assets/dolashram.jpg";

const destinations = [
  { name: "Haldwani", image: haldwaniImg, desc: "The gateway to Kumaon, a vibrant city at the foothills of the Himalayas known for its markets and connectivity.", climate: "Summer: 25–40°C | Winter: 5–20°C", bestTime: "October – March", altitude: "424 m", tip: "Stock up on essentials here before heading to the hills.", nearby: "Nainital, Kathgodam, Bhimtal", mapQuery: "Haldwani,+Uttarakhand" },
  { name: "Nainital", image: nainitalImg, desc: "Famous lake city surrounded by mountains, offering boating, trekking, and breathtaking viewpoints.", climate: "Summer: 10–27°C | Winter: -3–10°C", bestTime: "March – June, September – November", altitude: "2,084 m", tip: "Visit Tiffin Top for the best panoramic views of the lake.", nearby: "Bhimtal, Sattal, Mukteshwar", mapQuery: "Nainital,+Uttarakhand" },
  { name: "Almora", image: almoraImg, desc: "A charming cultural hill town known for its rich heritage markets, traditional Kumaoni crafts, and panoramic Himalayan views stretching from Nanda Devi to Trishul.", climate: "Summer: 10–25°C | Winter: -2–12°C", bestTime: "March – June, September – November", altitude: "1,638 m", tip: "Explore the famous Lala Bazaar for handcrafted woolen shawls and copper utensils.", nearby: "Kasar Devi, Jageshwar, Binsar, Bright End Corner", mapQuery: "Almora,+Uttarakhand" },
  { name: "Neem Karoli Baba Ashram", image: neemkaroliImg, desc: "A sacred spiritual destination attracting devotees from around the world, nestled in the serene hills.", climate: "Summer: 15–30°C | Winter: 2–15°C", bestTime: "Year-round", altitude: "1,400 m", tip: "Maintain silence and respect ashram rules during your visit.", nearby: "Nainital, Kainchi Dham, Bhowali", mapQuery: "Neem+Karoli+Baba+Ashram,+Kainchi" },
  { name: "Kasar Devi Temple", image: kasarDeviImg, desc: "A renowned spiritual meditation destination perched on a scenic ridge, famous for its peaceful atmosphere, cosmic energy zone, and stunning views of the Almora valley.", climate: "Summer: 10–24°C | Winter: -1–12°C", bestTime: "March – June, September – November", altitude: "2,116 m", tip: "Meditate at sunrise for an unforgettable spiritual experience on the ridge.", nearby: "Almora, Binsar, Katarmal Sun Temple, Crank's Ridge", mapQuery: "Kasar+Devi+Temple,+Almora" },
  { name: "Jageshwar Dham", image: jageshwarImg, desc: "An ancient temple complex of over 100 stone temples dating back to the 7th century, surrounded by majestic deodar forests — a major spiritual heritage site dedicated to Lord Shiva.", climate: "Summer: 10–22°C | Winter: -2–10°C", bestTime: "March – June, October – November", altitude: "1,870 m", tip: "Visit during Maha Shivratri for a grand festival experience amid the ancient temples.", nearby: "Almora, Artola, Dandeshwar Temple, Kuber Temple", mapQuery: "Jageshwar+Dham,+Almora" },
  { name: "Dol Ashram", image: dolAshramImg, desc: "A serene spiritual retreat nestled in the mountains, offering a peaceful meditation environment with breathtaking scenic surroundings and a deeply calming atmosphere.", climate: "Summer: 12–26°C | Winter: 0–14°C", bestTime: "March – June, September – November", altitude: "1,500 m", tip: "Spend at least one night for the full retreat experience in the mountain silence.", nearby: "Almora, Kasar Devi, Binsar Wildlife Sanctuary", mapQuery: "Dol+Ashram,+Almora,+Uttarakhand" },
  { name: "Kausani", image: kausaniImg, desc: "Known as the Switzerland of India, famous for panoramic views of the Himalayan range and tea gardens.", climate: "Summer: 10–25°C | Winter: -2–10°C", bestTime: "March – May, September – November", altitude: "1,890 m", tip: "Don't miss the sunrise view of Trishul and Nanda Devi peaks.", nearby: "Baijnath, Bageshwar, Rudradhari Falls", mapQuery: "Kausani,+Uttarakhand" },
  { name: "Panchachuli Base Camp", image: panchachuliImg, desc: "A stunning trek destination offering views of the legendary five-peaked Panchachuli range.", climate: "Summer: 5–18°C | Winter: -10–5°C", bestTime: "May – June, September – October", altitude: "4,250 m (base camp)", tip: "Carry warm layers even in summer; altitude sickness medicine is a must.", nearby: "Munsyari, Darma Valley, Milam Glacier", mapQuery: "Panchachuli+Base+Camp" },
  { name: "Munsyari", image: munsyariImg, desc: "A hill station known as Little Kashmir, gateway to the Johar Valley and Milam Glacier.", climate: "Summer: 8–20°C | Winter: -5–8°C", bestTime: "April – June, September – November", altitude: "2,298 m", tip: "Try the local Kumaoni thali for an authentic culinary experience.", nearby: "Birthi Falls, Khaliya Top, Thamri Kund", mapQuery: "Munsyari,+Uttarakhand" },
  { name: "Dharchula", image: galleryRiverImg, desc: "A border town on the banks of the Kali River, gateway to Adi Kailash and Om Parvat.", climate: "Summer: 15–30°C | Winter: 0–12°C", bestTime: "April – June, September – November", altitude: "915 m", tip: "Carry valid ID proof as this is a border area.", nearby: "Adi Kailash, Om Parvat, Narayan Ashram", mapQuery: "Dharchula,+Uttarakhand" },
  { name: "Adi Kailash", image: adiKailashImg, desc: "The replica of Mount Kailash, a sacred pilgrimage site at 6,191m with divine spiritual energy.", climate: "Summer: 0–10°C | Winter: -20– -5°C", bestTime: "June – September", altitude: "6,191 m", tip: "Book your Inner Line Permit in advance through Dharchula SDM office.", nearby: "Om Parvat, Parvati Sarovar, Dharchula", mapQuery: "Adi+Kailash,+Uttarakhand" },
  { name: "Om Parvat", image: omParvatImg, desc: "A natural wonder where snow formations create the sacred Om symbol on the mountain face.", climate: "Summer: -2–8°C | Winter: -25– -10°C", bestTime: "June – September", altitude: "5,220 m (viewpoint)", tip: "Best viewed from Jonglingkong; carry binoculars for a clear view.", nearby: "Adi Kailash, Nabhidhang, Dharchula", mapQuery: "Om+Parvat,+Uttarakhand" },
  { name: "Khaliya Top", image: khaliyaImg, desc: "A stunning alpine meadow trek offering 360° panoramic views of the Panchachuli peaks.", climate: "Summer: 5–15°C | Winter: -10–2°C", bestTime: "March – May, October – November", altitude: "3,500 m", tip: "A perfect beginner trek; can be completed in 1 day from Munsyari.", nearby: "Munsyari, Birthi Falls, Thamri Kund", mapQuery: "Khaliya+Top,+Munsyari" },
  { name: "Pithoragarh", image: pithoragarhImg, desc: "Known as Little Kashmir, this beautiful town offers fort ruins and stunning valley views.", climate: "Summer: 15–30°C | Winter: 0–15°C", bestTime: "March – June, September – November", altitude: "1,514 m", tip: "Visit Pithoragarh Fort for stunning views of the Soar Valley.", nearby: "Chandak, Thal Kedar, Dhwaj Temple", mapQuery: "Pithoragarh,+Uttarakhand" },
  { name: "Lohaghat", image: templeImg, desc: "A peaceful hill town near Champawat, known for ancient temples and lush forests.", climate: "Summer: 12–28°C | Winter: 2–15°C", bestTime: "March – June, September – November", altitude: "1,706 m", tip: "Visit the ancient Advaita Ashram and Abbott Mount nearby.", nearby: "Champawat, Abbott Mount, Mayawati Ashram", mapQuery: "Lohaghat,+Uttarakhand" },
];

const Destinations = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Explore Destinations"
            subtitle="Discover the most beautiful and sacred places in Uttarakhand"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((d, i) => {
              const isExpanded = expanded === d.name;
              return (
                <motion.div
                  key={d.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i % 6) * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow flex flex-col"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={d.image}
                      alt={d.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{d.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{d.desc}</p>

                    <button
                      onClick={() => setExpanded(isExpanded ? null : d.name)}
                      className="flex items-center gap-2 text-sm font-medium text-primary hover:text-forest-light transition-colors mb-3"
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                      {isExpanded ? "Show Less" : "Explore More"}
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 pb-4 border-t border-border pt-4">
                            <div className="flex items-start gap-2">
                              <Thermometer className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                              <div>
                                <p className="text-xs font-semibold text-foreground">Climate</p>
                                <p className="text-xs text-muted-foreground">{d.climate}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Calendar className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                              <div>
                                <p className="text-xs font-semibold text-foreground">Best Time to Visit</p>
                                <p className="text-xs text-muted-foreground">{d.bestTime}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Mountain className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                              <div>
                                <p className="text-xs font-semibold text-foreground">Altitude</p>
                                <p className="text-xs text-muted-foreground">{d.altitude}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Lightbulb className="h-4 w-4 text-golden mt-0.5 shrink-0" />
                              <div>
                                <p className="text-xs font-semibold text-foreground">Travel Tip</p>
                                <p className="text-xs text-muted-foreground">{d.tip}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Navigation className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                              <div>
                                <p className="text-xs font-semibold text-foreground">Nearby Attractions</p>
                                <p className="text-xs text-muted-foreground">{d.nearby}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="mt-auto flex gap-2">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${d.mapQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors"
                      >
                        <MapPin className="h-3.5 w-3.5" /> View on Map
                      </a>
                    </div>

                    <a
                      href="https://wa.me/918009367361?text=Hi%2C%20I%20need%20help%20planning%20my%20trip%20to%20Uttarakhand"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[hsl(142,70%,45%)] text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      <MessageCircle className="h-4 w-4" /> Need help planning? Contact us on WhatsApp
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
