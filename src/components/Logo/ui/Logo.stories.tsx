import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Logo from './Logo';

const meta = {
  title: 'Components/Logo/UI',
  component: Logo,
  tags: ['autodocs'],
  parameters: {
    docs: {
      canvas: {
        layout: 'centered',
      },
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OnMobile: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
  args: {
    size: 'small',
  },
};

export const OnTablet: Story = {
  globals: {
    viewport: { value: 'tablet', isRotated: false },
  },
  args: {
    size: 'medium',
  },
};

export const OnDesktopLarge: Story = {
  globals: {
    viewport: { value: 'desktopLarge', isRotated: false },
  },
  args: {
    size: 'large',
  },
};
