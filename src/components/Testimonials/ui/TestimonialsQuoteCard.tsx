'use client';

import { styled, useTheme, Box, Typography } from '@mui/material';
import { testimonialsInfo } from './data';
import { Quote } from '@/components/Quote';

const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '280px',
  padding: '25px 20px',
  border: '1px solid #D1D1D1',
  boxSizing: 'border-box',
  borderRadius: '11px',
  boxShadow: '1px 1px 33px rgba(0, 0, 0, 0.25)',
  [theme.breakpoints.up('sm')]: {
    width: '500px',
  },
  [theme.breakpoints.up(1100)]: {
    width: '650px',
  },
  [theme.breakpoints.up(1350)]: {
    width: '850px',
  },
  [theme.breakpoints.up('desktop')]: {
    width: '799px',
  },
}));

const CardInfo = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: '10px',
  width: '164px',
  [theme.breakpoints.up('sm')]: {
    width: '370px',
  },
  [theme.breakpoints.up(1100)]: {
    width: '510px',
  },
  [theme.breakpoints.up(1350)]: {
    width: '700px',
  },
  [theme.breakpoints.up('desktop')]: {
    width: '660px',
  },
}));

const fontStyles = {
  fontWeight: 500,
  fontSize: { lg: '16px', xl: '20px' },
  fontStyle: 'italic',
};

const TestimonialsQuoteCard = () => {
  const theme = useTheme();

  return (
    <>
      {testimonialsInfo.map((item) => (
        <Card key={item.id}>
          <Quote />
          <CardInfo>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 300,
                ...fontStyles.fontSize,
                whiteSpace: { xs: 'pre-line', sm: 'normal' },
              }}
            >
              {item.quote}
            </Typography>
            <Box>
              <Typography variant="body1" sx={{ color: theme.palette.primary.main, ...fontStyles }}>
                {item.userName}
              </Typography>
              <Typography variant="body1" sx={{ ...fontStyles }}>
                {item.profession}
              </Typography>
            </Box>
          </CardInfo>
        </Card>
      ))}
    </>
  );
};

export default TestimonialsQuoteCard;
