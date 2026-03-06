'use client';

import { useState } from 'react';
import { MemoBox } from '@/components/MuiOptimized';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/Button';
import MenuIcon from './MenuIcon';
import MenuLink from './MenuLink';
import BurgerMenu from './BurgerMenu';
import styles from './Menu.module.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
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
        </div>
        <MemoBox sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button variantButton="contact" />
        </MemoBox>
      </nav>
      <hr className="divider" />
      {isOpen && (
        <BurgerMenu toggleDrawer={toggleDrawer} onClose={toggleDrawer(false)} open={isOpen} />
      )}
    </>
  );
};

export default Menu;
