'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <div id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-50/50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
              New: AI Automation v2.0
            </span>
            <ChevronRight className="w-3 h-3 text-blue-600" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Automate your business with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Intelligent AI Solutions
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
            Empower your team with cutting-edge AI and automation. We help businesses scale faster, reduce costs, and improve customer satisfaction through intelligent technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-lg group">
              Get Started
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-slate-200 hover:bg-slate-50 transition-colors">
              <Play className="mr-2 w-5 h-5 fill-slate-900" />
              Watch Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent pointer-events-none" />
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop"
              alt="AI Interface"
              className="rounded-xl w-full object-cover"
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-green-500 rounded-full animate-pulse" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400">System Status</p>
                <p className="text-sm font-bold text-slate-900">Optimal Performance</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                98%
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400">Automation Rate</p>
                <p className="text-sm font-bold text-slate-900">+12% from last month</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
