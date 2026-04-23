import React from 'react';
import { motion } from 'motion/react';
import { Scene } from '../3d/Scene';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <Scene />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Available for hire</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.1] tracking-tight mb-4">
              Rahi<br/>
              <span className="text-gradient">Suthar</span>
            </h1>
            
            <motion.p 
              className="text-slate-400 text-xl font-light max-w-sm mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Full Stack Web Developer (MERN) crafting immersive digital experiences with modern tech.
            </motion.p>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-2">Scroll Down</span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1.5 shadow-lg">
          <motion.div 
            className="w-1 h-1 bg-purple-400 rounded-full"
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};
