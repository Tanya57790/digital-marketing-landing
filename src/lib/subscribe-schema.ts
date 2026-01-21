import * as z from 'zod';

export const schema = z.object({
  email: z
    .string()
    .max(320, 'Maximum length is 320 characters')
    .min(1, 'Required field')
    .refine((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), {
      message: 'Email is not valid',
    }),
});

export type InferSchema = z.infer<typeof schema>;
