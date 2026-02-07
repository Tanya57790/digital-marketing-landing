'use client';

import { styled, Typography, Grid } from '@mui/material';
import TestimonialsQuoteCard from './TestimonialsQuoteCard';
import TestimonialsImage from './TestimonialsImage';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '30px 0',
  [theme.breakpoints.up('sm')]: {
    alignItems: 'center',
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    padding: '50px 0',
    alignItems: 'flex-start',
  },
}));

const FlexContainer = styled('div')(({ theme }) => ({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    flexDirection: 'row',
  },
}));

const Testimonials = () => {
  return (
    <Container>
      <FlexContainer>
        <Grid sx={{ display: 'grid', gap: '20px' }}>
          <Typography
            variant="h1"
            sx={{
              paddingBottom: { xs: '30px', lg: '50px' },
              fontSize: { md: '55px', xl: '84px', desktop: '128px' },
            }}
          >
            Testimonials
          </Typography>
          <TestimonialsQuoteCard />
        </Grid>
        <TestimonialsImage />
      </FlexContainer>
    </Container>
  );
};

export default Testimonials;
