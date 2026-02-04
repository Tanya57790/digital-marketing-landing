import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import FeaturesSection from './FeaturesSection';

const meta = {
  title: 'Components/FeaturesSection/UI',
  component: FeaturesSection,
} satisfies Meta<typeof FeaturesSection>;

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
