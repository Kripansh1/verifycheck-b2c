import { MessageCircle } from "lucide-react";

const PHONE_NUMBER = "919340128637"; // update if needed
const PREFILLED = encodeURIComponent("Hi, I want Profile Verification Certificate Services");

const FloatingWhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${PHONE_NUMBER}?text=${PREFILLED}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-50 bottom-6 right-6 h-14 w-14 rounded-full flex items-center justify-center shadow-lg bg-whatsapp text-white hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-green-300 transition"
    >
      <MessageCircle className="h-7 w-7" />
      <style>{`.bg-whatsapp{background-color:#25D366}`}</style>
    </a>
  );
};

export default FloatingWhatsAppButton;
