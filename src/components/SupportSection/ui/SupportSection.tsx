'use client';

import { MemoBox } from '@/components/MuiOptimized';
import { Card } from '@/components/Card';
import styles from './SupportSection.module.css';

const SupportSection = () => {
  return (
    <MemoBox>
      <div className={styles.backgroundImage} />
      <Card variantCard="support" />
    </MemoBox>
  );
};

export default SupportSection;
