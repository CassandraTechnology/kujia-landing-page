/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { WhatWeDo } from './components/WhatWeDo';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F5] text-[#111110]">
      {/* Navigation Bar */}
      <Navbar onLoginClick={() => setIsLoginOpen(true)} />

      {/* Main Content Sections strictly adhering to user specification */}
      <main className="flex-1">
        {/* Header content: Two-column grid with what Kujia does, price, sign-up form, and customer URSB photo */}
        <Hero />

        {/* Partners section: "Our Partners" with Stanbic, Posta Uganda, TechBuzz, Relworx */}
        <Partners />

        {/* What we do for you section: Pill tabs for Business Registration, Banking, and Business Address */}
        <WhatWeDo />
      </main>

      {/* Footer: Black background with email, address, and phone number */}
      <Footer />

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
    </div>
  );
}
