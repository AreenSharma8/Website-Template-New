'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from './section';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Basic',
    price: '$99',
    description: 'Perfect for small businesses starting their AI journey.',
    features: [
      '1 AI Chatbot',
      'Up to 1,000 conversations/mo',
      'Standard Workflow Templates',
      'Email Support',
      'Basic Analytics Dashboard',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Standard',
    price: '$299',
    description: 'Ideal for growing companies needing advanced automation.',
    features: [
      '3 AI Chatbots',
      'Up to 5,000 conversations/mo',
      'Custom Workflow Builder',
      'Priority Email & Chat Support',
      'Advanced Predictive Insights',
      'CRM Integration',
    ],
    cta: 'Try for Free',
    popular: true,
  },
  {
    name: 'Premium',
    price: '$999',
    description: 'Enterprise-grade solutions for large scale operations.',
    features: [
      'Unlimited AI Chatbots',
      'Unlimited conversations',
      'Custom ML Model Training',
      'Dedicated Account Manager',
      'Full API Access',
      'Custom Security Controls',
      '24/7 Phone Support',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export function Pricing() {
  return (
    <Section id="pricing" className="bg-slate-50/50">
      <SectionHeader
        title="Predictable Pricing for Every Scale"
        subtitle="Choose the plan that best fits your business needs. All plans include our core AI engine."
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className={cn(
              "flex flex-col w-full border-slate-200 transition-all duration-300 relative",
              plan.popular ? "ring-2 ring-blue-600 shadow-xl scale-105 z-10" : "hover:shadow-lg"
            )}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 font-medium">/month</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-1 bg-blue-100 rounded-full p-0.5">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className={cn(
                    "w-full rounded-full h-12 text-base group",
                    plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-white border-slate-200 text-slate-900 hover:bg-slate-50 border"
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
