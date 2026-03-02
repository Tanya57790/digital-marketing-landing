'use client';

import styles from './FooterContainer.module.css';

type ContainerVariant = {
  variant: 'flex' | 'grid';
  children: React.ReactNode;
};

const FooterContainer = ({ variant, children }: ContainerVariant) => {
  return (
    <>
      {variant === 'flex' && <div className={styles.flexContainer}>{children}</div>}
      {variant === 'grid' && <div className={styles.gridContainer}>{children}</div>}
    </>
  );
};

export default FooterContainer;
