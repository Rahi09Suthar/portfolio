import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative z-10 px-6 py-6 border-t border-white/5 flex flex-col md:flex-row justify-center items-center bg-[#020617]/80 backdrop-blur-md">
      <div className="text-xs text-slate-500 font-medium text-center">
        © {new Date().getFullYear()} Rahi Suthar.
      </div>
    </footer>
  );
};
