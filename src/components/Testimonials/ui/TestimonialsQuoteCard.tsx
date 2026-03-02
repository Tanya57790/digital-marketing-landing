'use client';

import { useTheme } from '@mui/material/styles';
import { MemoBox, MemoTypography } from '@/components/MuiOptimized';
import { testimonialsInfo } from './data';
import { Quote } from '@/components/Quote';
import styles from './TestimonialsQuoteCard.module.css';

const fontStyles = {
  fontWeight: 500,
  fontSize: { lg: '16px', xl: '20px' },
  fontStyle: 'italic',
};

const TestimonialsQuoteCard = () => {
  const theme = useTheme();

  return (
    <>
      {testimonialsInfo.map((item) => (
        <div key={item.id} className={styles.card}>
          <Quote />
          <div className={styles.cardInfo}>
            <MemoTypography
              variant="body1"
              sx={{
                fontWeight: 300,
                fontSize: fontStyles.fontSize,
                whiteSpace: { xs: 'pre-line', sm: 'normal' },
              }}
            >
              {item.quote}
            </MemoTypography>
            <MemoBox>
              <MemoTypography
                variant="body1"
                sx={{ color: theme.palette.primary.main, ...fontStyles }}
              >
                {item.userName}
              </MemoTypography>
              <MemoTypography variant="body1" sx={{ ...fontStyles }}>
                {item.profession}
              </MemoTypography>
            </MemoBox>
          </div>
        </div>
      ))}
    </>
  );
};

export default TestimonialsQuoteCard;
