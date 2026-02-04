'use client';

import { styled, Box, Divider } from '@mui/material';
import { PortfolioImage } from '@/components/PortfolioImage';
import { PortfolioDescription } from '@/components/PortfolioDescription';

const BackgroundImage = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '370px',
  right: '40%',
  height: '300px',
  width: '200px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right top',
  zIndex: -1,
  backgroundImage: 'url(/assets/images/dots_d.png)',
  backgroundSize: 'contain',
  transform: 'rotate(30deg)',
  opacity: 0.1,
  [theme.breakpoints.up(321)]: {
    width: '250px',
    right: '20%',
  },
  [theme.breakpoints.up('sm')]: {
    top: '70px',
    right: '12%',
    width: '300px',
  },
  [theme.breakpoints.up('md')]: {
    top: '120px',
    right: '10%',
  },
  [theme.breakpoints.up('lg')]: {
    top: '140px',
    width: '600px',
  },
  [theme.breakpoints.up('xl')]: {
    top: '160px',
    right: '4%',
    width: '700px',
    height: '350px',
  },
  [theme.breakpoints.up('desktop')]: {
    top: '220px',
    right: '4%',
    width: '1000px',
    height: '500px',
  },
}));

const PortfolioSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        marginTop: {
          xs: '44px',
          sm: '56px',
          md: '73px',
          lg: '85px',
          xl: '66px',
          desktop: '246px',
        },
      }}
    >
      <Divider
        sx={{ margin: { xs: '0 -20px', md: '0 -30px', lg: '0 -50px', desktop: '0 -60px' } }}
      />
      <BackgroundImage />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: { sm: 'space-between' },
          width: { sm: '560px', md: '840px', lg: '1100px', desktop: '100%' },
          margin: { xs: '0 auto', desktop: 'unset' },
          alignItems: 'center',
          padding: { xs: '30px 0px', lg: '50px 0px', desktop: '80px 0px' },
        }}
      >
        <PortfolioImage />
        <Box
          sx={{
            height: { xs: '400px', md: '450px', lg: 'auto' },
            width: { xs: '249px', sm: '250px', md: '330px', lg: '440px', desktop: '750px' },
          }}
        >
          <PortfolioDescription />
        </Box>
      </Box>
      <Divider
        sx={{ margin: { xs: '0 -20px', md: '0 -30px', lg: '0 -50px', desktop: '0 -60px' } }}
      />
    </Box>
  );
};

export default PortfolioSection;
