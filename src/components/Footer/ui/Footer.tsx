'use client';

import { styled } from '@mui/material/styles';
import { MemoTypography } from '@/components/MuiOptimized';
import { Logo } from '@/components/Logo';
import { Icon } from '@/components/Icon';
import { linkItems } from './data';
import FooterContainer from './FooterContainer';
import FooterBackground from './FooterBackground';
import styles from './Footer.module.css';

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
    <footer className={styles.footer}>
      <FooterBackground />
      <FooterContainer variant="flex">
        <Logo variant="footer" />
        <FooterContainer variant="grid">
          {linkItems.map((item) => (
            <Link key={item.id} href={item.href}>
              <MemoTypography>{item.text}</MemoTypography>
            </Link>
          ))}
        </FooterContainer>
      </FooterContainer>
      <Icon variant="footer" />
    </footer>
  );
};

export default Footer;
