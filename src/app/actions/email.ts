'use server';

import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

interface EmailData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  projectType: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
    if (!process.env.RESEND_API_KEY) {
      return { error: 'RESEND_API_KEY is not configured. Please add it to your environment variables.' };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
    const { data: result, error } = await resend.emails.send({
      from: 'AI Solutions <onboarding@resend.dev>',
      to: ['yourcompany@gmail.com'], // User specified this address
      subject: `New Lead: ${data.projectType} - ${data.fullName}`,
      react: EmailTemplate({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        companyName: data.companyName,
        projectType: data.projectType,
        message: data.message,
      }),
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true, data: result };
  } catch (error: any) {
    return { error: error.message || 'Failed to send email' };
  }
}
