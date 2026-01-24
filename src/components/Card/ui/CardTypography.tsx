'use client';

import { styled, SxProps, Theme, Typography } from '@mui/material';

type VariantTypography = {
  variantTypography?: 'card' | 'accent-h1' | 'accent-body1';
  className?: string;
  sx?: SxProps<Theme>;
  children: React.ReactNode;
};

const fontSizes = { lg: '16px', xl: '20px', desktop: '24px' };

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  lineHeight: '1.3',
}));

const AccentText = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const CardTypography = ({ variantTypography, className, sx, children }: VariantTypography) => {
  return (
    <>
      {variantTypography === 'card' && (
        <StyledTypography variant="body1" sx={sx} fontSize={fontSizes}>
          {children}
        </StyledTypography>
      )}
      {variantTypography === 'accent-body1' && (
        <AccentText
          className={className}
          sx={{
            fontSize: fontSizes,
            fontStyle: {
              xs: className === 'accent-italic' ? 'italic' : 'normal',
              desktop: 'normal',
            },
            margin:
              className === 'accent-italic'
                ? '-1px 0 0 -2px'
                : { xs: '0px', desktop: '9px 0 0 5px' },
            letterSpacing: className !== 'accent-italic' ? { desktop: '0.1px' } : 0,
          }}
        >
          {children}
        </AccentText>
      )}
      {variantTypography === 'accent-h1' && <AccentText>{children}</AccentText>}
    </>
  );
};

export default CardTypography;
