'use client';

import { styled, Typography } from '@mui/material';
import { titles } from './data';
import CardTypography from './CardTypography';
import type { CardVariantProps, ResponsiveProps } from './interfaces';

const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'responsiveWidth',
})<ResponsiveProps>(({ theme, responsiveWidth }) => ({
  lineHeight: '115%',
  color: theme.palette.secondary.contrastText,
  width: responsiveWidth.sm,
  [theme.breakpoints.up('md')]: {
    width: responsiveWidth.md,
    fontSize: '55px',
  },
  [theme.breakpoints.up('lg')]: {
    width: responsiveWidth.lg,
    fontSize: '72px',
  },
  [theme.breakpoints.up('xl')]: {
    width: responsiveWidth.xl,
    fontSize: '84px',
  },
  [theme.breakpoints.up('desktop')]: {
    width: responsiveWidth.desktop,
    margin: '-3px -5px 0 -5px',
    fontSize: '128px',
  },
}));

const CardTitle = ({ variantCard }: CardVariantProps) => {
  const { title, firstPartSlice, lastPartSlice, subtitle, responsiveWidth, accentIndex } =
    titles[variantCard];

  const word = title.split(' ');
  const firstPart = word.slice(firstPartSlice.start, firstPartSlice.end).join(' ');
  const accentWord = word[accentIndex] || '';
  const lastPart =
    variantCard === 'subscribe'
      ? ''
      : word.slice(lastPartSlice?.start, lastPartSlice?.end).join(' ');

  return (
    <>
      <StyledTypography
        variant="h1"
        responsiveWidth={responsiveWidth}
        sx={{ whiteSpace: 'pre-line' }}
      >
        {firstPart + ' '}
        <CardTypography variantTypography="accent-h1">
          {variantCard === 'features' ? accentWord + ' ' + word[2] : accentWord}
        </CardTypography>
        {' ' + lastPart}
      </StyledTypography>
      {variantCard === 'subscribe' && (
        <Typography
          variant="body1"
          sx={{
            margin: { xs: '10px 0 17px 3px', desktop: '28px -8px 0 -2px' },
            fontSize: { lg: '16px', xl: '20px', desktop: '24px' },
          }}
        >
          <CardTypography variantTypography="accent-body1">{subtitle}</CardTypography>
        </Typography>
      )}
    </>
  );
};

export default CardTitle;
