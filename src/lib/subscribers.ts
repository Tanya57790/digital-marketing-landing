'use server';

import { schema, type InferSchema } from '@/lib/subscribe-schema';
import z, { ZodError } from 'zod';
import { prisma } from '@/lib/prisma';

export async function createSubscriber(formData: InferSchema) {
  const result = schema.safeParse(formData);
  if (!result.success) {
    return {
      errors: z.treeifyError(result.error as ZodError),
    };
  }
  const subscriber = await prisma.subscriber.upsert({
    where: { email: result.data.email },
    update: {},
    create: { email: result.data.email },
  });

  return { success: true, subscriberId: subscriber.id, message: 'Validation successful' };
}
