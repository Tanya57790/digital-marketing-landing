'use client';

import { styled, Typography } from '@mui/material';
import { Logo } from '@/components/Logo';
import { Icon } from '@/components/Icon';
import { linkItems } from './data';
import FooterContainer from './FooterContainer';
import FooterBackground from './FooterBackground';

const StyledFooter = styled('footer')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px 0px',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const Link = styled('a')(({ theme }) => ({
  fontWeight: 300,
  color: theme.palette.secondary.contrastText,
  textDecoration: 'none',
  [theme.breakpoints.up('lg')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.up('desktop')]: {
    fontSize: '24px',
  },
}));

const Footer = () => {
  return (
    <StyledFooter>
      <FooterBackground />
      <FooterContainer variant="flex">
        <Logo variant="footer" />
        <FooterContainer variant="grid">
          {linkItems.map((item) => (
            <Link key={item.id} href={item.href}>
              <Typography>{item.text}</Typography>
            </Link>
          ))}
        </FooterContainer>
      </FooterContainer>
      <Icon variant="footer" />
    </StyledFooter>
  );
};

export default Footer;
