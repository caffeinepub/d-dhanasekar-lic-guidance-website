import { Phone, MessageCircle } from 'lucide-react';
import { getPhoneLink, getWhatsAppLink } from '../../lib/contactLinks';

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={getPhoneLink()}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-lic-primary text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </a>
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition-transform hover:scale-110"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
