'use client';

import { MemoBox } from '@/components/MuiOptimized';
import { Card } from '@/components/Card';
import styles from './FeaturesSection.module.css';

const FeaturesSection = () => {
  return (
    <MemoBox>
      <div className={styles.backgroundImage} />
      <Card variantCard="features" />
    </MemoBox>
  );
};

export default FeaturesSection;
