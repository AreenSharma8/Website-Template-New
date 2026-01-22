'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from './section';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Custom AI Strategy Development',
  'Seamless Workflow Automation',
  'Real-time Predictive Analytics',
  '24/7 Intelligent Support Bots',
];

export function About() {
  return (
    <Section id="about" className="bg-slate-50/50">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Pioneering the Future of Intelligent Automation"
            subtitle="We are a dedicated team of AI experts and software engineers committed to transforming how businesses operate. Our mission is to make advanced AI accessible and impactful for every organization."
            centered={false}
          />
          
          <div className="space-y-4 mb-10">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-slate-600 leading-relaxed mb-8">
            Since our inception, we've helped over 200 companies worldwide automate repetitive tasks, derive deeper insights from their data, and provide exceptional customer experiences through our proprietary AI frameworks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop"
              alt="Mission AI"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
            <p className="text-4xl font-bold text-blue-600 mb-1">10k+</p>
            <p className="text-slate-600 font-medium leading-tight">Processes automated daily across our global clients.</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
