'use client';

import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  colorSchemes: {
    light: true,
  },
  palette: {
    primary: {
      main: '#F5333F',
      contrastText: '#000000',
    },
    secondary: {
      main: '#212121',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    h1: {
      fontFamily: '"Roboto Condensed", "Arial", sans-serif',
      fontSize: '1.75rem',
      fontWeight: 700,
      lineHeight: '100%',
      letterSpacing: 0,
      textTransform: 'uppercase',
    },
    body1: {
      fontFamily: '"Roboto", "Arial", sans-serif',
      fontSize: '0.875rem',
      fontWeight: 300,
      lineHeight: '130%',
      letterSpacing: 0,
      textTransform: 'none',
    },
    body2: {
      fontFamily: '"Roboto", "Arial", sans-serif',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '120%',
      letterSpacing: 0,
      textTransform: 'none',
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      desktop: 1920,
    },
  },
  cssVariables: {
    colorSchemeSelector: 'class',
    disableCssColorScheme: true,
  },
});

export default theme;
