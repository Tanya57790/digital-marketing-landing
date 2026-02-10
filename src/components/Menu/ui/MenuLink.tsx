'use client';

import Link from 'next/link';
import { styled, SxProps, Theme, Typography, ListItem, List, Divider } from '@mui/material';
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
  const divider = variant === 'mobileLink' ? <Divider /> : '';

  return (
    <List sx={sx}>
      {divider}
      {items.map((item) => {
        return (
          <ListItem key={item.id} sx={{ padding: spacingItem, width: 'auto' }}>
            <StyledLink href="#">
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '14px', md: '16px', xl: '20px' },
                  lineHeight: '100%',
                }}
              >
                {item.name}
              </Typography>
              {divider}
            </StyledLink>
          </ListItem>
        );
      })}
    </List>
  );
};

export default MenuLink;
