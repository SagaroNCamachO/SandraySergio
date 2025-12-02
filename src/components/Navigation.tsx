'use client';

import * as React from 'react';
import Link from 'next/link';
import { Heart, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = ['Fecha', 'Lugar', 'Regalos', 'Confirmar'];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || isMobileMenuOpen ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group z-50 relative">
              <div className="p-2 rounded-full bg-rose-50 group-hover:bg-rose-100 transition-colors">
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              </div>
              <span className={cn(
                "font-serif font-bold text-xl tracking-wide transition-colors",
                (isScrolled || isMobileMenuOpen) ? "text-rose-950" : "text-rose-900"
              )}>
                Matrimonio
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={cn(
                    "text-sm font-medium transition-all relative group",
                    item === 'Confirmar'
                      ? "px-5 py-2.5 bg-rose-500 text-white rounded-full hover:bg-rose-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                      : isScrolled ? "text-rose-900/80 hover:text-rose-600" : "text-rose-900 hover:text-rose-700"
                  )}
                >
                  {item}
                  {item !== 'Confirmar' && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-400 transition-all group-hover:w-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-50 p-2 text-rose-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-2xl font-serif text-rose-900 hover:text-rose-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
