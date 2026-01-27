import { type InferSchema } from '@/lib/subscribe-schema';

export async function addSubscriber(formData: InferSchema) {
  const response = await fetch('/api/subscription', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  if (!response.ok) throw new Error('API error');
  return response.json();
}
