'use client';

import { WeddingInfo } from '@/types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { useRef } from 'react';

interface HeroProps {
  weddingInfo: WeddingInfo;
}

export default function Hero({ weddingInfo }: HeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Base Image with higher opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url('${weddingInfo.hero.image || "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"}')` }}
        />

        {/* Sophisticated Overlays for "Modern Romantic" look */}
        {/* 1. Light wash to ensure text readability */}
        <div className="absolute inset-0 bg-white/30 mix-blend-overlay" />

        {/* 2. Gradient from bottom to blend with content */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

        {/* 3. Radial vignette to focus on center but soften edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.6)_100%)]" />

        {/* 4. Subtle rose tint for theme consistency */}
        <div className="absolute inset-0 bg-rose-50/20 mix-blend-color" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-rose-100/80 text-rose-800 text-sm font-medium tracking-wider mb-6 backdrop-blur-sm shadow-sm">
            ¡NOS CASAMOS!
          </span>
        </motion.div>

        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-rose-950 mb-6 drop-shadow-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          {weddingInfo.couple.name1} <span className="text-rose-400">&</span> {weddingInfo.couple.name2}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-rose-900/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {weddingInfo.hero.subheadline}
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={() => document.getElementById('fecha')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-3 px-8 py-4 bg-white/60 backdrop-blur-md rounded-full border border-white/60 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all cursor-pointer group"
          >
            <Calendar className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform" />
            <span className="text-rose-900 font-medium tracking-wide">{weddingInfo.date}</span>
          </button>
          <button
            onClick={() => document.getElementById('lugar')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-3 px-8 py-4 bg-white/60 backdrop-blur-md rounded-full border border-white/60 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all cursor-pointer group"
          >
            <MapPin className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform" />
            <span className="text-rose-900 font-medium tracking-wide">{weddingInfo.ceremony.name}</span>
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-rose-400/50 rounded-full flex justify-center pt-2 backdrop-blur-sm">
          <div className="w-1 h-1 bg-rose-500 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}
