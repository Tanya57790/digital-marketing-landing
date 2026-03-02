'use client';

import Link from 'next/link';
import { styled, SxProps, Theme } from '@mui/material/styles';
import { MemoList, MemoListItem, MemoTypography } from '@/components/MuiOptimized';
import { menuItem } from './data';

interface MenuLinkProps {
  sx?: SxProps<Theme>;
  spacingItem?: { md: string; lg: string } | string;
  variant: 'mobileLink' | 'desktopLink';
}

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.primary.main,
  },
  '&:active': {
    color: '#c82b36',
  },
}));

const MenuLink = ({ spacingItem, sx, variant }: MenuLinkProps) => {
  const items = variant === 'desktopLink' ? menuItem.filter((item) => item.id !== 4) : menuItem;
  const divider = variant === 'mobileLink' ? <hr className="divider" /> : '';

  return (
    <MemoList sx={sx}>
      {divider}
      {items.map((item) => {
        return (
          <MemoListItem key={item.id} sx={{ padding: spacingItem, width: 'auto' }}>
            <StyledLink href="#">
              <MemoTypography
                variant="body1"
                sx={{
                  fontSize: { xs: '14px', md: '16px', xl: '20px' },
                  lineHeight: '100%',
                }}
              >
                {item.name}
              </MemoTypography>
              {divider}
            </StyledLink>
          </MemoListItem>
        );
      })}
    </MemoList>
  );
};

export default MenuLink;
