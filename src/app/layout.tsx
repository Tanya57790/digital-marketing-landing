import React from 'react';
import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import { theme } from '@/theme';
import '@fontsource/roboto-condensed/700.css';

export const metadata: Metadata = {
  title: 'Boost your email marketing results!',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
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
              <main>{children}</main>
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
