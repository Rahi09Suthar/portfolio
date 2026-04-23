import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSent(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8b5cf6', '#0ea5e9', '#ffffff']
    });

    // Reset after some time
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <SectionHeading title="Get In Touch" subtitle="Contact Me" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-display font-bold mb-6">Let's build something <span className="text-gradient">epic</span> together.</h3>
            <p className="text-gray-400 mb-10 leading-relaxed max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:border-primary transition-all">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email Me</div>
                  <a href="mailto:rahisuthar7@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">rahisuthar7@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:border-primary transition-all">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Location</div>
                  <div className="text-lg font-medium">Gujarat, India</div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/Rahi09Suthar' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/rahi-suthar-458520381/' },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all text-gray-400 hover:text-white"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 rounded-[2.5rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl" />
            
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500/50 transition-all text-slate-200 placeholder:text-slate-600"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="Email"
                  className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500/50 transition-all text-slate-200 placeholder:text-slate-600"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Your Message</label>
                <textarea 
                  rows={3} 
                  required
                  placeholder="Quick message..."
                  className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500/50 transition-all text-slate-200 placeholder:text-slate-600 resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting || isSent}
                className="w-full py-3 bg-white/10 hover:bg-white/20 disabled:opacity-50 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSent ? (
                  <>Sent Successfully <Send className="w-5 h-5" /></>
                ) : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
