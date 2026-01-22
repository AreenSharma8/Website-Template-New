'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from './section';
import { Bot, Zap, BarChart3, Puzzle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'Intelligent Chatbots',
    description: 'Advanced conversational AI that handles customer queries 24/7 with human-like accuracy.',
    icon: Bot,
    color: 'bg-blue-500',
  },
  {
    title: 'Workflow Automation',
    description: 'Streamline repetitive tasks and complex business processes with intelligent triggers.',
    icon: Zap,
    color: 'bg-amber-500',
  },
  {
    title: 'Predictive Analytics',
    description: 'Transform your data into actionable insights and future trends using ML models.',
    icon: BarChart3,
    color: 'bg-emerald-500',
  },
  {
    title: 'AI Integration',
    description: 'Seamlessly integrate cutting-edge AI capabilities into your existing software stack.',
    icon: Puzzle,
    color: 'bg-purple-500',
  },
];

export function Services() {
  return (
    <Section id="services">
      <SectionHeader
        title="Our Specialized AI Services"
        subtitle="Leverage the power of artificial intelligence to optimize your operations and drive unprecedented growth."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group">
              <CardHeader>
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                  service.color
                )}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
