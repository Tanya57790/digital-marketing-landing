'use client';

import { styled } from '@mui/material';

const ArrowBaseStyles = styled('span')(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  borderTopWidth: 0,
  position: 'absolute',
  top: '13px',
  width: '13px',
  height: '14px',
  [theme.breakpoints.up('lg')]: {
    top: '17px',
    width: '14px',
    height: '14px',
  },
  [theme.breakpoints.up('xl')]: {
    top: '21px',
    width: '16px',
    height: '16px',
  },
  [theme.breakpoints.up('desktop')]: {
    borderBottomWidth: '3px',
    top: '21px',
    width: '20px',
    height: '20px',
  },
}));

export default ArrowBaseStyles;
