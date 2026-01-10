'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { styled, useTheme, Typography as ListItem, Drawer, Divider } from '@mui/material';
import MenuIcon from './MenuIcon';
import { menuItem } from './data';

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

const List = styled('ul')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  width: '100%',
  padding: theme.spacing(1.5, 0, 0, 0),
}));

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
        <List>
          <Divider />
          {menuItem.map((item) => {
            return (
              <StyledLink key={item.id} href="#">
                <ListItem
                  variant="body1"
                  sx={{
                    padding: theme.spacing(1.5, 0, 1.5, 2.5),
                    listStyleType: 'none',
                    lineHeight: '100%',
                    fontWeight: 400,
                  }}
                >
                  {item.name}
                </ListItem>
                <Divider />
              </StyledLink>
            );
          })}
        </List>
        <MenuIcon onClick={toggleDrawer(!open)} variant="cross" />
      </StyledDrawer>
    </>
  );
};

export default BurgerMenu;
