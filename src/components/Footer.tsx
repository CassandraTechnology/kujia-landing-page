import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#111110] text-[#E5E5E2] py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#262624]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Brand identifier */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div 
                  className="w-10 h-10 bg-[#222220] border border-[#333330] flex items-center justify-center"
                  aria-label="Kujia logo"
                >
                  <span className="text-[#FF5500] font-black text-2xl leading-none">
                    K
                  </span>
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">
                  Kujia
                </span>
              </div>
              <p className="text-[#8E8E8A] text-sm leading-relaxed max-w-sm">
                Empowering Ugandan entrepreneurs and startups to get officially registered, banked, and ready to trade.
              </p>
            </div>
            <div className="mt-8 font-mono text-xs text-[#63635E]">
              Everything in 2 weeks. Flat pricing: UGX 1.5M or $350.
            </div>
          </div>

          {/* Contact Details strictly as requested: email, address, phone number */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Email */}
            <div id="footer-email-block">
              <div className="flex items-center gap-2 mb-2 text-[#73736E]">
                <Mail className="w-4 h-4 text-[#FF5500]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#8E8E8A]">
                  Email
                </span>
              </div>
              <a 
                href="mailto:hello@kujia.ug" 
                className="text-white hover:text-[#FF5500] transition-colors text-sm sm:text-base font-medium break-all"
              >
                hello@kujia.ug
              </a>
              <div className="text-xs text-[#73736E] mt-1 font-mono">
                Support & Inquiries
              </div>
            </div>

            {/* Address */}
            <div id="footer-address-block">
              <div className="flex items-center gap-2 mb-2 text-[#73736E]">
                <MapPin className="w-4 h-4 text-[#FF5500]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#8E8E8A]">
                  Address
                </span>
              </div>
              <address className="not-italic text-white text-sm sm:text-base font-medium leading-snug">
                Plot 14, Kampala Road<br />
                Kampala, Uganda
              </address>
              <div className="text-xs text-[#73736E] mt-1 font-mono">
                Central Business District
              </div>
            </div>

            {/* Phone Number */}
            <div id="footer-phone-block">
              <div className="flex items-center gap-2 mb-2 text-[#73736E]">
                <Phone className="w-4 h-4 text-[#FF5500]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#8E8E8A]">
                  Phone
                </span>
              </div>
              <a 
                href="tel:+256414670900" 
                className="text-white hover:text-[#FF5500] transition-colors text-sm sm:text-base font-medium font-mono"
              >
                +256 414 670 900
              </a>
              <div className="text-xs text-[#73736E] mt-1 font-mono">
                Mon - Fri, 8:00 - 17:00 EAT
              </div>
            </div>
          </div>
        </motion.div>

        {/* Minimalist bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#63635E] font-mono gap-4">
          <div>
            © {new Date().getFullYear()} Kujia. All rights reserved. Registered in the Republic of Uganda.
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FF5500]"></span>
            <span>Kampala • URSB Fast-track</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

