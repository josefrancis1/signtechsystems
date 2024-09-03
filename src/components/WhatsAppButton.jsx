import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/8592980180"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export const CallButton = () => {
  return (
    <a
      href="tel:+918592980180"
      className="fixed bottom-4 right-20 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
      aria-label="Call Now"
    >
      <FaPhoneAlt size={24} />
    </a>
  );
};

// Default export
export default WhatsAppButton;
