'use client';

import { MemoTypography, MemoGrid } from '@/components/MuiOptimized';
import TestimonialsQuoteCard from './TestimonialsQuoteCard';
import TestimonialsImage from './TestimonialsImage';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <MemoGrid sx={{ display: 'grid', gap: '20px' }}>
          <MemoTypography
            variant="h1"
            sx={{
              paddingBottom: { xs: '30px', lg: '50px' },
              fontSize: { md: '55px', xl: '84px', desktop: '128px' },
            }}
          >
            Testimonials
          </MemoTypography>
          <TestimonialsQuoteCard />
        </MemoGrid>
        <TestimonialsImage />
      </div>
    </div>
  );
};

export default Testimonials;
