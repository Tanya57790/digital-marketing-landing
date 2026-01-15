'use client';

import { Box, Divider } from '@mui/material';
import { Icon } from '@/components/Icon';

const TrustedBySection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        marginTop: {
          xs: '39px',
          sm: '60px',
          md: '215px',
          lg: '181px',
          xl: '264px',
          desktop: '150px',
        },
      }}
    >
      <Divider
        sx={{ margin: { xs: '0 -20px', md: '0 -30px', lg: '0 -50px', desktop: '0 -60px' } }}
      />
      <Icon variant="hero" />
    </Box>
  );
};

export default TrustedBySection;
