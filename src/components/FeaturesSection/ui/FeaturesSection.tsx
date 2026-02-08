'use client';

import { styled, Box } from '@mui/material';
import { Card } from '@/components/Card';

const BackgroundImage = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '716px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left top',
  zIndex: -1,
  backgroundImage: 'url(/assets/images/background-grey-2_m.png)',
  marginLeft: '-20px',
  [theme.breakpoints.up('sm')]: {
    height: '500px',
  },
  [theme.breakpoints.up('md')]: {
    height: '430px',
    marginLeft: '-30px',
  },
  [theme.breakpoints.up('lg')]: {
    height: '550px',
    marginLeft: '-50px',
  },
  [theme.breakpoints.up('desktop')]: {
    height: '990px',
    marginLeft: '-60px',
    backgroundImage: 'url(/assets/images/background-grey-2_d.png)',
  },
}));

const FeaturesSection = () => {
  return (
    <Box>
      <BackgroundImage />
      <Card variantCard="features" />
    </Box>
  );
};

export default FeaturesSection;
