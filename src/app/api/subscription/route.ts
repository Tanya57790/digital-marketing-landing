'use server';

import { NextRequest, NextResponse } from 'next/server';
import { createSubscriber } from '@/lib/subscribers';
import { transporter } from '@/lib/email';
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

    await new Promise((resolve, reject) => {
      transporter.verify((error, success) => {
        if (error) {
          console.error('SMTP verify failed:', error);
          reject(error);
        } else {
          console.log('SMTP ready');
          resolve(success);
        }
      });
    });

    if (user && !user.messageSent) {
      const mailData = {
        from: `"${process.env.SENDER_NAME}" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Welcome!',
        html: `
        <h1>Thank you for subscribing!</h1>
        <h2>Tip №1</h2>
        <p>
          To improve email marketing, 
          focus on personalization, 
          list segmentation, responsive design, 
          and regular A/B testing of subject lines and content. 
          Build your list legitimately, 
          write useful emails from the perspective of real people, 
          not brands, and optimize send times to increase open rates and click-through rates.
        </p>
        <a href="${request.nextUrl.origin}/api/unsubscription/${unsubscribeId}" 
          style="background: #F5333F; 
          display: inline-block; 
          padding: 10px 20px; 
          border-radius: 5px; 
          color: white; 
          text-decoration: none;"
        >
          Unsubscribe from the newsletter
        </a>
      `,
      };

      await new Promise((resolve, reject) => {
        transporter.sendMail(mailData, (err, info) => {
          if (err) {
            console.error('SendMail error:', err);
            reject(err);
          } else {
            console.log('Email sent:', info.messageId);
            resolve(info);
          }
        });
      });

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
