import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MapPin, MessageCircle, Phone, BedDouble, ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import kausaniImg from "@/assets/kausani.jpg";
import nainitalImg from "@/assets/nainital.jpg";
import almoraImg from "@/assets/almora.jpg";
import haldwaniImg from "@/assets/haldwani.jpg";
import kasarDeviImg from "@/assets/kasardevi.jpg";
import jageshwarImg from "@/assets/jageshwar.jpg";
import neemkaroliImg from "@/assets/neemkarolibaba.jpg";
import dolAshramImg from "@/assets/dolashram.jpg";
import heroMountainsImg from "@/assets/hero-mountains.jpg";
import templeImg from "@/assets/temple.jpg";
import galleryRiverImg from "@/assets/gallery-river.jpg";

type Hotel = {
  name: string;
  location: string;
  image: string;
  rating: number;
  rooms: string;
  desc: string;
  mapQuery: string;
  featured?: boolean;
};

type DestinationGroup = {
  destination: string;
  hotels: Hotel[];
};

const hotelData: DestinationGroup[] = [
  {
    destination: "Nainital",
    hotels: [
      {
        name: "The Naini Retreat",
        location: "Nainital",
        image: nainitalImg,
        rating: 4.5,
        rooms: "Deluxe Rooms, Suites, Family Rooms",
        desc: "A heritage property overlooking Naini Lake with colonial charm, lush gardens, and panoramic mountain views.",
        mapQuery: "The+Naini+Retreat,+Nainital",
      },
      {
        name: "Hotel Shervani Hilltop",
        location: "Nainital",
        image: nainitalImg,
        rating: 4.3,
        rooms: "Standard, Deluxe, Premium Suites",
        desc: "Perched on Nainital's highest point with stunning valley views, modern amenities, and easy access to Mall Road.",
        mapQuery: "Hotel+Shervani+Hilltop,+Nainital",
      },
    ],
  },
  {
    destination: "Kausani",
    hotels: [
      {
        name: "Hotel West View Kausani",
        location: "Kausani",
        image: kausaniImg,
        rating: 4.6,
        rooms: "Deluxe, Super Deluxe, Himalayan View Suites",
        desc: "Breathtaking 300 km panoramic views of the Himalayan range including Nanda Devi, Trishul, and Panchachuli peaks.",
        mapQuery: "Hotel+West+View,+Kausani",
        featured: true,
      },
      {
        name: "Krishna Mountview Resort",
        location: "Kausani",
        image: kausaniImg,
        rating: 4.2,
        rooms: "Standard, Deluxe, Family Cottages",
        desc: "A serene mountain resort surrounded by pine forests with stunning sunrise views and authentic Kumaoni hospitality.",
        mapQuery: "Krishna+Mountview+Resort,+Kausani",
      },
    ],
  },
  {
    destination: "Almora",
    hotels: [
      {
        name: "Hotel Shikhar",
        location: "Almora",
        image: almoraImg,
        rating: 4.1,
        rooms: "Standard, Deluxe, Valley View Rooms",
        desc: "A well-known Almora hotel offering comfortable stays with panoramic views of the Kumaon hills and easy market access.",
        mapQuery: "Hotel+Shikhar,+Almora",
      },
      {
        name: "Kasaar Jungle Resort",
        location: "Almora",
        image: almoraImg,
        rating: 4.4,
        rooms: "Jungle Cottages, Luxury Tents, Suites",
        desc: "An eco-luxury retreat nestled in oak and rhododendron forests, perfect for nature lovers seeking peace and wildlife.",
        mapQuery: "Kasaar+Jungle+Resort,+Almora",
      },
    ],
  },
  {
    destination: "Mukteshwar",
    hotels: [
      {
        name: "The Birdcage Mukteshwar",
        location: "Mukteshwar",
        image: heroMountainsImg,
        rating: 4.5,
        rooms: "Premium Rooms, Cottage Suites",
        desc: "A boutique mountain retreat with stunning Himalayan views, organic farm-to-table dining, and adventure activities.",
        mapQuery: "The+Birdcage,+Mukteshwar",
      },
      {
        name: "Chalets Naldehra Mukteshwar",
        location: "Mukteshwar",
        image: heroMountainsImg,
        rating: 4.3,
        rooms: "Wooden Chalets, Deluxe Rooms",
        desc: "Charming wooden chalets surrounded by fruit orchards with panoramic views of the Nanda Devi range.",
        mapQuery: "Chalets+Naldehra,+Mukteshwar",
      },
    ],
  },
  {
    destination: "Ranikhet",
    hotels: [
      {
        name: "West View Hotel Ranikhet",
        location: "Ranikhet",
        image: templeImg,
        rating: 4.2,
        rooms: "Standard, Deluxe, Family Rooms",
        desc: "A charming hilltop hotel offering magnificent views of the snow-clad Himalayas and lush pine forests of Ranikhet.",
        mapQuery: "West+View+Hotel,+Ranikhet",
      },
      {
        name: "Rosemount Hotel Ranikhet",
        location: "Ranikhet",
        image: templeImg,
        rating: 4.0,
        rooms: "Standard, Superior, Suite Rooms",
        desc: "A cozy heritage-style hotel set amid apple orchards and deodar forests with warm hospitality and scenic trails.",
        mapQuery: "Rosemount+Hotel,+Ranikhet",
      },
    ],
  },
  {
    destination: "Haldwani",
    hotels: [
      {
        name: "Hotel Greenway Haldwani",
        location: "Haldwani",
        image: haldwaniImg,
        rating: 4.0,
        rooms: "Standard, Executive, Premium Rooms",
        desc: "A modern business-class hotel in the heart of Haldwani, ideal for travelers starting their Kumaon hill journey.",
        mapQuery: "Hotel+Greenway,+Haldwani",
      },
      {
        name: "Shivalik River Retreat",
        location: "Haldwani",
        image: galleryRiverImg,
        rating: 4.1,
        rooms: "Riverside Cottages, Deluxe Rooms",
        desc: "A peaceful riverside property on the outskirts of Haldwani, offering nature walks and a relaxing atmosphere.",
        mapQuery: "Shivalik+River+Retreat,+Haldwani",
      },
    ],
  },
  {
    destination: "Kasar Devi",
    hotels: [
      {
        name: "Kasar Rainbow Guest House",
        location: "Kasar Devi, Almora",
        image: kasarDeviImg,
        rating: 4.3,
        rooms: "Heritage Rooms, Meditation Suites",
        desc: "A spiritual retreat on Crank's Ridge with panoramic valley views, organic meals, and a deeply peaceful atmosphere.",
        mapQuery: "Kasar+Rainbow+Guest+House,+Almora",
      },
      {
        name: "Mohan's Binsar Retreat",
        location: "Kasar Devi, Almora",
        image: kasarDeviImg,
        rating: 4.4,
        rooms: "Cottage Rooms, Forest View Suites",
        desc: "An eco-friendly mountain lodge near Kasar Devi temple, surrounded by oak forests and offering spectacular sunsets.",
        mapQuery: "Mohan's+Binsar+Retreat,+Almora",
      },
    ],
  },
  {
    destination: "Jageshwar Dham",
    hotels: [
      {
        name: "KMVN Tourist Rest House Jageshwar",
        location: "Jageshwar",
        image: jageshwarImg,
        rating: 4.0,
        rooms: "Standard, Deluxe Rooms",
        desc: "A government-run rest house steps away from the ancient Jageshwar temples, set amidst towering deodar forests.",
        mapQuery: "KMVN+Tourist+Rest+House,+Jageshwar",
      },
      {
        name: "Hotel Nanda Devi Jageshwar",
        location: "Jageshwar",
        image: jageshwarImg,
        rating: 3.9,
        rooms: "Standard, Double Rooms",
        desc: "A budget-friendly stay near Jageshwar Dham offering clean rooms and easy access to the temple complex and forest trails.",
        mapQuery: "Hotel+Nanda+Devi,+Jageshwar",
      },
    ],
  },
  {
    destination: "Neem Karoli Baba Ashram",
    hotels: [
      {
        name: "Kainchi Dham Guest House",
        location: "Kainchi, Nainital",
        image: neemkaroliImg,
        rating: 4.2,
        rooms: "Ashram Rooms, Pilgrim Dormitories",
        desc: "A peaceful ashram guest house near the sacred Kainchi Dham temple, ideal for spiritual seekers and devotees.",
        mapQuery: "Kainchi+Dham+Guest+House,+Nainital",
      },
      {
        name: "Evelyn's Own Retreat",
        location: "Bhowali, near Kainchi",
        image: neemkaroliImg,
        rating: 4.3,
        rooms: "Heritage Suites, Garden Rooms",
        desc: "A heritage retreat nestled in fruit orchards near Kainchi Dham, offering colonial charm and mountain tranquility.",
        mapQuery: "Evelyn's+Own,+Bhowali",
      },
    ],
  },
  {
    destination: "Dol Ashram",
    hotels: [
      {
        name: "Dol Ashram Guest House",
        location: "Dol Ashram, Almora",
        image: dolAshramImg,
        rating: 4.5,
        rooms: "Retreat Rooms, Meditation Cells",
        desc: "Stay within the serene ashram campus for a complete spiritual retreat experience amidst mountain silence.",
        mapQuery: "Dol+Ashram,+Almora,+Uttarakhand",
      },
      {
        name: "Binsar Forest Retreat",
        location: "Near Dol Ashram, Almora",
        image: dolAshramImg,
        rating: 4.2,
        rooms: "Forest Cottages, Deluxe Rooms",
        desc: "A nature retreat close to Dol Ashram, surrounded by the pristine Binsar Wildlife Sanctuary and ancient oak forests.",
        mapQuery: "Binsar+Forest+Retreat,+Almora",
      },
    ],
  },
];

const Hotels = () => {
  const [expandedDest, setExpandedDest] = useState<string | null>(null);

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Hotels & Stays"
            subtitle="Handpicked accommodations across Uttarakhand's finest destinations"
          />

          <div className="space-y-10">
            {hotelData.map((group, gi) => (
              <motion.div
                key={group.destination}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: gi * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setExpandedDest(expandedDest === group.destination ? null : group.destination)}
                  className="w-full flex items-center justify-between mb-6 group"
                >
                  <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {group.destination}
                    <span className="text-sm font-normal text-muted-foreground ml-2">
                      ({group.hotels.length} stays)
                    </span>
                  </h2>
                  {expandedDest === group.destination ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  )}
                </button>

                {(expandedDest === group.destination || expandedDest === null) && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {group.hotels.map((h, i) => (
                      <motion.div
                        key={h.name}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className={`bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow ${h.featured ? "ring-2 ring-golden" : ""}`}
                      >
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <img
                            src={h.image}
                            alt={h.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          {h.featured && (
                            <span className="absolute top-4 left-4 px-3 py-1 bg-gradient-golden text-accent-foreground text-xs font-bold rounded-full">
                              ⭐ Featured
                            </span>
                          )}
                        </div>
                        <div className="p-5">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                              {h.name}
                            </h3>
                            <div className="flex items-center gap-1 text-golden shrink-0 ml-2">
                              <Star className="h-4 w-4 fill-current" />
                              <span className="text-sm font-semibold">{h.rating}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{h.location}</span>
                          </div>
                          <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                            {h.desc}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <BedDouble className="h-4 w-4 text-primary shrink-0" />
                            <span>{h.rooms}</span>
                          </div>
                          <p className="text-xs text-muted-foreground italic mb-4">
                            For booking details, contact us directly
                          </p>

                          <div className="flex gap-2 pt-3 border-t border-border">
                            <a
                              href={`https://wa.me/918009367361?text=Hi%2C%20I%20want%20to%20book%20${encodeURIComponent(h.name)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[hsl(142,70%,45%)] text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                            >
                              <MessageCircle className="h-4 w-4" /> WhatsApp
                            </a>
                            <a
                              href="tel:+918009367361"
                              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-forest-light transition-colors"
                            >
                              <Phone className="h-4 w-4" /> Call
                            </a>
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${h.mapQuery}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors"
                            >
                              <MapPin className="h-4 w-4" /> Map
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hotels;
