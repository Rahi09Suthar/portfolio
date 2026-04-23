import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { Code, Layout, Server, Database, Wrench } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      color: 'from-blue-500/20 to-blue-600/20',
      skills: ['JavaScript', 'TypeScript', 'Python', 'C'],
    },
    {
      title: 'Frontend',
      icon: Layout,
      color: 'from-purple-500/20 to-purple-600/20',
      skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-emerald-500/20 to-emerald-600/20',
      skills: ['Node.js', 'Express.js', 'Socket.io', 'REST APIs'],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-amber-500/20 to-amber-600/20',
      skills: ['MongoDB', 'PostgreSQL'],
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: 'from-pink-500/20 to-pink-600/20',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Render'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-dark/50">
      <div className="container mx-auto px-6">
        <SectionHeading title="Technical Expertise" subtitle="My Skills" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl glass relative group overflow-hidden`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-display font-bold mb-6">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2 py-1 bg-white/5 border border-white/5 rounded-md text-[10px] text-slate-400 group-hover:text-slate-200 transition-all font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
