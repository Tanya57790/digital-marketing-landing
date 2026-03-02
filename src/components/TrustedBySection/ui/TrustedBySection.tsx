'use client';

import { MemoBox } from '@/components/MuiOptimized';
import { Icon } from '@/components/Icon';
import styles from './TrustedBySection.module.css';

const TrustedBySection = () => {
  return (
    <MemoBox className={styles.trustedByContainer}>
      <hr className="divider" />
      <Icon variant="hero" />
      <hr className="divider" />
    </MemoBox>
  );
};

export default TrustedBySection;
