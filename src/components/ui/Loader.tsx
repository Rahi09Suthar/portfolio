import React from 'react';
import { motion } from 'motion/react';

export const Loader = () => {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="relative">
        <motion.div 
          className="w-24 h-24 border-2 border-primary/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute inset-0 w-24 h-24 border-t-2 border-primary rounded-full shadow-[0_0_20px_#8b5cf6]"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gradient font-display font-bold text-xl">R</span>
        </div>
      </div>
      
      <motion.div 
        className="mt-8 overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: "auto" }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span className="text-gray-500 uppercase tracking-[0.5em] text-xs whitespace-nowrap">Initialising Portfolio</span>
      </motion.div>
    </motion.div>
  );
};
