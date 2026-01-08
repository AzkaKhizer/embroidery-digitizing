'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactFormSchema, type ContactFormData } from '@/lib/utils';
import { submitContactForm } from '@/app/actions/contact';
import type { ContactFormProps } from '@/lib/types';

export function ContactForm({ onSuccess, className = '' }: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const result = await submitContactForm(data);

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        reset();
        onSuccess?.();
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.',
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-6 ${className}`}
    >
      {/* Status message */}
      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg flex items-start space-x-3 ${
            submitStatus.type === 'success'
              ? 'bg-green-50 text-green-800'
              : 'bg-red-50 text-red-800'
          }`}
        >
          {submitStatus.type === 'success' ? (
            <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          )}
          <p>{submitStatus.message}</p>
        </div>
      )}

      {/* Name field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-neutral-700 mb-1"
        >
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors ${
            errors.name ? 'border-red-500' : 'border-neutral-300'
          }`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-neutral-700 mb-1"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors ${
            errors.email ? 'border-red-500' : 'border-neutral-300'
          }`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Phone field (optional) */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-neutral-700 mb-1"
        >
          Phone <span className="text-neutral-400">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors ${
            errors.phone ? 'border-red-500' : 'border-neutral-300'
          }`}
          placeholder="(555) 123-4567"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {/* Message field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-neutral-700 mb-1"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none ${
            errors.message ? 'border-red-500' : 'border-neutral-300'
          }`}
          placeholder="Tell us about your project or ask any questions..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        loading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
