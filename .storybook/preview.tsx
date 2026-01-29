import React from 'react';
import { styled } from '@mui/material';
import type { Preview } from '@storybook/nextjs-vite';
import { http, HttpResponse } from 'msw';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { theme } from '../src/theme';
import { MINIMAL_VIEWPORTS } from 'storybook/viewport';
import '@fontsource/roboto-condensed/700.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/300.css';

initialize();

const customViewports = {
  mobile1: MINIMAL_VIEWPORTS.mobile1,
  tablet: MINIMAL_VIEWPORTS.tablet,
  desktop: MINIMAL_VIEWPORTS.desktop,
  desktopLarge: {
    name: 'Desktop Large',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
};

const Container = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    padding: '0px 20px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '0px 30px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '0px 50px',
  },
  [theme.breakpoints.up(1920)]: {
    padding: '0px 60px',
  },
}));

const withThemeProvider = (Story, context) => {
  const noContainer = context.parameters.noContainer;
  return (
    <EmotionThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        {noContainer ? (
          <div style={{ padding: 0 }}>
            <Story {...context} />
          </div>
        ) : (
          <Container>
            <Story {...context} />
          </Container>
        )}
      </MuiThemeProvider>
    </EmotionThemeProvider>
  );
};

export const decorators = [withThemeProvider];

const preview: Preview = {
  parameters: {
    msw: {
      handlers: [
        http.post('api/subscription', async ({ request }) => {
          const formData = await request.json();
          console.log('MSW caught:', formData);
          return HttpResponse.json({
            success: true,
            subscriberId: 123,
            message: 'MSW mock success',
          });
        }),
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      options: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
      DEFAULT_VIEWPORT: 'customViewports',
    },
    a11y: {
      test: 'todo',
    },
  },
  loaders: [mswLoader],
};

export default preview;
