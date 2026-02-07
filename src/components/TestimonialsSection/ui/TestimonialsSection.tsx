'use client';

import { Box, Divider } from '@mui/material';
import { Testimonials } from '@/components/Testimonials';

const TestimonialsSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        marginTop: {
          xs: '56px',
          sm: '60px',
          md: '57px',
          lg: '119px',
          xl: '62px',
          desktop: '256px',
        },
      }}
    >
      <Divider
        sx={{ margin: { xs: '0 -20px', md: '0 -30px', lg: '0 -50px', desktop: '0 -60px' } }}
      />
      <Testimonials />
    </Box>
  );
};

export default TestimonialsSection;
