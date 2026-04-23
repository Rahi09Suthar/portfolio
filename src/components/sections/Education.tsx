import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

export const Education = () => {
  const experiences = [
    {
      id: '1',
      title: 'B.Tech in ICT',
      organization: 'Adani University',
      date: '2024 – 2028',
      description: 'Strengthening my proficiency in core computer science, software engineering, and emerging information & communication technologies. (CGPA: 7.77)',
      icon: GraduationCap,
    },
    {
      id: '2',
      title: 'XII (GSEB)',
      organization: 'Perfect School',
      date: '2024',
      description: 'Completed Higher Secondary Education with a focus on Science stream. Percentage: 74.50%',
      icon: GraduationCap,
    },
    {
      id: '3',
      title: 'X (GSEB)',
      organization: 'Perfect School',
      date: '2022',
      description: 'Completed Secondary Education with excellence in all subjects. Percentage: 95.50%',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="education" className="py-24 bg-dark/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading title="Education" subtitle="My Journey" />
        
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent opacity-20" />
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#8b5cf6]" />
                
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <div className={`p-8 rounded-[2rem] glass border-l-4 border-primary hover:bg-white/10 transition-all ${idx % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                    <div className={`flex items-center gap-3 mb-4 ${idx % 2 === 0 ? 'justify-start' : 'md:justify-end flex-row-reverse md:flex-row-reverse'}`}>
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <exp.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-secondary font-display font-medium text-sm">{exp.date}</span>
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold mb-2">{exp.title}</h3>
                    <h4 className="text-primary font-medium mb-4">{exp.organization}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
                
                {/* Spacer for MD screens */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
