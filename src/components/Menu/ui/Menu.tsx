'use client';

import { useState } from 'react';
import { styled, useTheme, Divider, Box } from '@mui/material';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/Button';
import MenuIcon from './MenuIcon';
import MenuLink from './MenuLink';
import BurgerMenu from './BurgerMenu';

const Nav = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Menu = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
          <MenuLink
            variant="desktopLink"
            spacingItem={theme.spacing(0, 3)}
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'space-around',
              paddingLeft: '60px',
            }}
          />
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
