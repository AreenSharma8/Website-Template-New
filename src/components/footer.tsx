import * as React from 'react';
import Link from 'next/link';
import { Cpu, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Community', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                AI<span className="text-blue-600">Solve</span>
              </span>
            </Link>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Empowering businesses with intelligent automation and cutting-edge AI solutions to scale faster and smarter.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-500 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} AI Solve Technologies. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
