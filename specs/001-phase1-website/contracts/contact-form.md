# Contract: Contact Form Submission

**Feature**: 001-phase1-website
**Date**: 2025-12-30
**Type**: Server Action

---

## Overview

Contact form submission uses Next.js Server Actions (no REST API endpoint). The form data is validated server-side and sent via email service.

---

## Server Action Contract

### Action: `submitContactForm`

**Location**: `/app/actions/contact.ts`

**Input**:
```typescript
interface ContactFormData {
  name: string;      // Required, 2-100 chars
  email: string;     // Required, valid email
  phone?: string;    // Optional, valid phone if provided
  message: string;   // Required, 10-2000 chars
}
```

**Output**:
```typescript
interface ContactFormResult {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    form?: string;    // General form error
  };
}
```

---

## Validation Schema (Zod)

```typescript
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\-\+\(\)]+$/.test(val),
      "Please enter a valid phone number"
    ),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});
```

---

## Success Response

```typescript
{
  success: true,
  message: "Thank you! We'll get back to you within 24 hours."
}
```

---

## Error Responses

### Validation Error
```typescript
{
  success: false,
  message: "Please correct the errors below.",
  errors: {
    name: "Name must be at least 2 characters",
    email: "Please enter a valid email address"
  }
}
```

### Server/Email Error
```typescript
{
  success: false,
  message: "Something went wrong. Please try again or contact us directly.",
  errors: {
    form: "Unable to send message. Please try again."
  }
}
```

---

## Email Content

**To**: Business email (from environment variable)
**Subject**: `New Contact Form Submission from ${name}`

**Body**:
```
New contact form submission from embdigitizers.com

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}

---
Submitted: ${timestamp}
Source: ${sourcePage}
```

---

## Environment Variables

```env
# Email Service (Resend recommended)
RESEND_API_KEY=re_xxxx
CONTACT_EMAIL=contact@embdigitizers.com

# Alternative: SendGrid
# SENDGRID_API_KEY=SG.xxxx
```

---

## Rate Limiting (Future)

Phase 1: No rate limiting (low volume expected)
Phase 2: Add rate limiting (e.g., 5 submissions per IP per hour)

---

## Security Considerations

1. **Server-side validation** - Never trust client validation
2. **Sanitize input** - Escape HTML in email body
3. **No sensitive data** - Don't log full submissions
4. **HTTPS only** - Form submission over secure connection
5. **CSRF protection** - Built into Server Actions
