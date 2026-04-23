import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

export const SectionHeading = ({ title, subtitle, align = 'center' }: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-12 md:mb-20",
      align === 'center' ? "text-center" : "text-left"
    )}>
      <motion.p 
        className="text-slate-500 font-bold tracking-[0.3em] uppercase text-xs mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {subtitle}
      </motion.p>
      <motion.h2 
        className="text-4xl md:text-5xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      <motion.div 
        className={cn(
          "h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-6 rounded-full opacity-60",
          align === 'center' ? "mx-auto w-24" : "w-24"
        )}
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </div>
  );
};
