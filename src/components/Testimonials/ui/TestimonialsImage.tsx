'use client';

import { getImageProps } from 'next/image';
import { styled, Box } from '@mui/material';
import { Triangle } from '@/components/Triangle';

const StyledImg = styled('img')({
  width: '100%',
  height: 'auto',
});

const TestimonialsImage = () => {
  const common = { sizes: '100vw', quality: 85, alt: 'Meeting image' };
  const {
    props: { srcSet: mobileSrcSet, ...restMobile },
  } = getImageProps({
    src: '/assets/images/meeting_m.png',
    width: 300,
    height: 245,
    ...common,
  });
  const {
    props: { srcSet: desktopSrcSet, ...restDesktop },
  } = getImageProps({
    src: '/assets/images/meeting_d.png',
    width: 943,
    height: 745,
    ...common,
  });
  return (
    <Box
      sx={{
        position: 'relative',
        marginTop: { xs: '20px' },
        marginRight: { xs: '-20px', md: '-30px', lg: '-50px', desktop: '-60px' },
      }}
    >
      <Triangle variantTriangle="one" />
      <Triangle variantTriangle="two" />
      <Box
        sx={{
          width: {
            xs: restMobile.width,
            desktop: restDesktop.width,
          },
          height: {
            xs: restMobile.height,
            desktop: restDesktop.height,
          },
        }}
      >
        <picture>
          <source media="(max-width: 1200px)" srcSet={mobileSrcSet} />
          <source media="(min-width: 1920px)" srcSet={desktopSrcSet} />
          <StyledImg {...restMobile} alt={common.alt} role="img" />
        </picture>
      </Box>
    </Box>
  );
};

export default TestimonialsImage;
