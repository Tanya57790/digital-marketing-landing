'use server';

import { NextRequest, NextResponse } from 'next/server';
import { createSubscriber } from '@/lib/subscribers';
import { sendWelcomeEmail } from '@/lib/email';
import { generateUnsubscribeJWT } from '@/lib/utils';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const email = formData.email;
    const result = await createSubscriber(formData);
    const unsubscribeId = generateUnsubscribeJWT(email);
    const user = await prisma.subscriber.findUnique({
      where: { email: email },
    });

    if (user && !user.messageSent) {
      await sendWelcomeEmail(email, unsubscribeId, request.nextUrl.origin);

      await prisma.subscriber.update({
        where: { id: user.id },
        data: { messageSent: true },
      });
    }

    if (user && !user.subscribed) {
      await prisma.subscriber.update({
        where: { id: user.id },
        data: { subscribed: true },
      });
    }
    return NextResponse.json(result);
  } catch (error) {
    console.error('Server error', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
