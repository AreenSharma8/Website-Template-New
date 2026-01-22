'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from './section';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { sendEmail } from '@/app/actions/email';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits.'),
  companyName: z.string().min(2, 'Company name must be at least 2 characters.'),
  projectType: z.string().min(1, 'Please select a project type.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      projectType: '',
      message: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const result = await sendEmail(values);
      
      if (result.error) {
        if (result.error.includes('RESEND_API_KEY')) {
          toast.error('Email service not configured. Please set RESEND_API_KEY.');
        } else {
          toast.error(result.error);
        }
        return;
      }

      toast.success('Thank you! Your request has been sent. Our team will contact you shortly.');
      form.reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section id="contact" className="bg-slate-50/50">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Let's Build Something Intelligent"
            subtitle="Ready to transform your business with AI? Fill out the form and our experts will get back to you within 24 hours."
            centered={false}
          />

          <div className="space-y-8 mt-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Email Us</p>
                <p className="text-lg font-bold text-slate-900">hello@aisolve.tech</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Call Us</p>
                <p className="text-lg font-bold text-slate-900">+1 (555) 000-0000</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Visit Us</p>
                <p className="text-lg font-bold text-slate-900">123 AI Boulevard, Silicon Valley, CA</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-100"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme Inc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a project type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Website">Website</SelectItem>
                        <SelectItem value="AI Bot">AI Bot</SelectItem>
                        <SelectItem value="Automation">Automation</SelectItem>
                        <SelectItem value="Custom Software">Custom Software</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Requirements</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project goals..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-14 text-lg font-bold shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    Send Request
                    <Send className="w-5 h-5" />
                  </div>
                )}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </Section>
  );
}
