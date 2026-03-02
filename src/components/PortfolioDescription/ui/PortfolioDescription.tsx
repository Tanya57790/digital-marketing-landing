'use client';

import { Button } from '@/components/Button';
import { PortfolioButton } from '@/components/PortfolioButton';
import { PortfolioList } from '@/components/PortfolioList';
import { Arrow } from '@/components/Arrow';
import { data } from './data';
import { useState } from 'react';
import styles from './PortfolioDescription.module.css';

const PortfolioDescription = () => {
  const [page, setPage] = useState(1);
  const PER_PAGE = 1;

  const totalPages = Math.ceil(data.length / PER_PAGE);

  const start = (page - 1) * PER_PAGE;
  const end = page * PER_PAGE;

  const pageItems = data.slice(start, end);

  return (
    <div className={styles.container}>
      <PortfolioList pageItems={pageItems} />
      <Button variantButton="secondary" />
      <div className={styles.buttonContainer}>
        <PortfolioButton
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
          ariaLabel="button-left"
        >
          <Arrow variantArrow="left" />
        </PortfolioButton>
        <PortfolioButton
          onClick={() => setPage(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          ariaLabel="button-right"
        >
          <Arrow variantArrow="right" />
        </PortfolioButton>
      </div>
    </div>
  );
};

export default PortfolioDescription;
