import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import PortfolioImage from './PortfolioImage';

const meta = {
  title: 'Components/PortfolioImage/UI',
  component: PortfolioImage,
} satisfies Meta<typeof PortfolioImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OnMobile: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
};

export const OnTabletLarge: Story = {
  globals: {
    viewport: { value: 'tabletLarge', isRotated: false },
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
