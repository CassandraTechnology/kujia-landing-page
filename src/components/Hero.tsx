import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import foundersImage from '../assets/images/ursb_registered_founders_1790027786307.jpg';

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section className="w-full border-b border-[#E5E5E2] bg-[#F7F7F5] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* First Column */}
          <div className="flex flex-col justify-center">
            {/* Superclean, bold headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-[#111110] leading-[1.1] mb-6">
              Officially Register Your Business Today
            </h1>

            {/* Subtitle describing what Kujia does */}
            <p className="text-lg md:text-xl text-[#4A4A46] font-normal leading-relaxed mb-8 max-w-xl">
              We help local Ugandan entrepreneurs and startups get officially incorporated and set up.
            </p>

            {/* Pricing & Turnaround Guarantee */}
            <div className="bg-white border border-[#E5E5E2] p-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="block text-xs uppercase font-mono tracking-widest text-[#73736E] mb-1">
                  Complete Package
                </span>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-[#111110]">
                  UGX 1.5M <span className="text-base font-normal text-[#73736E]">or</span> $350
                </div>
                <span className="text-xs text-[#73736E] block mt-1">for everything</span>
              </div>

              <div className="sm:border-l sm:border-[#E5E5E2] sm:pl-6">
                <span className="block text-xs uppercase font-mono tracking-widest text-[#73736E] mb-1">
                  Guaranteed Delivery
                </span>
                {/* Emphasized with orange color */}
                <div className="text-xl sm:text-2xl font-bold text-[#FF5500] tracking-tight">
                  Everything in 2 weeks!
                </div>
              </div>
            </div>

            {/* Sign up form requiring only email & orange button */}
            {submitted ? (
              <div 
                id="signup-success-state"
                className="bg-white border border-[#E5E5E2] p-5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-[#111110]">
                    Thank you for signing up
                  </h4>
                  <p className="text-sm text-[#555550] mt-1">
                    We have received your email ({email}). A Kujia specialist will reach out shortly to initiate your incorporation.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setEmail('');
                    }}
                    className="mt-3 text-xs font-semibold text-[#FF5500] hover:underline cursor-pointer"
                  >
                    Submit another email
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="hero-signup-form" className="w-full">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <input
                      id="hero-email-input"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="Enter your email address"
                      aria-label="Email address"
                      className="w-full bg-white border border-[#D1D1CD] focus:border-[#111110] focus:ring-1 focus:ring-[#111110] text-[#111110] placeholder-[#8E8E89] text-base px-4 py-3.5 outline-none transition-colors"
                    />
                    {error && (
                      <p className="text-xs text-red-600 mt-1 font-medium absolute -bottom-5 left-0">
                        {error}
                      </p>
                    )}
                  </div>

                  {/* Sign up button is orange */}
                  <button
                    id="hero-signup-btn"
                    type="submit"
                    className="bg-[#FF5500] hover:bg-[#E04B00] active:bg-[#C94000] text-white font-semibold text-base px-7 py-3.5 transition-colors cursor-pointer flex items-center justify-center gap-2 shrink-0 shadow-sm"
                  >
                    <span>Sign up</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-[#73736E] mt-3 font-mono">
                  No hidden fees. Full setup for local Ugandan entrepreneurs.
                </p>
              </form>
            )}
          </div>

          {/* Second Column: Image illustrating happy customers holding a URSB company registration certificate */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full max-w-lg bg-white border border-[#E5E5E2] p-3 shadow-sm">
              <div className="overflow-hidden bg-[#EBEBE8] aspect-[4/3] relative">
                <img
                  id="hero-founders-image"
                  src={foundersImage}
                  alt="Happy Ugandan startup founders holding their official URSB company registration certificate"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image caption */}
              <div className="pt-3 pb-1 px-1 border-t border-[#F0F0EE] mt-2">
                <p className="text-xs sm:text-[13px] text-[#555550] font-medium leading-snug">
                  Quick and effective company registration for Ugandan entrepreneurs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
