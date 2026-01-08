'use server';

import { Resend } from 'resend';
import { contactFormSchema, type ContactFormData } from '@/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ActionResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<ActionResponse> {
  // Validate input
  const validationResult = contactFormSchema.safeParse(data);

  if (!validationResult.success) {
    const errors: Record<string, string[]> = {};
    validationResult.error.issues.forEach((issue) => {
      const path = issue.path[0] as string;
      if (!errors[path]) {
        errors[path] = [];
      }
      errors[path].push(issue.message);
    });

    return {
      success: false,
      message: 'Please fix the errors below.',
      errors,
    };
  }

  const { name, email, phone, message } = validationResult.data;

  try {
    // Send email via Resend
    const contactEmail = process.env.CONTACT_EMAIL || 'contact@embdigitizers.com';

    const { data, error } = await resend.emails.send({
      from: 'EMB Digitizers <contact@embdigitizers.com>',
      to: contactEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br />')}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">
          This email was sent from the EMB Digitizers contact form.
        </p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return {
        success: false,
        message: `Email sending failed: ${error.message}. Please email us directly at ${contactEmail}.`,
      };
    }

    console.log('Email sent successfully:', data);

    return {
      success: true,
      message:
        'Thank you for your message! We will get back to you within 24 hours.',
    };
  } catch (error) {
    console.error('Failed to send contact email:', error);

    return {
      success: false,
      message:
        'Sorry, there was an error sending your message. Please try again or email us directly.',
    };
  }
}
