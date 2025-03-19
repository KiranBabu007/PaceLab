import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Globe, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/95 backdrop-blur-xl border-t border-purple-950 relative overflow-hidden">
      {/* Glowing Beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-1/4 top-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute left-1/2 top-0 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/Pacelab.png"
                alt="PaceLab Logo"
                width={200}
                height={200}
                className="object-contain"
              />
             
            </div>
            <p className="text-gray-400/80 text-sm">
              Transforming education through innovative technologies and world-class certifications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-purple-400 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400/80 hover:text-purple-400 transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-600 rounded-full"></span>
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400/80 hover:text-purple-400 transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-600 rounded-full"></span>
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400/80 hover:text-purple-400 transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-600 rounded-full"></span>
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400/80 hover:text-purple-400 transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-600 rounded-full"></span>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-purple-400 font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400/80 text-sm">
                Panampilly,<br />
                Ernakulam, Kerala
              </li>
              <li className="text-gray-400/80 text-sm">
                info@pacelab.in
              </li>
              <li className="text-gray-400/80 text-sm">
                +91 8075090098
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-purple-400 font-semibold mb-4">Join Us</h3>
            <Link 
              href="http://bit.ly/paceintern25" 
              target="_blank"
              className="bg-gradient-to-r from-purple-800 to-violet-900 hover:from-purple-900 hover:to-violet-950 text-white font-medium py-2 px-4 rounded-lg inline-flex items-center gap-2 transition-all duration-300 shadow-lg shadow-purple-950/50"
            >
              <Calendar size={16} />
              Book Your Seats
            </Link>
            
            <div className="mt-6">
              <div className="flex gap-4 mt-2">
                <Link 
                  href="https://www.instagram.com/pacelab.in/" 
                  target="_blank"
                  className="w-9 h-9 rounded-full bg-purple-950/30 border border-purple-800/20 flex items-center justify-center hover:bg-purple-900/30 hover:border-purple-700/50 transition-all duration-300"
                >
                  <Instagram size={18} className="text-purple-400" />
                </Link>
                <Link 
                  href="https://www.linkedin.com/company/pacelabtech/" 
                  target="_blank"
                  className="w-9 h-9 rounded-full bg-purple-950/30 border border-purple-800/20 flex items-center justify-center hover:bg-purple-900/30 hover:border-purple-700/50 transition-all duration-300"
                >
                  <Linkedin size={18} className="text-purple-400" />
                </Link>
                <Link 
                  href="https://pacelab.in/" 
                  target="_blank"
                  className="w-9 h-9 rounded-full bg-purple-950/30 border border-purple-800/20 flex items-center justify-center hover:bg-purple-900/30 hover:border-purple-700/50 transition-all duration-300"
                >
                  <Globe size={18} className="text-purple-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-purple-950">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            {/* Logo and Copyright */}
            <div className="flex items-center gap-2">
             
              <p className="text-gray-500/80 text-sm">
                © {new Date().getFullYear()} PaceLab™. All rights reserved.
              </p>
            </div>
            
            {/* Links */}
            <div className="flex gap-6">
              <Link href="#" className="text-gray-500/80 hover:text-purple-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500/80 hover:text-purple-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;