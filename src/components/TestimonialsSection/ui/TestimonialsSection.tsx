'use client';

import { Testimonials } from '@/components/Testimonials';
import styles from './TestimonialsSection.module.css';

const TestimonialsSection = () => {
  return (
    <div className={styles.container}>
      <hr className="divider" />
      <Testimonials />
    </div>
  );
};

export default TestimonialsSection;
