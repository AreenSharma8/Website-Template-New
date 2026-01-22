'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from './section';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CTO at TechFlow',
    content: 'The automation solutions provided by AI Solve have completely transformed our customer support. We’ve seen a 40% reduction in response times within the first month.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
  },
  {
    name: 'Michael Chen',
    role: 'Operations Director at Global Logistics',
    content: 'Their predictive analytics model helped us optimize our supply chain in ways we never thought possible. The ROI was clear within just 90 days of implementation.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder of GrowthScale',
    content: 'As a startup, we needed a scalable AI partner. AI Solve delivered beyond our expectations with their flexible integration and expert strategy consulting.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeader
        title="What Our Clients Say"
        subtitle="Discover how we've helped leading companies achieve their automation goals."
      />

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Quote className="w-16 h-16 text-blue-600" />
              </div>
              <CardContent className="pt-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
