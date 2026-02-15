'use client';

import { styled, Box } from '@mui/material';
import { Button } from '@/components/Button';
import { PortfolioButton } from '@/components/PortfolioButton';
import { PortfolioList } from '@/components/PortfolioList';
import { Arrow } from '@/components/Arrow';
import { data } from './data';
import { useState } from 'react';

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '136px',
  [theme.breakpoints.up('desktop')]: {
    width: '173px',
  },
}));

const PortfolioDescription = () => {
  const [page, setPage] = useState(1);
  const PER_PAGE = 1;

  const totalPages = Math.ceil(data.length / PER_PAGE);

  const start = (page - 1) * PER_PAGE;
  const end = page * PER_PAGE;

  const pageItems = data.slice(start, end);

  return (
    <Box sx={{ display: 'grid', gap: '15px', width: 'max-content' }}>
      <PortfolioList pageItems={pageItems} />
      <Button variantButton="secondary" />
      <ButtonContainer>
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
      </ButtonContainer>
    </Box>
  );
};

export default PortfolioDescription;
