import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Menu from './Menu';

const meta = {
  title: 'Components/Menu/UI',
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OnMobile: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
};

export const OnTablet: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: false },
  },
};

export const OnDesktop: Story = {
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
};

export const OnDesktopLarge: Story = {
  globals: {
    viewport: { value: 'desktopLarge', isRotated: false },
  },
};
