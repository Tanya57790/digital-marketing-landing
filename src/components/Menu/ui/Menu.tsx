'use client';

import { useState } from 'react';
import Link from 'next/link';
import { styled, Typography as ListItem, useTheme, Divider, List, Box } from '@mui/material';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/Button';
import MenuIcon from './MenuIcon';
import BurgerMenu from './BurgerMenu';
import { menuItem } from './data';

const Nav = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

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

const Menu = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuItems = menuItem.filter((item) => item.id !== 4);

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };

  return (
    <>
      <Nav
        sx={{
          height: { xs: '22px', md: '43px' },
          padding: { xs: '20px 0px 20px 0px', desktop: '30px 0px 30px 0px' },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Logo variant="header" />
          <MenuIcon
            sx={{ display: { xs: 'block', md: 'none' } }}
            variant="burger"
            onClick={toggleDrawer(true)}
          />
          <List
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'space-around',
              paddingLeft: '60px',
            }}
          >
            {menuItems.map((item) => {
              return (
                <StyledLink key={item.id} href="#">
                  <ListItem
                    variant="body1"
                    sx={{
                      fontSize: { md: '16px', xl: '20px' },
                      padding: theme.spacing(0, 3),
                      lineHeight: '100%',
                    }}
                  >
                    {item.name}
                  </ListItem>
                </StyledLink>
              );
            })}
          </List>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button variantButton="contact" />
        </Box>
      </Nav>
      <Divider />
      {isOpen && (
        <BurgerMenu toggleDrawer={toggleDrawer} onClose={toggleDrawer(false)} open={isOpen} />
      )}
    </>
  );
};

export default Menu;
