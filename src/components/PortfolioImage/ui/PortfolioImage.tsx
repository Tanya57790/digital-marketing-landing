'use client';

import { getImageProps } from 'next/image';
import { styled, Box } from '@mui/material';

const StyledImg = styled('img')({
  width: '100%',
  height: 'auto',
});

const PortfolioImage = () => {
  const common = { sizes: '100vw', quality: 85, alt: 'Portfolio image' };
  const {
    props: { srcSet: mobileSrcSet, ...restMobile },
  } = getImageProps({
    src: '/assets/images/commercial-cards_m.png',
    width: 258,
    height: 280,
    ...common,
  });
  const {
    props: { srcSet: tabletSrcSet, ...restTablet },
  } = getImageProps({
    src: '/assets/images/commercial-cards_t.png',
    width: 487,
    height: 448,
    ...common,
  });
  const {
    props: { srcSet: laptopSrcSet, ...restLaptop },
  } = getImageProps({
    src: '/assets/images/commercial-cards_l.png',
    width: 600,
    height: 552,
    ...common,
  });
  const {
    props: { srcSet: desktopSrcSet, ...restDesktop },
  } = getImageProps({
    src: '/assets/images/commercial-cards_d.png',
    width: 887,
    height: 815,
    ...common,
  });
  return (
    <Box
      sx={{
        width: {
          xs: restMobile.width,
          md: restTablet.width,
          lg: restLaptop.width,
          desktop: restDesktop.width,
        },
      }}
    >
      <picture>
        <source media="(max-width: 899px)" srcSet={mobileSrcSet} />
        <source media="(min-width: 900px)" srcSet={tabletSrcSet} />
        <source media="(min-width: 1200px)" srcSet={laptopSrcSet} />
        <source media="(min-width: 1920px)" srcSet={desktopSrcSet} />
        <StyledImg {...restMobile} alt={common.alt} role="img" />
      </picture>
    </Box>
  );
};

export default PortfolioImage;
