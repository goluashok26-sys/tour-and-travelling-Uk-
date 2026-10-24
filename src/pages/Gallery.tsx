import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-mountains.jpg";
import nainitalImg from "@/assets/nainital.jpg";
import kausaniImg from "@/assets/kausani.jpg";
import munsyariImg from "@/assets/munsyari.jpg";
import adiKailashImg from "@/assets/adi-kailash.jpg";
import omParvatImg from "@/assets/om-parvat.jpg";
import panchachuliImg from "@/assets/panchachuli.jpg";
import khaliyaImg from "@/assets/khaliya-top.jpg";
import pithoragarhImg from "@/assets/pithoragarh.jpg";
import nandaDeviImg from "@/assets/nanda-devi.jpg";
import templeImg from "@/assets/temple.jpg";
import galleryRiverImg from "@/assets/gallery-river.jpg";
import lohaghatImg from "@/assets/lohaghat.jpg";
import taxiImg from "@/assets/taxi.jpg";

const images = [
  { src: heroImg, alt: "Himalayan Panorama", span: "col-span-2 row-span-2" },
  { src: nainitalImg, alt: "Nainital Lake" },
  { src: kausaniImg, alt: "Kausani Sunrise" },
  { src: adiKailashImg, alt: "Adi Kailash Peak" },
  { src: omParvatImg, alt: "Om Parvat" },
  { src: munsyariImg, alt: "Munsyari Village" },
  { src: panchachuliImg, alt: "Panchachuli Peaks", span: "col-span-2" },
  { src: khaliyaImg, alt: "Khaliya Top Trek" },
  { src: nandaDeviImg, alt: "Nanda Devi" },
  { src: pithoragarhImg, alt: "Pithoragarh Valley" },
  { src: templeImg, alt: "Mountain Temple" },
  { src: galleryRiverImg, alt: "River Valley" },
  { src: lohaghatImg, alt: "Mountain Hotel" },
  { src: taxiImg, alt: "Taxi on Mountain Road" },
];

const Gallery = () => {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title="Photo Gallery" subtitle="A glimpse of the divine beauty awaiting you in Uttarakhand" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: (i % 8) * 0.05 }}
                viewport={{ once: true }}
                className={`overflow-hidden rounded-xl group cursor-pointer ${img.span || ""}`}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-end p-3">
                    <span className="text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {img.alt}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
