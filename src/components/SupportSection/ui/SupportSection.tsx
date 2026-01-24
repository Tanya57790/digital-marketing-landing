'use client';

import { styled, Box } from '@mui/material';
import { Card } from '@/components/Card';

const BackgroundImage = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '466px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left top',
  zIndex: -1,
  backgroundImage: 'url(/assets/images/background-grey-1_m.png)',
  marginLeft: '-20px',
  [theme.breakpoints.up('sm')]: {
    height: '400px',
  },
  [theme.breakpoints.up('md')]: {
    height: '350px',
    marginLeft: '-30px',
  },
  [theme.breakpoints.up('lg')]: {
    height: '400px',
    marginLeft: '-50px',
  },
  [theme.breakpoints.up('desktop')]: {
    height: '700px',
    marginLeft: '-60px',
    backgroundImage: 'url(/assets/images/background-grey-1_d.png)',
  },
}));

const SupportSection = () => {
  return (
    <Box>
      <BackgroundImage />
      <Card variantCard="subscribe" />
    </Box>
  );
};

export default SupportSection;
