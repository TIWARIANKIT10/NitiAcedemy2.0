"use client";

import { FaFacebookF } from "react-icons/fa";

export default function FloatingFacebook() {
  return (
    <a
      href="https://www.facebook.com/people/Niti-Academy/61557775282968/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-[9999]"
    >
      <FaFacebookF size={24} />
    </a>
  );
}
