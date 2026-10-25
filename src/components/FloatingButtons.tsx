import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/918009367361"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-primary-foreground shadow-elevated hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+918009367361"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-secondary-foreground shadow-elevated hover:scale-110 transition-transform"
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
