'use client';

import { useLocale } from 'next-intl';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const locale = useLocale();
  const phoneNumber = "56984031210";
  const message =
    locale === 'es'
      ? "Hola Cristian, me gustaría conversar sobre una oportunidad o proyecto de datos."
      : "Hi Cristian, I'd like to talk about a data opportunity or project.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
} 
