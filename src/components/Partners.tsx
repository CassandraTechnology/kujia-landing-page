import React from 'react';
import { Landmark, Mail, Cpu, Zap } from 'lucide-react';

export const Partners: React.FC = () => {
  // Strict scope constraint: ONLY "Stanbic", "Posta Uganda", "TechBuzz", and "Relworx"
  const partners = [
    {
      id: 'partner-stanbic',
      name: 'Stanbic',
      service: 'Banking Partner',
      icon: Landmark,
      symbolText: 'SB',
    },
    {
      id: 'partner-posta-uganda',
      name: 'Posta Uganda',
      service: 'Postal & P.O Box Address',
      icon: Mail,
      symbolText: 'PU',
    },
    {
      id: 'partner-techbuzz',
      name: 'TechBuzz',
      service: 'Startup Ecosystem',
      icon: Cpu,
      symbolText: 'TB',
    },
    {
      id: 'partner-relworx',
      name: 'Relworx',
      service: 'Mobile Money APIs',
      icon: Zap,
      symbolText: 'RW',
    },
  ];

  return (
    <section className="w-full bg-[#F7F7F5] border-b border-[#E5E5E2] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Titled with the exact sentence “Our Partners” */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 pb-4 border-b border-[#E5E5E2]">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111110]">
            Our Partners
          </h2>
          <span className="font-mono text-xs uppercase tracking-widest text-[#73736E] mt-1 sm:mt-0">
            Ecosystem Network
          </span>
        </div>

        {/* Strip of logos */}
        <div 
          id="partners-strip" 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {partners.map((partner) => {
            const Icon = partner.icon;
            return (
              <div
                key={partner.id}
                id={partner.id}
                className="bg-white border border-[#E5E5E2] p-5 flex flex-col items-start justify-between min-h-[110px] hover:border-[#111110] transition-colors"
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div className="w-8 h-8 bg-[#F0F0EE] flex items-center justify-center text-[#111110]">
                    <Icon className="w-4 h-4 text-[#111110]" />
                  </div>
                  <span className="font-mono text-[10px] font-semibold text-[#8C8C87] border border-[#E5E5E2] px-1.5 py-0.5">
                    {partner.symbolText}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold tracking-tight text-[#111110]">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-[#73736E] font-medium mt-0.5">
                    {partner.service}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
