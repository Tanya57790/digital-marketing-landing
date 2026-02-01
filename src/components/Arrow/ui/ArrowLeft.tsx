'use client';

import { styled } from '@mui/material';
import ArrowBaseStyles from './ArrowBaseStyles';

const StyledArrowLeft = styled(ArrowBaseStyles)(({ theme }) => ({
  right: '8px',
  transform: 'rotate(45deg)',
  borderRightWidth: 0,
  [theme.breakpoints.up('lg')]: {
    right: '12px',
  },
  [theme.breakpoints.up('xl')]: {
    right: '14px',
  },
  [theme.breakpoints.up('desktop')]: {
    borderLeftWidth: '3px',
    right: '16px',
  },
}));

const ArrowLeft = () => {
  return <StyledArrowLeft />;
};

export default ArrowLeft;
