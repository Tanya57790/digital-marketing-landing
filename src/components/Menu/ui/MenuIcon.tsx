'use client';

import { styled, type Theme, useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

interface MenuIconProps {
  variant: 'burger' | 'cross';
  onClick?: () => void;
  sx?: SxProps<Theme>;
}

const StyledIcon = styled('svg')({
  cursor: 'pointer',
  position: 'relative',
  right: 0,
});

const MenuIcon = ({ variant, onClick, sx }: MenuIconProps) => {
  const theme = useTheme();

  return (
    <>
      {variant === 'burger' && (
        <StyledIcon
          onClick={onClick}
          sx={sx}
          width="25"
          height="16"
          viewBox="0 0 25 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <rect width="25" height="2" rx="1" fill={theme.palette.primary.main} />
          <rect y="7" width="25" height="2" rx="1" fill={theme.palette.primary.main} />
          <rect y="14" width="25" height="2" rx="1" fill={theme.palette.primary.main} />
        </StyledIcon>
      )}
      {variant === 'cross' && (
        <StyledIcon
          sx={{ position: 'absolute', top: '20px', right: '10px' }}
          onClick={onClick}
          width="25"
          height="16"
          viewBox="0 0 25 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <rect
            width="25"
            height="2"
            rx="1"
            transform="rotate(30)"
            fill={theme.palette.primary.contrastText}
          />
          <rect
            y="7"
            width="25"
            height="2"
            rx="1"
            transform="rotate(330, 10, 10)"
            fill={theme.palette.primary.contrastText}
          />
        </StyledIcon>
      )}
    </>
  );
};

export default MenuIcon;
