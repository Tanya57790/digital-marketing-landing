import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Icon from './Icon';

const meta = {
  title: 'Components/Icon/UI',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      canvas: {
        layout: 'centered',
      },
    },
  },
} satisfies Meta<typeof Icon>;

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

export const OnDesktopLarge: Story = {
  globals: {
    viewport: { value: 'desktopLarge', isRotated: false },
  },
};
