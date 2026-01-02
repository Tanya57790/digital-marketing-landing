import React from 'react';
import type { Preview } from '@storybook/nextjs-vite';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { theme } from '../src/theme';
import { MINIMAL_VIEWPORTS } from 'storybook/viewport';

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

const withThemeProvider = (Story, context) => {
  return (
    <EmotionThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <Story {...context} />
      </MuiThemeProvider>
    </EmotionThemeProvider>
  );
};

export const decorators = [withThemeProvider];

const preview: Preview = {
  parameters: {
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
};

export default preview;
