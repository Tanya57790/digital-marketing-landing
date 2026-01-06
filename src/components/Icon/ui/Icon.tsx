'use client';

import Image from 'next/image';
import { Box } from '@mui/material';
import { HeroProps, FooterProps } from './interfaces';
import { heroData, footerData } from './data';
import { useMemo } from 'react';

interface IconProps {
  variant?: 'hero' | 'footer';
}

const sizes = {
  heroGap: { xs: '20px', sm: '30px', lg: '30px 50px', desktop: '40px 60px' },
  footerGap: { xs: '40px' },
  heroColumns: {
    xs: '1fr 1fr 1fr',
    desktop: 'repeat(auto-fit, minmax(250px, 1fr))',
  },
  footerColumns: { xs: '40px 40px 40px' },
  heroWidth: 'auto',
  footerWidth: { xs: 'max-content' },
};

const Icon = ({ variant }: IconProps) => {
  const { heroGap, footerGap, heroColumns, footerColumns, heroWidth, footerWidth } = sizes;
  const items = useMemo(() => (variant === 'hero' ? heroData : footerData), [variant]);

  return (
    <Box
      sx={{
        display: 'grid',
        gap: variant === 'hero' ? heroGap : footerGap,
        gridTemplateColumns: variant === 'hero' ? heroColumns : footerColumns,
        gridAutoFlow: { desktop: 'column' },
        width: variant === 'hero' ? heroWidth : footerWidth,
        justifyItems: 'center',
        alignItems: 'center',
      }}
    >
      {items.map((item) => {
        const { mobile, tablet, laptop, desktop } = item as HeroProps;
        const { size } = item as FooterProps;

        return (
          <Box
            key={item.id}
            sx={{
              position: 'relative',
              width: {
                xs: variant === 'hero' ? mobile.width : size,
                md: variant === 'hero' ? tablet.width : size,
                lg: variant === 'hero' ? laptop.width : size,
                desktop: variant === 'hero' ? desktop.width : size,
              },
              height: {
                xs: variant === 'hero' ? mobile.height : size,
                md: variant === 'hero' ? tablet.width : size,
                lg: variant === 'hero' ? laptop.height : size,
                desktop: variant === 'hero' ? desktop.height : size,
              },
            }}
          >
            <Image
              key={`${item.id}--${variant}-link`}
              fill
              loading={item.loading}
              sizes={`
                ${item.src}?w=640&q=75 640w, 
                ${item.src}?w=750&q=75 750w, 
                ${item.src}?w=828&q=75 828w, 
                ${item.src}?w=1080&q=75 1080w, 
                ${item.src}?w=1200&q=75 1200w, 
                ${item.src}?w=1920&q=75 1920w, 
                ${item.src}?w=2048&q=75 2048w, 
                ${item.src}?w=3840&q=75 3840w
              `}
              src={item.src}
              alt={`${item?.name.charAt(0).toUpperCase() + item?.name.slice(1)} logo`}
              role="img"
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Icon;
