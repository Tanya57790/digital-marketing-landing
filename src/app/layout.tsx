import React from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { theme } from '@/theme';
import '@/styles/global.css';

const Header = dynamic(() => import('@/components/Header').then((mod) => mod.Header), {
  ssr: true,
});

const robotoCondensed = localFont({
  src: '../../public/assets/fonts/roboto-condensed/roboto-condensed-bold.woff2',
  weight: '700',
  style: 'normal',
  display: 'block',
  variable: '--font-roboto-condensed',
});

const roboto = localFont({
  src: [
    {
      path: '../../public/assets/fonts/roboto/roboto-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/roboto/roboto-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/roboto/roboto-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/roboto/roboto-regular-italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/assets/fonts/roboto/roboto-medium-italic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/assets/fonts/roboto/roboto-bold-condensed.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'block',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Boost your email marketing results!',
  description:
    "Boost your B2C brand's email revenue with proven strategies, exper deliverability support, and inspiring creative campaignes",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${robotoCondensed.variable} ${roboto.variable}`}>
      <head>
        <link
          rel="preload"
          href="/assets/images/background-red_d.webp"
          as="image"
          fetchPriority="high"
        />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: false }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container
              maxWidth="desktop"
              sx={{
                padding: { xs: '0px 20px', md: '0px 30px', lg: '0px 50px', desktop: '0px 60px' },
              }}
            >
              <Header />
              <main>{children}</main>
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
