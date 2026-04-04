import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { verifyUnsubscribeJWT } from '@/lib/utils';
import { MemoTypography } from '@/components/MuiOptimized';
import '@/styles/unsubscription.css';

export default async function Unsubscribe({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const email = verifyUnsubscribeJWT(id);

  if (email) {
    await prisma.subscriber.update({
      where: { email },
      data: { subscribed: false, messageSent: false },
    });
    return (
      <div className="conatiner">
        <div className="gap-container">
          <MemoTypography
            variant="h1"
            sx={{
              fontSize: { sm: '40px', md: '55px', xl: '84px' },
            }}
          >
            You unsubscribed!
          </MemoTypography>
          <MemoTypography
            variant="body1"
            className="text"
            sx={{
              fontSize: { sm: '16px', md: '20px', xl: '24px' },
            }}
          >
            Email: {email}
          </MemoTypography>
          <Link href="/" className="link">
            <MemoTypography
              variant="button"
              className="text"
              sx={{
                fontSize: { xs: '14px', desktop: '20px' },
              }}
            >
              Go home
            </MemoTypography>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="conatiner">
      <div className="gap-container">
        <MemoTypography
          variant="h1"
          sx={{
            fontSize: { sm: '40px', md: '55px', xl: '84px' },
          }}
        >
          Error
        </MemoTypography>
        <MemoTypography
          variant="body1"
          className="text"
          sx={{
            fontSize: { sm: '16px', md: '20px', xl: '24px' },
          }}
        >
          Incorrect unsubscribe link
        </MemoTypography>
      </div>
    </div>
  );
}
