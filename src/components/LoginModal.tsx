import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please provide your email and password');
      return;
    }
    setError('');
    setLoggedIn(true);
  };

  const handleReset = () => {
    setLoggedIn(false);
    setEmail('');
    setPassword('');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#111110]/70 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-dialog-title"
    >
      {/* Modal card */}
      <div className="w-full max-w-md bg-[#F7F7F5] border border-[#111110] p-8 shadow-2xl relative">
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-6 right-6 text-[#73736E] hover:text-[#111110] p-1 cursor-pointer transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo and title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-[#111110] flex items-center justify-center">
            <span className="text-[#FF5500] font-black text-lg leading-none">
              K
            </span>
          </div>
          <span className="font-bold text-lg tracking-tight text-[#111110]">
            Kujia Portal
          </span>
        </div>

        {loggedIn ? (
          <div className="py-6">
            <div className="flex items-center gap-3 text-[#111110] mb-3">
              <CheckCircle2 className="w-6 h-6 text-[#FF5500]" />
              <h3 className="text-xl font-bold">Welcome back</h3>
            </div>
            <p className="text-sm text-[#4A4A46] leading-relaxed mb-6">
              You are signed in as <span className="font-semibold text-[#111110]">{email}</span>. Your registration dossier and trade status documents are ready for review.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="w-full bg-[#111110] text-white py-3 font-semibold text-sm hover:bg-[#2A2A26] transition-colors cursor-pointer"
            >
              Return to Landing Page
            </button>
          </div>
        ) : (
          <div>
            <h2 id="login-dialog-title" className="text-2xl font-bold tracking-tight text-[#111110] mb-1">
              Account Login
            </h2>
            <p className="text-xs text-[#73736E] font-mono mb-6">
              Access your incorporation progress & corporate records
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#555550] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="founder@company.ug"
                  required
                  className="w-full bg-white border border-[#D1D1CD] focus:border-[#111110] focus:ring-1 focus:ring-[#111110] px-3.5 py-2.5 text-sm text-[#111110] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#555550] mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  className="w-full bg-white border border-[#D1D1CD] focus:border-[#111110] focus:ring-1 focus:ring-[#111110] px-3.5 py-2.5 text-sm text-[#111110] outline-none"
                />
              </div>

              {error && (
                <p className="text-xs text-red-600 font-medium">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-[#FF5500] hover:bg-[#E04B00] active:bg-[#C94000] text-white py-3 px-4 font-semibold text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 mt-6"
              >
                <span>Login</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-[#E5E5E2] text-center">
              <span className="text-xs text-[#73736E]">
                Need your company registered first? Sign up on the main page.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
