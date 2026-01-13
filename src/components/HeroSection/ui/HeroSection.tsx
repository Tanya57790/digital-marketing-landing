'use client';

import { styled, useTheme, Typography, Grid, Box } from '@mui/material';
import { Button } from '@/components/Button';

const typographyItems = {
  title: 'Boost your email marketing results!',
  text: 'We help B2C brands grow their email-attributed revenue',
};

const BackgroundImage = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '256px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right top',
  zIndex: -1,
  backgroundImage: 'url(/assets/images/background-red_m.png)',
  [theme.breakpoints.up('sm')]: {
    backgroundImage: 'url(/assets/images/background-red_d.png)',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    height: '350px',
    backgroundPosition: 'unset',
  },
  [theme.breakpoints.up('md')]: {
    height: '608px',
  },
  [theme.breakpoints.up('xl')]: {
    height: '720px',
  },
  [theme.breakpoints.up('desktop')]: {
    height: '747px',
  },
}));

const AccentText = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box>
      <BackgroundImage
        sx={{ marginLeft: { xs: '-20px', md: '-30px', lg: '-50px', desktop: '-60px' } }}
      />
      <Box
        sx={{
          paddingTop: { xs: '40px', sm: '100px', md: '150px', lg: '143px' },
          width: 'min-content',
        }}
      >
        <Grid
          display="grid"
          gap="10px"
          sx={{ width: { xs: '270px', sm: '370px', md: '650px', lg: '800px', desktop: '1310px' } }}
        >
          <Box>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: theme.palette.primary.contrastText,
                fontSize: { sm: '40px', md: '55px', lg: '72px', xl: '84px', desktop: '128px' },
                letterSpacing: { desktop: '0.2px' },
                fontWeight: 700,
                lineHeight: '120%',
              }}
            >
              <AccentText>{typographyItems.title.split(' ')[0]}</AccentText>
              {` ${typographyItems.title.split(' ').slice(1).join(' ')}`}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              lineHeight: { xs: '120%', desktop: '100%' },
              letterSpacing: { xs: '-0.1px', desktop: '-0.2px' },
              width: { xs: '185px', sm: '100%' },
              fontSize: { sm: '15px', md: '25px', desktop: '32px' },
              fontWeight: 300,
            }}
          >
            {typographyItems.text}
          </Typography>
          <Box sx={{ paddingTop: { xs: '10px', md: '15px', desktop: '32px' } }}>
            <Button variantButton="primary" />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
