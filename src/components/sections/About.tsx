import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { User, Code2, Globe, Rocket } from 'lucide-react';

export const About = () => {
  const stats = [
    { label: 'Experience', value: '0 Year', icon: Rocket },
    { label: 'Projects', value: '2', icon: Code2 },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="About Me" subtitle="My Introduction" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden glass p-2 group">
              <img 
                src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=1200&auto=format&fit=crop" 
                alt="Professional Desk Setup" 
                className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* Background decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-[100px] animate-pulse-slow" />
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              Building responsive and user-friendly MERN stack applications with a focus on clean code and performance.
            </p>
            <p className="text-slate-400 font-light">
              Passionate Full Stack Web Developer with a strong foundation in the MERN stack. I specialize in building highly responsive, scalable, and user-friendly web applications that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-4">
              {stats.map((stat, i) => (
                <div key={i} className="glass p-6 rounded-2xl hover:bg-white/10 transition-colors">
                  <stat.icon className="w-6 h-6 text-purple-400 mb-3" />
                  <div className="text-2xl font-bold font-display text-slate-200">{stat.value}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4">
               <span className="px-4 py-2 glass rounded-full text-xs font-medium text-gray-300">Fast Learner</span>
               <span className="px-4 py-2 glass rounded-full text-xs font-medium text-gray-300">Problem Solver</span>
               <span className="px-4 py-2 glass rounded-full text-xs font-medium text-gray-300">UI/UX Enthusiast</span>
               <span className="px-4 py-2 glass rounded-full text-xs font-medium text-gray-300">Team Player</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
