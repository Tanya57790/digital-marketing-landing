'use client';

import { useState } from 'react';
import { styled, Divider, Box } from '@mui/material';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/Button';
import MenuIcon from './MenuIcon';
import MenuLink from './MenuLink';
import BurgerMenu from './BurgerMenu';

const Nav = styled('nav')({
  display: 'flex',
  alignItems: 'center',
});

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };

  return (
    <>
      <Nav
        sx={{
          height: { xs: '62px', desktop: '103px' },
          padding: { xs: '20px 0px 20px 0px', desktop: '30px 0px 30px 0px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: { xs: 'space-between', md: 'flex-start' },
          }}
        >
          <Logo variant="header" />
          <MenuIcon
            sx={{ display: { xs: 'block', md: 'none' } }}
            variant="burger"
            onClick={toggleDrawer(true)}
          />
          <MenuLink
            variant="desktopLink"
            spacingItem={{ md: '0px 30px 0px 0px', lg: '0px 71px 0px 0px' }}
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'space-around',
              paddingLeft: { md: '50px', lg: '119px' },
            }}
          />
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button variantButton="contact" />
        </Box>
      </Nav>
      <Divider
        sx={{ margin: { xs: '0 -20px', md: '0 -30px', lg: '0 -50px', desktop: '0 -60px' } }}
      />
      {isOpen && (
        <BurgerMenu toggleDrawer={toggleDrawer} onClose={toggleDrawer(false)} open={isOpen} />
      )}
    </>
  );
};

export default Menu;
