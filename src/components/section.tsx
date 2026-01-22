import * as React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
}

export function Section({ id, className, children, containerClassName }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-24 sm:py-32 overflow-hidden', className)}
    >
      <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={cn('mb-16', centered ? 'text-center' : 'text-left')}>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
