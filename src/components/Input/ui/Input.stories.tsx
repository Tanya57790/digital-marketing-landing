import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Input from './Input';
import { InputProps } from '@mui/material';

const meta = {
  title: 'Components/Input/UI',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

export const OnMobile: StoryObj<InputProps> = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
};

export const OnTablet: StoryObj<InputProps> = {
  globals: {
    viewport: { value: 'tablet', isRotated: false },
  },
};

export const OnDesktop: StoryObj<InputProps> = {
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
};

export const OnDesktopLarge: StoryObj<InputProps> = {
  globals: {
    viewport: { value: 'desktopLarge', isRotated: false },
  },
};
