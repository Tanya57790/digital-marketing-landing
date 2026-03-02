'use client';

import { styled } from '@mui/material/styles';
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
      <hr className="divider" />
      <Container>
        <Card variantCard="subscribe" />
      </Container>
    </>
  );
};

export default SubscriptionSection;
