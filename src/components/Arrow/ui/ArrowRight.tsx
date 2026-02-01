'use client';

import { styled } from '@mui/material';
import ArrowBaseStyles from './ArrowBaseStyles';

const StyledArrowRight = styled(ArrowBaseStyles)(({ theme }) => ({
  left: '8px',
  transform: 'rotate(315deg)',
  borderLeftWidth: 0,
  [theme.breakpoints.up('lg')]: {
    left: '12px',
  },
  [theme.breakpoints.up('xl')]: {
    left: '14px',
  },
  [theme.breakpoints.up('desktop')]: {
    borderRightWidth: '3px',
    left: '16px',
  },
}));

const ArrowRight = () => {
  return <StyledArrowRight />;
};

export default ArrowRight;
