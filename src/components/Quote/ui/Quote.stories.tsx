import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Quote from './Quote';

const meta = {
  title: 'Components/Quote/UI',
  component: Quote,
} satisfies Meta<typeof Quote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OnMobile: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
};

export const OnDesktopLarge: Story = {
  globals: {
    viewport: { value: 'desktopLarge', isRotated: false },
  },
};
