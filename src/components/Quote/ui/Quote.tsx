'use client';

import { styled, Box } from '@mui/material';

const Rectangle = styled('span')(({ theme }) => ({
  borderStyle: 'solid',
  borderWidth: '32px 23px 0 0',
  borderColor: `${theme.palette.primary.main}`,
}));

const Triangle = styled('span')(({ theme }) => ({
  borderStyle: 'solid',
  borderWidth: '23px 23px 0 0',
  borderColor: `${theme.palette.primary.main} transparent transparent transparent`,
}));

const Quote = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: { xs: '56px' } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Rectangle />
        <Triangle />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Rectangle />
        <Triangle />
      </Box>
    </Box>
  );
};

export default Quote;
