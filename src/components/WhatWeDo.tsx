import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ServiceTab } from '../types';
import { 
  FileCheck, 
  Stamp, 
  CreditCard, 
  Smartphone, 
  Building2, 
  Mailbox,
  Check
} from 'lucide-react';

export const WhatWeDo: React.FC = () => {
  const tabsData: ServiceTab[] = [
    {
      id: 'business-registration',
      label: 'Business Registration',
      columns: [
        {
          title: 'Company Registration',
          items: [
            'Name reservation and official filing with URSB (Uganda Registration Services Bureau)',
            'Certificate of Incorporation issued in your company legal name',
            'Articles and Memorandum of Association preparation and filing',
            'Uganda Revenue Authority (URA) Tax Identification Number (TIN) registration',
          ],
        },
        {
          title: 'Rubber Stamp',
          items: [
            'Official company seal and high-durability rubber stamp',
            'Custom engraved with company name and URSB registration number',
            'Pre-inked and immediately ready for formal contracts and bank mandates',
            'Statutory compliance for official company documents and agreements',
          ],
        },
      ],
    },
    {
      id: 'banking',
      label: 'Bank Account',
      columns: [
        {
          title: 'Get Bank Accounts',
          items: [
            'Assisted corporate bank account opening with Stanbic Bank Uganda',
            'Dual-currency operational accounts in Ugandan Shillings (UGX) and USD',
            'Corporate digital banking and multi-signatory access setup',
            'Ready to send and receive local and international commercial wires',
          ],
        },
        {
          title: 'Mobile Money APIs',
          items: [
            'Direct Mobile Money API integration via Relworx payment infrastructure',
            'Seamless collection from both MTN Mobile Money and Airtel Money networks',
            'Automated payouts and direct settlement into your corporate bank account',
            'Developer documentation and production API credentials for web & mobile apps',
          ],
        },
      ],
    },
    {
      id: 'business-address',
      label: 'Business Address',
      columns: [
        {
          title: 'Business address',
          items: [
            'Prime physical commercial business address in Kampala, Uganda',
            'Complies with all statutory URSB requirements for official company records',
            'Physical verification-ready location for bank KYC and regulatory inspections',
            'Professional commercial standing to establish local trade readiness',
          ],
        },
        {
          title: 'P.O Box address',
          items: [
            'Dedicated corporate postal P.O Box allocated through Posta Uganda',
            'Secure document reception for regulatory correspondence and tax notices',
            'Official mailing address for statutory compliance and customer returns',
            'Physical mail handling and prompt notification on document arrival',
          ],
        },
      ],
    },
  ];

  const [activeTabId, setActiveTabId] = useState<string>('business-registration');

  const currentTab = tabsData.find((tab) => tab.id === activeTabId) || tabsData[0];

  // Helper icons for column titles
  const getColumnIcon = (title: string) => {
    switch (title) {
      case 'Company Registration':
        return <FileCheck className="w-5 h-5 text-[#111110]" />;
      case 'Rubber Stamp':
        return <Stamp className="w-5 h-5 text-[#111110]" />;
      case 'Get Bank Accounts':
        return <CreditCard className="w-5 h-5 text-[#111110]" />;
      case 'Mobile Money APIs':
        return <Smartphone className="w-5 h-5 text-[#111110]" />;
      case 'Business address':
        return <Building2 className="w-5 h-5 text-[#111110]" />;
      case 'P.O Box address':
        return <Mailbox className="w-5 h-5 text-[#111110]" />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-[#F7F7F5] border-b border-[#E5E5E2] py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Titled with the sentence “What we do for you” */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#E5E5E2] gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#73736E] mb-2 block">
              Scope of Service
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111110]">
              What we do for you
            </h2>
          </div>
          <p className="text-sm text-[#73736E] max-w-md font-normal leading-relaxed">
            Everything Ugandan entrepreneurs need to establish a legal, verified, and trade-ready business.
          </p>
        </motion.div>

        {/* Pill shaped tabs */}
        <motion.div 
          className="flex flex-wrap gap-2.5 mb-10" 
          role="tablist" 
          aria-label="Services"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {tabsData.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <motion.button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`tab-panel-${tab.id}`}
                onClick={() => setActiveTabId(tab.id)}
                type="button"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                className={`relative rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide transition-colors cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#111110] focus:ring-offset-2 ${
                  isActive
                    ? 'bg-[#111110] text-white shadow-sm'
                    : 'bg-white text-[#4A4A46] border border-[#D5D5D0] hover:border-[#111110] hover:text-[#111110]'
                }`}
              >
                {tab.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Tab Content: Animated panel on scroll and switch */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-[#E5E5E2] p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentTab.id}
              id={`tab-panel-${currentTab.id}`}
              role="tabpanel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E2]"
            >
              {/* Column 1 */}
              <div className="flex flex-col pr-0 md:pr-6">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#F0F0EE]">
                  <div className="w-10 h-10 bg-[#F7F7F5] border border-[#E5E5E2] flex items-center justify-center shrink-0">
                    {getColumnIcon(currentTab.columns[0].title)}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111110]">
                    {currentTab.columns[0].title}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {currentTab.columns[0].items.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.06 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-[#F0F0EE] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#FF5500]" />
                      </div>
                      <span className="text-sm sm:text-base text-[#3A3A36] leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col pt-8 md:pt-0 pl-0 md:pl-8">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#F0F0EE]">
                  <div className="w-10 h-10 bg-[#F7F7F5] border border-[#E5E5E2] flex items-center justify-center shrink-0">
                    {getColumnIcon(currentTab.columns[1].title)}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111110]">
                    {currentTab.columns[1].title}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {currentTab.columns[1].items.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.1 + idx * 0.06 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-[#F0F0EE] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#FF5500]" />
                      </div>
                      <span className="text-sm sm:text-base text-[#3A3A36] leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

