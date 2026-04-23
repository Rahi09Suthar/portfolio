import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Mail, Linkedin } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled ? "bg-dark/80 backdrop-blur-lg border-bottom border-white/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">RS</span>
          <span className="text-slate-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400 uppercase tracking-widest">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="hover:text-purple-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-6 w-px bg-white/10 mx-2" />
          <div className="flex items-center gap-4">
            <a href="https://github.com/Rahi09Suthar" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/rahi-suthar-458520381/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:rahisuthar7@gmail.com" className="hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-6 pt-4 border-t border-white/10">
                <a href="https://github.com/Rahi09Suthar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400">
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/rahi-suthar-458520381/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a href="mailto:rahisuthar7@gmail.com" className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-5 h-5" /> Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
