"use client";
import Image from "next/image";

import Link from "next/link";
import {
  GraduationCap,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
   <footer className="mt-20 border-t bg-gray-900 text-gray-100">
  <div className="max-w-7xl mx-auto px-6 py-16">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      {/* Brand Section */}
      <div className="space-y-5">
        <div className="flex items-center gap-2">
          <Image src='/logo.png' width={150} height={50} alt="Logo Image"/>
        </div>
        <p className="text-sm leading-relaxed text-gray-300">
          Empowering learners worldwide with quality education and expert instructors.
        </p>
        <div className="flex gap-3">
          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
            <a key={i} href="#" aria-label="social-link" className="p-2 rounded-md bg-gray-800">
              <Icon className="w-4 h-4 text-white" />
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
        <ul className="space-y-2">
          {[
            { label: "Home", href: "/" },
            { label: "Courses", href: "/courses" },
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((link, i) => (
            <li key={i}>
              <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Support Section */}
      <div>
        <h3 className="font-semibold mb-4 text-white">Support</h3>
        <ul className="space-y-2">
          {["Help Center", "Terms of Service", "Privacy Policy", "FAQ"].map((item, i) => (
            <li key={i}>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
        <ul className="space-y-1 text-sm text-gray-300">
          <li>
            <span className="font-medium text-white">Email:</span> info.nitiacademy@gmail.com
          </li>
          <li>
            <span className="font-medium text-white">Phone:</span> 9802852261
          </li>
          <li>
            <span className="font-medium text-white">Address:</span> Pokhara 9, Nayabazar
          </li>
        </ul>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="border-t mt-10 pt-6 text-center text-sm border-gray-700 text-gray-400">
      <p>
        © {currentYear} <span className="font-semibold text-white">NITI ACADEMY</span>. All rights reserved.
      </p>
    </div>
  </div>
</footer>

  );
};

export default Footer;