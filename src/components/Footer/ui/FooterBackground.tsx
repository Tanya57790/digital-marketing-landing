'use client';

import { styled } from '@mui/material';

const StyledBackground = styled('div')(({ theme }) => ({
  display: 'contents',
  '& > div': {
    position: 'relative',
    zIndex: 1,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    backgroundColor: 'rgb(33, 33, 33, 1)',
    inset: 0,
    zIndex: -1,
    margin: '0px -20px',
    [theme.breakpoints.up('md')]: {
      margin: '0px -30px',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0px -50px',
    },
    [theme.breakpoints.up('desktop')]: {
      margin: '0px -60px',
    },
  },
}));

const FooterBackground = () => {
  return <StyledBackground />;
};

export default FooterBackground;
