'use client';

import { getImageProps } from 'next/image';
import { styled } from '@mui/material/styles';
import { MemoBox } from '@/components/MuiOptimized';

const StyledImg = styled('img')({
  width: '100%',
  height: 'auto',
});

const PortfolioImage = () => {
  const common = { sizes: '100vw', quality: 85, alt: 'Portfolio image' };
  const {
    props: { srcSet: mobileSrcSet, ...restMobile },
  } = getImageProps({
    src: '/assets/images/commercial-cards_m.webp',
    width: 280,
    height: 258,
    ...common,
  });
  const {
    props: { srcSet: tabletSrcSet, ...restTablet },
  } = getImageProps({
    src: '/assets/images/commercial-cards_t.webp',
    width: 487,
    height: 448,
    ...common,
  });
  const {
    props: { srcSet: laptopSrcSet, ...restLaptop },
  } = getImageProps({
    src: '/assets/images/commercial-cards_l.webp',
    width: 600,
    height: 552,
    ...common,
  });
  const {
    props: { srcSet: desktopSrcSet, ...restDesktop },
  } = getImageProps({
    src: '/assets/images/commercial-cards_d.webp',
    width: 887,
    height: 815,
    ...common,
  });
  return (
    <MemoBox
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
    </MemoBox>
  );
};

export default PortfolioImage;
