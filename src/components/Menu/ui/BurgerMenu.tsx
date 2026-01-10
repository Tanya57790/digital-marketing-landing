'use client';

import { useEffect, useState } from 'react';
import { styled, useTheme, Drawer } from '@mui/material';
import MenuIcon from './MenuIcon';
import MenuLink from './MenuLink';

interface MenuProps {
  toggleDrawer: (newOpen: boolean) => () => void;
  onClose: () => void;
  open: boolean;
}

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '260px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '20px 10px 0px 10px',
    background: theme.palette.secondary.contrastText,
  },
}));

const BurgerMenu = ({ toggleDrawer, onClose, open }: MenuProps) => {
  const theme = useTheme();
  const [isLocalOpen, setIsLocalOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsLocalOpen(open);
  }, [open]);

  return (
    <>
      <StyledDrawer
        variant="temporary"
        anchor="right"
        open={isLocalOpen}
        onClose={onClose}
        transitionDuration={500}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <MenuLink
          variant="mobileLink"
          spacingItem={theme.spacing(1.5, 0, 1.5, 2.5)}
          sx={{
            position: 'absolute',
            left: 0,
            width: '100%',
            paddingTop: theme.spacing(3),
          }}
        />
        <MenuIcon onClick={toggleDrawer(!open)} variant="cross" />
      </StyledDrawer>
    </>
  );
};

export default BurgerMenu;
