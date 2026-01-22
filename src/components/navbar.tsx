'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(8px)']
  );
  
  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ['1px solid rgba(0, 0, 0, 0)', '1px solid rgba(0, 0, 0, 0.1)']
  );

  return (
    <motion.nav
      style={{ backgroundColor, backdropBlur, borderBottom }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                AI<span className="text-blue-600">Solve</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-b border-slate-100 py-4 px-4 space-y-2"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 px-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
