'use client';

import { styled } from '@mui/material/styles';
import { MemoButton, MemoTypography } from '@/components/MuiOptimized';
import { ButtonVariant } from './interfaces';
import { buttonsData } from './data';

interface ButtonProps {
  variantButton: ButtonVariant;
  size?: 'small' | 'large';
  disabled?: boolean;
}

const StyledButton = styled(MemoButton, {
  shouldForwardProp: (prop) => prop !== 'variantButton',
})<ButtonProps>(({ variantButton, theme }) => ({
  background: variantButton === 'secondary' ? 'transparent' : theme.palette.primary.main,
  border: variantButton === 'secondary' ? `1px solid ${theme.palette.primary.main}` : 'none',
  color:
    variantButton === 'secondary'
      ? theme.palette.primary.main
      : theme.palette.secondary.contrastText,
  '&:hover': {
    background: variantButton === 'secondary' ? 'transparent' : '#e3303c',
    boxShadow: variantButton === 'secondary' ? '0px 0px 5px 0px' : 'none',
  },
  '&:active': {
    background: variantButton === 'secondary' ? 'transparent' : '#cf2d38',
    boxShadow: variantButton === 'secondary' ? '0px 0px 10px 0px' : 'none',
  },
}));

const Button = ({ variantButton, size, disabled }: ButtonProps) => {
  const selectedIndex = buttonsData.findIndex((button) => button.variantButton === variantButton);
  const button = buttonsData[selectedIndex];
  const { title, mobile, desktop, borderRadius } = button ?? {};

  return (
    <StyledButton
      type={variantButton === 'submit' ? 'submit' : 'button'}
      disabled={disabled}
      variantButton={variantButton}
      className={`button-${variantButton}--${size}`}
      sx={{
        width: { xs: mobile.width, desktop: desktop.width },
        height: { xs: mobile.height, desktop: desktop.height },
        borderRadius: variantButton !== 'submit' ? borderRadius : 0,
        borderTopRightRadius: variantButton === 'submit' ? borderRadius : 'none',
        borderBottomRightRadius: variantButton === 'submit' ? borderRadius : 'none',
        [`&.button-${variantButton}--small`]: {
          width: mobile.width,
          height: mobile.height,
        },
        [`&.button-${variantButton}--large`]: {
          width: desktop.width,
          height: desktop.height,
        },
        [`&.button-${variantButton}--small > span`]: {
          fontSize: mobile.fontSize,
        },
        [`&.button-${variantButton}--large > span`]: {
          fontSize: desktop.fontSize,
        },
      }}
    >
      <MemoTypography
        variant="button"
        sx={{
          fontSize: { xs: mobile.fontSize, desktop: desktop.fontSize },
        }}
      >
        {title}
      </MemoTypography>
    </StyledButton>
  );
};

export default Button;
