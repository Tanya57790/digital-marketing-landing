'use client';

import { styled, Divider } from '@mui/material';
import { Card } from '@/components/Card';

const Container = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.grey[400],
  paddingBottom: '60px',
  margin: '0px -20px',
  [theme.breakpoints.up('md')]: {
    margin: '0px -30px',
  },
  [theme.breakpoints.up('lg')]: {
    margin: '0px -50px',
  },
  [theme.breakpoints.up('xl')]: {
    paddingBottom: '90px',
  },
  [theme.breakpoints.up('desktop')]: {
    margin: '0px -60px',
    paddingBottom: '150px',
  },
}));

const SubscriptionSection = () => {
  return (
    <>
      <Divider
        sx={{ margin: { xs: '0 -20px', md: '0 -30px', lg: '0 -50px', desktop: '0 -60px' } }}
      />
      <Container>
        <Card variantCard="subscribe" />
      </Container>
    </>
  );
};

export default SubscriptionSection;
