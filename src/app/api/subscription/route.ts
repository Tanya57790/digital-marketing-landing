'use server';

import { NextRequest, NextResponse } from 'next/server';
import { createSubscriber } from '@/lib/subscribers';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const result = await createSubscriber(formData);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Server error', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
