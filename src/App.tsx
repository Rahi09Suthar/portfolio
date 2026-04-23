/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { Loader } from './components/ui/Loader';
import { CustomCursor } from './components/ui/CustomCursor';
import { StarField } from './components/ui/StarField';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-200 overflow-x-hidden selection:bg-primary/30">
      <StarField />
      {/* Sleek Interface Ambient Background Orbs */}
      <div className="fixed top-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed top-[40%] right-[10%] w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      <Footer />

      {/* Persistent global background noise/grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
