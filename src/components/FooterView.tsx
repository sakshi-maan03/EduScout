import React from 'react';

export default function FooterView() {
  const links = ['About Us', 'Privacy Policy', 'Contact Support', 'For Institutions'];

  const handleLinkClick = (linkName: string) => {
    alert(`Redirecting to ${linkName} section...\nAll educational data verified by EduScout.`);
  };

  return (
    <footer className="bg-brand-primary w-full py-10 mt-auto border-t border-white/10 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 w-full max-w-7xl mx-auto gap-6">
        {/* Brand Information */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-2xl font-headline font-bold text-white mb-2">EduScout</span>
          <p className="font-sans text-xs text-brand-surface-container/80">
            © 2026 EduScout College Discovery Platform. All academic rankings, fees and cut-offs verified.
          </p>
        </div>

        {/* Links Navigation */}
        <div className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleLinkClick(link)}
              className="font-sans text-xs text-brand-surface-container hover:text-white transition-colors cursor-pointer border-b border-transparent hover:border-white pb-0.5"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
