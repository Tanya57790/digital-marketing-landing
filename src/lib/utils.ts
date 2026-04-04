import jwt from 'jsonwebtoken';

export const secretKey = process.env.JWT_SECRET!;

export function generateUnsubscribeJWT(email: string): string {
  return jwt.sign({ email, action: 'unsubscribe' }, secretKey, { expiresIn: '1y' });
}

export function verifyUnsubscribeJWT(token: string): string | null {
  try {
    const decoded = jwt.verify(token, secretKey) as { email: string };
    return decoded.email;
  } catch {
    return null;
  }
}
