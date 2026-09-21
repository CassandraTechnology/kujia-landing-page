import React from 'react';

interface NavbarProps {
  onLoginClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  return (
    <header className="w-full bg-white border-b border-[#E5E5E2] sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Kujia Logo: An orange K in a black square */}
        <a href="#" className="flex items-center gap-3.5 group" id="navbar-brand">
          <div 
            id="brand-logo-mark"
            className="w-10 h-10 bg-[#111110] flex items-center justify-center select-none shadow-sm transition-transform duration-150 group-hover:scale-[1.02]"
            aria-label="Kujia Logo Mark"
          >
            <span className="text-[#FF5500] font-black text-2xl leading-none tracking-tight">
              K
            </span>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#111110]">
            Kujia
          </span>
        </a>

        {/* Orange login button */}
        <button
          id="navbar-login-btn"
          type="button"
          onClick={onLoginClick}
          className="bg-[#FF5500] hover:bg-[#E04B00] active:bg-[#C94000] text-white text-sm font-semibold tracking-wide px-5 py-2.5 transition-colors cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF5500] focus:ring-offset-2"
        >
          Login
        </button>
      </div>
    </header>
  );
};
